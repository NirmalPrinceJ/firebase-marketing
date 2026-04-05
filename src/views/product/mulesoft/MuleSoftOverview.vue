<template>
  <PageHero
    tag="MuleSoft Account Success"
    title="Health, Renewals, and Risks in One View"
    description="IntegrateWise stitches Salesforce, Anypoint Platform, Zendesk, email, and calendar into a 16-table spine — so every CSM sees one living account, not six disconnected tools."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'MuleSoft Account Success' }]"
  />

  <!-- ── PAIN ─────────────────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">The Problem</span>
        <h2>Your MuleSoft Accounts Are Split Across 6 Tools</h2>
        <p>Salesforce has the contract. Anypoint has the API health. Zendesk has the tickets. Email has the relationship. Calendar has the QBR. Your spreadsheet has the renewal date. No single system knows the full story — so your CSMs spend half their day stitching context instead of protecting revenue.</p>
      </div>
    </div>
  </section>

  <!-- ── PRODUCT GRID ─────────────────────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">The Suite</span>
        <h2>Four products. One unified account view.</h2>
        <p>Each product solves a different layer of the MuleSoft CSM workflow — from daily triage to board-ready reporting.</p>
      </div>
      <div class="card-grid card-grid--2">
        <router-link :to="{ name: 'csm-hub' }" class="card card--link reveal">
          <h3>CSM Accounts Hub</h3>
          <p>Today's accounts, tasks, risks, and renewals in one screen. The daily command center for every CSM managing a MuleSoft book of business.</p>
          <span class="card__price">$79/user/month</span>
        </router-link>
        <router-link :to="{ name: 'csm-360' }" class="card card--link reveal reveal-d1">
          <h3>CSM Account 360</h3>
          <p>One MuleSoft account, all signals. Health score, API metrics, support tickets, exec engagement, and success plan — unified in a single view.</p>
          <span class="card__price">$79/user/month</span>
        </router-link>
        <router-link :to="{ name: 'intelligence-center' }" class="card card--link reveal">
          <h3>Intelligence Center</h3>
          <p>Portfolio health and ARR at risk in one place. Risk heatmaps, overloaded CSMs, and renewal forecasting for CS leaders managing the full book.</p>
          <span class="card__price">$149/user/month</span>
        </router-link>
        <router-link :to="{ name: 'strategic-success' }" class="card card--link reveal reveal-d1">
          <h3>Strategic Account Success</h3>
          <p>Board-ready NRR, GRR, and customer value reporting in 5 minutes. Executive packs, QBR decks, and strategic account reviews — generated, not assembled.</p>
          <span class="card__price">$249/user/month</span>
        </router-link>
      </div>
    </div>
  </section>

  <!-- ── INCIDENTS ────────────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Live Incidents</span>
        <h2>What IntegrateWise surfaces automatically</h2>
        <p>These are real incident patterns from MuleSoft account portfolios — detected by cross-referencing signals no single tool can see alone.</p>
      </div>
      <div class="card-grid card-grid--2">
        <IncidentCard v-bind="incident1" class="reveal" />
        <IncidentCard v-bind="incident2" class="reveal reveal-d1" />
      </div>
    </div>
  </section>

  <!-- ── PRICING STRIP ────────────────────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Pricing</span>
        <h2>Simple, per-user pricing</h2>
      </div>
      <div class="card-grid card-grid--4 reveal">
        <div class="card" style="text-align:center;">
          <h3>CSM Accounts Hub</h3>
          <div class="card__price-lg">$79</div>
          <p style="font-size:var(--text-sm);color:var(--text-muted);">per user / month</p>
        </div>
        <div class="card" style="text-align:center;">
          <h3>CSM Account 360</h3>
          <div class="card__price-lg">$79</div>
          <p style="font-size:var(--text-sm);color:var(--text-muted);">per user / month</p>
        </div>
        <div class="card" style="text-align:center;">
          <h3>Intelligence Center</h3>
          <div class="card__price-lg">$149</div>
          <p style="font-size:var(--text-sm);color:var(--text-muted);">per user / month</p>
        </div>
        <div class="card" style="text-align:center;">
          <h3>Strategic Success</h3>
          <div class="card__price-lg">$249</div>
          <p style="font-size:var(--text-sm);color:var(--text-muted);">per user / month</p>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="See MuleSoft Account Success live."
    description="Book a demo or start a free CSM Hub trial — and see how IntegrateWise unifies your MuleSoft accounts into one living view."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Start CSM Hub Trial</router-link>
    <router-link :to="{ name: 'request-demo' }" class="btn btn--ghost btn--lg">Book MuleSoft Demo →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHero from '../../../components/PageHero.vue'
import CtaSection from '../../../components/CtaSection.vue'
import IncidentCard from '../../../components/IncidentCard.vue'
import { useReveal } from '../../../composables/useReveal.js'

useReveal()

const incident1 = {
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

const incident2 = {
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
  document.title = 'MuleSoft Account Success — Health, Renewals, and Risks in One View | IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'IntegrateWise stitches Salesforce, Anypoint Platform, Zendesk, email, and calendar into a 16-table spine for MuleSoft CSMs — one living account view, not six disconnected tools.')
})
</script>
