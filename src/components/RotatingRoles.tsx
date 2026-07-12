import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface RotatingRolesProps {
  roles: string[]
  interval?: number
  className?: string
  style?: React.CSSProperties
}

export default function RotatingRoles({
  roles,
  interval = 2400,
  className = '',
  style,
}: RotatingRolesProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % roles.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [roles.length, interval])

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      style={style}
    >
      {/* Pulsing availability dot */}
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>

      <span className="relative inline-block overflow-hidden">
        {/* Invisible sizer keeps the widest role from clipping / reflowing */}
        <span aria-hidden className="invisible whitespace-nowrap">
          {roles.reduce((a, b) => (a.length >= b.length ? a : b), '')}
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            className="absolute left-0 top-0 whitespace-nowrap"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  )
}
