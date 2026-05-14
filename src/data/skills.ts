import {
  Wand2,
  Terminal,
  Network,
  GitBranch,
  Database,
  ClipboardCheck,
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
    items: ['Playwright', 'TypeScript', 'Maestro', 'Selenium', 'Cypress'],
  },
  {
    name: 'API & Performance',
    icon: Network,
    items: ['Postman', 'Newman', 'k6', 'JMeter', 'Insomnia'],
  },
  {
    name: 'Test Management',
    icon: ClipboardCheck,
    items: ['TestRail', 'Jira', 'Confluence', 'Allure', 'Zephyr'],
  },
  {
    name: 'CI/CD & DevOps',
    icon: GitBranch,
    items: ['GitHub Actions', 'Jenkins', 'Docker'],
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
