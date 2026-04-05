<template>
  <canvas ref="canvasRef" class="hero__canvas" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)

const PURPLE = '#A56CFF'
const INDIGO = '#7E6FAE'
const N = 40
const D = 150
let nodes = []
let W, H, raf
let ro

function resize(canvas) {
  W = canvas.width = canvas.offsetWidth
  H = canvas.height = canvas.offsetHeight
}

function makeNodes() {
  nodes = Array.from({ length: N }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 2.5 + 1.5,
    c: Math.random() > 0.6 ? INDIGO : PURPLE,
  }))
}

function draw(canvas, ctx) {
  ctx.clearRect(0, 0, W, H)
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j]
      const dx = a.x - b.x, dy = a.y - b.y
      const d = Math.sqrt(dx * dx + dy * dy)
      if (d < D) {
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = `rgba(165,108,255,${(1 - d / D) * 0.12})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }
  }
  nodes.forEach((n) => {
    ctx.beginPath()
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
    ctx.fillStyle = n.c + '44'
    ctx.fill()
    ctx.beginPath()
    ctx.arc(n.x, n.y, n.r * 0.5, 0, Math.PI * 2)
    ctx.fillStyle = n.c
    ctx.fill()
    n.x += n.vx
    n.y += n.vy
    if (n.x < -20 || n.x > W + 20) n.vx *= -1
    if (n.y < -20 || n.y > H + 20) n.vy *= -1
  })
  raf = requestAnimationFrame(() => draw(canvas, ctx))
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  ro = new ResizeObserver(() => {
    resize(canvas)
    cancelAnimationFrame(raf)
    makeNodes()
    draw(canvas, ctx)
  })
  ro.observe(canvas.parentElement || canvas)
  resize(canvas)
  makeNodes()
  draw(canvas, ctx)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  if (ro) ro.disconnect()
})
</script>
