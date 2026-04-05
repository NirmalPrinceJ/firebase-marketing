<template>
  <PageHero
    tag="Business Ops Command Center"
    title="Initiatives, KPIs, and Risks on One Spine"
    description="A universal BizOps spine that normalizes projects, workflows, KPIs, pipeline, budgets, and risks into a single operating layer — so every leader sees the same truth, from founder to CIO."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Business Ops Command Center' }]"
  >
    <template #actions>
      <router-link :to="{ name: 'founder-ops' }" class="btn btn--primary btn--lg">Start Founder Ops Free</router-link>
      <router-link :to="{ name: 'request-demo' }" class="btn btn--ghost btn--lg">Book Leadership Demo</router-link>
    </template>
  </PageHero>

  <!-- ── ONE BUSINESS OPS SPINE ──────────────────────────────── -->
  <section class="section section--surface">
    <div class="container container--narrow">
      <div class="section-header reveal">
        <span class="label-tag">Shared Domain</span>
        <h2>One Business Ops Spine</h2>
        <p>Every dashboard in the Command Center reads from the same normalized spine. Projects, KPIs, pipeline stages, budgets, and risk registers share a single canonical schema — so the CEO's ARR number matches the COO's initiative cost and the CIO's integration health score. No reconciliation. No version conflicts. One truth.</p>
      </div>
    </div>
  </section>

  <!-- ── DOGFOODING ──────────────────────────────────────────── -->
  <section class="section">
    <div class="container container--narrow">
      <div class="reveal" style="text-align:center;padding:clamp(var(--sp-10),5vw,var(--sp-16)) var(--sp-8);background:var(--surface-0);border:1px solid var(--border-glass);border-radius:var(--r-2xl);position:relative;overflow:hidden;">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 50% 0%,rgba(165,108,255,0.10) 0%,transparent 70%);pointer-events:none;"></div>
        <span class="label-tag" style="position:relative;">Dogfooding</span>
        <h2 style="position:relative;margin-bottom:var(--sp-4);">IntegrateWise Runs on IntegrateWise</h2>
        <p style="font-size:clamp(1.1rem,2vw,1.35rem);color:var(--text-secondary);line-height:1.65;max-width:600px;margin-inline:auto;position:relative;">
          Our founder uses the BizOps workspace daily — HubSpot for pipeline, Stripe for revenue, Slack for team signals, GitHub for engineering velocity, and Google Analytics for traffic. Every feature ships because we feel the friction first.
        </p>
      </div>
    </div>
  </section>

  <!-- ── PRODUCT GRID ────────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Dashboards</span>
        <h2>Four views. One spine.</h2>
        <p>Each dashboard is purpose-built for a leadership role — but every metric traces back to the same canonical data.</p>
      </div>
      <div class="card-grid card-grid--2" style="margin-top:var(--sp-10);">
        <router-link :to="{ name: 'founder-ops' }" class="card card--link reveal" style="text-decoration:none;">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-3);">From $0 — Free Tier</div>
          <h3>Founder Ops</h3>
          <p>One cockpit for MRR, pipeline, clients, tasks, and signals. Built for founders who wear every hat.</p>
        </router-link>
        <router-link :to="{ name: 'ceo-dashboard' }" class="card card--link reveal reveal-d1" style="text-decoration:none;">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-3);">$99 / user / month</div>
          <h3>CEO Dashboard</h3>
          <p>Board-ready ARR, growth metrics, OKR tracking, and critical signals — everything a CEO needs in one view.</p>
        </router-link>
        <router-link :to="{ name: 'coo-dashboard' }" class="card card--link reveal" style="text-decoration:none;">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-3);">$149 / user / month</div>
          <h3>COO Dashboard</h3>
          <p>Cross-department initiatives, workflows, KPIs, SLAs, and ops risks — the operational command center.</p>
        </router-link>
        <router-link :to="{ name: 'cio-cto-dashboard' }" class="card card--link reveal reveal-d1" style="text-decoration:none;">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-3);">$99 / user / month</div>
          <h3>CIO / CTO Dashboard</h3>
          <p>Integration health, tech metrics, error trends, and system-wide data quality in one landscape.</p>
        </router-link>
      </div>
    </div>
  </section>

  <!-- ── INCIDENT EXAMPLES ───────────────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Live Incidents</span>
        <h2>Cross-functional signals, one spine</h2>
        <p>The same underlying data powers different incident views for RevOps, COO, and CIO/CTO — each framed for the role that needs to act.</p>
      </div>
      <div class="card-grid card-grid--3" style="margin-top:var(--sp-10);">
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
        />
        <IncidentCard
          class="reveal reveal-d1"
          badge="BizOps"
          title="Cross-Department Initiative Drifting"
          :signals="[
            'Project: Onboarding time reduction milestone slipped twice',
            'KPI: onboarding cycle time flat at 28 days, target 21',
            'Support: new-tickets-per-new-logo trending up 30%'
          ]"
          insight="Onboarding initiative At Risk — benefits not realized, support load increasing."
          suggestion="Escalate to BizOps owner, add engineering capacity for onboarding flows, update Exec Ops Overview."
        />
        <IncidentCard
          class="reveal reveal-d2"
          badge="CIO/CTO"
          title="Integration Health Degrading"
          :signals="[
            'Integration: Stripe→accounting sync error rate up from 0.1% to 2.5%',
            'Data quality: reconciliation failures up 3x this week',
            'Support: internal ticket from Finance about misaligned invoices'
          ]"
          insight="Payment-to-ledger integration degrading; financial data quality at risk."
          suggestion="Flag integration At Risk, open engineering task with evidence, notify Finance."
        />
      </div>
    </div>
  </section>

  <!-- ── PRICING STRIP ───────────────────────────────────────── -->
  <section class="section section--surface" style="padding-block:var(--sp-8);">
    <div class="container">
      <div class="stat-grid reveal" style="grid-template-columns:repeat(4,1fr);margin-block:0;">
        <div class="stat-card">
          <div class="stat-card__value gradient-text">Free</div>
          <div class="stat-card__label">Founder Ops — 3 connectors</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value gradient-text">$49</div>
          <div class="stat-card__label">Founder Ops / user / mo</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value gradient-text">$99</div>
          <div class="stat-card__label">CEO · CIO/CTO / user / mo</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value gradient-text">$149</div>
          <div class="stat-card__label">COO Dashboard / user / mo</div>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="Run your business on one spine."
    description="See how the Business Ops Command Center unifies initiatives, KPIs, and risks across every leadership role — live, on your data."
  >
    <router-link :to="{ name: 'founder-ops' }" class="btn btn--primary btn--lg">Start Founder Ops Free</router-link>
    <router-link :to="{ name: 'request-demo' }" class="btn btn--ghost btn--lg">Book Leadership Demo</router-link>
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
    title: 'Business Ops Command Center — Initiatives, KPIs, and Risks on One Spine',
    description: 'A universal BizOps spine normalizing projects, workflows, KPIs, pipeline, budgets, and risks into a single operating layer for every leadership role.'
  })
})
</script>
