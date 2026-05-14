import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'

interface Props {
  eyebrow: string
  title: string
  description?: string
  center?: boolean
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`mb-12 md:mb-16 ${center ? 'text-center mx-auto max-w-3xl' : ''}`}
    >
      <div className="font-mono text-xs md:text-sm text-accent-violet uppercase tracking-[0.2em] mb-3">
        {eyebrow}
      </div>
      <h2 className="text-h2 md:text-h1 font-display font-semibold">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-secondary text-base md:text-lg max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  )
}
