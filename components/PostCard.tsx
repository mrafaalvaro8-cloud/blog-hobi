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
    <article className="mb-12">
      <p className="small muted mb-3">
        {formatDate(post.date)}
      </p>
      <Link href={`/posts/${post.slug}`} className="link">
        <h2 className="post-title mb-2">
          {post.title}
        </h2>
      </Link>
      <p className="text-[var(--step-body)] leading-relaxed mb-4">
        {post.excerpt}
      </p>
      <Link
        href={`/posts/${post.slug}`}
        className="link text-sm"
      >
        Baca{' →'}
      </Link>
    </article>
  )
}