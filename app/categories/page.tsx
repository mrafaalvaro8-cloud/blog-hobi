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
    <div className="wrap section">
      <div className="sheet">
        <h1 className="head mb-2">Kategori</h1>
        <p className="small muted mb-8">
          Pilih kategori untuk melihat semua postingan di dalamnya.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/categories/${encodeURIComponent(cat)}`}
              className="link text-sm px-4 py-2 bg-[var(--paper-3)]"
            >
              {cat}
            </Link>
          ))}
        </div>

        <h2 className="head mb-6">Semua postingan</h2>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}