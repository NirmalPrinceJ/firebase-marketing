import { ref, watch, onMounted } from 'vue'

const theme = ref('dark')

export function useTheme() {
  function initTheme() {
    const stored = localStorage.getItem('iw-theme')
    const sys = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    theme.value = stored || sys || 'dark'
    applyTheme()
  }

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem('iw-theme', theme.value)
    applyTheme()
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  onMounted(() => {
    initTheme()
  })

  watch(theme, () => {
    applyTheme()
  })

  return { theme, toggleTheme, initTheme }
}
