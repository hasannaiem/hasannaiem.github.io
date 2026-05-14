import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [open])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled ? 'glass shadow-glass' : ''}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl md:text-2xl font-display font-bold tracking-tight"
          >
            <span className="text-gradient">naiem</span>
            <span className="text-accent-violet">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {onHome &&
              links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            <a
              href={`mailto:${profile.email}`}
              className="
                glass px-4 py-2 rounded-full text-sm font-medium
                border border-accent-violet/30
                hover:bg-accent-violet/10 hover:border-accent-violet/60
                transition-all duration-300
              "
            >
              Hire me
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-ink-primary"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-bg-base/95 backdrop-blur-xl md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6">
              <span className="text-xl font-display font-bold">
                <span className="text-gradient">naiem</span>
                <span className="text-accent-violet">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-6 text-2xl font-display">
              {onHome &&
                links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-ink-secondary hover:text-gradient transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="
                  mt-4 glass px-6 py-3 rounded-full text-base font-medium
                  border border-accent-violet/40
                "
              >
                Hire me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
