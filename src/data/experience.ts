export interface Role {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

export const experience: Role[] = [
  {
    company: 'Tulip Tech',
    role: 'QA Engineer',
    period: 'Dec 2025 — Present',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'In first 9 months, built and maintain 1,000+ manual test cases in TestRail across 4 concurrent client products — throughput driven by an AI-augmented workflow (AI-assisted case/script generation, failure triage) layered on a 10-layer test-design approach (UI, functional positive/negative, edge, network, lifecycle, permissions/RBAC, input validation, push notifications, E2E).',
      'QA an FCA-regulated fintech remittance app (KYC/AML compliance flows, RBAC, multi-tenant isolation) and a premium healthcare-adjacent therapy booking platform (payment/booking integrity, patient-data-handling flows).',
      'Run Figma-vs-build design QA — flag spec/build discrepancies before they ship, not after.',
      'Contribute to 4-tier POM Playwright automation suites (95 specs) layered on top of the manual case base for regression coverage.',
      'Set up centralized Allure reporting + TestRail integration, replacing scattered per-project results with a single source of truth used across all active products.',
      'Run risk-weighted sprint QA (BMAD — Build-Measure-Adjust-Deploy cycle) with shift-left coverage — caught a Rota Engine defect pre-UAT that would have triggered weeks of erroneous payroll recomputation.',
      'Cover each ticket across the SDLC: requirement gathering (Jira/Confluence/Figma) → test plan → execution → bug filing → retest → QA sign-off, using an AI-driven workflow to compress cycle time.',
    ],
  },
  {
    company: 'Race Online Limited',
    role: 'Junior Support Engineer — Networking',
    period: 'Jun 2024 — Nov 2025',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Provided first/second-line network support — diagnosed and resolved connectivity, LAN/WAN, and hardware issues (routers, switches, access points) for internal/client infrastructure.',
      'Monitored network uptime and performance, escalated unresolved incidents per SLA, and maintained ticket documentation for recurring-issue tracking.',
      'Supported network configuration and maintenance tasks (IP addressing, VLANs, basic firewall/router config) alongside day-to-day troubleshooting.',
      'Logged and triaged support tickets end to end — root-cause diagnosis, fix, verification, closure — building the structured troubleshooting discipline that carried directly into QA defect investigation.',
    ],
  },
]
