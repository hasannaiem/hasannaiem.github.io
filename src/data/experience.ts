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
      'Architected 4-tier POM Playwright suites covering 100+ E2E scenarios across multiple enterprise products.',
      'Designed the 10-layer testing methodology — UI, functional positive/negative, edge, network, lifecycle, permissions, input, push, E2E.',
      'Built centralized Allure reporting + TestRail integration, replacing scattered per-project results with single source of truth.',
      'Drives BMAD-style sprint QA: Build, Measure, Adjust, Deploy — risk-weighted prioritization over coverage theater.',
    ],
  },
]
