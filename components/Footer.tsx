import Link from 'next/link'
import { credits } from '@/lib/credits'

export default function Footer() {
  const credit = credits
    .map(
      (c) =>
        `“${c.title}” by ${c.creator}, ${c.license}${
          c.via ? `, via ${c.via}` : ''
        }`
    )
    .join(' · ')

  return (
    <footer className="curtain-above">
      <div className="wrap section">
        <div className="sheet">
          <div className="flex flex-wrap gap-8 items-start">
            <div className="flex-1 min-w-[16rem]">
              <p className="font-[family-name:var(--font-display)] font-bold text-[clamp(1.4rem,3vw,2rem)] leading-tight mb-2">
                Pikiran yang Dicatet
              </p>
              <p className="muted">
                Ditulis oleh seseorang yang sedang berpikir. Tidak ada jadwal
                tetap, tidak ada target.
              </p>
              <div className="mt-4 flex gap-6">
                <Link href="/about" className="link">
                  Tentang
                </Link>
                <Link href="/categories" className="link">
                  Kategori
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="w-24 aspect-[4/3] overflow-hidden bg-[var(--paper-3)]">
                <video
                  src="/assets/hand-writing-odia-character-with-pronunciation.webm"
                  poster="/assets/hand-writing-odia-character-with-pronunciation-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                />
              </div>
              <img
                src="/assets/usvi-img-5204-minimalist-desk-with-a.jpg"
                alt="Meja tulis dengan lampu, notebook, dan pensil"
                width="128"
                height="96"
                className="w-24 aspect-[4/3] object-cover"
              />
              <img
                src="/assets/four-treasures-in-the-study-paper-writing.jpg"
                alt="Empat benda penulisan: kertas, kuas, tinta, dan batu tinta"
                width="128"
                height="96"
                className="w-24 aspect-[4/3] object-cover"
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="muted max-w-[70ch]">
              Gambar: {credit}
            </p>
            <p className="muted mt-1">
              Dibuat dengan Next.js &amp; di-host di Vercel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}