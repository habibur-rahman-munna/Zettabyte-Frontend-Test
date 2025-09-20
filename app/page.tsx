'use client'
import Card from '../components/Card'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Welcome,Zettabyte</h1>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
          className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center text-white"
        >
          ⚡
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <h3 className="font-semibold">Total Posts</h3>
          <p className="text-3xl">—</p>
        </Card>
        <Card>
          <h3 className="font-semibold">Total Users</h3>
          <p className="text-3xl">—</p>
        </Card>
        <Card>
          <h3 className="font-semibold">Animated Card</h3>
          <motion.div
            initial={{ x: -10 }}
            animate={{ x: 10 }}
            transition={{ duration: 1.2, yoyo: Infinity }}
            className="mt-4 p-2 bg-gray-100 rounded"
          >
            small moving badge
          </motion.div>
        </Card>
      </div>

      <Card>
        <h3 className="font-semibold">Notes</h3>
        <p className="mt-2 text-sm text-gray-600">This project uses Next.js 15 app router, TypeScript, Tailwind CSS and Framer Motion for animations.</p>
      </Card>
    </div>
  )
}
