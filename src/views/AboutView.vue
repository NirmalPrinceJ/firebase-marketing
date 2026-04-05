<template>
  <PageHero
    tag="About"
    title="About IntegrateWise"
    description="Built by a CSM who lived the problem. Tried everything. Built the platform that should have existed."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'About' }]"
  >
    <template #actions>
      <router-link :to="{ name: 'request-demo' }" class="btn btn--primary">Request a Demo</router-link>
    </template>
  </PageHero>

  <!-- Story -->
  <section class="section">
    <div class="container">
      <div style="max-width:760px;margin-inline:auto;">
        <div class="reveal">
          <span class="label-tag">The Origin</span>
          <h2 style="font-size:var(--text-2xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-5);margin-top:var(--sp-3);">A CSM Who Lived the Problem</h2>
          <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">
            Our founder spent years as a Customer Success Manager managing enterprise accounts across disconnected tools. Every morning started the same way: open Salesforce, check Zendesk, scan Slack, pull up Stripe, cross-reference usage data, and try to piece together what was actually happening with each account.
          </p>
          <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">
            He tried everything — Gainsight, Totango, ChurnZero, custom dashboards, Notion databases, spreadsheet trackers. Every tool solved one piece but missed the full picture. The signals that mattered most were always scattered across systems no single tool could see.
          </p>
        </div>

        <div class="reveal" style="background:var(--surface-1);border-left:3px solid var(--primary);border-radius:0 var(--r-xl) var(--r-xl) 0;padding:var(--sp-6) var(--sp-8);margin-block:var(--sp-8);">
          <p style="font-size:var(--text-xl);font-family:var(--font-display);font-weight:700;color:var(--text-primary);line-height:1.4;margin:0;letter-spacing:-0.02em;">
            "I saved an $8M account because I happened to be looking at four screens at once. That's not a process. That's luck. And I knew most CSMs would never be that lucky."
          </p>
        </div>

        <div class="reveal">
          <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">
            So he built IntegrateWise — the platform he wished existed. One governed spine that connects every system, correlates every signal, and surfaces incidents with evidence before they become crises. AI that thinks with full context. Humans that stay in control.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Two Wedges -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Two Wedges</span>
        <h2>One Platform. Two Entry Points.</h2>
        <p>IntegrateWise serves two distinct but connected markets — both powered by the same governed AI spine.</p>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal" style="border-left:3px solid var(--primary);">
          <span class="label-tag">Wedge 1</span>
          <h3>MuleSoft Account Success</h3>
          <p>For Customer Success teams managing enterprise accounts. 4 products that detect churn risk, surface renewal intelligence, and give CSMs the full account picture — with AI incidents backed by evidence.</p>
          <router-link :to="{ name: 'mulesoft' }" class="role-card__link" style="margin-top:var(--sp-4);display:inline-flex;">Explore Account Success →</router-link>
        </div>
        <div class="card reveal reveal-d1" style="border-left:3px solid var(--warning);">
          <span class="label-tag" style="color:var(--warning);background:rgba(251,191,36,0.08);border-color:rgba(251,191,36,0.25);">Wedge 2</span>
          <h3>Business Ops Command Center</h3>
          <p>For founders and operators who need full-stack business visibility. 4 dashboards covering revenue, operations, technology, and strategic metrics — all governed, all real-time.</p>
          <router-link :to="{ name: 'bizops' }" class="role-card__link" style="margin-top:var(--sp-4);display:inline-flex;">Explore Business Ops →</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Principles -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Our Principles</span>
        <h2>What We Believe About AI</h2>
        <p>Three principles that guide every product decision, every feature, and every line of code at IntegrateWise.</p>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <h3>Context Before Confidence</h3>
          <p>AI that acts confidently without full context isn't intelligent — it's dangerous. Every IntegrateWise recommendation is grounded in traceable, source-attributed data from your actual systems. No hallucinations. No guesses dressed as insights.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Governance, Not Speed</h3>
          <p>The best AI doesn't act fastest. It acts most responsibly. Human control isn't a bottleneck — it's the feature that makes AI trustworthy. Every action waits for explicit approval. Every decision is logged immutably.</p>
        </div>
        <div class="card reveal reveal-d2">
          <h3>Evidence Over Assertion</h3>
          <p>We don't trust AI assertions. We trust AI evidence chains. Every claim is backed by citations to specific records in specific systems. If AI can't show its work, it doesn't get to propose an action.</p>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="See IntegrateWise in action."
    description="Book a 30-minute demo. We'll show you the spine, the evidence layer, and real AI incidents — working on your data."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'how-it-works' }" class="btn btn--ghost btn--lg">How It Works →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHero from '../components/PageHero.vue'
import CtaSection from '../components/CtaSection.vue'
import { useReveal } from '../composables/useReveal.js'

useReveal()

onMounted(() => {
  document.title = 'About — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Built by a CSM who lived the problem. IntegrateWise connects every system, correlates every signal, and surfaces AI incidents with evidence — while keeping humans in control.')
})
</script>