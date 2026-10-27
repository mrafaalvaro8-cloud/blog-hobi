import Link from 'next/link'
import type { Post } from '@/lib/posts'

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="mb-10 pb-10 border-b border-[var(--border)] last:border-b-0">
      <span className="text-xs uppercase tracking-wide text-[var(--accent)]">
        {post.category}
      </span>
      <Link href={`/posts/${post.slug}`}>
        <h2 className="text-2xl mt-1 mb-2 hover:text-[var(--accent)] transition">
          {post.title}
        </h2>
      </Link>
      <p className="text-sm text-[var(--muted)] mb-3">
        {formatDate(post.date)}
      </p>
      <p className="text-[var(--text)] leading-relaxed">{post.excerpt}</p>
      <Link
        href={`/posts/${post.slug}`}
        className="inline-block mt-3 text-sm font-medium hover:underline"
      >
        Baca lebih lanjut →
      </Link>
    </article>
  )
}
