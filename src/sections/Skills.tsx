import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import SectionTitle from '../components/SectionTitle'
import GlassCard from '../components/GlassCard'
import TechBadge from '../components/TechBadge'
import { stagger, fadeUp } from '../lib/motion'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="// SKILLS"
          title="The discipline toolkit."
          description="Categorized by where they fire — from spec authoring to centralized reporting."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <motion.div key={group.name} variants={fadeUp}>
                <GlassCard className="h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="
                        p-2.5 rounded-xl
                        bg-accent-violet/15 text-accent-violet
                        border border-accent-violet/25
                      "
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-semibold text-lg">
                      {group.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TechBadge key={item} label={item} />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
