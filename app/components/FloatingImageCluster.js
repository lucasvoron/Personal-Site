"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./FloatingImageCluster.module.css";

export default function FloatingImageCluster({ images, title, position, date }) {
  const stripRef = useRef(null);
  const [durationSec, setDurationSec] = useState(34);

  useEffect(() => {
    const SPEED_PX_PER_SEC = 62;

    const updateDuration = () => {
      const strip = stripRef.current;
      if (!strip) return;

      const width = strip.scrollWidth;
      if (!width) return;

      const next = Math.max(width / SPEED_PX_PER_SEC, 18);
      setDurationSec(Number(next.toFixed(2)));
    };

    updateDuration();

    if (typeof ResizeObserver !== "undefined" && stripRef.current) {
      const ro = new ResizeObserver(updateDuration);
      ro.observe(stripRef.current);
      return () => ro.disconnect();
    }

    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, [images]);

  const renderStrip = (keyPrefix) => (
    <div
      className={styles.marqueeStrip}
      aria-hidden={keyPrefix !== "a"}
      ref={keyPrefix === "a" ? stripRef : undefined}
    >
      {images.map((src, idx) => (
        <div key={keyPrefix + idx} className={styles.imageWrapper}>
          <div className={styles.imageLink}>
            <Image
              src={src}
              alt={title + " image " + (idx + 1)}
              className={styles.floatingImage}
              width={500}
              height={350}
              sizes="40vw"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.clusterCard}>
      <div className={styles.clusterWrapper}>
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <span className={styles.title}>{title}</span>
            <span className={styles.date}>{date}</span>
          </div>
          <span className={styles.position}>{position}</span>
        </div>
        <div className={styles.marquee}>
          <div className={styles.marqueeInner} style={{ animationDuration: `${durationSec}s` }}>
            {renderStrip("a")}
            {renderStrip("b")}
          </div>
        </div>
      </div>
    </div>
  );
}
