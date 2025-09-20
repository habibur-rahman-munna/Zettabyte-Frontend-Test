'use client'
import { useEffect, useState } from 'react'

type FetchState<T> = {
  data: T | null
  loading: boolean
  error: string | null
}

export default function useFetch<T = any>(url: string | null) {
  const [state, setState] = useState<FetchState<T>>({ data: null, loading: false, error: null })

  useEffect(() => {
    if (!url) return
    let cancelled = false
    async function fetcher() {
      setState({ data: null, loading: true, error: null })
      try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
        const json = await res.json()
        if (!cancelled) setState({ data: json, loading: false, error: null })
      } catch (err: any) {
        if (!cancelled) setState({ data: null, loading: false, error: err.message || 'Unknown error' })
      }
    }
    fetcher()
    return () => { cancelled = true }
  }, [url])

  return state
}
