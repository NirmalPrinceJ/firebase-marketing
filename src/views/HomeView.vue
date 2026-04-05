<template>
  <!-- 1 · HERO — Two Wedges -->
  <section class="hero">
    <HeroCanvas />
    <div class="container container--wide">
      <div class="hero__inner">
        <div class="hero__eyebrow">
          <span class="label-tag">Knowledge Workspace · Powered by AI</span>
        </div>
        <h1 class="hero__headline">
          <span class="gradient-text">Built for MuleSoft Account Success.</span><br>
          Extended to every business operation.
        </h1>
        <p class="hero__sub">
          IntegrateWise connects Salesforce, MuleSoft, support, email, calendar, and ops tools
          into one governed intelligence layer. Health, risks, renewals, and operational gaps
          surface automatically — nothing runs without your approval.
        </p>
        <div class="hero__actions">
          <router-link :to="{ name: 'mulesoft' }" class="btn btn--primary btn--lg">See MuleSoft Account Success</router-link>
          <router-link :to="{ name: 'bizops' }" class="btn btn--ghost btn--lg">See Business Ops Command Center</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- 2 · WHY INTEGRATEWISE EXISTS -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Why IntegrateWise</span>
        <h2>Your SaaS tools know everything. None of them talk to each other.</h2>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal" v-for="(pain, i) in painCards" :key="i" :class="i > 0 ? `reveal-d${i}` : ''">
          <div class="card__icon" v-html="pain.icon"></div>
          <h3>{{ pain.title }}</h3>
          <p>{{ pain.desc }}</p>
        </div>
      </div>
      <div class="quote-block reveal" style="margin-top:var(--sp-10);">
        <p>"AI without context is just expensive noise."</p>
      </div>
    </div>
  </section>

  <!-- 3 · MULESOFT ACCOUNT SUCCESS PREVIEW -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">MuleSoft Account Success</span>
        <h2>Health, renewals, and risks in one view</h2>
      </div>
      <ul class="feature-list reveal" style="max-width:640px;margin-inline:auto;">
        <li>Account health scored from real signals — not stale Salesforce fields</li>
        <li>16-table account spine connecting CRM, support, usage, billing, email, and calendar</li>
        <li>Governed AI incidents with full evidence chains — nothing fires without approval</li>
      </ul>
      <div class="text-center" style="margin-top:var(--sp-8);">
        <router-link :to="{ name: 'mulesoft' }" class="btn btn--outline">View MuleSoft Products →</router-link>
      </div>
    </div>
  </section>

  <!-- 4 · BUSINESS OPS COMMAND CENTER PREVIEW -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Business Ops Command Center</span>
        <h2>Initiatives, KPIs, and risks on one spine</h2>
      </div>
      <ul class="feature-list reveal" style="max-width:640px;margin-inline:auto;">
        <li>Universal BizOps spine — one governed layer across every department</li>
        <li>Initiatives, KPIs, and pipeline tracked with real-time cross-system signals</li>
        <li>Approval-first execution — AI proposes, you decide, nothing runs autonomously</li>
      </ul>
      <div class="text-center" style="margin-top:var(--sp-8);">
        <router-link :to="{ name: 'bizops' }" class="btn btn--outline">View Business Ops Products →</router-link>
      </div>
    </div>
  </section>

  <!-- 5 · CONCRETE AI INCIDENTS -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">AI Incidents</span>
        <h2>Domain-real AI. Not abstract prompts.</h2>
      </div>
      <div class="card-grid card-grid--3">
        <IncidentCard class="reveal"
          badge="Account Success"
          title="Payment Failure Detected"
          :signals="[
            'Stripe invoice #1042 failed — card expired',
            'Zendesk P1 opened by billing team 2 hrs ago',
            'Account renewal in 31 days'
          ]"
          insight="Payment failure + open P1 + upcoming renewal creates compounding churn risk. Historical pattern: 68% of accounts with this combination downgrade."
          suggestion="Send proactive exec outreach acknowledging the billing issue, confirm resolution ETA, and offer renewal incentive to de-risk."
        />
        <IncidentCard class="reveal reveal-d1"
          badge="RevOps"
          title="Revenue Pipeline at Risk"
          :signals="[
            'Q3 pipeline coverage dropped below 2.5×',
            'Three Stage-3 deals stalled 14+ days',
            'Rep activity volume down 30% WoW'
          ]"
          insight="Pipeline coverage below threshold with stalled mid-stage deals signals a revenue miss. Rep activity decline suggests capacity or prioritization issue."
          suggestion="Flag stalled deals for manager review, trigger pipeline generation sprint, and schedule 1:1 coaching for underperforming reps."
        />
        <IncidentCard class="reveal reveal-d2"
          badge="CIO/CTO"
          title="Integration Health Degrading"
          :signals="[
            'MuleSoft API error rate up 340% (24h)',
            'Salesforce sync latency exceeding SLA',
            'Three downstream systems reporting stale data'
          ]"
          insight="API error spike correlates with last deployment. Downstream data staleness will impact reporting accuracy within 6 hours if unresolved."
          suggestion="Roll back last deployment, notify affected teams, and schedule root-cause review with platform engineering."
        />
      </div>
    </div>
  </section>

  <!-- 6 · HOW IT WORKS MINI STRIP -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">How It Works</span>
        <h2>Connect → Build Spine → Surface Incidents → Approve or Deny</h2>
      </div>
      <div class="card-grid card-grid--4">
        <div class="card reveal" v-for="(step, i) in hiwSteps" :key="step.num" :class="i > 0 ? `reveal-d${i}` : ''">
          <div class="card__icon"><span style="font-family:var(--font-mono);font-weight:700;font-size:var(--text-sm);color:var(--primary);">{{ step.num }}</span></div>
          <h3>{{ step.name }}</h3>
          <p>{{ step.desc }}</p>
        </div>
      </div>
      <div class="text-center" style="margin-top:var(--sp-8);">
        <router-link :to="{ name: 'how-it-works' }" class="btn btn--outline">See full How It Works →</router-link>
      </div>
    </div>
  </section>

  <!-- 7 · PLG STRIP -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Start Free</span>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal">
          <h3>Founder Ops — Free Forever</h3>
          <p>One governed workspace for solo founders and small teams. Connect up to 3 tools, build your spine, and let AI surface what matters.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>3 connectors included</li>
          </ul>
          <div style="margin-top:var(--sp-6);">
            <router-link :to="{ name: 'founder-ops' }" class="btn btn--primary">Start Founder Ops Free</router-link>
          </div>
        </div>
        <div class="card reveal reveal-d1">
          <h3>CSM Accounts Hub — 14-Day Trial</h3>
          <p>Full account intelligence for customer success managers. Health scores, renewal signals, and governed AI incidents across your book of business.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>5 accounts included</li>
          </ul>
          <div style="margin-top:var(--sp-6);">
            <router-link :to="{ name: 'csm-hub' }" class="btn btn--primary">Start CSM Trial</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 8 · CTA -->
  <CtaSection
    title="See IntegrateWise in action."
    description="Book a 30-minute demo. We'll show you the Spine, the evidence layer, and governed AI incidents working on real data — from your own connected systems."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'how-it-works' }" class="btn btn--ghost btn--lg">How It Works →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import HeroCanvas from '../components/HeroCanvas.vue'
import CtaSection from '../components/CtaSection.vue'
import IncidentCard from '../components/IncidentCard.vue'
import { useReveal } from '../composables/useReveal.js'
import { useSeo } from '../composables/useSeo.js'

useReveal()

onMounted(() => {
  useSeo({
    title: 'IntegrateWise — Governed AI for MuleSoft Account Success & Business Ops',
    description: 'IntegrateWise connects Salesforce, MuleSoft, support, email, calendar, and ops tools into one governed intelligence layer. Health, risks, renewals, and operational gaps surface automatically.'
  })
  document.title = 'IntegrateWise — Built for MuleSoft Account Success. Extended to Every Business Operation.'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'IntegrateWise connects Salesforce, MuleSoft, support, email, calendar, and ops tools into one governed intelligence layer. Nothing runs without your approval.')
})

const painCards = [
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>`,
    title: 'Fragmented Tools',
    desc: 'Salesforce, Zendesk, Stripe, Jira, Slack, email — every team has a different version of the truth. No single person can see the full picture.',
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    title: 'Scattered AI Conversations',
    desc: 'Every ChatGPT thread starts from zero. Insights vanish after each session. There is no memory, no continuity, no compounding intelligence.',
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    title: 'Shallow AI Without Context',
    desc: 'AI tools answer questions from fragments. Without cross-system context, every suggestion is a guess dressed up as confidence.',
  },
]

const hiwSteps = [
  { num: '01', name: 'Connect', desc: 'Link Salesforce, MuleSoft, support, email, calendar, and ops tools via native connectors.' },
  { num: '02', name: 'Build Spine', desc: 'The Adaptive Spine normalizes entities and relationships into one governed source of truth.' },
  { num: '03', name: 'Surface Incidents', desc: 'AI detects cross-system patterns and generates incidents with full evidence chains.' },
  { num: '04', name: 'Approve or Deny', desc: 'Every AI proposal is a reviewable card. You approve, edit, or reject. Nothing executes without you.' },
]
</script>

<style scoped>
.quote-block {
  background: var(--surface-1);
  border: 1px solid var(--border-glass);
  border-radius: var(--r-xl);
  padding: var(--sp-8);
  text-align: center;
  border-left: 3px solid var(--primary);
}
.quote-block p {
  font-size: var(--text-xl);
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.5;
  margin: 0;
}
</style>
