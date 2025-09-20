'use client'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35 }}
      className={`bg-white shadow-sm rounded p-4 ${className}`}
    >
      {children}
    </motion.div>
  )
}
