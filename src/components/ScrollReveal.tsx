import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp } from '../lib/motion'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  className,
}: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
