import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        glass rounded-2xl p-6 md:p-8
        shadow-glass
        ${hover ? 'hover:border-accent-violet/40 transition-colors duration-300' : ''}
        ${glow ? 'shadow-glow-violet' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
