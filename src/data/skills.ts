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
    name: 'AI-Augmented QA',
    icon: Bot,
    items: [
      'Claude Code QA Agents',
      'AI-Assisted Test Generation',
      'MCP-Driven QA Workflow',
      'Second Brain (Obsidian Vault)',
    ],
  },
  {
    name: 'API & Performance',
    icon: Network,
    items: ['Postman', 'Newman', 'k6', 'REST API Testing', 'WebSocket Testing', 'SSE Stream Testing'],
  },
  {
    name: 'Security & Compliance',
    icon: Shield,
    items: [
      'RBAC & Permission Testing',
      'OAuth Flow Validation',
      'FCA / KYC / AML Compliance QA',
      'Multi-Tenant Isolation',
      'Auth Boundary Testing',
    ],
  },
  {
    name: 'Test Management',
    icon: ClipboardCheck,
    items: ['TestRail', 'Jira', 'Confluence', 'Allure', 'Figma (Design QA)'],
  },
  {
    name: 'Browser & DevTools',
    icon: Monitor,
    items: [
      'Chrome DevTools',
      'Network Inspection',
      'Playwright Trace Viewer',
      'Lighthouse Audits',
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
      'BMAD Sprint QA',
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
