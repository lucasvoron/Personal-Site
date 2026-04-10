"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./FloatingImageCluster.module.css";
import { useState } from "react";

export default function FloatingImageCluster({ images, title, position, date }) {
  // Distribute images for 3 columns with symmetric remainder assignment
  const colCount = 3;
  const colImages = Array.from({ length: colCount }, () => []);
  const base = Math.floor(images.length / colCount);
  const remainder = images.length % colCount;
  // Start with base counts for all columns
  const counts = [base, base, base];
  // Assign remainder: middle first, then left, then right for symmetry
  const remOrder = [1, 0, 2];
  for (let i = 0; i < remainder; i++) {
    counts[remOrder[i]]++;
  }
  // Now fill columns sequentially from images array
  let imgIdx = 0;
  for (let col = 0; col < colCount; col++) {
    for (let j = 0; j < counts[col]; j++) {
      if (imgIdx < images.length) colImages[col].push(images[imgIdx++]);
    }
  }
  const [hovering, setHovering] = useState(false);

  return (
    <div className={[styles.clusterWrapper, hovering ? styles.hovering : ""].join(" ")}>
      <div className={styles.overlayText}>
        <div className={styles.overlayTop}>
            <span className={styles.title}>{title}</span>
            <span className={styles.divider}> | </span>
            <span className={styles.date}>{date}</span>
        </div>
        <div className={styles.overlayBottom}>
          <span className={styles.position}>{position}</span>
        </div>
      </div>
      <div className={styles.masonryRow}>
        {colImages.map((col, colIdx) => (
          <div key={colIdx} className={styles.masonryColumn}>
            {col.map((src, idx) => (
              <div key={idx} className={styles.imageWrapper}>
                <Link
                  href={`/${title.toLowerCase()}`}
                  className={styles.imageLink}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  onClick={() => {
                    try {
                      // save current vertical scroll position so we can restore on close
                      sessionStorage.setItem('lucas_scroll_y', String(window.scrollY || window.pageYOffset || 0));
                    } catch (e) {
                      // ignore storage errors
                    }
                  }}
                >
                  <div className={styles.shadowOverlay}></div>
                  <Image
                    src={src}
                    alt={title + " image " + idx}
                    className={styles.floatingImage}
                    width={500}
                    height={350}
                    loading="lazy"
                  />
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
