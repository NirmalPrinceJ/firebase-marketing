<template>
  <PageHero
    tag="Founder Ops"
    title="Founder Ops"
    description="One cockpit for MRR, pipeline, clients, tasks, and signals — $49/user/month, with a free tier of 3 connectors forever."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Business Ops', to: { name: 'bizops' } }, { label: 'Founder Ops' }]"
  >
    <template #actions>
      <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Start Founder Ops Free</router-link>
    </template>
  </PageHero>

  <!-- ── DOGFOODING NARRATIVE ────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container container--narrow">
      <div class="reveal" style="text-align:center;padding:clamp(var(--sp-10),5vw,var(--sp-16)) var(--sp-8);background:var(--surface-0);border:1px solid var(--border-glass);border-radius:var(--r-2xl);position:relative;overflow:hidden;">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 50% 0%,rgba(165,108,255,0.10) 0%,transparent 70%);pointer-events:none;"></div>
        <span class="label-tag" style="position:relative;">Built by a Founder, for Founders</span>
        <p style="font-size:clamp(1.1rem,2vw,1.35rem);color:var(--text-secondary);line-height:1.65;max-width:600px;margin-inline:auto;position:relative;">
          IntegrateWise's founder runs this exact workspace every morning — HubSpot pipeline, Stripe MRR, Slack threads, GitHub PRs, and Google Analytics traffic all on one screen. Every pain point you feel, we felt first.
        </p>
      </div>
    </div>
  </section>

  <!-- ── YOUR MORNING IN FOUNDER OPS ─────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Daily Cockpit</span>
        <h2>Your Morning in Founder Ops</h2>
        <p>Open one tab. See everything that matters. Act before your coffee gets cold.</p>
      </div>
      <div class="card-grid card-grid--3" style="margin-top:var(--sp-10);">
        <div class="card reveal" style="border-top:2px solid var(--success);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--success);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Revenue</div>
          <h3>MRR &amp; Cash</h3>
          <p>Live MRR from Stripe, net-new vs. expansion vs. churn breakdown, and cash runway — no spreadsheet required.</p>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--primary);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Sales</div>
          <h3>Pipeline</h3>
          <p>Deal stages from HubSpot, weighted forecast, and stalled-deal alerts — see which opportunities need a nudge today.</p>
        </div>
        <div class="card reveal reveal-d2" style="border-top:2px solid var(--blue);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--blue);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Clients</div>
          <h3>Client Health</h3>
          <p>Active accounts, support ticket trends, NPS signals, and usage patterns — know who's happy and who's drifting.</p>
        </div>
        <div class="card reveal" style="border-top:2px solid var(--warning);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--warning);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Execution</div>
          <h3>Tasks &amp; Milestones</h3>
          <p>Open tasks, blocked items, and upcoming milestones pulled from your project tools — prioritized by business impact.</p>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--error);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--error);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Signals</div>
          <h3>Cross-System Signals</h3>
          <p>AI-correlated alerts from every connected tool — churn risk, pipeline stalls, billing anomalies, and engagement drops surfaced before they escalate.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── INCIDENT EXAMPLE ────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container" style="max-width:680px;">
      <div class="section-header reveal">
        <span class="label-tag">Incident Example</span>
        <h2>A founder's morning signal</h2>
        <p>This is what a real incident looks like in Founder Ops — cross-system evidence, AI insight, and a suggested action you can approve in one click.</p>
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

  <!-- ── FREE TIER + PRICING ─────────────────────────────────── -->
  <section class="section">
    <div class="container container--narrow">
      <div class="section-header reveal">
        <span class="label-tag">Pricing</span>
        <h2>Start free. Scale when ready.</h2>
      </div>
      <div class="card-grid card-grid--2" style="margin-top:var(--sp-10);">
        <div class="card reveal" style="border-top:2px solid var(--success);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--success);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Free Forever</div>
          <h3>3 Connectors</h3>
          <p>Connect up to 3 tools — HubSpot, Stripe, Slack, or any supported connector. Full Founder Ops cockpit, signals, and incident cards included. No credit card. No time limit.</p>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--primary);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">$49 / user / month</div>
          <h3>Unlimited Connectors</h3>
          <p>Unlock every connector, advanced signal rules, custom KPI dashboards, and priority support. Everything a scaling founder needs.</p>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="Your business, one screen."
    description="Start Founder Ops free with 3 connectors — see MRR, pipeline, clients, tasks, and signals in one cockpit."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Start Founder Ops Free</router-link>
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
    title: 'Founder Ops — One Cockpit for MRR, Pipeline, Clients, Tasks & Signals',
    description: 'Founder Ops gives you MRR, pipeline, client health, tasks, and cross-system signals in one cockpit. Free tier with 3 connectors forever, $49/user/month for unlimited.'
  })
})
</script>
