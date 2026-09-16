import {
  Wand2,
  Terminal,
  Network,
  GitBranch,
  Database,
  ClipboardCheck,
  Bot,
  Layers,
  Smartphone,
  Shield,
  Monitor,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SkillGroup {
  name: string
  icon: LucideIcon
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Manual Testing',
    icon: ClipboardCheck,
    items: [
      'Test Case Design (10-Layer Coverage)',
      'Exploratory Testing',
      'Regression Testing',
      'Bug Reporting & Retest Cycles',
    ],
  },
  {
    name: 'Test Automation',
    icon: Wand2,
    items: [
      'Playwright',
      'TypeScript',
      'Visual Regression Testing',
      'Playwright Component Testing',
      'Serial Suite Isolation',
    ],
  },
  {
    name: 'Test Management',
    icon: ClipboardCheck,
    items: ['TestRail (Case Authoring, Run Management, RTM)', 'Jira', 'Confluence', 'Allure Reporting'],
  },
  {
    name: 'Figma / Design QA',
    icon: Monitor,
    items: [
      'Design-to-Build Comparison',
      'Visual Regression Analysis',
      'Spec-vs-Build Discrepancy Flagging',
      'Component/Token Audits',
    ],
  },
  {
    name: 'Mobile Testing',
    icon: Smartphone,
    items: [
      'Maestro',
      'React Native QA',
      'iOS & Android',
      'Push Notification Testing',
      'Biometric Auth Testing',
      'Offline Behavior Testing',
    ],
  },
  {
    name: 'Security Testing',
    icon: Shield,
    items: ['RBAC & Permission Testing', 'OAuth Flow Validation', 'Auth Boundary Testing', 'Multi-Tenant Isolation'],
  },
  {
    name: 'Domain — Fintech & Healthcare',
    icon: Shield,
    items: ['FCA / KYC / AML Compliance QA', 'Payment/Booking Integrity Testing', 'Patient/Financial Data Handling QA'],
  },
  {
    name: 'AI-Driven Testing',
    icon: Bot,
    items: [
      'AI-Assisted Test Plan Generation',
      'AI-Assisted Test Case & Script Authoring',
      'AI-Augmented Failure Triage',
      'Risk Prediction',
      'Claude Code QA Agents',
      'MCP-Driven QA Workflow',
      'Second Brain (Obsidian Vault)',
    ],
  },
  {
    name: 'SDLC Engagement',
    icon: Layers,
    items: [
      'Requirement Gathering & Analysis',
      'Test Planning',
      'Requirement Harvesting (Jira/Confluence/Figma)',
      'Test Execution (Manual + Automated)',
      'Bug Filing & Retest',
      'QA Sign-off',
      'Release Readiness',
    ],
  },
  {
    name: 'API & Performance',
    icon: Network,
    items: [
      'Postman',
      'Newman',
      'k6 (Load/Stress/Performance Testing)',
      'REST API Testing',
      'WebSocket Testing',
      'SSE Stream Testing',
    ],
  },
  {
    name: 'Browser & DevTools',
    icon: Monitor,
    items: [
      'Chrome DevTools',
      'Network Inspection',
      'Playwright Trace Viewer',
      'Lighthouse Audits (Accessibility/a11y + Performance)',
      'Console Error Monitoring',
    ],
  },
  {
    name: 'CI/CD & DevOps',
    icon: GitBranch,
    items: ['GitHub Actions', 'Docker', 'Docker Compose', 'Git'],
  },
  {
    name: 'Methodologies',
    icon: Layers,
    items: [
      '4-Tier POM Architecture',
      '10-Layer Test Design',
      'Risk-Based Testing',
      'BMAD (Build-Measure-Adjust-Deploy) Sprint QA',
      'Shift-Left QA',
    ],
  },
  {
    name: 'Languages',
    icon: Terminal,
    items: ['TypeScript', 'JavaScript', 'Python', 'Bash'],
  },
  {
    name: 'Databases',
    icon: Database,
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'],
  },
]
