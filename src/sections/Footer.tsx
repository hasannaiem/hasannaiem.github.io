import { profile } from '../data/profile'

const buildYear = new Date().getFullYear()
const buildDate = new Date().toISOString().split('T')[0]

export default function Footer() {
  return (
    <footer className="border-t border-glass-border py-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-xs text-ink-muted font-mono">
        <div>
          © {buildYear} {profile.name}
        </div>
        <div className="text-center">
          Built with Vite · React · Framer Motion · deployed via GitHub Pages
        </div>
        <div className="md:text-right">
          Last updated · {buildDate}
        </div>
      </div>
    </footer>
  )
}
