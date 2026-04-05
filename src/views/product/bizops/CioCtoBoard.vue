<template>
  <PageHero
    tag="CIO/CTO Dashboard"
    title="CIO/CTO Dashboard"
    description="Integration health, tech metrics, and system-wide data quality in one landscape — $99/user/month."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Business Ops', to: { name: 'bizops' } }, { label: 'CIO/CTO Dashboard' }]"
  />

  <!-- ── INTEGRATION HEALTH ──────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Integration Health</span>
        <h2>Every connector. One health view.</h2>
        <p>Real-time status of every integration — sync frequency, error rates, latency, and data freshness. Know which connectors are healthy, degraded, or failing before downstream teams notice.</p>
      </div>
      <div class="card-grid card-grid--3" style="margin-top:var(--sp-10);">
        <div class="card reveal" style="border-top:2px solid var(--success);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--success);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Healthy</div>
          <h3>Sync Status</h3>
          <p>Each connector shows last-sync time, record count, and throughput. Green means data is flowing. Amber means latency is rising. Red means sync has stalled.</p>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--warning);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--warning);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Error Rate</div>
          <h3>Error Trends</h3>
          <p>Error rate trends per connector with spike detection. When a connector's error rate crosses threshold, the Signal Engine correlates it with downstream impact.</p>
        </div>
        <div class="card reveal reveal-d2" style="border-top:2px solid var(--error);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--error);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Freshness</div>
          <h3>Data Freshness</h3>
          <p>How stale is each data source? Freshness scores per entity type — so you know if the CRM data is 5 minutes old or 5 hours old.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── ERROR TRENDS ────────────────────────────────────────── -->
  <section class="section">
    <div class="container container--narrow">
      <div class="section-header reveal">
        <span class="label-tag">Tech Metrics</span>
        <h2>Error Trends &amp; System Metrics</h2>
        <p>Aggregate error rates, API call volumes, rate-limit proximity, and webhook delivery success — the technical health metrics a CIO/CTO needs without digging through logs.</p>
      </div>
      <div class="card-grid card-grid--2" style="margin-top:var(--sp-10);">
        <div class="card reveal" style="border-left:3px solid var(--error);padding-left:calc(var(--sp-6) - 3px);">
          <h3>Error Rate Dashboard</h3>
          <p>Per-connector and aggregate error rates with 7-day, 30-day, and 90-day trend lines. Spike detection triggers alerts before error rates cascade.</p>
        </div>
        <div class="card reveal reveal-d1" style="border-left:3px solid var(--primary);padding-left:calc(var(--sp-6) - 3px);">
          <h3>API &amp; Rate Limits</h3>
          <p>API call volumes per connector, rate-limit headroom, and throttle events. Know when you're approaching limits before syncs start failing.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── DATA QUALITY ────────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Data Quality</span>
        <h2>Data Quality Scores</h2>
        <p>Reconciliation pass rates, duplicate detection, schema drift alerts, and field-level completeness — the data quality layer that keeps the spine trustworthy.</p>
      </div>
      <div class="card-grid card-grid--3" style="margin-top:var(--sp-10);">
        <div class="card reveal">
          <h3>Reconciliation</h3>
          <p>Cross-system reconciliation pass rates — how well do Stripe invoices match CRM deals match accounting entries? Failures surface as incidents.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Duplicate Detection</h3>
          <p>Entity deduplication scores and merge candidates. See how many duplicates exist across systems and track merge progress over time.</p>
        </div>
        <div class="card reveal reveal-d2">
          <h3>Schema Drift</h3>
          <p>When a connected system changes its API schema, the spine detects it and alerts before data starts arriving in unexpected formats.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── INCIDENT 5 — INTEGRATION DEGRADING ──────────────────── -->
  <section class="section">
    <div class="container" style="max-width:680px;">
      <div class="section-header reveal">
        <span class="label-tag">Incident Example</span>
        <h2>Integration degradation, caught early</h2>
        <p>A payment-to-ledger sync is degrading — the CIO/CTO sees the error trend, the downstream impact, and the suggested engineering action in one card.</p>
      </div>
      <IncidentCard
        class="reveal"
        badge="CIO/CTO"
        title="Integration Health Degrading"
        :signals="[
          'Integration: Stripe→accounting sync error rate up from 0.1% to 2.5%',
          'Data quality: reconciliation failures up 3x this week',
          'Support: internal ticket from Finance about misaligned invoices'
        ]"
        insight="Payment-to-ledger integration degrading; financial data quality at risk."
        suggestion="Flag integration At Risk, open engineering task with evidence, notify Finance."
        style="margin-top:var(--sp-8);"
      />
    </div>
  </section>

  <CtaSection
    title="Integration health. One landscape."
    description="See how the CIO/CTO Dashboard monitors integration health, error trends, and data quality from one unified spine."
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
    title: 'CIO/CTO Dashboard — Integration Health, Tech Metrics & Data Quality',
    description: 'The CIO/CTO Dashboard monitors integration health, error trends, data quality, and system metrics from one unified BizOps spine. $99/user/month.'
  })
})
</script>
