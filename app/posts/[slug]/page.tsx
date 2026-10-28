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
    <article className="wrap section">
      <Link href="/" className="link small muted mb-8 inline-block">
        ← Semua catatan
      </Link>

      <div className="sheet">
        <p className="small muted mb-3">{formatDate(post.date)}</p>
        <h1 className="display mb-4">{post.title}</h1>
        <p className="small muted mb-8">Ditulis oleh seseorang yang sedang berpikir.</p>

        <div className="post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-10">
          <Link href="/" className="link small">
            ← Kembali ke halaman utama
          </Link>
        </div>
      </div>

      <div className="post-band mt-12">
        <img
          src="/assets/reading-a-book-indoors-during-a-quiet.jpg"
          alt="Membaca buku dalam sore yang tenang"
          className="w-full h-[44vh] object-cover"
        />
      </div>
    </article>
  )
}