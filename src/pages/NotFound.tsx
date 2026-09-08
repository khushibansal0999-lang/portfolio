import { Link } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Seo } from '@/components/Seo'

export function NotFound() {
  return (
    <Layout>
      <Seo title="Not found" />
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Page not found
        </h1>
        <Link to="/" className="hover:underline" style={{ color: 'var(--accent-strong)' }}>
          ← Back home
        </Link>
      </div>
    </Layout>
  )
}
