"use client";
import { useRef } from "react";
import Image from "next/image";
import styles from "./LinkedInCarousel.module.css";
import linkedinProjects from "../data/linkedinProjects";

export default function LinkedInCarousel() {
  const viewportRef = useRef(null);
  const total = linkedinProjects.length;

  if (total === 0) return null;

  const scroll = (direction) => {
    const el = viewportRef.current;
    if (!el) return;
    const amount = 384; // card width + gap
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className={styles.carousel}>
      <div ref={viewportRef} className={styles.viewport}>
        <div className={styles.track}>
          {linkedinProjects.map((project) => (
            <div className={styles.card} key={project.title}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="360px"
                  loading="lazy"
                  className={styles.image}
                />
                <div className={styles.shadowOverlay} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.title}>{project.title}</h3>
                {project.association && (
                  <p className={styles.association}>{project.association}</p>
                )}
                <p className={styles.description}>{project.description}</p>
                {project.skills && project.skills.length > 0 && (
                  <div className={styles.skills}>
                    {project.skills.map((skill) => (
                      <span key={skill} className={styles.skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    View Project &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className={styles.controls}>
            <button onClick={() => scroll(-1)} className={styles.arrow} aria-label="Scroll left">
            &#8592;
            </button>
            <button onClick={() => scroll(1)} className={styles.arrow} aria-label="Scroll right">
            &#8594;
            </button>
        </div>
    </section>
  );
}
