export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-16">
      <div className="container py-8 text-sm text-[var(--muted)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="m-0">
          © {new Date().getFullYear()} Pikiran yang Dicatet. Ditulis oleh seseorang yang sedang berpikir.
        </p>
        <p className="m-0">
          Dibuat dengan Next.js &amp; di-host di Vercel.
        </p>
      </div>
    </footer>
  )
}
