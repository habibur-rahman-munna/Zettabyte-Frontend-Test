'use client'
import Link from 'next/link'
import useFetch from '../../hooks/useFetch'
import Card from '../../components/Card'
import { motion } from 'framer-motion'

export default function PostsPage() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Posts</h1>
      </div>

      <div className="mb-4">
        <button
          onClick={() => {
            // intentional error: navigate to invalid endpoint to show error handling
            (window as any).location = '/posts?simulateError=1'
          }}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >Simulate Error</button>
      </div>

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-600">Failed to load posts: {error}</p>}

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(data) && data.map((post: any, idx: number) => (
          <motion.div key={post.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.06 }}>
            <Link href={`/posts/${post.id}`}>
              <Card className="hover:shadow-lg cursor-pointer">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm mt-2 line-clamp-2">{post.body}</p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
