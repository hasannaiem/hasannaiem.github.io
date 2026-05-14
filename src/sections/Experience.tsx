import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/experience'
import SectionTitle from '../components/SectionTitle'
import GlassCard from '../components/GlassCard'
import { fadeUp } from '../lib/motion'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          eyebrow="// EXPERIENCE"
          title="Where the work happens."
        />

        <div className="relative">
          <div
            className="
              absolute left-4 md:left-1/2 top-0 bottom-0 w-px
              bg-gradient-to-b from-accent-violet/0 via-accent-violet/40 to-accent-violet/0
              -translate-x-1/2 md:-translate-x-px
            "
          />

          {experience.map((role, i) => {
            const onLeft = i % 2 === 0
            return (
              <motion.div
                key={role.company + role.period}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className={`
                  relative pl-12 md:pl-0 mb-12 md:mb-16
                  md:grid md:grid-cols-2 md:gap-8
                `}
              >
                <div
                  className={`
                    absolute left-4 md:left-1/2 top-3
                    w-3 h-3 rounded-full bg-accent-violet
                    -translate-x-1/2
                    shadow-glow-violet
                  `}
                />

                <div className={onLeft ? 'md:pr-8 md:text-right' : 'md:order-2 md:pl-8'}>
                  <GlassCard>
                    <div className="font-mono text-xs text-accent-violet uppercase tracking-wider mb-2">
                      {role.period}
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-1">
                      {role.role}
                    </h3>
                    <div className={`flex items-center gap-2 text-ink-secondary text-sm mb-4 ${onLeft ? 'md:justify-end' : ''}`}>
                      <Briefcase size={14} />
                      <span>{role.company} · {role.location}</span>
                    </div>
                    <ul className={`space-y-2 text-ink-secondary text-sm ${onLeft ? 'md:text-right' : ''}`}>
                      {role.highlights.map((h, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
