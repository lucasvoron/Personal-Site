"use client";
import styles from "./page.module.css";

import { useEffect } from "react";
import { initThreeAnimation } from "./components/threeAnimation";
import FloatingImageCluster from "./components/FloatingImageCluster";
import BouncingLogo from "./components/BouncingLogo";
import SiteFooter from "./components/SiteFooter";
import ScrollIndicator from "./components/ScrollIndicator";

export default function Home() {
  useEffect(() => {
    const container = document.getElementById("container");
    if (container) {
      const cleanup = initThreeAnimation(container);
      // Update head meta tags for title/description/OG/Twitter and favicon (client-side)
      try {
        const title = 'Lucas Voron';
        const description = 'UI/UX Engineer & Technical Product Manager building thoughtful product experiences at the intersection of design and engineering.';
        document.title = title;

        const ensureMeta = (selector, createAttrs = {}) => {
          let el = document.querySelector(selector);
          if (!el) {
            el = document.createElement('meta');
            Object.entries(createAttrs).forEach(([k, v]) => el.setAttribute(k, v));
            document.head.appendChild(el);
          }
          return el;
        };

        // description
        const desc = ensureMeta('meta[name="description"]', { name: 'description' });
        desc.content = description;

        // Open Graph
        const ogTitle = ensureMeta('meta[property="og:title"]', { property: 'og:title' });
        ogTitle.content = title;
        const ogDesc = ensureMeta('meta[property="og:description"]', { property: 'og:description' });
        ogDesc.content = description;
        const ogUrl = ensureMeta('meta[property="og:url"]', { property: 'og:url' });
        ogUrl.content = 'https://lucasvoron.com/';
        const ogImage = ensureMeta('meta[property="og:image"]', { property: 'og:image' });
        ogImage.content = 'https://lucasvoron.com/favicon.ico';

        // favicon
        let icon = document.querySelector("link[rel~='icon']");
        if (!icon) {
          icon = document.createElement('link');
          icon.rel = 'icon';
          document.head.appendChild(icon);
        }
        icon.href = '/favicon.ico';

      } catch (e) {
        // non-fatal, continue
        // console.warn('meta update failed', e);
      }

      return () => {
        if (typeof cleanup === "function") cleanup();
      };
    }
  }, []);
  return (
  <div className={styles.page}>
  <BouncingLogo src="/dvd.png" size={88} speed={1.5} />
  <ScrollIndicator idleTime={1200} />
      <main className={styles.mainSplit}>
        <section className={styles.leftPane}>
          <h1 className={styles.heroName}>LUCAS VORON</h1>
          <p className={styles.description}>Technical Product Manager II</p>
          <p className={styles.education}>Santa Clara University</p>      
          <p className={styles.education}>Bachelor in Computer Science & Engineering</p>
          <p className={styles.education}>Minor in Mathematics</p>
          <br />
          <p className={styles.mantra}>Bringing concepts to life from design to deployment.</p>
        </section>
        <section className={styles.rightPane}>
          <div id="container" className={styles.threeContainer}></div>
        </section>
      </main>
      <div>
        <div className={styles.floatingImageSection}>
          <FloatingImageCluster
            images={["/hpe1.png","/hpe2.png","/hpe3.png","/hpe4.png","/hpe5.png","/hpe6.png","/hpe7.png"]}
            title="HPE"
            position="Technical Product Manager II"
            date="Summer 2022 - Present"
          />
        </div>
        <div className={styles.floatingImageDivider}></div>
        <div className={styles.floatingImageSection}>
          <FloatingImageCluster
            images={["/inrix1.jpg","/inrix2.png","/inrix3.png","/inrix4.jpg","/inrix5.png","/inrix6.jpg","/inrix7.png"]}
            title="INRIX"
            position="Software Development Engineer Intern"
            date="Summer 2021"
          />
        </div>
        <div className={styles.floatingImageDivider}></div>
        <div className={styles.floatingImageSection}>
          <FloatingImageCluster
            images={["/scu1.jpg","/scu2.png","/scu3.png","/scu4.jpg","/scu5.jpg","/scu6.jpg","/scu7.jpeg"]}
            title="SCU"
            position="Peer Career Advisor & Resident Assistant"
            date="Fall 2019 - Spring 2023"
          />
        </div>
        <div className={styles.floatingImageDivider}></div>
        <div className={styles.floatingImageSection}>
          <FloatingImageCluster
            images={["/tiposi1.png","/tiposi2.png","/tiposi3.png","/tiposi4.png","/tiposi5.png","/tiposi6.png","/tiposi7.png"]}
            title="TIPOSI"
            position="Medical Device Design Consultant"
            date="Summer 2020"
          />
        </div>
      </div>
  <SiteFooter />
    </div>
  );
}
