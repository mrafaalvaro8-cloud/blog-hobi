import Link from 'next/link'
import PostCard from '@/components/PostCard'
import { getSortedPostsData } from '@/lib/posts'

export default function Home() {
  const posts = getSortedPostsData()

  return (
    <div className="deck">
      <div className="deck-bg-wrap" aria-hidden="true">
        <img
          className="deck-bg"
          src="/assets/last-page-of-handwritten-journal-from-sketchbook.jpg"
          alt=""
        />
      </div>
      <section className="deck-stage">
        <div className="deck-card" data-reveal>
          <div className="sheet deck-body">
            <h1 className="display mb-3">
              Pikiran yang Dicatet
            </h1>
            <p className="lead muted mb-6 max-w-[32ch]">
              Catatan tentang hal-hal yang terlintas: refleksi, seni, dan
              kehidupan dalam.
            </p>
            <video
              src="/assets/hand-writing-odia-character-with-pronunciation.webm"
              poster="/assets/hand-writing-odia-character-with-pronunciation-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              title="Tangan sedang menulis huruf dengan tinta"
              className="deck-video w-full max-w-md aspect-video object-cover bg-[var(--paper-3)] mb-8"
            />
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <Link href="#postingan" className="btn inline-block text-sm">
                Baca postingan
              </Link>
              <Link href="/categories" className="link">
                Lihat kategori
              </Link>
              <Link href="/about" className="link">
                Tentang penulis
              </Link>
            </div>
          </div>
        </div>

        {posts.map((post) => (
          <div key={post.slug} className="deck-card" data-reveal>
            <div className="sheet deck-body">
              <PostCard post={post} />
            </div>
          </div>
        ))}
      </section>

      <div className="wrap section text-center small muted">
        <p id="postingan">
          {posts.length} catatan, ditulis tanpa jadwal dan tanpa target.
        </p>
        <p className="mt-2">
          Postingan datang ketika ada sesuatu yang benar-benar ingin
          dituliskan.
        </p>
      </div>

      <div className="bleed">
        <img
          src="/assets/usvi-img-5204-minimalist-desk-with-a.jpg"
          alt="Meja tulis dengan lampu, notebook, dan pensil"
          className="w-full h-[42vh] object-cover"
        />
      </div>

      <div className="bleed">
        <img
          src="/assets/reading-a-book-indoors-during-a-quiet.jpg"
          alt="Membaca buku dalam sore yang tenang"
          className="w-full h-[42vh] object-cover"
        />
      </div>
    </div>
  )
}