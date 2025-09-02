"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./ScrollIndicator.module.css";

export default function ScrollIndicator({ idleTime = 1200 }) {
  const dotRef = useRef();
  const [visible, setVisible] = useState(true);
  const hideTimeout = useRef(null);

  useEffect(() => {
    const track = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const docHeight = Math.max(doc.scrollHeight, document.body.scrollHeight);
      const winH = window.innerHeight;
      const scrollable = Math.max(docHeight - winH, 1);
      const pct = Math.min(Math.max(scrollTop / scrollable, 0), 1);
      const trackEl = dotRef.current?.parentElement;
      if (dotRef.current && trackEl) {
        const trackHeight = trackEl.clientHeight;
        const y = pct * (trackHeight - dotRef.current.clientHeight);
        dotRef.current.style.transform = `translate(-50%, ${Math.round(y)}px)`;
      }
    };

    const showAndReset = () => {
      setVisible(true);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => setVisible(false), idleTime);
    };

    const onScroll = () => { track(); showAndReset(); };
    track();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", track);
    // start hidden after idleTime if no scroll
    hideTimeout.current = setTimeout(() => setVisible(false), idleTime);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", track);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [idleTime]);

  return (
    <div className={styles.wrapper} aria-hidden>
      <div className={`${styles.track} ${visible ? styles.visible : styles.hidden}`}>
        <div ref={dotRef} className={styles.dot} />
      </div>
    </div>
  );
}
