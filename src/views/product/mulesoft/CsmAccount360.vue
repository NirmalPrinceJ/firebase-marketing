<template>
  <PageHero
    tag="CSM Account 360"
    title="One MuleSoft Account, All Signals"
    description="Health score, API metrics from Anypoint, support tickets from Zendesk, exec engagement from email and calendar, and the success plan — unified in a single living view."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'MuleSoft', to: { name: 'mulesoft' } }, { label: 'CSM Account 360' }]"
  />

  <!-- ── LAYOUT OVERVIEW ──────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">The 360 View</span>
        <h2>Everything about one account. Nothing missing.</h2>
        <p>The Account 360 pulls from every connected system and presents a complete, real-time picture of a single MuleSoft customer.</p>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
          <h3>Health Score</h3>
          <p>Composite health calculated from API uptime, ticket velocity, exec engagement, payment status, and usage trends. Updated in real time, not quarterly.</p>
        </div>
        <div class="card reveal reveal-d1">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <h3>API Metrics</h3>
          <p>Anypoint Platform data: error rates, throughput, latency, and integration health. See which APIs are degrading before the customer notices.</p>
        </div>
        <div class="card reveal reveal-d2">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <h3>Support Tickets</h3>
          <p>Zendesk tickets linked to the account: open count, severity distribution, average resolution time, and escalation history.</p>
        </div>
        <div class="card reveal">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3>Exec Engagement</h3>
          <p>Last contact with exec sponsor, days since QBR, meeting frequency trend, and email sentiment — all from Gmail and Calendar data.</p>
        </div>
        <div class="card reveal reveal-d1">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <h3>Success Plan</h3>
          <p>Milestones, objectives, and progress — tracked against the account's goals. AI flags when plans drift or milestones slip.</p>
        </div>
        <div class="card reveal reveal-d2">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <h3>Renewal Timeline</h3>
          <p>Contract value, renewal date, days remaining, and risk assessment — with historical context from previous renewal cycles.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── INCIDENT EXAMPLE ─────────────────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Incident Detection</span>
        <h2>Cross-tool signals no single system can see</h2>
        <p>The 360 view doesn't just display data — it detects patterns across systems and surfaces incidents that require action.</p>
      </div>
      <div style="max-width:640px;margin-inline:auto;">
        <IncidentCard v-bind="incident" class="reveal" />
      </div>
    </div>
  </section>

  <CtaSection
    title="See a live Account 360."
    description="Book a demo and we'll show you a real MuleSoft account — health, APIs, tickets, engagement, and plan — all in one view."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'mulesoft' }" class="btn btn--ghost btn--lg">← Back to MuleSoft Suite</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHero from '../../../components/PageHero.vue'
import CtaSection from '../../../components/CtaSection.vue'
import IncidentCard from '../../../components/IncidentCard.vue'
import { useReveal } from '../../../composables/useReveal.js'

useReveal()

const incident = {
  badge: 'Account Success',
  title: 'Classic MuleSoft-Style Risk',
  signals: [
    'Anypoint: API error rate up 2.3x on key integration',
    'Support: 3 unresolved critical tickets in 10 days',
    'Email/Calendar: exec sponsor quiet 45 days, no QBR scheduled',
  ],
  insight: 'Health dropped 8 points in 30 days for $2.4M account. Renewal in 47 days. Combined technical, support, and relationship risk.',
  suggestion: 'Escalate to TAM, schedule executive check-in, review migration plan with architect.',
}

onMounted(() => {
  document.title = 'CSM Account 360 — One MuleSoft Account, All Signals | IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'The CSM Account 360 unifies health score, Anypoint API metrics, Zendesk tickets, exec engagement, and success plan into one living view for every MuleSoft account.')
})
</script>
