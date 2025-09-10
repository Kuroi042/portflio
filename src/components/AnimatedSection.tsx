import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 0.6 
}: AnimatedSectionProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 30, opacity: 0 }
      case 'down':
        return { y: -30, opacity: 0 }
      case 'left':
        return { x: 30, opacity: 0 }
      case 'right':
        return { x: -30, opacity: 0 }
      default:
        return { y: 30, opacity: 0 }
    }
  }

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ 
        y: 0, 
        x: 0, 
        opacity: 1 
      }}
      transition={{ 
        duration, 
        delay, 
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection

