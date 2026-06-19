import Link from "next/link";
import styles from "../components/experiencePage.module.css";
import SkillMarquee from "../components/SkillMarquee";
import SiteFooter from "../components/SiteFooter";

export default function HpePage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>← Back</Link>
        <h1 className={styles.heading}>HPE</h1>
        <p className={styles.subheading}>Hewlett Packard Enterprise &mdash; Aruba Networking</p>
      </div>

      <div className={styles.body}>
        <div className={styles.marqueeRow}>
          <SkillMarquee skills={["Python","Next.js","React","HTML5","CSS","JavaScript","Postman","Charts.js","Data Visualization","Grafana","InfluxDB","Flux","SQL","API","Github Copilot","AI Integration","Figma","Docker","Wordpress","CI/CD"]} />
        </div>

        <div className={styles.roleCard}>
          <div className={styles.roleHeader}>
            <span className={styles.eyebrow}>Current Role</span>
            <h2 className={styles.roleTitle}>Intermediate Technical Marketing Engineer</h2>
            <p className={styles.roleDate}>March 2025 &ndash; Present</p>
          </div>
          <p className={styles.roleBody}>
            Working for HPE Aruba Networking&apos;s Automation Team as a Technical Marketing Engineer with a focus on UI/UX Development &amp; Design. I develop efficient automation Python scripts that optimize networking performance for customers while also designing and building web platforms that effectively showcase HPE Aruba Networking products, automation solutions, and resources.
            Beyond development, I work closely with customers and sales engineers, gathering insights to refine automation solutions and ensure they align with real-world networking challenges. I manage the end-to-end development of new tools and products, from concept to deployment, to enhance customer automation capabilities.
          </p>
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <h3 className={styles.metricTitle}>Customer Engagement</h3>
              <p className={styles.metricText}>Worked closely with varied customers ranging from small businesses to large enterprises to deliver tailored automation solutions and scripts.</p>
            </div>
            <div className={styles.metricCard}>
              <h3 className={styles.metricTitle}>Global Teams</h3>
              <p className={styles.metricText}>Collaborated with engineers &amp; sales teams across North America, Europe, and South Asia to implement automation solutions and share best practices.</p>
            </div>
          </div>
        </div>

        <div className={styles.roleCard}>
          <div className={styles.roleHeader}>
            <h2 className={styles.roleTitle}>Technical Marketing Engineer</h2>
            <p className={styles.roleDate}>Sept 2023 &ndash; March 2025 &nbsp;&middot;&nbsp; 1 yr 7 mo</p>
          </div>
          <p className={styles.roleBody}>
            Drove a meaningful reduction in downtime and operational overhead through architecture and process improvements.
            Delivered customer-facing dashboards and automation workflows that simplified complex networking API datasets.
            Improved stakeholder engagement and product adoption through presentations and iterative feedback cycles.
            Implemented networking AI integrations and created interactive, API-driven dashboards that surface network automation telemetry for varied audiences.
          </p>
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <h3 className={styles.metricTitle}>Wide Impact</h3>
              <p className={styles.metricText}>Rebuilt the Developer Hub that receives ~650,000 page visits per year.</p>
            </div>
            <div className={styles.metricCard}>
              <h3 className={styles.metricTitle}>Cost Reduction</h3>
              <p className={styles.metricText}>Migrated Developer Hub data architecture to WordPress as a headless CMS, substantially reducing upkeep costs and improving site stability.</p>
            </div>
            <div className={styles.metricCard}>
              <h3 className={styles.metricTitle}>Presentation Volume</h3>
              <p className={styles.metricText}>Delivered regular presentations to 600+ HPE global employees on Automation and APIs &amp; held partner ambassador presentations to over 100 partners.</p>
            </div>
          </div>
        </div>

        <div className={styles.roleCard}>
          <div className={styles.roleHeader}>
            <span className={styles.eyebrow}>Internship</span>
            <h2 className={styles.roleTitle}>UI/UX Engineer Intern</h2>
            <p className={styles.roleDate}>Summer 2022 &nbsp;&middot;&nbsp; 3 months</p>
          </div>
          <p className={styles.roleBody}>
            Designed and developed an end-to-end network automation framework website for HPE Aruba Networking&apos;s Central product, acting as the sole contributor for the full stack deliverable and working directly with the data pipeline engineer. Led UI/UX design in Figma: created wireframes, interactive prototypes, and design refinements based on feedback from the UX team and stakeholders.
            Implemented the front end using Next.js (React), translating designs into responsive, accessible interfaces and reusable components. Built full-stack functionality with an AWS-backed API, integrating data pipelines to surface live telemetry and status information.
          </p>
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <h3 className={styles.metricTitle}>Presentation Audience</h3>
              <p className={styles.metricText}>Presented design concept to code completion of full-stack website to 500+ HPE employees.</p>
            </div>
            <div className={styles.metricCard}>
              <h3 className={styles.metricTitle}>Cross-Functional Exposure</h3>
              <p className={styles.metricText}>Collaborated with UX, data engineering, and product teams to align requirements, prioritize features, and incorporate feedback.</p>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
