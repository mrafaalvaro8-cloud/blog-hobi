'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className="wrap">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-5">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-[var(--step-lead)] leading-none text-[var(--desk-ink)] no-underline"
        >
          Pikiran yang Dicatet
        </Link>
        <nav className="flex items-center gap-5 text-[var(--step-body)] text-[var(--desk-ink)]">
          <Link href="/categories" className="link">
            Kategori
          </Link>
          <Link href="/about" className="link">
            Tentang
          </Link>
          {mounted && <ThemeToggle />}
        </nav>
      </div>
    </header>
  )
}
