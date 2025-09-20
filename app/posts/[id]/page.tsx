'use client'
import useFetch from '../../../hooks/useFetch'
import Card from '../../../components/Card'

export default function PostDetail({ params }: { params: { id: string } }) {
  const { id } = params
  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Post Detail</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">Failed to load post: {error}</p>}
      {data && (
        <Card>
          <h2 className="text-lg font-semibold">{data.title}</h2>
          <p className="mt-3">{data.body}</p>
        </Card>
      )}
    </div>
  )
}
