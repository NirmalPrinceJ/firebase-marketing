<template>
  <PageHero
    tag="CSM Accounts Hub"
    title="Today's Accounts, Tasks, Risks, and Renewals — One Screen"
    description="The daily command center for every MuleSoft CSM. Stop switching between Salesforce, Anypoint, Zendesk, and spreadsheets. Start every morning knowing exactly which accounts need attention."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'MuleSoft', to: { name: 'mulesoft' } }, { label: 'CSM Accounts Hub' }]"
  />

  <!-- ── BEFORE / AFTER ───────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Before &amp; After</span>
        <h2>From 6 tabs to 1 screen</h2>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal" style="border-top:2px solid var(--error);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--error);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Before IntegrateWise</div>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:var(--sp-3);">
            <li style="font-size:var(--text-sm);color:var(--text-muted);">→ Open Salesforce for contract &amp; renewal dates</li>
            <li style="font-size:var(--text-sm);color:var(--text-muted);">→ Open Anypoint for API health &amp; error rates</li>
            <li style="font-size:var(--text-sm);color:var(--text-muted);">→ Open Zendesk for open tickets &amp; escalations</li>
            <li style="font-size:var(--text-sm);color:var(--text-muted);">→ Open Gmail for last exec contact</li>
            <li style="font-size:var(--text-sm);color:var(--text-muted);">→ Open Calendar for upcoming QBRs</li>
            <li style="font-size:var(--text-sm);color:var(--text-muted);">→ Open spreadsheet for renewal tracker</li>
          </ul>
          <p style="margin-top:var(--sp-4);font-size:var(--text-sm);color:var(--text-faint);">~45 minutes every morning just to know where you stand.</p>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--success);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--success);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">After IntegrateWise</div>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:var(--sp-3);">
            <li style="font-size:var(--text-sm);color:var(--text-muted);">→ One screen: all accounts, sorted by risk</li>
            <li style="font-size:var(--text-sm);color:var(--text-muted);">→ Health scores updated in real time</li>
            <li style="font-size:var(--text-sm);color:var(--text-muted);">→ Tasks auto-generated from cross-tool signals</li>
            <li style="font-size:var(--text-sm);color:var(--text-muted);">→ Renewals with days remaining &amp; risk flags</li>
            <li style="font-size:var(--text-sm);color:var(--text-muted);">→ Incidents surfaced before you go looking</li>
            <li style="font-size:var(--text-sm);color:var(--text-muted);">→ One click to drill into any account 360</li>
          </ul>
          <p style="margin-top:var(--sp-4);font-size:var(--text-sm);color:var(--text-faint);">~5 minutes. Full situational awareness.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── WHAT LIVES IN THE HUB ────────────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">What's Inside</span>
        <h2>Everything a CSM needs, every morning</h2>
        <p>The Hub pulls from Salesforce, Anypoint, Zendesk, email, and calendar — and presents it as one prioritized view.</p>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <h3>Tasks &amp; Actions</h3>
          <p>AI-generated tasks based on cross-tool signals. Follow-ups, escalations, and renewal prep — prioritized by urgency and account value.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Risk Alerts</h3>
          <p>Real-time alerts when health drops, tickets spike, exec engagement fades, or API errors surge. Know before the customer tells you.</p>
        </div>
        <div class="card reveal reveal-d2">
          <h3>Incident Cards</h3>
          <p>Multi-signal incidents that combine billing, support, product, and relationship data into one actionable card with AI-suggested next steps.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── SAMPLE INCIDENT ──────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Live Example</span>
        <h2>An incident only cross-tool intelligence can catch</h2>
      </div>
      <div style="max-width:640px;margin-inline:auto;">
        <IncidentCard v-bind="incident" class="reveal" />
      </div>
    </div>
  </section>

  <!-- ── PRICING ──────────────────────────────────────────────── -->
  <section class="section">
    <div class="container container--narrow">
      <div class="reveal" style="text-align:center;padding:clamp(var(--sp-8),4vw,var(--sp-12)) var(--sp-8);background:var(--surface-0);border:1px solid var(--border-glass);border-radius:var(--r-2xl);">
        <span class="label-tag">Pricing</span>
        <div style="font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-0.03em;color:var(--text-primary);margin-top:var(--sp-4);">$79</div>
        <p style="color:var(--text-muted);font-size:var(--text-sm);margin-top:var(--sp-2);">per user / month</p>
        <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-top:var(--sp-4);max-width:400px;margin-inline:auto;">Includes the full CSM Accounts Hub with all integrations, AI-generated tasks, risk alerts, and incident cards.</p>
      </div>
    </div>
  </section>

  <CtaSection
    title="Start your CSM Hub trial."
    description="See your MuleSoft accounts unified in one screen — tasks, risks, renewals, and incidents, all in one place."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Start Free Trial</router-link>
    <router-link :to="{ name: 'request-demo' }" class="btn btn--ghost btn--lg">Book a Demo →</router-link>
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
  title: 'Payment Failure + Upset Customer',
  signals: [
    'Stripe: payment failed twice for current invoice',
    'Support: email referencing ticket #4721, still no resolution',
    'Project: related bug ticket In Progress, no update in 9 days',
  ],
  insight: 'Customer is upset, billing issue unresolved, product fix delayed. Risk moved from Green to Amber on churn.',
  suggestion: 'Ask Product/Architect for workaround, proactively schedule call with customer to align on options.',
}

onMounted(() => {
  document.title = 'CSM Accounts Hub — Daily Command Center for MuleSoft CSMs | IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'The CSM Accounts Hub gives every MuleSoft CSM one screen with today\'s accounts, tasks, risks, and renewals — pulling from Salesforce, Anypoint, Zendesk, email, and calendar.')
})
</script>
