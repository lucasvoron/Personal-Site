"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { designCompanies, designProjectsByCompany } from "../data/designProjects";
import Lightbox from "../components/Lightbox";
import styles from "./design.module.css";

// ---------------------------------------------------------------------------
// Password gate — SHA-256 checked client-side.
// To change the password, run in browser console:
//   async function hash(s){const e=new TextEncoder();const d=await crypto.subtle.digest('SHA-256',e.encode(s));return [...new Uint8Array(d)].map(b=>b.toString(16).padStart(2,'0')).join('')}
//   hash('your-new-password').then(console.log)
// Default password: portfolio
// ---------------------------------------------------------------------------
const STORED_HASH =
  "0e6a8e0b849ed9b064c5a25e1ee5592f427e3eb9d250e42069ce46147d00e8d4";

async function sha256(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

const SESSION_KEY = "design_portfolio_auth";

export default function DesignPage() {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);

  // Which company panel is open (id string or null)
  const [openCompany, setOpenCompany] = useState(null);

  // Lightbox state
  const [lightbox, setLightbox] = useState({ projectId: null, index: null });

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") setAuthed(true);
    } catch {}
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setChecking(true);
    setError(false);
    try {
      const hash = await sha256(input.trim());
      if (hash === STORED_HASH) {
        sessionStorage.setItem(SESSION_KEY, "1");
        setAuthed(true);
      } else {
        setError(true);
      }
    } finally {
      setChecking(false);
    }
  }

  function toggleCompany(id) {
    setOpenCompany((prev) => (prev === id ? null : id));
    setLightbox({ projectId: null, index: null });
  }

  // ── Lightbox helpers ────────────────────────────────────────────────────
  function getProjectWireframes(projectId) {
    if (!openCompany || !projectId) return [];
    const projects = designProjectsByCompany[openCompany] ?? [];
    const project = projects.find((p) => p.id === projectId);
    return project ? project.wireframes : [];
  }

  function openLightbox(projectId, index) {
    setLightbox({ projectId, index });
  }

  function closeLightbox() {
    setLightbox({ projectId: null, index: null });
  }

  function handlePrev() {
    const wf = getProjectWireframes(lightbox.projectId);
    setLightbox((lb) => ({ ...lb, index: (lb.index - 1 + wf.length) % wf.length }));
  }

  function handleNext() {
    const wf = getProjectWireframes(lightbox.projectId);
    setLightbox((lb) => ({ ...lb, index: (lb.index + 1) % wf.length }));
  }

  // ── Password gate ───────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className={styles.gateWrapper}>
        <form className={styles.gateForm} onSubmit={handleSubmit} noValidate>
          <p className={styles.gateLabel}>Design Portfolio</p>
          <p className={styles.gateSubLabel}>This section is password protected.</p>
          <input
            className={`${styles.gateInput} ${error ? styles.gateInputError : ""}`}
            type="password"
            placeholder="Password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            autoFocus
            autoComplete="current-password"
          />
          {error && <p className={styles.gateError}>Incorrect password.</p>}
          <button
            className={styles.gateSubmit}
            type="submit"
            disabled={checking || input.length === 0}
          >
            {checking ? "Checking…" : "Enter"}
          </button>
          <Link href="/" className={styles.gateBack}>← Back</Link>
        </form>
      </div>
    );
  }

  // ── Portfolio page ──────────────────────────────────────────────────────
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>← Back</Link>
        <h1 className={styles.heading}>Design Portfolio</h1>
        <p className={styles.subheading}>
          Select a company to explore design work and wireframes.
        </p>
      </div>

      {/* Company logo grid */}
      <div className={styles.grid}>
        {designCompanies.map((company) => {
          const isOpen = openCompany === company.id;
          return (
            <div key={company.id} className={styles.companyBlock}>
              <button
                className={`${styles.logoCard} ${isOpen ? styles.logoCardActive : ""}`}
                style={{ "--accent": company.accent }}
                onClick={() => toggleCompany(company.id)}
                aria-expanded={isOpen}
              >
                {company.logo ? (
                  <div className={styles.logoImgWrapper}>
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      sizes="220px"
                      className={styles.logoImg}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ) : (
                  <span className={styles.logoName}>{company.name}</span>
                )}
              </button>

              {/* Inline expanded panel */}
              {isOpen && (
                <div className={styles.panel}>
                  <div className={styles.panelInner}>
                    {(designProjectsByCompany[company.id] ?? []).length === 0 ? (
                      <p className={styles.emptyState}>
                        No projects yet — add entries to{" "}
                        <code>app/data/designProjects.js</code>.
                      </p>
                    ) : (
                      (designProjectsByCompany[company.id] ?? []).map((project) => (
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
                                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
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
                </div>
              )}
            </div>
          );
        })}
      </div>

      {lightbox.projectId && (
        <Lightbox
          images={getProjectWireframes(lightbox.projectId)}
          currentIndex={lightbox.index}
          onClose={closeLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}

