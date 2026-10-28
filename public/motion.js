// Pikiran yang Dicatet — motion layer.
// Signature move: the pad of paper. As the page scrolls, each card slides in
// from the right edge and settles, like a new sheet being placed on the stack.
// Everything else is a quiet entrance. Nothing stays hidden if the script fails.

(() => {
  const cards = Array.from(document.querySelectorAll('.deck-card'))
  if (!cards.length) return
  const reduce =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduce) {
    cards.forEach((c) => c.classList.add('is-in'))
    return
  }

  // first card is on the first screen: show it before the observer fires
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
  window.addEventListener('load', () =>
    setTimeout(() => {
      cards.forEach((c) => {
        const r = c.getBoundingClientRect()
        if (r.top < innerHeight && r.bottom > 0) c.classList.add('is-in')
      })
    }, 2500)
  )
})()

// Entrance for everything else on the page.
(() => {
  const targets = document.querySelectorAll('[data-reveal]:not(.deck-card)')
  if (!targets.length) return
  if (!('IntersectionObserver' in window)) {
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

// One moving picture: the hand-written clip breathes slowly behind the sheets.
;(function () {
  const bg = document.querySelector('.deck-bg')
  if (!bg) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  let phase = 0
  const loop = () => {
    phase = (phase + 0.0004) % (Math.PI * 2)
    bg.style.opacity = (0.8 + Math.sin(phase) * 0.12).toFixed(3)
    requestAnimationFrame(loop)
  }
  loop()
})()