import PostCard from '@/components/PostCard'
import { getSortedPostsData } from '@/lib/posts'

export default function Home() {
  const posts = getSortedPostsData()

  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl mb-4">
          Pikiran yang Dicatet
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-xl">
          Catatan kecil tentang hal-hal yang terlintas di pikiran —
          refleksi, kehidupan dalam, seni, dan hal-hal lain yang terasa
          layak untuk dituliskan.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-[var(--muted)]">
          Belum ada postingan. Tambahkan file .md di folder content/.
        </p>
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
