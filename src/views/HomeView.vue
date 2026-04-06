<template>
  <!-- 1. HERO -->
  <section class="hero">
    <HeroCanvas />
    <div class="container container--wide">
      <div class="hero__inner">
        <h1 class="hero__headline">
          <span class="gradient-text">Built for MuleSoft Account Success.</span><br>
          Extended to run your entire business.
        </h1>
        <p class="hero__sub">See risks, gaps, and opportunities across your systems — before they impact revenue.</p>
        <p style="max-width:600px;font-size:var(--text-sm);color:var(--text-faint);line-height:1.7;margin-bottom:var(--sp-10);">IntegrateWise connects Salesforce, MuleSoft, support, email, calendar, and operations into one governed intelligence layer. Every signal is backed by evidence. Every action stays under your control.</p>
        <div class="hero__actions">
          <router-link :to="{ name: 'mulesoft' }" class="btn btn--primary btn--lg">See MuleSoft Account Success</router-link>
          <router-link :to="{ name: 'bizops' }" class="btn btn--ghost btn--lg">See Business Ops Command Center</router-link>
          <router-link :to="{ name: 'request-demo' }" class="btn btn--outline btn--lg">Book a Demo</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. PROOF BAR -->
  <section class="section--sm section--surface">
    <div class="container container--wide">
      <p class="trust-strip__headline">One platform. Real operating clarity.</p>
      <div class="trust-strip">
        <span v-for="t in trustItems" :key="t" class="trust-strip__item">{{ t }}</span>
      </div>
    </div>
  </section>

  <!-- 3. PROBLEM -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Why IntegrateWise Exists</span>
        <h2>Your systems know everything. They just don't think together.</h2>
      </div>
      <div class="card-grid card-grid--2">
        <ul class="feature-list reveal">
          <li>Salesforce knows the account</li>
          <li>MuleSoft knows the integration estate</li>
          <li>Support knows escalations</li>
          <li>Billing knows risk</li>
          <li>Email and calendar know real conversations</li>
          <li>But no system connects the full picture.</li>
        </ul>
        <div style="display:flex;flex-direction:column;gap:var(--sp-3);">
          <div v-for="(r, i) in problemCards" :key="r.title" class="card reveal" :class="i > 0 ? `reveal-d${i}` : ''" style="padding:var(--sp-4);pointer-events:none;">
            <h3 style="font-size:var(--text-base);margin-bottom:var(--sp-1);">{{ r.title }}</h3>
            <p>{{ r.desc }}</p>
          </div>
        </div>
      </div>
      <div class="reveal" style="background:var(--surface-1);border:1px solid var(--border-glass);border-radius:var(--r-xl);padding:var(--sp-6);border-left:3px solid var(--primary);margin-top:var(--sp-10);max-width:700px;margin-inline:auto;">
        <p style="font-size:var(--text-base);color:var(--text-secondary);line-height:1.7;margin:0;">IntegrateWise connects your systems, builds a shared source of truth, and turns signals into clear, reviewable actions.</p>
      </div>
    </div>
  </section>

  <!-- 4. TWO WEDGES -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Two Entry Points. One Platform.</span>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal" style="border-left:3px solid var(--primary);">
          <h3>MuleSoft Account Success</h3>
          <p style="margin-bottom:var(--sp-4);">For CSMs, account teams, and post-sales leaders</p>
          <p style="font-weight:600;color:var(--text-secondary);margin-bottom:var(--sp-3);">What you get:</p>
          <ul class="feature-list">
            <li>Detect churn and renewal risk early</li>
            <li>Connect CRM, support, usage, billing, and calendar</li>
            <li>Build account intelligence from real signals</li>
            <li>Surface incidents with evidence and next steps</li>
          </ul>
          <p style="color:var(--primary);font-weight:700;margin-top:var(--sp-5);margin-bottom:var(--sp-5);font-size:var(--text-sm);">Catch risk earlier. Act with confidence. Protect revenue.</p>
          <router-link :to="{ name: 'mulesoft' }" class="btn btn--outline btn--sm">See MuleSoft Account Success</router-link>
        </div>
        <div class="card reveal reveal-d1" style="border-left:3px solid var(--warning);">
          <h3>Business Ops Command Center</h3>
          <p style="margin-bottom:var(--sp-4);">For founders, CEOs, COOs, and operators</p>
          <p style="font-weight:600;color:var(--text-secondary);margin-bottom:var(--sp-3);">What you get:</p>
          <ul class="feature-list">
            <li>Track operational health across departments</li>
            <li>Surface cross-functional risks early</li>
            <li>Align initiatives, KPIs, and execution</li>
            <li>Keep AI recommendations visible and controlled</li>
          </ul>
          <p style="color:var(--primary);font-weight:700;margin-top:var(--sp-5);margin-bottom:var(--sp-5);font-size:var(--text-sm);">Run the business from signals — not scattered reports.</p>
          <router-link :to="{ name: 'bizops' }" class="btn btn--outline btn--sm">See Business Ops Command Center</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. HOW IT WORKS -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">How It Works</span>
      </div>
      <div class="card-grid card-grid--4">
        <div v-for="(s, i) in steps" :key="s.num" class="card reveal" :class="i > 0 ? `reveal-d${i}` : ''">
          <div style="font-family:var(--font-mono);font-size:var(--text-sm);color:var(--primary);font-weight:700;margin-bottom:var(--sp-3);">{{ s.num }}</div>
          <h3>{{ s.name }}</h3>
          <p>{{ s.desc }}</p>
          <p style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--success);margin-top:var(--sp-3);">Outcome: {{ s.outcome }}</p>
        </div>
      </div>
      <div class="text-center" style="margin-top:var(--sp-8);"><router-link :to="{ name: 'how-it-works' }" class="btn btn--outline">See Full How It Works →</router-link></div>
    </div>
  </section>

  <!-- 6. WHAT YOU GET -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">What You Actually Get</span>
      </div>
      <div class="card-grid card-grid--3">
        <div v-for="(c, i) in capabilities" :key="c.title" class="card reveal" :class="i > 0 ? `reveal-d${i % 3}` : ''">
          <h3>{{ c.title }}</h3>
          <p>{{ c.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. AI INCIDENTS -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">What You Actually See</span>
        <h2>This is what shows up.</h2>
        <p>Every insight comes with evidence. Every action requires approval.</p>
      </div>
      <div class="card-grid card-grid--3">
        <IncidentCard class="reveal" v-bind="incidents[0]" />
        <IncidentCard class="reveal reveal-d1" v-bind="incidents[1]" />
        <IncidentCard class="reveal reveal-d2" v-bind="incidents[2]" />
      </div>
      <div class="text-center" style="margin-top:var(--sp-8);"><router-link :to="{ name: 'how-it-works' }" class="btn btn--outline">See How AI Incidents Work →</router-link></div>
    </div>
  </section>

  <!-- 8. INTEGRATIONS -->
  <section class="section--sm section--surface">
    <div class="container">
      <div class="section-header reveal" style="margin-bottom:var(--sp-6);">
        <h2 style="font-size:var(--text-2xl);">Works With Your Existing Stack</h2>
      </div>
      <div class="trust-strip reveal" style="justify-content:center;gap:var(--sp-6);flex-wrap:wrap;">
        <span v-for="s in integrations" :key="s" class="trust-strip__item">{{ s }}</span>
      </div>
      <p class="reveal" style="text-align:center;font-size:var(--text-sm);color:var(--text-faint);margin-top:var(--sp-4);">You don't replace your tools. You make them work together.</p>
    </div>
  </section>

  <!-- 9. WHY CHOOSE -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Why Teams Choose IntegrateWise</span>
      </div>
      <div class="card-grid card-grid--2">
        <div v-for="(w, i) in whyCards" :key="w.title" class="card reveal" :class="i > 0 ? `reveal-d${i % 2}` : ''">
          <h3>{{ w.title }}</h3>
          <p>{{ w.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 10. FINAL CTA -->
  <CtaSection title="See Your Business as One System" description="Stop chasing updates across tools. Start operating from real signals.">
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Book a Demo</router-link>
    <router-link :to="{ name: 'how-it-works' }" class="btn btn--ghost btn--lg">See How It Works →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import HeroCanvas from '../components/HeroCanvas.vue'
import CtaSection from '../components/CtaSection.vue'
import IncidentCard from '../components/IncidentCard.vue'
import { useReveal } from '../composables/useReveal.js'

useReveal()

onMounted(() => {
  document.title = 'IntegrateWise — Built for MuleSoft Account Success. Extended to Run Your Business.'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'IntegrateWise connects Salesforce, MuleSoft, support, email, calendar, and operations into one governed intelligence layer. Evidence-backed AI. Human approval before action.')
})

const trustItems = ['Evidence-backed AI', 'Human approval before action', 'Cross-system intelligence', 'Adaptive Spine', 'Full audit trail']

const problemCards = [
  { title: 'Fragmented truth', desc: 'Every team works from partial context' },
  { title: 'AI that guesses', desc: 'Without connected systems, every answer is a confident guess' },
  { title: 'No governed action', desc: 'Teams need proof, review, and control' }
]

const steps = [
  { num: '01', name: 'Connect', desc: 'Link your systems through governed connectors.', outcome: 'No more chasing.' },
  { num: '02', name: 'Build Spine', desc: 'Normalize entities, relationships, and signals.', outcome: 'One shared truth.' },
  { num: '03', name: 'Surface Incidents', desc: 'Detect risks, gaps, and opportunities automatically.', outcome: 'See what matters early.' },
  { num: '04', name: 'Approve or Deny', desc: 'Every action requires human review.', outcome: 'Full control.' }
]

const capabilities = [
  { title: 'Adaptive Spine', desc: 'A governed intelligence model connecting structured data, context, and relationships across systems.' },
  { title: 'Cross-System Signals', desc: 'Health, risk, and execution patterns surfaced from multiple tools — not one isolated dashboard.' },
  { title: 'AI Incidents', desc: 'High-signal moments packaged with clear signals, explanation, impact, and suggested action.' },
  { title: 'Evidence Chains', desc: 'Every recommendation links back to underlying signals, records, and contextual proof.' },
  { title: 'HITL Governance', desc: 'AI proposes. Humans approve, edit, reject, and control what happens next.' },
  { title: 'Auditability', desc: 'Decisions, rationale, evidence, approvals, and actions stay visible and traceable.' }
]

const incidents = [
  {
    badge: 'Account Success',
    title: 'Account Risk Detected',
    signals: ['Failed invoice', 'Support escalation', 'Renewal in 30 days', 'Executive engagement dropped'],
    insight: 'Elevated churn risk from combined commercial and support pressure.',
    suggestion: 'Proactively engage, resolve billing, reassess renewal strategy.'
  },
  {
    badge: 'RevOps',
    title: 'Revenue Pipeline at Risk',
    signals: ['Pipeline coverage below target', 'Deals stalled', 'Rep activity declining'],
    insight: 'Forecast shortfall likely without intervention.',
    suggestion: 'Escalate deals, run pipeline recovery sprint, rebalance priorities.'
  },
  {
    badge: 'CIO/CTO',
    title: 'Integration Health Degrading',
    signals: ['API errors increasing', 'Sync delays across systems', 'Recent deployment impact'],
    insight: 'System instability affecting operations and reporting.',
    suggestion: 'Isolate failure, notify teams, contain impact.'
  }
]

const integrations = ['Salesforce', 'MuleSoft', 'Gmail', 'Google Calendar', 'Zendesk', 'Stripe', 'Slack', 'Jira']

const whyCards = [
  { title: 'Unified truth', desc: 'One connected view across customer, commercial, and operations' },
  { title: 'Early visibility', desc: 'Catch risks and gaps before they become problems' },
  { title: 'Governed AI', desc: 'No blind automation — every decision is controlled' },
  { title: 'Practical execution', desc: 'Move from insight to action without losing accountability' }
]
</script>

<style scoped>
.trust-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--sp-6);
  flex-wrap: wrap;
}
.trust-strip__item {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: var(--sp-2);
}
.trust-strip__item::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
  opacity: 0.6;
}
.trust-strip__headline {
  text-align: center;
  font-size: var(--text-xs);
  color: var(--text-faint);
  margin-bottom: var(--sp-4);
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
</style>
