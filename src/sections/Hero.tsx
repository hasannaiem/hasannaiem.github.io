import { motion } from 'framer-motion'
import { ArrowDown, Mail, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'
import { profile } from '../data/profile'
import TypingLine from '../components/TypingLine'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-mono text-xs md:text-sm text-accent-violet uppercase tracking-[0.25em]"
          >
            // {profile.role} · {profile.location} · {profile.timezone}
          </motion.div>

          {'availability' in profile && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-green-500/30 text-xs font-mono text-green-400 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              {(profile as typeof profile & { availability: string }).availability}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-display font-display font-bold leading-[0.95]"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xl md:text-2xl text-ink-secondary font-display min-h-[2em]"
          >
            <TypingLine lines={profile.taglineRotation} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap gap-3 pt-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-full
                bg-gradient-to-r from-accent-violet to-accent-blue
                text-bg-base font-semibold text-sm
                hover:shadow-glow-violet
                transition-all duration-300
              "
            >
              <Mail size={16} />
              Hire me
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-full
                glass border border-glass-border
                hover:border-accent-violet/50
                text-sm font-medium
                transition-all duration-300
              "
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-full
                glass border border-glass-border
                hover:border-accent-violet/50
                text-sm font-medium
                transition-all duration-300
              "
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href={profile.cvUrl}
              download
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-full
                glass border border-glass-border
                hover:border-accent-violet/50
                text-sm font-medium
                transition-all duration-300
              "
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2 flex justify-center md:justify-end"
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-full opacity-60"
              style={{
                background:
                  'conic-gradient(from 0deg, #a78bfa, #60a5fa, #f472b6, #a78bfa)',
                filter: 'blur(30px)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <div
              className="
                relative w-64 h-64 md:w-80 md:h-80
                rounded-full overflow-hidden
                border-2 border-glass-border
                shadow-glow-violet
              "
            >
              <img
                src="/headshot.webp"
                alt={profile.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          text-ink-muted hover:text-accent-violet
          transition-colors
        "
        aria-label="Scroll to about"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block"
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  )
}
