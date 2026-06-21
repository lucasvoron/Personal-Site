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
  {
    id: "color-harmonie",
    name: "color harmonie",
    logo: "/color_harmonie.svg",
    accent: "#1543D7",
  },
  {
    id: "villa-de-cycas",
    name: "Villa de Cycas",
    logo: "/villa_de_cycas.svg",
    accent: "#5a0202",
  }
];

export const hpeDesignProjects = [
  {
    id: "networking-developer-hub",
    title: "HPE Networking Developer Hub",
    description:
      "A central enablement platform for customer network engineers, architects, and developers building on HPE Networking APIs. Designed, built, and maintained end-to-end as a solo effort, housing technical documentation, API references, and onboarding guides across both Aruba and Juniper product lines under a single HPE-branded experience. Validated through interviews with sales engineers, automation teams, and lifecycle managers. Now serves 650,000+ annual visitors with strong and growing SEO performance.",
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
      "A cross-platform feature comparison tool for Aruba wired and wireless hardware. With hundreds of SKUs and firmware versions each carrying distinct feature sets, sales teams had no scalable way to answer which models support a given capability. The core design challenge was building a search and comparison interface powerful enough to query large, complex feature matrices, while staying fast and intuitive for non-technical users. Expanded from wired-only to include wireless, driving wide adoption across internal sales teams.",
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
      "A migration and automation resource hub built for API-heavy customers transitioning between HPE cloud management platforms. Addresses three pain points in one: mapping deprecated API endpoints to their new equivalents, providing recoded script templates with updated auth and tooling, and offering a code converter that accepts existing scripts and outputs translated versions, with options to route output through the AI model of the user's choice. Designed to feel immediately familiar to engineers with minimal onboarding friction.",
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
      "An internal executive dashboard aggregating adoption metrics across all HPE Networking developer resources: Developer Hub traffic, Postman collections, Ansible playbooks, GitHub repository downloads, and Python SDK installs, into a single unified view. Built to give leadership a live snapshot of automation product adoption and month-over-month growth trends. A recurring fixture in executive operations meetings, used to track product health and identify where support investment is needed.",
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
      "A control plane built for large MSP customers managing multiple sub-tenant networks at scale. Leverages management-level APIs to surface a unified view across all customer sites, enabling high-level network architects to inspect configurations, compare site states, and push changes across sub-tenants without context-switching between individual accounts. Designed to reduce operational overhead for the most complex tier of HPE Networking customers.",
    wireframes: [
      "/design/hpe/msp-management-dashboard/msp-management-dashboard-01.webp",
      "/design/hpe/msp-management-dashboard/msp-management-dashboard-02.webp",
      "/design/hpe/msp-management-dashboard/msp-management-dashboard-03.webp",
    ],
  },
];

export const colorHarmonieDesignProjects = [
  {
    id: "color-harmonie",
    title: "color harmonie",
    description:
      "A Chrome extension designed as a shopping overlay that helps users find clothing and products that match their personal color season. By surfacing a curated palette tied to the user's skin tone undertones, the extension guides shoppers toward colors that complement them best while browsing any online retailer.",
    wireframes: [
      "/design/color-harmonie/color-harmonie-01.webp",
      "/design/color-harmonie/color-harmonie-02.webp",
      "/design/color-harmonie/color-harmonie-03.webp",
    ],
  },
];

export const villaDeCycasDesignProjects = [
  {
    id: "villa-de-cycas",
    title: "Villa de Cycas",
    description:
      "A website design for artisan winery Villa de Cycas, focused on showcasing the unique character of their boutique wines and the story behind their family-owned vineyard. The design emphasizes rich visuals of the winemaking process and the terroir, while providing an intuitive navigation experience for users to explore the wine selection, learn about the vineyard's history, and easily make purchases online.",
    wireframes: [
      "/design/villa-de-cycas/villa-de-cycas-01.webp",
      "/design/villa-de-cycas/villa-de-cycas-02.webp",
      "/design/villa-de-cycas/villa-de-cycas-03.webp",
    ],
  },
];

/** Convenience lookup: company id → projects array */
export const designProjectsByCompany = {
  hpe: hpeDesignProjects,
  "color-harmonie": colorHarmonieDesignProjects,
  "villa-de-cycas": villaDeCycasDesignProjects,
};
