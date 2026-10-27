import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { getPostData, getSortedPostsData } from '@/lib/posts'

export function generateStaticParams() {
  return getSortedPostsData().map((post) => ({ slug: post.slug }))
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = getPostData(params.slug)
  if (!post) return { title: 'Postingan Tidak Ditemukan' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostData(params.slug)
  if (!post) notFound()

  return (
    <article className="container py-12 max-w-3xl">
      <Link
        href="/"
        className="inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)] mb-8"
      >
        ← Kembali ke beranda
      </Link>

      <span className="text-xs uppercase tracking-wide text-[var(--accent)]">
        {post.category}
      </span>
      <h1 className="text-4xl md:text-5xl mt-3 mb-4">
        {post.title}
      </h1>
      <p className="text-[var(--muted)] mb-10">
        {formatDate(post.date)}
      </p>

      <div className="post-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <div className="mt-12 pt-8 border-t border-[var(--border)]">
        <Link
          href="/"
          className="inline-block text-sm font-medium border border-[var(--border)] px-4 py-2 rounded-full hover:bg-[var(--border)] transition"
        >
          ← Semua postingan
        </Link>
      </div>
    </article>
  )
}
