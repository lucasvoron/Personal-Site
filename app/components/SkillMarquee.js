"use client";
import styles from "./SkillMarquee.module.css";

export default function SkillMarquee({ skills }) {
  const list = skills || [];

  // Duplicate the list for a seamless marquee loop
  const renderList = (keyPrefix) => (
    <div className={styles.skillRow} aria-hidden={keyPrefix !== "a"}>
      {list.map((s, i) => (
        <div key={keyPrefix + i} className={styles.skillItem}>
          <span className={styles.skillText}>{s}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.marquee} role="marquee" aria-label="Skills marquee">
      <div className={styles.marqueeInner}>
        {renderList("a")}
        {renderList("b")}
      </div>
    </div>
  );
}
