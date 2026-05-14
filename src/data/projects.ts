export interface Project {
  id: string
  name: string
  status: string
  domain: string
  stack: string[]
  summary: string
  problem: string
  approach: string[]
  wins: string[]
}

export const projects: Project[] = [
  {
    id: 'workforce-mgmt',
    name: 'Workforce Management Platform',
    status: 'UAT Phase',
    domain: 'Enterprise HR · UK Agencies',
    stack: ['Playwright', 'TypeScript', 'TestRail', 'Jira', 'Allure'],
    summary:
      '64+ specs across Agency Portal and Time-Presence modules. RBAC, Rota Engine, offline clock-in/out coverage. Pre-prod hardening before UAT release.',
    problem:
      'Multi-tenant workforce platform with offline-first clock-in/out, complex RBAC, and a rota engine driving downstream payroll. High-risk surface area, brittle legacy specs, no centralized reporting.',
    approach: [
      'Rebuilt suites under strict 4-tier POM — zero raw selectors in spec files.',
      'Risk-weighted coverage: Rota Engine + Offline Clock-in + Agency Portal vacancy flow flagged as P0.',
      'Synthetic seed scripts (Python) feeding deterministic test data per env.',
      'Allure results centralized in QA-Hub, replacing per-project scatter.',
    ],
    wins: [
      'Caught 6+ critical defects pre-UAT including offline-sync data loss edge case.',
      'Risk-weighted Rota Engine coverage flagged auto-rejection bug worth weeks of payroll recompute.',
      '33 agency-portal specs + 31 time-presence specs in parallel-safe Playwright suites.',
    ],
  },
  {
    id: 'wellness-booking',
    name: 'Wellness Booking App',
    status: 'Pre-Launch',
    domain: 'Mobile · Premium Therapy',
    stack: ['Playwright', 'Maestro', 'Postman', 'TestRail', 'TypeScript'],
    summary:
      '609 cases across Web Admin (539) and Mobile (70) suites. Payment, double-booking, role separation, price calculation matrix. Launch readiness target.',
    problem:
      'Premium mobile therapy booking — payment must not charge without booking, no double-booking, strict role separation between client/therapist/admin. Stripe + Firebase + Supabase + oRPC stack with 4-tier price calc.',
    approach: [
      'Designed price calculation validation matrix: base + surcharge + travel + VAT across cancellation tiers.',
      'High-risk flows in dedicated serial suites — payment-flow.serial.spec.ts isolated from parallel ones.',
      'Maestro flows for mobile-only paths: push notification handling, biometric auth.',
      'Test cases staged in _draft/ → reviewed → testcases/ → TestRail. Discipline before automation.',
    ],
    wins: [
      'Authored 609 cases (WA-TC-001 to WA-TC-609) — full pre-launch coverage map.',
      'Price-calc matrix surfaced 4 surcharge-VAT interaction bugs in first integration pass.',
      'Role separation suite caught therapist-impersonation vector in admin endpoints.',
    ],
  },
]
