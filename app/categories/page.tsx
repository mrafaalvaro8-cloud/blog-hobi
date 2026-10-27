import Link from 'next/link'
import PostCard from '@/components/PostCard'
import { getCategories, getSortedPostsData } from '@/lib/posts'

export const metadata = {
  title: 'Kategori',
  description: 'Jelajahi semua postingan berdasarkan kategori.',
}

export default function Categories() {
  const categories = getCategories()
  const posts = getSortedPostsData()

  return (
    <div className="container py-12 max-w-3xl">
      <h1 className="text-4xl mb-2">Kategori</h1>
      <p className="text-[var(--muted)] mb-10">
        Pilih kategori untuk melihat semua postingan di dalamnya.
      </p>

      <div className="mb-12 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/categories/${encodeURIComponent(cat)}`}
            className="px-4 py-2 rounded-full border border-[var(--border)] text-sm hover:bg-[var(--border)] transition"
          >
            {cat}
          </Link>
        ))}
      </div>

      <div>
        <h2 className="text-2xl mb-6">Semua Postingan</h2>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
