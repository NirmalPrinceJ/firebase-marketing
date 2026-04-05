<template>
  <PageHero
    tag="CEO Dashboard"
    title="CEO Dashboard"
    description="Board-ready ARR, growth, OKRs, and signals — $99/user/month."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Business Ops', to: { name: 'bizops' } }, { label: 'CEO Dashboard' }]"
  />

  <!-- ── ARR + GROWTH ────────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Revenue</span>
        <h2>ARR &amp; Growth at a Glance</h2>
        <p>Live ARR, net-new MRR, expansion, contraction, and churn — pulled from billing and CRM, reconciled automatically. Board-deck numbers that are always current.</p>
      </div>
      <div class="card-grid card-grid--3" style="margin-top:var(--sp-10);">
        <div class="card reveal" style="border-top:2px solid var(--success);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--success);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">ARR</div>
          <h3>Annual Recurring Revenue</h3>
          <p>Real-time ARR from Stripe and CRM, broken down by segment, cohort, and plan — with month-over-month and quarter-over-quarter trends.</p>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--primary);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Growth</div>
          <h3>Growth Metrics</h3>
          <p>Net revenue retention, logo retention, expansion rate, and quick ratio — the metrics investors and board members ask for first.</p>
        </div>
        <div class="card reveal reveal-d2" style="border-top:2px solid var(--blue);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--blue);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Forecast</div>
          <h3>Pipeline Forecast</h3>
          <p>Weighted pipeline, commit vs. best-case, and attainment tracking — so you know where the quarter stands before the forecast call.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── OKRs ────────────────────────────────────────────────── -->
  <section class="section">
    <div class="container container--narrow">
      <div class="section-header reveal">
        <span class="label-tag">Objectives</span>
        <h2>OKR Tracking</h2>
        <p>Company-level OKRs with real-time progress pulled from connected systems — not manually updated spreadsheets. See which objectives are on track, at risk, or blocked.</p>
      </div>
      <div class="flow-steps">
        <div class="flow-step reveal">
          <div class="flow-step__num">1</div>
          <div class="flow-step__content">
            <h3>Objective Health</h3>
            <p>Each objective shows a live health score based on key-result progress, signal trends, and initiative status — green, amber, or red, updated continuously.</p>
          </div>
        </div>
        <div class="flow-step reveal reveal-d1">
          <div class="flow-step__num">2</div>
          <div class="flow-step__content">
            <h3>Key Result Progress</h3>
            <p>Key results pull actuals from the spine — revenue from Stripe, pipeline from CRM, NPS from support, adoption from product analytics. No manual entry.</p>
          </div>
        </div>
        <div class="flow-step reveal reveal-d2">
          <div class="flow-step__num">3</div>
          <div class="flow-step__content">
            <h3>Blockers &amp; Signals</h3>
            <p>When a key result stalls, the Signal Engine surfaces the cross-system evidence — so you know why it's stuck, not just that it's stuck.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── CRITICAL SIGNALS ────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Signals</span>
        <h2>Critical Signals for the CEO</h2>
        <p>Not every signal needs CEO attention. The CEO Dashboard filters for board-level risks — pipeline stalls, churn spikes, OKR blockers, and strategic account alerts.</p>
      </div>
    </div>
  </section>

  <!-- ── INCIDENT ────────────────────────────────────────────── -->
  <section class="section">
    <div class="container" style="max-width:680px;">
      <div class="section-header reveal">
        <span class="label-tag">Incident Example</span>
        <h2>Pipeline stall at CEO level</h2>
        <p>When pipeline risk crosses a board-level threshold, the CEO sees it as a single incident card with full evidence and a suggested action.</p>
      </div>
      <IncidentCard
        class="reveal"
        badge="RevOps"
        title="Revenue Pipeline at Risk"
        :signals="[
          'CRM: 65% of next-quarter pipeline stuck in single stage >21 days',
          'Forecast: commit flat, attainment 18% below target',
          'Marketing: no active campaigns mapped to that segment'
        ]"
        insight="Mid-funnel stalled for ICP Segment A; high risk of missing Q3 target."
        suggestion="Create focused save-the-quarter sequence, route stalled deals to CS, schedule forecast review."
        style="margin-top:var(--sp-8);"
      />
    </div>
  </section>

  <CtaSection
    title="Board-ready numbers. Always current."
    description="See how the CEO Dashboard gives you ARR, growth, OKRs, and critical signals — live, from one spine."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'bizops' }" class="btn btn--ghost btn--lg">← Back to Command Center</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHero from '../../../components/PageHero.vue'
import CtaSection from '../../../components/CtaSection.vue'
import IncidentCard from '../../../components/IncidentCard.vue'
import { useReveal } from '../../../composables/useReveal.js'
import { useSeo } from '../../../composables/useSeo.js'

useReveal()

onMounted(() => {
  useSeo({
    title: 'CEO Dashboard — Board-Ready ARR, Growth, OKRs & Signals',
    description: 'The CEO Dashboard delivers board-ready ARR, growth metrics, OKR tracking, and critical signals from one unified BizOps spine. $99/user/month.'
  })
})
</script>
