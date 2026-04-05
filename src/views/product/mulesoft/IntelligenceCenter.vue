<template>
  <PageHero
    tag="Intelligence Center"
    title="Portfolio Health and ARR at Risk — One Place"
    description="Risk heatmaps, ARR at risk, overloaded CSMs, and renewal forecasting for CS leaders managing the full MuleSoft book of business."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'MuleSoft', to: { name: 'mulesoft' } }, { label: 'Intelligence Center' }]"
  />

  <!-- ── FEATURES ─────────────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">What You See</span>
        <h2>The full picture your spreadsheet can't give you</h2>
        <p>The Intelligence Center aggregates signals across every account in your portfolio — so you manage the book, not individual fires.</p>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal" style="border-top:2px solid var(--error);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--error);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Risk Heatmap</div>
          <h3>See risk before it becomes churn</h3>
          <p>Every account plotted by health score, renewal proximity, and ARR. Red zones show where to focus this week. Trends show where risk is accelerating.</p>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--warning);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--warning);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">ARR at Risk</div>
          <h3>Know the dollar impact of every risk</h3>
          <p>Total ARR at risk, broken down by risk category: technical (API health), support (ticket velocity), relationship (exec engagement), and billing (payment failures).</p>
        </div>
        <div class="card reveal reveal-d2" style="border-top:2px solid var(--primary);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">CSM Load Balancing</div>
          <h3>Spot overloaded CSMs before burnout</h3>
          <p>Account count, total ARR, open incidents, and renewal density per CSM. Identify who's overloaded and rebalance before accounts slip through the cracks.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── ADDITIONAL CAPABILITIES ──────────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Also Included</span>
        <h2>Portfolio intelligence, not just dashboards</h2>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal">
          <h3>Renewal Forecasting</h3>
          <p>Predicted renewal outcomes based on health trajectory, engagement trends, and historical patterns. Know which renewals are at risk 90 days out.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Trend Analysis</h3>
          <p>Portfolio-level health trends over 30, 60, and 90 days. See whether your book is improving or degrading — and which segments are driving the change.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── PRICING ──────────────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container container--narrow">
      <div class="reveal" style="text-align:center;padding:clamp(var(--sp-8),4vw,var(--sp-12)) var(--sp-8);background:var(--surface-0);border:1px solid var(--border-glass);border-radius:var(--r-2xl);">
        <span class="label-tag">Pricing</span>
        <div style="font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-0.03em;color:var(--text-primary);margin-top:var(--sp-4);">$149</div>
        <p style="color:var(--text-muted);font-size:var(--text-sm);margin-top:var(--sp-2);">per user / month</p>
        <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-top:var(--sp-4);max-width:400px;margin-inline:auto;">Includes risk heatmaps, ARR at risk tracking, CSM load balancing, renewal forecasting, and portfolio trend analysis.</p>
      </div>
    </div>
  </section>

  <CtaSection
    title="See your portfolio risk in real time."
    description="Book a demo and we'll show you the Intelligence Center running on MuleSoft account data — risk heatmaps, ARR at risk, and CSM load balancing."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'mulesoft' }" class="btn btn--ghost btn--lg">← Back to MuleSoft Suite</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHero from '../../../components/PageHero.vue'
import CtaSection from '../../../components/CtaSection.vue'
import { useReveal } from '../../../composables/useReveal.js'

useReveal()

onMounted(() => {
  document.title = 'Intelligence Center — Portfolio Health and ARR at Risk | IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'The Intelligence Center gives CS leaders risk heatmaps, ARR at risk tracking, CSM load balancing, and renewal forecasting across the full MuleSoft account portfolio.')
})
</script>
