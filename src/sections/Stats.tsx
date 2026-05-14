import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard'
import { stagger, fadeUp } from '../lib/motion'

const stats = [
  { number: '100+', label: 'Specs authored' },
  { number: '10', label: 'Layer methodology' },
  { number: '4', label: 'Tier POM' },
  { number: '600+', label: 'TCs in TestRail' },
]

export default function Stats() {
  return (
    <section className="py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <GlassCard className="text-center" hover={false}>
                <div className="font-mono text-3xl md:text-5xl text-gradient font-semibold leading-none">
                  {s.number}
                </div>
                <div className="mt-3 text-xs md:text-sm text-ink-secondary uppercase tracking-wider">
                  {s.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
