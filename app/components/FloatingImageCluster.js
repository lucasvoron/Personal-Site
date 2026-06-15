"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./FloatingImageCluster.module.css";

export default function FloatingImageCluster({ images, title, position, date }) {
  const saveScroll = () => {
    try {
      sessionStorage.setItem('lucas_scroll_y', String(window.scrollY || window.pageYOffset || 0));
    } catch (e) {}
  };

  const renderStrip = (keyPrefix) => (
    <div className={styles.marqueeStrip} aria-hidden={keyPrefix !== 'a'}>
      {images.map((src, idx) => (
        <div key={keyPrefix + idx} className={styles.imageWrapper}>
          <Link href={`/${title.toLowerCase()}`} className={styles.imageLink} onClick={saveScroll}>
            <Image
              src={src}
              alt={title + ' image ' + (idx + 1)}
              className={styles.floatingImage}
              width={500}
              height={350}
              sizes="40vw"
              loading="lazy"
            />
          </Link>
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
