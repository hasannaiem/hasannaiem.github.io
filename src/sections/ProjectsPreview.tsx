import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import SectionTitle from '../components/SectionTitle'
import GlassCard from '../components/GlassCard'
import TechBadge from '../components/TechBadge'
import { stagger, fadeUp } from '../lib/motion'

export default function ProjectsPreview() {
  return (
    <section id="projects" className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="// SELECTED WORK"
          title="Case studies."
          description="Client-anonymized snapshots from production releases."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
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

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="
              inline-flex items-center gap-2
              text-accent-violet font-medium
              hover:gap-3 transition-all duration-300
            "
          >
            View all case studies
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
