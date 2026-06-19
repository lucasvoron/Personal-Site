import Link from "next/link";
import Image from "next/image";
import styles from "./about.module.css";
import SiteFooter from "../components/SiteFooter";

const skills = [
  "Next.js", "React", "Python", "Node.js", "Docker",
  "Grafana", "InfluxDB", "Prometheus", "Figma", "UI/UX Design",
  "REST APIs", "GraphQL", "Git", "CSS", "SQL",
];

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>← Back</Link>
        <h1 className={styles.heading}>About</h1>
        <p className={styles.subheading}>Product engineer, designer, and creative.</p>
      </div>

      <div className={styles.body}>
        {/* Bio + headshot card */}
        <div className={styles.profileCard}>
          <div className={styles.bioSection}>
            <span className={styles.eyebrow}>Who I am</span>
            <p className={styles.bio}>
              Bonjour. My name is Lucas, a San Francisco Bay Area-based product and UI engineer who blends empathetic design with
              engineering practice to build dynamic, fun, and easy-to-use interfaces. I enjoy collaborating with diverse teams to make magic happen. Proficient in Python scripting, but my true love lies in web design and development.
            </p>
            <p className={styles.bio}>
              Bilingual in English and French, I enjoy hands-on creative work: drawing, painting, and fashion, alongside outdoor
              activities like climbing and swimming.
            </p>
          </div>
          <div className={styles.headshotWrapper}>
            <Image
              src="/headshot.webp"
              alt="Lucas Voron"
              width={340}
              height={400}
              className={styles.headshot}
            />
          </div>
        </div>

        {/* Skills strip */}
        <div className={styles.skillsCard}>
          <span className={styles.eyebrow}>Toolkit</span>
          <div className={styles.skillsList}>
            {skills.map((s) => (
              <span key={s} className={styles.skillPill}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
