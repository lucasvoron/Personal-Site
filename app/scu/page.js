import pageStyles from "../page.module.css";
import styles from "./scu.module.css";
import SkillMarquee from "../components/SkillMarquee";
import SiteFooter from "../components/SiteFooter";

export default function ScuPage() {
  return (
    <div className={pageStyles.subPage + " " + styles.hpeContainer}>
      <main className={styles.mainColumn}>
        <div className={styles.companyName}>SCU</div>
        <SkillMarquee skills={["Career Advising", "Resume Review", "Interview Coaching", "Mentorship", "Leadership", "Team Collaboration", "Conflict Resolution", "Mediation", "Crisis Management", "Problem Solving", "Event Coordination", "Workshop Facilitation", "Community Building", "Student Outreach", "Communication", "Cultural Awareness", "Time Management", "Adaptability"]} />

        <div className={styles.jobSection}>
          <h2 className={styles.jobTitle}>Peer Career Advisor</h2>
          <p className={styles.date}>
              Sept 2019 - May 2025
          </p>
          <p className={styles.paragraph}>
            Collaborate with external recruiters to facilitate on-campus interviewing, networking sessions, and career fairs as well as coaching students on career strategies and methods to leverage existing tools on a daily basis.
          </p>
          <div className={styles.metricBox}>
            <h3 className={styles.metricTitle}>Career Development</h3>
            <p className={styles.metricText}>Enhanced 300+ students&apos; career readiness through workshops and one-on-one coaching.</p>
          </div>
        </div>

        <div className={styles.jobSection}>
          <h2 className={styles.jobTitle}>Resident Assistant</h2>
          <p className={styles.date}>
              Sept 2021 - May 2022 (8 months)
          </p>
          <p className={styles.paragraph}>
            One of five student leaders managing a Residential Living Community of 350+ students 24/7. Responsible for safety, compliance, mentoring, and student engagement to promote and support an environment of diversity and inclusion.
          </p>
          <div className={styles.metricBox}>
            <h3 className={styles.metricTitle}>Resident Programs & Engagement</h3>
            <p className={styles.metricText}>Led over 12 student initiatives to enhance resident engagement and community building.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
