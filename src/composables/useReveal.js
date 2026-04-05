import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer = null

  function initReveal() {
    const els = document.querySelectorAll('.reveal:not(.visible)')
    if (!els.length) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    // Slight delay so DOM is fully rendered
    setTimeout(initReveal, 50)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { initReveal }
}
