<template>
  <section class="section" style="padding-top:calc(var(--nav-height) + 5rem);padding-bottom:5rem;text-align:center;">
    <div class="container container--narrow">
      <div style="font-size:4rem;margin-bottom:var(--sp-6);">404</div>
      <h1 style="font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-0.04em;margin-bottom:var(--sp-5);">Page Not Found</h1>
      <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.75;margin-bottom:var(--sp-8);max-width:500px;margin-inline:auto;">The page you're looking for doesn't exist or has been moved.</p>
      <div style="display:flex;gap:var(--sp-4);justify-content:center;flex-wrap:wrap;">
        <router-link :to="{ name: 'home' }" class="btn btn--primary">Back to Home</router-link>
        <router-link :to="{ name: 'product' }" class="btn btn--ghost">Product</router-link>
        <router-link :to="{ name: 'how-it-works' }" class="btn btn--ghost">How It Works</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSeo } from '../composables/useSeo.js'

onMounted(() => useSeo({ title: '404 — Page Not Found', description: 'The page you are looking for does not exist.' }))
</script>