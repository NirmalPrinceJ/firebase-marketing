<template>
  <section class="section" style="padding-top:120px;">
    <div class="container">
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'resources' }">Resources</router-link></li>
          <li>Blog</li>
        </ol>
      </nav>
      
      <div class="page-hero__content">
        <span class="label-tag">Blog</span>
        <h1>Insights on Governed AI and Knowledge Workspaces</h1>
        <p>Architecture deep-dives, customer stories, and practical thinking on building AI systems organizations can actually trust.</p>
      </div>

      <!-- Blog Grid -->
      <div class="card-grid card-grid--3" style="margin-top:var(--sp-12);">
        <article class="card reveal">
          <span class="label-tag">Risk & Trust</span>
          <h3>Why AI Without Evidence Is a Liability, Not an Asset</h3>
          <p style="font-size:var(--text-sm);color:var(--text-faint);margin-bottom:var(--sp-4);">Mar 2025 · 8 min read</p>
          <p>When an AI system acts confidently on faulty reasoning — without showing its work — the organization bears the consequence. We make the case that evidence-first AI architecture is not optional for enterprises.</p>
          <span class="role-card__link">Read article →</span>
        </article>
        <article class="card reveal reveal-d1">
          <span class="label-tag">Architecture</span>
          <h3>The Problem with Unified Dashboards (And How the Spine Fixes It)</h3>
          <p style="font-size:var(--text-sm);color:var(--text-faint);margin-bottom:var(--sp-4);">Feb 2025 · 6 min read</p>
          <p>Dashboards aggregate data but don't resolve it. The Adaptive Spine is architecturally different — here's why.</p>
          <span class="role-card__link">Read article →</span>
        </article>
        <article class="card reveal reveal-d2">
          <span class="label-tag">Implementation</span>
          <h3>HITL in Practice: What Good Governance Actually Looks Like</h3>
          <p style="font-size:var(--text-sm);color:var(--text-faint);margin-bottom:var(--sp-4);">Jan 2025 · 7 min read</p>
          <p>The HITL approval layer is the difference between AI that runs amok and AI that earns organizational trust. Here's how to implement it right.</p>
          <span class="role-card__link">Read article →</span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  document.title = 'Blog — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Insights on governed AI, knowledge workspaces, the Adaptive Spine, and practical thinking on building AI systems organizations can trust.')
})
</script>