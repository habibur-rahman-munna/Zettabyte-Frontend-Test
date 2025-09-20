'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  return (
    <aside className="bg-white border-r h-screen p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold">Zettabyte</h2>
        <button
          aria-label="toggle sidebar"
          onClick={() => setOpen((s) => !s)}
          className="p-2 rounded hover:bg-gray-100"
        >
          {open ? '◀' : '▶'}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '200px', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="overflow-hidden"
          >
            <ul className="space-y-2">
              <li>
                <Link href="/" className="block p-2 rounded hover:bg-gray-100">Dashboard</Link>
              </li>
              <li>
                <Link href="/posts" className="block p-2 rounded hover:bg-gray-100">Posts</Link>
              </li>
              <li>
                <Link href="/users" className="block p-2 rounded hover:bg-gray-100">Users</Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </aside>
  )
}
