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
    <div className="container py-12 max-w-3xl">
      <Link
        href="/categories"
        className="inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)] mb-6"
      >
        ← Kembali ke kategori
      </Link>
      <h1 className="text-4xl mb-2">Kategori: {category}</h1>
      <p className="text-[var(--muted)] mb-10">
        {posts.length} postingan
      </p>

      {posts.length === 0 ? (
        <p className="text-[var(--muted)]">Belum ada postingan di kategori ini.</p>
      ) : (
        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
