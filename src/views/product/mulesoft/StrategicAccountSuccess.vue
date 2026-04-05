<template>
  <PageHero
    tag="Strategic Account Success"
    title="Board-Ready NRR, GRR, and Value — in 5 Minutes"
    description="Executive packs, QBR decks, and strategic account reviews — generated from live data, not assembled from screenshots. Give your leadership team the numbers they need without the manual work."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'MuleSoft', to: { name: 'mulesoft' } }, { label: 'Strategic Account Success' }]"
  />

  <!-- ── BOARD / EXEC PACK ────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Executive Reporting</span>
        <h2>The board pack your CS team actually wants to build</h2>
        <p>Strategic Account Success pulls live data from every connected system and generates board-ready reports — NRR, GRR, health trends, risk summaries, and customer value delivered.</p>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal" style="border-top:2px solid var(--primary);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">NRR &amp; GRR</div>
          <h3>Net &amp; Gross Revenue Retention</h3>
          <p>Live NRR and GRR calculated from actual contract data, expansion revenue, and churn — not spreadsheet estimates. Drill down by segment, CSM, or account tier.</p>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--blue);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--blue);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">QBR Decks</div>
          <h3>Quarterly Business Reviews</h3>
          <p>Auto-generated QBR decks with health trends, value delivered, risk summary, and recommended actions. Review and customize in minutes, not days.</p>
        </div>
        <div class="card reveal reveal-d2" style="border-top:2px solid var(--success);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--success);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Value Delivered</div>
          <h3>Customer Value Reports</h3>
          <p>Quantified value delivered per account: integrations running, API calls processed, incidents resolved, and time saved. Show customers the ROI of their MuleSoft investment.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── STRATEGIC REVIEWS ────────────────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Strategic Reviews</span>
        <h2>Account reviews that drive action, not just slides</h2>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal">
          <h3>Executive Sponsor Mapping</h3>
          <p>Track exec engagement across every strategic account. See who's engaged, who's gone quiet, and where relationship risk is building — with suggested re-engagement actions.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Expansion &amp; Upsell Signals</h3>
          <p>AI identifies accounts with expansion potential based on usage patterns, API growth, and engagement trends. Know which accounts are ready for the upsell conversation.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── PRICING ──────────────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container container--narrow">
      <div class="reveal" style="text-align:center;padding:clamp(var(--sp-8),4vw,var(--sp-12)) var(--sp-8);background:var(--surface-0);border:1px solid var(--border-glass);border-radius:var(--r-2xl);">
        <span class="label-tag">Pricing</span>
        <div style="font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-0.03em;color:var(--text-primary);margin-top:var(--sp-4);">$249</div>
        <p style="color:var(--text-muted);font-size:var(--text-sm);margin-top:var(--sp-2);">per user / month</p>
        <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-top:var(--sp-4);max-width:400px;margin-inline:auto;">Includes board packs, QBR generation, NRR/GRR reporting, value delivered tracking, exec sponsor mapping, and expansion signals.</p>
      </div>
    </div>
  </section>

  <CtaSection
    title="Generate your first board pack in 5 minutes."
    description="Book a demo and we'll show you Strategic Account Success running on MuleSoft data — NRR, GRR, QBR decks, and value reports, all generated from live signals."
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
  document.title = 'Strategic Account Success — Board-Ready NRR, GRR, and Value | IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Strategic Account Success generates board-ready NRR, GRR, QBR decks, and customer value reports from live MuleSoft account data — in 5 minutes, not 5 days.')
})
</script>
