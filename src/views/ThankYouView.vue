<template>
  <section class="section" style="padding-top:calc(var(--nav-height) + 5rem);padding-bottom:5rem;text-align:center;">
    <div class="container container--narrow">
      <div style="font-size:3rem;margin-bottom:var(--sp-6);">✓</div>
      <span class="label-tag" style="justify-content:center;">Demo Requested</span>
      <h1 style="font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-0.04em;margin-bottom:var(--sp-5);">You're on the list.</h1>
      <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.75;margin-bottom:var(--sp-8);max-width:500px;margin-inline:auto;">Demo request received. We'll be in touch within one business day to confirm your slot and share a few prep materials.</p>
      <div style="display:flex;gap:var(--sp-4);justify-content:center;flex-wrap:wrap;">
        <router-link :to="{ name: 'home' }" class="btn btn--ghost">Back to Home</router-link>
        <router-link :to="{ name: 'resources', params: { section: 'guides' } }" class="btn btn--outline">Read the Playbook While You Wait →</router-link>
      </div>
      <div style="margin-top:var(--sp-12);padding-top:var(--sp-8);border-top:1px solid var(--divider);">
        <p style="font-size:var(--text-sm);color:var(--text-faint);margin-bottom:var(--sp-4);">In the meantime, explore more about how IntegrateWise works:</p>
        <div style="display:flex;gap:var(--sp-4);justify-content:center;flex-wrap:wrap;">
          <router-link :to="{ name: 'how-it-works' }" class="btn btn--ghost btn--sm">How It Works</router-link>
          <router-link :to="{ name: 'product' }" class="btn btn--ghost btn--sm">Product Overview</router-link>
          <router-link :to="{ name: 'our-story' }" class="btn btn--ghost btn--sm">Our Story</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSeo } from '../composables/useSeo.js'

onMounted(() => useSeo({ title: 'Demo Requested', description: 'Your IntegrateWise demo request has been received. We will be in touch within one business day.' }))
</script>