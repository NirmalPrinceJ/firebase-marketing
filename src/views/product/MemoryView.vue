<template>
  <PageHero
    tag="Product"
    title="Memory & Re-ingestion"
    description="AI sessions, approved actions, and decisions become persistent organizational memory. The system gets smarter with every interaction — compounding intelligence over time."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Product', to: { name: 'product' } }, { label: 'Memory' }]"
  />

  <section class="section section--surface">
    <div class="container">
      <div class="grid-2" style="align-items:start;">
        <div>
          <span class="label-tag">How It Works</span>
          <h2 style="font-size:var(--text-2xl);">The Re-Ingestion Loop</h2>
          <p style="color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-4);">Every approved action, human decision, and AI session outcome is re-ingested into the Spine — making the system smarter with each interaction.</p>
          <ul class="feature-list">
            <li>Approved and rejected proposals stored with reasoning</li>
            <li>AI session summaries re-ingested into knowledge layer</li>
            <li>Outcome tracking and prediction accuracy measurement</li>
            <li>Org-level pattern learning (tenant isolated)</li>
            <li>Memory protected by BYOK encryption</li>
          </ul>
        </div>
        <div class="flow-steps">
          <div class="flow-step reveal">
            <div class="flow-step__num">1</div>
            <div class="flow-step__content"><h3>Signal</h3><p>Churn risk detected with 94% confidence</p></div>
          </div>
          <div class="flow-step reveal reveal-d1">
            <div class="flow-step__num">2</div>
            <div class="flow-step__content"><h3>Proposal</h3><p>AI assembles evidence and proposes action</p></div>
          </div>
          <div class="flow-step reveal reveal-d2">
            <div class="flow-step__num">3</div>
            <div class="flow-step__content"><h3>Decision</h3><p>Human reviews and approves</p></div>
          </div>
          <div class="flow-step reveal reveal-d3">
            <div class="flow-step__num">4</div>
            <div class="flow-step__content"><h3>Outcome</h3><p>Result observed and tracked</p></div>
          </div>
          <div class="flow-step reveal reveal-d4">
            <div class="flow-step__num">5</div>
            <div class="flow-step__content"><h3>Memory</h3><p>Full context re-ingested for future predictions</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="Intelligence that compounds."
    description="IntegrateWise gets more accurate the more you use it — every decision becomes organizational memory."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
  </CtaSection>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import CtaSection from '../../components/CtaSection.vue'
import { onMounted } from 'vue'
import { useReveal } from '../../composables/useReveal.js'

useReveal()
onMounted(() => {
  document.title = 'Memory & Re-ingestion — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Every approved action and AI session becomes persistent organizational memory. IntegrateWise gets smarter with every interaction — compounding intelligence over time.')
})
</script>