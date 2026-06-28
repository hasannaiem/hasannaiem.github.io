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
    period: '2024 — Present',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Built and own 4-tier POM Playwright suites covering 1,000+ test cases across 4 concurrent client products — enterprise HR, premium mobile, an AI agent platform, and an FCA-regulated fintech remittance app.',
      'Apply a 10-layer test-design approach (UI, functional positive/negative, edge, network, lifecycle, permissions/RBAC, input validation, push notifications, E2E) to catch defects legacy happy-path suites miss.',
      'Set up centralized Allure reporting + TestRail integration, replacing scattered per-project results with a single source of truth used across all active products.',
      'Run risk-weighted sprint QA (BMAD) with shift-left coverage — caught a Rota Engine defect pre-UAT that would have triggered weeks of erroneous payroll recomputation.',
    ],
  },
]
