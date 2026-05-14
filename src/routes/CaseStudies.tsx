import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import GlassCard from '../components/GlassCard'
import TechBadge from '../components/TechBadge'
import Footer from '../sections/Footer'
import { stagger, fadeUp } from '../lib/motion'

export default function CaseStudies() {
  return (
    <main>
      <section className="pt-32 pb-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="
              inline-flex items-center gap-2 mb-8
              text-ink-muted hover:text-accent-violet
              transition-colors text-sm
            "
          >
            <ArrowLeft size={16} />
            Back home
          </Link>

          <div className="font-mono text-xs md:text-sm text-accent-violet uppercase tracking-[0.25em] mb-3">
            // FIELD NOTES
          </div>
          <h1 className="text-h1 md:text-display font-display font-bold mb-6">
            <span className="text-gradient">Case studies.</span>
          </h1>
          <p className="text-lg text-ink-secondary max-w-2xl">
            Production snapshots. Client names anonymized, methodology preserved.
            Where the discipline lands.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((p) => (
              <motion.div key={p.id} variants={fadeUp}>
                <Link to={`/case-studies/${p.id}`} className="block group h-full">
                  <GlassCard className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className="
                          inline-flex items-center
                          px-2.5 py-1 rounded-full
                          bg-accent-violet/15 text-accent-violet
                          text-xs font-mono uppercase tracking-wider
                          border border-accent-violet/25
                        "
                      >
                        {p.status}
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-ink-muted group-hover:text-accent-violet transition-colors"
                      />
                    </div>
                    <h3 className="font-display font-semibold text-xl md:text-2xl mb-2 group-hover:text-gradient transition-colors">
                      {p.name}
                    </h3>
                    <p className="font-mono text-xs text-ink-muted uppercase tracking-wider mb-4">
                      {p.domain}
                    </p>
                    <p className="text-ink-secondary text-sm leading-relaxed mb-5 flex-1">
                      {p.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <TechBadge key={s} label={s} />
                      ))}
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
