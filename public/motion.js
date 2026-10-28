// Pikiran yang Dicatet — motion layer.
//
// Signature move: the pad of paper. A sheet is not revealed, it is placed.
// Each card slides in from the right edge at the angle a hand would hold it,
// then settles flat on the stack. The desk behind it drifts a few pixels as
// the pile grows heavier. Everything has a plain fallback: no script means
// every sheet is simply there.

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// ---- the pad: one sheet laid down at a time ----
;(function () {
  const cards = Array.from(document.querySelectorAll('.deck-card'))
  if (!cards.length) return

  if (reduce) {
    cards.forEach((c) => c.classList.add('is-in'))
    return
  }

  // first sheet is on the first screen: place it before the observer fires
  cards[0].classList.add('is-in')

  let next = 0
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const card = entry.target
        const idx = cards.indexOf(card)
        if (idx < next) {
          card.classList.add('is-in')
          io.unobserve(card)
          continue
        }
        next = idx + 1
        card.classList.add('is-in')
        io.unobserve(card)
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  )
  cards.forEach((c) => io.observe(c))

  // safety net: a sheet that never crossed the threshold still lands
  window.addEventListener('load', () =>
    setTimeout(() => {
      cards.forEach((c) => {
        const r = c.getBoundingClientRect()
        if (r.top < innerHeight && r.bottom > 0) c.classList.add('is-in')
      })
    }, 2500)
  )
})()

// ---- entrance for everything else on the page ----
;(function () {
  const targets = document.querySelectorAll('[data-reveal]:not(.deck-card)')
  if (!targets.length) return
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-in'))
    return
  }
  if (reduce) {
    targets.forEach((el) => el.classList.add('is-in'))
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-in')
        io.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  )
  targets.forEach((el) => io.observe(el))
  window.addEventListener('load', () =>
    setTimeout(() => {
      targets.forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in')
      })
    }, 2500)
  )
})()

// ---- the desk: the photograph breathes under the pile ----
;(function () {
  const bg = document.querySelector('.deck-bg')
  if (!bg || reduce) return
  let phase = 0
  const loop = () => {
    phase = (phase + 0.0004) % (Math.PI * 2)
    bg.style.opacity = (0.8 + Math.sin(phase) * 0.12).toFixed(3)
    requestAnimationFrame(loop)
  }
  loop()
})()

// ---- the ink: the clip of the hand writing fades in once, then rests ----
;(function () {
  const clip = document.querySelector('.deck-video')
  if (!clip || reduce) return
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-in')
        io.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -20% 0px', threshold: 0.2 }
  )
  io.observe(clip)
})()