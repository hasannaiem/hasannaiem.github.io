export interface Project {
  id: string
  name: string
  status: string
  domain: string
  stack: string[]
  sutStack?: string[]
  summary: string
  problem: string
  approach: string[]
  wins: string[]
  repoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'workforce-mgmt',
    name: 'Workforce Management Platform',
    status: 'UAT Phase',
    domain: 'Enterprise HR · UK Agencies',
    stack: ['Playwright', 'TypeScript', 'Python', 'TestRail', 'Jira', 'Allure'],
    summary:
      'Pre-UAT hardening on an anonymized UK enterprise workforce platform. 95 Playwright specs across Agency Portal and Time-Presence modules — RBAC, Rota Engine, offline clock-in/out.',
    problem:
      'Multi-tenant workforce platform with offline-first clock-in/out, complex RBAC, and a Rota Engine driving downstream payroll. High-risk surface area, brittle legacy specs, no centralized reporting.',
    approach: [
      'Rebuilt suites under strict 4-tier POM — zero raw selectors in spec files.',
      'Risk-weighted coverage: Rota Engine, Offline Clock-in, and Agency Portal vacancy flow flagged as P0.',
      'Synthetic seed scripts (Python) feeding deterministic test data per environment.',
      'Allure results centralized in QA-Hub, replacing per-project scatter.',
    ],
    wins: [
      'Caught 7 critical defects pre-UAT including an offline-sync data-loss edge case.',
      'Risk-weighted Rota Engine coverage caught an auto-rejection bug that would have triggered erroneous payroll recomputation across multiple tenants.',
      '95 parallel-safe specs across 4 suites: agency-portal (33), time-presence (31), time-presence-dev (20), insights-alerts (11).',
    ],
  },
  {
    id: 'ai-agent-platform',
    name: 'AI Agent Provisioning Platform',
    status: 'Active',
    domain: 'AI Platforms · Docker · Multi-Tenant',
    stack: ['Playwright', 'TypeScript', 'TestRail'],
    sutStack: ['Next.js', 'Hono', 'PostgreSQL', 'Docker-in-Docker', 'Better Auth', 'MinIO', 'WebSocket', 'SSE'],
    summary:
      '245 test cases across 2 TestRail suites for an anonymized AI agent provisioning platform — users spin up personalized AI assistants via wizard, deploy as isolated Docker containers, and manage via web dashboard.',
    problem:
      '8-stage agent provisioning pipeline (persona → gateway config → integrations → cron → PostgreSQL → object storage). Docker-in-Docker lifecycle where agent containers outlive the platform stack. SSE streaming, WebSocket terminal, AES-256-GCM encryption at rest, and 4 OAuth providers. One integration failure cascades to full tenant lockout.',
    approach: [
      'Suite 153 (91 cases): end-to-end wizard, Docker lifecycle, Chat/SSE streaming, WebSocket terminal, file management, integrations, and admin panel.',
      'Suite 154 (154 cases): deployment regression checklist — 19 subsections from pre-flight through admin portal, run before every production deploy.',
      'High-risk test isolation: Docker socket lifecycle, SSE stream integrity, and encryption key rotation in dedicated suites.',
      '4 OAuth providers tested with full PKCE flows; session cookie boundary verified across provider transitions.',
    ],
    wins: [
      'Docker lifecycle edge case caught pre-launch: agent containers persist after platform compose stack stops — silent data-loss vector.',
      'WebSocket terminal tests surfaced xterm.js text-vs-binary frame handling bug before first user traffic.',
      '245 test cases providing deployment regression coverage on a shipping AI platform used in production.',
    ],
  },
  {
    id: 'sqa-fundamentals',
    name: 'SQA Fundamentals Portfolio',
    status: 'Public',
    domain: 'Manual Testing · API · Automation',
    stack: ['Selenium', 'Postman', 'JMeter', 'Jira'],
    summary:
      'Public QA portfolio built during SQA training — manual test case writing, API testing with Postman, load testing with JMeter, and web automation with Selenium WebDriver.',
    problem:
      'Consolidate structured QA practice work into a publicly verifiable portfolio covering the full spectrum: manual, API, performance, and automation testing fundamentals.',
    approach: [
      'Designed and executed manual test cases across multiple demo applications.',
      'API testing with Postman — request chaining, assertions, environment variables.',
      'Load testing with JMeter — thread groups, ramp-up, response time analysis.',
      'Web automation with Selenium WebDriver — locator strategies, test scripts.',
    ],
    wins: [
      'Publicly verifiable QA work — full methodology coverage in one repo.',
      'Foundation that evolved into the 4-tier POM Playwright architecture used in production.',
      'Demonstrates the manual → automation engineering progression.',
    ],
    repoUrl: 'https://github.com/hasannaiem/SQA-Projects',
  },
  {
    id: 'wellness-booking',
    name: 'Wellness Booking App',
    status: 'Pre-Launch',
    domain: 'Mobile · Premium Therapy',
    stack: ['Playwright', 'Maestro', 'Postman', 'TestRail', 'TypeScript'],
    sutStack: ['React Native', 'NestJS', 'oRPC', 'Supabase', 'Stripe', 'Firebase FCM', 'Next.js'],
    summary:
      'Launch-readiness for an anonymized premium mobile therapy booking app (London market) where a missed payment bug means charging without booking. 829 cases across Web Admin (~200) and Mobile (629).',
    problem:
      'Premium mobile therapy booking — payment must not charge without booking, no double-booking, strict role separation between client/therapist/admin. Stripe + Firebase + Supabase + oRPC stack with 4-tier price calculation.',
    approach: [
      'Designed a price-calculation validation matrix: base + surcharge + travel + VAT across cancellation tiers.',
      'High-risk flows in dedicated serial suites — payment-flow.serial.spec.ts isolated from parallel runs.',
      'Maestro flows for mobile-only paths: push notification handling, biometric auth.',
      'Test cases staged in _draft/ → reviewed → testcases/ → TestRail. Discipline before automation.',
    ],
    wins: [
      'Authored 829 test cases (WA-TC-001 to WA-TC-829) — full pre-launch coverage across Web Admin (~200) and Mobile (629).',
      'Price-calc matrix surfaced 4 surcharge-VAT interaction bugs in first integration pass.',
      'Role separation suite caught a therapist-impersonation vector in admin endpoints.',
    ],
  },
]
