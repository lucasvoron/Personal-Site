"use client";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

import { useEffect } from "react";
// import { initThreeAnimation } from "./components/threeAnimation";
import FloatingImageCluster from "./components/FloatingImageCluster";
import SiteFooter from "./components/SiteFooter";
import ScrollIndicator from "./components/ScrollIndicator";
import CherryBlossoms from "./components/CherryBlossoms";

export default function Home() {
  // useEffect(() => {
  //   const container = document.getElementById("container");
  //   if (container) {
  //     const cleanup = initThreeAnimation(container);

  //     // keep only three.js initialization/cleanup here; metadata is handled server-side in app/layout.js
  //     return () => {
  //       if (typeof cleanup === "function") cleanup();
  //     };
  //   }
  // }, []);
  // restore scroll position when returning from a subpage
  useEffect(() => {
    try {
      const y = parseInt(sessionStorage.getItem('lucas_scroll_y') || '0', 10);
      if (y && typeof window !== 'undefined') {
        // small timeout to allow page layout to settle
        setTimeout(() => window.scrollTo(0, y), 50);
        // clear after restoring
        sessionStorage.removeItem('lucas_scroll_y');
      }
    } catch (e) {
      // ignore
    }
  }, []);
  return (
  <div className={styles.page}>
  {/* <CherryBlossoms /> */}
  <Link href="/about" className={styles.aboutLink} aria-label="About">
    <Image src="/dvd.png" alt="Profile" fill className={styles.aboutIcon} />
  </Link>
  <ScrollIndicator idleTime={1200} />
      <main className={styles.mainSplit}>
        <section className={styles.heroSection}>
          <Image src="/hero.png" alt="Hero" fill className={styles.heroImage} />
          <div className={styles.heroContent}>
            <Image src="/palette.png" alt="Palette" fill className={styles.palette} />
            <h1 className={styles.heroName}>LUCAS VORON</h1>
            <p className={styles.description}>SOFTWARE ENGINEER II</p>
            <p className={styles.education}>Santa Clara University</p>      
            <p className={styles.education}>Bachelor in Computer Science & Engineering</p>
            <p className={styles.education}>Minor in Mathematics</p>
            <br />
            <p className={styles.mantra}>Bringing concepts to life from design to deployment.</p>
          </div>
          {/* <div id="container" className={styles.threeContainer}></div> */}
        </section>
      </main>
      <div>
        <div className={styles.floatingImageSection}>
          <FloatingImageCluster
            images={["/hpe1.png","/hpe2.png","/hpe3.png","/hpe4.png","/hpe5.png","/hpe6.png","/hpe7.png"]}
            title="HPE"
            position="Intermediate Technical Marketing Engineer"
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
