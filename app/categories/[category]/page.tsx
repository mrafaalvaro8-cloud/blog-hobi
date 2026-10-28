import Link from 'next/link'
import PostCard from '@/components/PostCard'
import { getCategories, getPostsByCategory } from '@/lib/posts'

export function generateStaticParams() {
  return getCategories().map((category) => ({ category }))
}

export const generateMetadata = ({ params }: { params: { category: string } }) => ({
  title: `Kategori: ${decodeURIComponent(params.category)}`,
  description: `Semua postingan pada kategori ${decodeURIComponent(params.category)}.`,
})

export default function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const category = decodeURIComponent(params.category)
  const posts = getPostsByCategory(category)

  return (
    <div className="wrap section">
      <div className="sheet">
        <Link
          href="/categories"
          className="link small muted mb-6 inline-block"
        >
          ← Semua kategori
        </Link>
        <h1 className="head mb-2">Kategori: {category}</h1>
        <p className="small muted mb-8">{posts.length} catatan</p>

        {posts.length === 0 ? (
          <p className="muted">Belum ada catatan di kategori ini.</p>
        ) : (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>
    </div>
  )
}