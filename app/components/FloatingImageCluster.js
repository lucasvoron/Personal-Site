"use client";
import Image from "next/image";
import styles from "./FloatingImageCluster.module.css";

export default function FloatingImageCluster({ images, title, position, date }) {
  const renderStrip = (keyPrefix) => (
    <div className={styles.marqueeStrip} aria-hidden={keyPrefix !== 'a'}>
      {images.map((src, idx) => (
        <div key={keyPrefix + idx} className={styles.imageWrapper}>
          <div className={styles.imageLink}>
            <Image
              src={src}
              alt={title + ' image ' + (idx + 1)}
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
          <div className={styles.marqueeInner}>
            {renderStrip('a')}
            {renderStrip('b')}
          </div>
        </div>
      </div>
    </div>
  );
}
