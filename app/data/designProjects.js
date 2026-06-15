/**
 * Design portfolio data.
 *
 * To add wireframes for a project, place image files under /public/design/hpe/
 * (e.g. /public/design/hpe/project-name-01.webp) and add entries to the
 * `wireframes` array below.
 *
 * Each company entry needs:
 *   id        – used as the URL slug  (/design/[id])
 *   name      – display name
 *   logo      – path to logo image in /public  (set to null to use text fallback)
 *   accent    – brand colour used for the logo card border / hover
 *
 * Each project inside a company needs:
 *   id          – unique key
 *   title       – project heading
 *   description – one-paragraph summary shown above the wireframe strip
 *   wireframes  – ordered array of image paths (can be empty while adding content)
 */

export const designCompanies = [
  {
    id: "hpe",
    name: "HPE",
    logo: "/HPElogo.png",
    accent: "#00a96e",
  },
];

export const hpeDesignProjects = [
  {
    id: "networking-developer-hub",
    title: "HPE Networking Developer Hub",
    description:
      "Design explorations and layout wireframes for the HPE Networking Developer Hub experience.",
    wireframes: [
      "/design/hpe/networking-developer-hub/networking-developer-hub-01.webp",
      "/design/hpe/networking-developer-hub/networking-developer-hub-02.webp",
      "/design/hpe/networking-developer-hub/networking-developer-hub-03.webp",
    ],
  },
  {
    id: "feature-navigator",
    title: "Feature Navigator",
    description:
      "Wireframes for a feature discovery and comparison flow across wired and wireless platforms and their software releases.",
    wireframes: [
      "/design/hpe/feature-navigator/feature-navigator-01.webp",
      "/design/hpe/feature-navigator/feature-navigator-02.webp",
      "/design/hpe/feature-navigator/feature-navigator-03.webp",
    ],
  },
  {
    id: "automation-station",
    title: "Automation Station",
    description:
      "Concept and page-level wireframes for a centralized automation workspace and resource catalog.",
    wireframes: [
      "/design/hpe/automation-station/automation-station-01.webp",
      "/design/hpe/automation-station/automation-station-02.webp",
      "/design/hpe/automation-station/automation-station-03.webp",
    ],
  },
  {
    id: "automation-analytics-dashboard",
    title: "Automation Analytics Dashboard",
    description:
      "Dashboard wireframes for monitoring automation performance, usage, and system health trends.",
    wireframes: [
      "/design/hpe/automation-analytics-dashboard/automation-analytics-dashboard-01.webp",
      "/design/hpe/automation-analytics-dashboard/automation-analytics-dashboard-02.webp",
      "/design/hpe/automation-analytics-dashboard/automation-analytics-dashboard-03.webp",
    ],
  },
  {
    id: "msp-management-dashboard",
    title: "MSP Management Dashboard",
    description:
      "Interface wireframes for managed service provider operations, tenant visibility, and control workflows.",
    wireframes: [
      "/design/hpe/msp-management-dashboard/msp-management-dashboard-01.webp",
      "/design/hpe/msp-management-dashboard/msp-management-dashboard-02.webp",
      "/design/hpe/msp-management-dashboard/msp-management-dashboard-03.webp",
    ],
  },
];

/** Convenience lookup: company id → projects array */
export const designProjectsByCompany = {
  hpe: hpeDesignProjects,
};
