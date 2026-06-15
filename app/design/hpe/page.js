"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { hpeDesignProjects } from "../../data/designProjects";
import Lightbox from "../../components/Lightbox";
import styles from "./hpe.module.css";

const SESSION_KEY = "design_portfolio_auth";

export default function HpeDesignPage() {
  const router = useRouter();
  const [lightbox, setLightbox] = useState({ projectId: null, index: null });

  // Guard: require password auth (same sessionStorage key as /design page)
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) !== "1") {
        router.replace("/design");
      }
    } catch {
      router.replace("/design");
    }
  }, [router]);

  // ── Lightbox helpers ──────────────────────────────────────────────────
  function openLightbox(projectId, index) {
    setLightbox({ projectId, index });
  }

  function closeLightbox() {
    setLightbox({ projectId: null, index: null });
  }

  function getProjectWireframes() {
    if (!lightbox.projectId) return [];
    const project = hpeDesignProjects.find((p) => p.id === lightbox.projectId);
    return project ? project.wireframes : [];
  }

  function handlePrev() {
    const wf = getProjectWireframes();
    setLightbox((lb) => ({
      ...lb,
      index: (lb.index - 1 + wf.length) % wf.length,
    }));
  }

  function handleNext() {
    const wf = getProjectWireframes();
    setLightbox((lb) => ({
      ...lb,
      index: (lb.index + 1) % wf.length,
    }));
  }

  // ── Render ────────────────────────────────────────────────────────────
  return (
    <div className={styles.wrapper}>
      <div className={styles.pageHeader}>
        <Link href="/design" className={styles.backLink}>← Design Portfolio</Link>
        <h1 className={styles.companyHeading}>HPE</h1>
        <p className={styles.companySubheading}>Aruba Networking · Design Wireframes</p>
      </div>

      <div className={styles.projectList}>
        {hpeDesignProjects.length === 0 ? (
          <p className={styles.emptyState}>
            No projects yet — add entries to{" "}
            <code>app/data/designProjects.js</code> to populate this page.
          </p>
        ) : (
          hpeDesignProjects.map((project) => (
            <section key={project.id} className={styles.projectSection}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>

              {project.wireframes.length > 0 ? (
                <div className={styles.wireframeStrip}>
                  {project.wireframes.map((src, i) => (
                    <button
                      key={src}
                      className={styles.wireframeThumb}
                      onClick={() => openLightbox(project.id, i)}
                      aria-label={`View wireframe ${i + 1} of ${project.wireframes.length}`}
                    >
                      <div className={styles.thumbImageWrapper}>
                        <Image
                          src={src}
                          alt={`${project.title} wireframe ${i + 1}`}
                          fill
                          sizes="240px"
                          className={styles.thumbImage}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <span className={styles.thumbIndex}>{i + 1}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className={styles.noWireframes}>Wireframes coming soon.</p>
              )}

              <div className={styles.projectDivider} />
            </section>
          ))
        )}
      </div>

      {lightbox.projectId && (
        <Lightbox
          images={getProjectWireframes()}
          currentIndex={lightbox.index}
          onClose={closeLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
