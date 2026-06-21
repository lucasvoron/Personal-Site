import Link from "next/link";
import styles from "../components/experiencePage.module.css";
import SkillMarquee from "../components/SkillMarquee";
import SiteFooter from "../components/SiteFooter";

export default function ScuPage() {
  return (
    <div className={styles.wrapper} style={{ "--metric-title-color": "#b42e2e" }}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>← Back</Link>
        <h1 className={styles.heading}>SCU</h1>
        <p className={styles.subheading}>Santa Clara University</p>
      </div>

      <div className={styles.body}>
        <div className={styles.marqueeRow}>
          <SkillMarquee skills={["Career Advising","Resume Review","Interview Coaching","Mentorship","Leadership","Team Collaboration","Conflict Resolution","Mediation","Crisis Management","Problem Solving","Event Coordination","Workshop Facilitation","Community Building","Student Outreach","Communication","Cultural Awareness","Time Management","Adaptability"]} />
        </div>

        <div className={styles.roleCard}>
          <div className={styles.roleHeader}>
            <h2 className={styles.roleTitle}>Peer Career Advisor</h2>
            <p className={styles.roleDate}>Sept 2019 &ndash; May 2025</p>
          </div>
          <p className={styles.roleBody}>
            Collaborated with external recruiters to facilitate on-campus interviewing, networking sessions, and career fairs, while coaching students on career strategies and how to leverage available tools on a daily basis.
          </p>
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <h3 className={styles.metricTitle}>Career Development</h3>
              <p className={styles.metricText}>Enhanced 300+ students&apos; career readiness through workshops and one-on-one coaching.</p>
            </div>
          </div>
        </div>

        <div className={styles.roleCard}>
          <div className={styles.roleHeader}>
            <h2 className={styles.roleTitle}>Resident Assistant</h2>
            <p className={styles.roleDate}>Sept 2021 &ndash; May 2022 &nbsp;&middot;&nbsp; 8 months</p>
          </div>
          <p className={styles.roleBody}>
            One of five student leaders managing a Residential Living Community of 350+ students around the clock. Responsible for safety, compliance, mentoring, and student engagement to promote and support an environment of diversity and inclusion.
          </p>
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <h3 className={styles.metricTitle}>Resident Programs &amp; Engagement</h3>
              <p className={styles.metricText}>Led over 12 student initiatives to enhance resident engagement and community building.</p>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
