"use client";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

import { useEffect } from "react";
// import { initThreeAnimation } from "./components/threeAnimation";
import FloatingImageCluster from "./components/FloatingImageCluster";
import SiteFooter from "./components/SiteFooter";
import LinkedInCarousel from "./components/LinkedInCarousel";

export default function Home() {
  const saveScroll = () => {
    try {
      sessionStorage.setItem('lucas_scroll_y', String(window.scrollY || window.pageYOffset || 0));
    } catch (e) {
      // ignore storage errors
    }
  };

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
  <nav className={styles.topNav}>
    <a href="https://www.linkedin.com/in/lucasvoron/" target="_blank" rel="noopener noreferrer" className={styles.navButton} aria-label="LinkedIn" title="LinkedIn">
      <svg viewBox="0 0 24 24" fill="currentColor" className={styles.navIcon}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>
    <Link href="/resume" className={styles.navButton} aria-label="Resume" title="Resume">
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${styles.navIcon} ${styles.resumeIcon}`}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8v-2zm0-3h8v2H8v-2z"/></svg>
    </Link>
    <Link href="/about" className={styles.navButton} aria-label="About" title="About">
      <svg viewBox="0 0 24 24" fill="currentColor" className={styles.navIcon}>
        <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
      </svg>
    </Link>
  </nav>
      <main className={styles.mainSplit}>
        <section className={styles.heroSection}>
          <Image src="/hero.webp" alt="Hero" fill sizes="100vw" priority className={styles.heroImage} />
          <div className={styles.heroContent}>
            <Image src="/palette.webp" alt="Palette" fill sizes="100vw" priority className={styles.palette} />
            <h1 className={styles.heroName}>LUCAS VORON</h1>
            {/* <p className={styles.description}>SOFTWARE ENGINEER II</p> */}
            <p className={styles.mantra}>Bringing concepts to life from design to deployment.</p>
            <br />
            <p className={styles.education}>Santa Clara University</p>      
            <p className={styles.education}>Bachelor in Computer Science & Engineering</p>
            <p className={styles.education}>Minor in Mathematics</p>

          </div>
          {/* <div id="container" className={styles.threeContainer}></div> */}
        </section>
      </main>
  <div className={styles.designPortfolioSection}>
    <h2 className={styles.sectionHeading}>Portfolio</h2>
    <div className={styles.designPortfolioCTA}>
      <Link href="/design" className={styles.designPortfolioButton}>
        <div className={styles.designPortfolioBtnLeft}>
          <span className={styles.designPortfolioBtnEyebrow}>Password Protected</span>
          <span className={styles.designPortfolioBtnLabel}>Design Portfolio</span>
          <span className={styles.designPortfolioBtnSub}>UI/UX wireframes &amp; product design work</span>
        </div>
        <span className={styles.designPortfolioBtnArrow}>→</span>
      </Link>
    </div>
  </div>
  <h2 className={styles.sectionHeading}>Projects</h2>
  <LinkedInCarousel />
      <div>
        <h2 className={styles.sectionHeading}>Experience</h2>
        <Link href="/hpe" className={styles.experienceLink} onClick={saveScroll}>
          <div className={styles.floatingImageSection}>
            <FloatingImageCluster
              images={["/experience/hpe/hpe1.webp","/experience/hpe/hpe8.webp","/experience/hpe/hpe2.webp","/experience/hpe/hpe9.webp","/experience/hpe/hpe3.webp","/experience/hpe/hpe10.webp","/experience/hpe/hpe4.webp","/experience/hpe/hpe11.webp","/experience/hpe/hpe7.webp"]}
              title="HPE"
              position="Intermediate Technical Marketing Engineer"
              date="Summer 2022 - Present"
            />
          </div>
        </Link>
        <Link href="/inrix" className={styles.experienceLink} onClick={saveScroll}>
          <div className={styles.floatingImageSection}>
            <FloatingImageCluster
              images={["/experience/inrix/inrix1.webp","/experience/inrix/inrix2.webp","/experience/inrix/inrix3.webp","/experience/inrix/inrix4.webp","/experience/inrix/inrix5.webp","/experience/inrix/inrix6.webp","/experience/inrix/inrix7.webp","/experience/inrix/inrix8.webp"]}
              title="INRIX"
              position="Software Development Engineer Intern"
              date="Summer 2021"
            />
          </div>
        </Link>
        <Link href="/scu" className={styles.experienceLink} onClick={saveScroll}>
          <div className={styles.floatingImageSection}>
            <FloatingImageCluster
              images={["/experience/scu/scu1.webp","/experience/scu/scu2.webp","/experience/scu/scu3.webp","/experience/scu/scu4.webp","/experience/scu/scu5.webp","/experience/scu/scu6.webp","/experience/scu/scu7.webp"]}
              title="SCU"
              position="Peer Career Advisor & Resident Assistant"
              date="Fall 2019 - Spring 2023"
            />
          </div>
        </Link>
        <Link href="/tiposi" className={styles.experienceLink} onClick={saveScroll}>
          <div className={styles.floatingImageSection}>
            <FloatingImageCluster
              images={["/experience/tiposi/tiposi1.webp","/experience/tiposi/tiposi2.webp","/experience/tiposi/tiposi3.webp","/experience/tiposi/tiposi4.webp","/experience/tiposi/tiposi5.webp","/experience/tiposi/tiposi6.webp","/experience/tiposi/tiposi7.webp"]}
              title="TIPOSI"
              position="Medical Device Design Consultant"
              date="Summer 2020"
            />
          </div>
        </Link>
      </div>
  <SiteFooter />
    </div>
  );
}
