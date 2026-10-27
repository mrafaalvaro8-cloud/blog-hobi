import Link from 'next/link'

export const metadata = {
  title: 'Tentang',
  description: 'Tentang penulis dan blog Pikiran yang Dicatet.',
}

export default function About() {
  return (
    <div className="container py-12 max-w-2xl">
      <h1 className="text-4xl mb-6">Tentang Aku</h1>

      <p className="text-lg leading-relaxed mb-6">
        Ini adalah blog kecil yang dibuat untuk menampung pemikiran-pemikiran
        yang terlintas di kepala — hal-hal yang terasa terlalu dalam untuk
        hanya dilalui, tapi terlalu kecil untuk dibicarakan dengan orang lain.
      </p>

      <p className="leading-relaxed mb-6">
        Di sini aku menulis tentang refleksi filosofis, kehidupan dalam,
        seni, ilmu pengetahuan, dan catatan harian. Tidak ada jadwal tetap,
        tidak ada target. Postingan datang ketika ada sesuatu yang
        benar-benar ingin aku katakan.
      </p>

      <p className="leading-relaxed mb-8">
        Blog ini dibuat dengan Next.js dan di-host di Vercel. Setiap postingan
        adalah file markdown sederhana yang aku tulis langsung.
      </p>

      <Link
        href="/"
        className="inline-block text-sm font-medium border border-[var(--border)] px-4 py-2 rounded-full hover:bg-[var(--border)] transition"
      >
        ← Kembali ke beranda
      </Link>
    </div>
  )
}
