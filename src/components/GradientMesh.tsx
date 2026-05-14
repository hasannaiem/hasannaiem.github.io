import { motion } from 'framer-motion'

export default function GradientMesh() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-bg-base" />

      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full opacity-50"
        style={{
          background:
            'radial-gradient(circle, #6d28d9 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(circle, #1d4ed8 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 60, -80, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-[40vw] h-[40vw] rounded-full opacity-25"
        style={{
          background:
            'radial-gradient(circle, #be185d 0%, transparent 60%)',
          filter: 'blur(80px)',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: ['-50%', '-30%', '-70%', '-50%'],
          y: ['-50%', '-70%', '-30%', '-50%'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="noise absolute inset-0" />
    </div>
  )
}
