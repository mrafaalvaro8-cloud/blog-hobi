'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className="border-b border-[var(--border)]">
      <div className="container !max-w-3xl flex items-center justify-between py-6 gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">✦</span>
          <div>
            <h1 className="text-lg m-0 leading-none">Pikiran yang Dicatet</h1>
            <p className="text-xs text-[var(--muted)] m-0 hidden sm:block">
              Catatan tentang hal-hal yang terlintas di pikiran
            </p>
          </div>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="text-[var(--muted)] hover:text-[var(--accent)]">
            Beranda
          </Link>
          <Link href="/about" className="text-[var(--muted)] hover:text-[var(--accent)]">
            Tentang
          </Link>
          <Link href="/categories" className="text-[var(--muted)] hover:text-[var(--accent)]">
            Kategori
          </Link>
          {mounted && <ThemeToggle />}
        </nav>
      </div>
    </header>
  )
}
