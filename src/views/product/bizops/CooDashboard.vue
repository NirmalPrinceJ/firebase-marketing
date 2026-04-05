<template>
  <PageHero
    tag="COO Dashboard"
    title="COO Dashboard"
    description="Cross-department initiatives, workflows, KPIs, and ops risks — $149/user/month."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Business Ops', to: { name: 'bizops' } }, { label: 'COO Dashboard' }]"
  />

  <!-- ── INITIATIVE LIST ─────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Initiatives</span>
        <h2>Cross-Department Initiative Tracker</h2>
        <p>Every strategic initiative — onboarding improvements, process automation, cost reduction — tracked with live milestone status, owner accountability, and cross-system evidence of progress or drift.</p>
      </div>
      <div class="card-grid card-grid--3" style="margin-top:var(--sp-10);">
        <div class="card reveal" style="border-top:2px solid var(--success);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--success);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">On Track</div>
          <h3>Milestone Status</h3>
          <p>Each initiative shows real-time milestone completion pulled from project tools — green for on track, amber for slipping, red for blocked.</p>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--warning);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--warning);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Ownership</div>
          <h3>Accountable Owners</h3>
          <p>Every initiative has a named owner with escalation paths. When milestones slip, the COO sees who's responsible and what's blocking them.</p>
        </div>
        <div class="card reveal reveal-d2" style="border-top:2px solid var(--error);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--error);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Dependencies</div>
          <h3>Cross-Team Dependencies</h3>
          <p>Initiatives that span engineering, support, and ops show dependency maps — so you see which team is the bottleneck before the weekly standup.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── KPI / SLA VIEWS ─────────────────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Operational Metrics</span>
        <h2>KPIs &amp; SLA Tracking</h2>
        <p>Operational KPIs pulled from every department — onboarding cycle time, support SLAs, process throughput, and cost-per-transaction. All live, all from the spine.</p>
      </div>
      <div class="card-grid card-grid--2" style="margin-top:var(--sp-10);">
        <div class="card reveal" style="border-left:3px solid var(--primary);padding-left:calc(var(--sp-6) - 3px);">
          <h3>KPI Dashboard</h3>
          <p>Department-level KPIs with trend lines, targets, and variance alerts. When a KPI drifts from target, the Signal Engine explains why with cross-system evidence.</p>
        </div>
        <div class="card reveal reveal-d1" style="border-left:3px solid var(--blue);padding-left:calc(var(--sp-6) - 3px);">
          <h3>SLA Compliance</h3>
          <p>Support response times, onboarding SLAs, vendor delivery windows, and internal process commitments — tracked against targets with breach alerts.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── OPS INCIDENTS ───────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Ops Incidents</span>
        <h2>Operational Risk Signals</h2>
        <p>When initiatives drift, KPIs miss targets, or SLAs breach — the COO Dashboard surfaces it as an actionable incident with full evidence.</p>
      </div>
    </div>
  </section>

  <!-- ── INCIDENT 4 — DRIFTING INITIATIVE ────────────────────── -->
  <section class="section">
    <div class="container" style="max-width:680px;">
      <div class="section-header reveal">
        <span class="label-tag">Incident Example</span>
        <h2>Initiative drift, caught early</h2>
        <p>A cross-department onboarding initiative is slipping — the COO sees the evidence, the impact, and the suggested escalation in one card.</p>
      </div>
      <IncidentCard
        class="reveal"
        badge="BizOps"
        title="Cross-Department Initiative Drifting"
        :signals="[
          'Project: Onboarding time reduction milestone slipped twice',
          'KPI: onboarding cycle time flat at 28 days, target 21',
          'Support: new-tickets-per-new-logo trending up 30%'
        ]"
        insight="Onboarding initiative At Risk — benefits not realized, support load increasing."
        suggestion="Escalate to BizOps owner, add engineering capacity for onboarding flows, update Exec Ops Overview."
        style="margin-top:var(--sp-8);"
      />
    </div>
  </section>

  <CtaSection
    title="Ops clarity across every department."
    description="See how the COO Dashboard tracks initiatives, KPIs, SLAs, and operational risks from one unified spine."
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
    title: 'COO Dashboard — Cross-Department Initiatives, KPIs & Ops Risks',
    description: 'The COO Dashboard tracks cross-department initiatives, workflows, KPIs, SLAs, and operational risks from one unified BizOps spine. $149/user/month.'
  })
})
</script>
