import Link from 'next/link'

export const metadata = {
  title: 'Tentang',
  description: 'Tentang penulis dan blog Pikiran yang Dicatet.',
}

export default function About() {
  return (
    <div className="wrap section">
      <div className="sheet">
        <h1 className="head mb-6">Tentang Aku</h1>

        <p className="lead mb-6">
          Blog kecil ini dibuat untuk menampung pemikiran yang terlintas di
          kepala.
        </p>

        <p className="mb-6">
          Di sini aku menulis tentang refleksi filosofis, kehidupan dalam,
          seni, ilmu pengetahuan, dan catatan harian. Tidak ada jadwal
          tetap, tidak ada target. Postingan datang ketika ada sesuatu yang
          benar-benar ingin aku katakan.
        </p>

        <p className="mb-8">
          Blog ini dibuat dengan Next.js dan di-host di Vercel. Setiap
          postingan adalah file markdown sederhana yang aku tulis langsung.
        </p>

        <Link href="/" className="link small">
          ← Kembali ke halaman utama
        </Link>
      </div>

      </div>
  )
}