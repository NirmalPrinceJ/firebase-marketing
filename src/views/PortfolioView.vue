<template>
  <!-- 1. HERO -->
  <PageHero
    tag="Portfolio & Proof"
    title="How Teams Use IntegrateWise"
    description="Real use cases, real incidents, real architecture. See how IntegrateWise works across Customer Success, RevOps, BizOps, and CIO/CTO teams."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Portfolio & Proof' }]"
  >
    <template #actions>
      <router-link :to="{ name: 'request-demo' }" class="btn btn--primary">Book Demo</router-link>
    </template>
  </PageHero>

  <!-- 2. USE CASES -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Use Cases</span>
        <h2>Built for real operating environments</h2>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal" v-for="(uc, i) in useCases" :key="uc.title" :class="i > 0 ? `reveal-d${i % 3}` : ''">
          <h3>{{ uc.title }}</h3>
          <p>{{ uc.body }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. EXAMPLE INCIDENTS -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Example Incidents</span>
        <h2>Domain-real AI incidents, not abstract prompts</h2>
      </div>
      <div class="card-grid card-grid--3">
        <IncidentCard class="reveal" v-bind="incidents[0]" />
        <IncidentCard class="reveal reveal-d1" v-bind="incidents[1]" />
        <IncidentCard class="reveal reveal-d2" v-bind="incidents[2]" />
      </div>
    </div>
  </section>

  <!-- 4. ARCHITECTURE SNAPSHOT -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Architecture</span>
        <h2>One Spine. Two Wedges. Governed AI.</h2>
        <p>IntegrateWise connects your systems through a governed connector layer, normalizes everything into the Adaptive Spine, and surfaces incidents with evidence. Nothing executes without human approval.</p>
      </div>
      <div class="flow-steps reveal">
        <div class="flow-step" v-for="(step, i) in flowSteps" :key="step.label">
          <div class="flow-step__number">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="flow-step__label">{{ step.label }}</div>
          <p class="flow-step__desc">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. BEFORE / AFTER -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Before &amp; After</span>
        <h2>What changes when you connect</h2>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal" style="border-top:3px solid var(--error);">
          <h3>Before</h3>
          <p>6 tabs open every morning. 45 minutes to build context. Risks discovered when customers escalate. AI answers from fragments. No audit trail. Manual reporting.</p>
        </div>
        <div class="card reveal reveal-d1" style="border-top:3px solid var(--success);">
          <h3>After</h3>
          <p>One screen. 5 minutes to full situational awareness. Risks surfaced before escalation. AI reasons with full cross-system context. Every decision logged. Reports generated from live data.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. SYSTEM FLOWS -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">System Flows</span>
        <h2>How data moves through IntegrateWise</h2>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal" v-for="(flow, i) in systemFlows" :key="flow.title" :class="i > 0 ? `reveal-d${i}` : ''">
          <h3>{{ flow.title }}</h3>
          <p>{{ flow.body }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. CTA -->
  <CtaSection title="See the proof on your own data.">
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Book Demo</router-link>
    <router-link :to="{ name: 'home' }" class="btn btn--ghost btn--lg">Explore Full Platform →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHero from '../components/PageHero.vue'
import CtaSection from '../components/CtaSection.vue'
import IncidentCard from '../components/IncidentCard.vue'
import { useReveal } from '../composables/useReveal.js'
import { useSeo } from '../composables/useSeo.js'

useReveal()

onMounted(() => {
  useSeo({
    title: 'Portfolio & Proof — How Teams Use IntegrateWise',
    description: 'Real use cases, real incidents, real architecture. See how IntegrateWise works across Customer Success, RevOps, BizOps, and CIO/CTO teams.'
  })
})

const useCases = [
  {
    title: 'Customer Success',
    body: 'CSMs and TAMs use IntegrateWise to detect churn risk, protect renewals, and manage account health across Salesforce, Anypoint, Zendesk, email, and calendar. Health scores are computed from real signals — not stale CRM fields.'
  },
  {
    title: 'RevOps',
    body: 'Revenue operations teams use IntegrateWise to track pipeline health, forecast accuracy, and deal progression across CRM, billing, and engagement data. Stalled deals and forecast gaps surface as incidents with evidence.'
  },
  {
    title: 'Business Ops',
    body: 'Founders and operators use IntegrateWise to track initiatives, KPIs, pipeline, burn rate, and cross-department execution from one governed workspace. The BizOps spine connects HubSpot, Stripe, Slack, Jira, and more.'
  },
  {
    title: 'CIO/CTO',
    body: 'Technology leaders use IntegrateWise to monitor integration health, API error rates, data quality, and system stability. When a Stripe→accounting sync degrades, the CIO sees it as an incident with downstream impact analysis.'
  }
]

const incidents = [
  {
    badge: 'Account Success',
    title: 'Payment Failure Detected',
    signals: [
      'Stripe invoice failed — card expired',
      'Support escalation opened by billing team',
      'Renewal due in 31 days',
      'Executive engagement dropped'
    ],
    insight: 'Billing friction + support pressure + approaching renewal = elevated churn risk.',
    suggestion: 'Proactive account outreach, confirm billing resolution, review renewal risk with account owner.'
  },
  {
    badge: 'RevOps',
    title: 'Pipeline Stall Detected',
    signals: [
      'Pipeline coverage below 2.5x target',
      '3 stage-3 deals stalled 14+ days',
      'Rep activity down 30% WoW',
      'Forecast confidence weakened'
    ],
    insight: 'Mid-funnel stall suggests likely revenue shortfall.',
    suggestion: 'Escalate stalled deals, launch pipeline recovery sprint, identify capacity gaps.'
  },
  {
    badge: 'CIO/CTO',
    title: 'Integration Health Degrading',
    signals: [
      'MuleSoft API errors up 340% in 24h',
      'Salesforce sync latency exceeding SLA',
      '3 downstream systems showing stale data',
      'Recent deployment correlates with shift'
    ],
    insight: 'Integration instability affecting operational reliability.',
    suggestion: 'Review deployment changes, isolate failure, notify impacted teams, prioritize containment.'
  }
]

const flowSteps = [
  { label: 'Connect', desc: 'Link your systems through governed connectors.' },
  { label: 'Build Spine', desc: 'Normalize entities, relationships, and signals.' },
  { label: 'Surface Incidents', desc: 'AI detects patterns and packages evidence.' },
  { label: 'Approve or Deny', desc: 'Humans review and control every action.' }
]

const systemFlows = [
  {
    title: 'Structured Data (Truth)',
    body: 'CRM records, billing transactions, support tickets, usage metrics → Loader → Normalizer → Spine → Entity 360'
  },
  {
    title: 'Unstructured Content (Context)',
    body: 'Email threads, documents, Slack messages, meeting notes → Context Store + Spine linking'
  },
  {
    title: 'AI Sessions (Knowledge)',
    body: 'AI chats and MCP interactions → Knowledge UI only. Never writes to Spine. Read-only access for grounding.'
  }
]
</script>

<style scoped>
.flow-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-6);
  margin-top: var(--sp-8);
}
.flow-step {
  text-align: center;
  position: relative;
}
.flow-step:not(:last-child)::after {
  content: '→';
  position: absolute;
  right: calc(var(--sp-6) * -0.5 - 0.5ch);
  top: var(--sp-4);
  color: var(--text-faint);
  font-size: var(--text-lg);
  transform: translateX(50%);
}
.flow-step__number {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--primary);
  font-weight: 700;
  margin-bottom: var(--sp-2);
}
.flow-step__label {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--sp-2);
}
.flow-step__desc {
  font-size: var(--text-sm);
  color: var(--text-muted);
  line-height: 1.6;
}
@media (max-width: 768px) {
  .flow-steps {
    grid-template-columns: 1fr;
    gap: var(--sp-4);
  }
  .flow-step:not(:last-child)::after {
    content: '↓';
    position: static;
    display: block;
    margin-top: var(--sp-2);
  }
}
</style>
