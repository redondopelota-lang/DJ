import { motion } from 'framer-motion'
import type { PropsWithChildren, ReactNode } from 'react'

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  as?: keyof typeof motion
}>

export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children as ReactNode}
    </MotionTag>
  )
}
