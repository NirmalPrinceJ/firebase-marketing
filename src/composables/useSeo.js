export function useSeo({ title, description }) {
  if (typeof document === 'undefined') return
  document.title = title + ' — IntegrateWise'
  let meta = document.querySelector('meta[name="description"]')
  if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
  meta.content = description
}
