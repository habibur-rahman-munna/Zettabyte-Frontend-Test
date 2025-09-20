'use client'
import useFetch from '../../hooks/useFetch'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import { useState } from 'react'

export default function UsersPage() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')
  const [selected, setSelected] = useState<any | null>(null)
  const [simulateFail, setSimulateFail] = useState(false)

  const users = simulateFail ? null : data

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Users</h1>
        <div>
          <button onClick={() => setSimulateFail((s) => !s)} className="px-3 py-1 bg-yellow-500 rounded mr-2">Toggle Simulated Failure</button>
        </div>
      </div>

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-600">Failed to load users: {error}</p>}
      {simulateFail && <p className="text-red-600">Simulated failure active — users hidden</p>}

      {Array.isArray(users) && (
        <Card>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Company</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u: any) => (
                <tr key={u.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelected(u)}>
                  <td className="p-2">{u.name}</td>
                  <td className="p-2">{u.email}</td>
                  <td className="p-2">{u.company?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <h2 className="text-lg font-semibold">{selected.name}</h2>
            <p className="mt-2">Email: {selected.email}</p>
            <p className="mt-1">Phone: {selected.phone}</p>
            <p className="mt-1">Company: {selected.company?.name}</p>
            <p className="mt-1">Website: {selected.website}</p>

            <div className="mt-4 text-right">
              <button onClick={() => setSelected(null)} className="px-3 py-1 bg-blue-600 text-white rounded">Close</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
