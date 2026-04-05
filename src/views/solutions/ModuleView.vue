<template>
  <section class="section" style="padding-top:120px;">
    <div class="container">
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'solutions' }">Solutions</router-link></li>
          <li><router-link :to="{ name: 'solutions' }">Modules</router-link></li>
          <li>{{ moduleTitle }}</li>
        </ol>
      </nav>
      
      <div class="page-hero__content" style="margin-bottom:var(--sp-12);">
        <span class="label-tag">Module</span>
        <h1>{{ moduleTitle }}</h1>
        <p>{{ moduleDescription }}</p>
      </div>

      <div class="card-grid card-grid--2" v-if="moduleContent">
        <div class="card reveal" v-for="(item, i) in moduleContent.features" :key="i">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>

      <div v-else class="card reveal">
        <h3>Coming Soon</h3>
        <p>Detailed content for this module is being prepared. Contact us to learn more about the {{ moduleTitle }} module.</p>
      </div>

      <!-- Module highlights stat row -->
      <div style="margin-top:var(--sp-12);">
        <h2 style="font-size:var(--text-2xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-6);text-align:center;">Module highlights</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-5);">
          <div class="card" style="text-align:center;">
            <div style="font-size:2rem;font-weight:900;color:var(--primary);letter-spacing:-0.03em;margin-bottom:var(--sp-2);">⚡</div>
            <div style="font-weight:700;margin-bottom:var(--sp-2);">Real-time signals</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Live signal detection across all connected systems, updated continuously.</p>
          </div>
          <div class="card" style="text-align:center;">
            <div style="font-size:2rem;font-weight:900;color:var(--primary);letter-spacing:-0.03em;margin-bottom:var(--sp-2);">✓</div>
            <div style="font-weight:700;margin-bottom:var(--sp-2);">HITL governed</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Every AI-proposed action requires explicit human approval before execution.</p>
          </div>
          <div class="card" style="text-align:center;">
            <div style="font-size:2rem;font-weight:900;color:var(--primary);letter-spacing:-0.03em;margin-bottom:var(--sp-2);">🔍</div>
            <div style="font-weight:700;margin-bottom:var(--sp-2);">Evidence-backed</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Every insight and proposal comes with a full traceable evidence chain.</p>
          </div>
        </div>
      </div>

      <!-- How this module fits -->
      <div style="margin-top:var(--sp-12);">
        <h2 style="font-size:var(--text-2xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-6);text-align:center;">How this module fits</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-5);">
          <div class="card" style="text-align:center;">
            <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;margin-bottom:var(--sp-3);">01</div>
            <div style="font-weight:700;margin-bottom:var(--sp-2);">Connect your stack</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Link your tools and data sources. The module activates on your real data immediately.</p>
          </div>
          <div class="card" style="text-align:center;">
            <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;margin-bottom:var(--sp-3);">02</div>
            <div style="font-weight:700;margin-bottom:var(--sp-2);">Spine activates</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">The Adaptive Spine normalizes signals and surfaces insights specific to this module's focus.</p>
          </div>
          <div class="card" style="text-align:center;">
            <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;margin-bottom:var(--sp-3);">03</div>
            <div style="font-weight:700;margin-bottom:var(--sp-2);">AI works alongside you</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Proposals surface with evidence. You approve, reject, or edit. The loop compounds over time.</p>
          </div>
        </div>
      </div>

      <CtaSection
        :title="`Explore the ${moduleTitle} module.`"
        description="Book a demo to see this module in action with real data."
        style="margin-top:var(--sp-12);"
      >
        <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
      </CtaSection>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CtaSection from '../../components/CtaSection.vue'
import { useSeo } from '../../composables/useSeo.js'

const route = useRoute()
const module = computed(() => route.params.module)

const moduleData = {
  'account-intelligence': {
    title: 'Account Intelligence',
    description: 'Complete account visibility with health scores, risk signals, and engagement tracking.',
    features: [
      { title: 'Health Scoring', description: 'Multi-factor health scores based on usage, engagement, support, and billing data.' },
      { title: 'Risk Prioritization', description: 'Rank accounts by churn probability, renewal risk, and revenue impact.' },
      { title: 'Engagement Tracking', description: 'Monitor touchpoint frequency, sentiment trends, and response patterns.' }
    ]
  },
  'cs-command-center': {
    title: 'CS Command Center',
    description: 'Health scores, churn signals, renewal calendar, QBR intelligence, and HITL-governed outreach.',
    features: [
      { title: 'Renewal Calendar', description: 'Unified view of all upcoming renewals with risk scoring and preparation status.' },
      { title: 'QBR Intelligence', description: 'Auto-generated QBR prep with account highlights, trends, and talking points.' },
      { title: 'Proactive Outreach', description: 'HITL-governed email and call suggestions based on account signals.' }
    ]
  },
  'revenue-risk': {
    title: 'Revenue Risk',
    description: 'Identify and mitigate revenue risks across the entire customer lifecycle.',
    features: [
      { title: 'Churn Prediction', description: 'Early warning system for at-risk accounts with 30-60 day advance notice.' },
      { title: 'Downgrade Detection', description: 'Spot contraction risk before it happens based on usage and engagement patterns.' },
      { title: 'Renewal Risk Scoring', description: 'Comprehensive renewal risk based on multi-system signal correlation.' }
    ]
  },
  'escalation-intelligence': {
    title: 'Escalation Intelligence',
    description: 'Predict and prevent escalations before they happen with cross-system signal correlation.',
    features: [
      { title: 'Escalation Prediction', description: 'AI-powered detection of tickets and accounts likely to escalate.' },
      { title: 'Stakeholder Mapping', description: 'Identify decision makers and influencers for proactive executive engagement.' },
      { title: 'Resolution Guidance', description: 'AI-suggested resolution paths based on similar past escalations.' }
    ]
  },
  'collections-risk': {
    title: 'Collections Risk',
    description: 'Intelligent collections prioritization with account health context and payment prediction.',
    features: [
      { title: 'Payment Prediction', description: 'Predict likelihood of payment based on account health and history.' },
      { title: 'Collections Prioritization', description: 'Rank collections efforts by probability of recovery and account value.' },
      { title: 'Dispute Detection', description: 'Identify billing disputes early based on communication patterns and ticket content.' }
    ]
  },
  'executive-console': {
    title: 'Executive Console',
    description: 'High-level dashboards and alerts for C-suite and senior leadership.',
    features: [
      { title: 'Business KPIs', description: 'Real-time ARR, churn, NRR, and growth metrics with trend analysis.' },
      { title: 'Risk Alerts', description: 'High-priority alerts requiring executive attention, filtered by business impact.' },
      { title: 'Board Reporting', description: 'Auto-generated board-ready reports with context and narrative.' }
    ]
  },
  'business-ops-console': {
    title: 'Business Ops Console',
    description: 'Cross-functional intelligence across all departments — one governed workspace for the people who keep everything running.',
    features: [
      { title: '12 Departmental Views', description: 'Sales, success, support, finance, product, marketing, engineering, HR, legal, procurement, operations, and executive — all in one governed workspace.' },
      { title: 'Cross-Department Signal Correlation', description: 'Surface patterns that span departments — billing delays correlating with support escalations and renewal risk — before they become crises.' },
      { title: 'Process Intelligence', description: 'Map how work actually flows across teams. Identify bottlenecks, handoff failures, and process gaps with evidence from every connected system.' },
      { title: 'Operational Truth Layer', description: 'One canonical view of how the business is running — not the version in the deck, but the version in the data.' },
      { title: 'HITL Governance Across Functions', description: 'Every AI-proposed action across any department requires explicit approval. Governance is consistent, not department-specific.' },
      { title: 'Works Across All 11 Industries', description: 'Business Ops in SaaS, healthcare, fintech, retail, pharma, logistics, education, real estate, professional services, media, and nonprofit — all supported.' }
    ]
  }
}

const moduleContent = computed(() => moduleData[module.value])
const moduleTitle = computed(() => moduleContent.value?.title || module.value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))
const moduleDescription = computed(() => moduleContent.value?.description || 'Purpose-built module for specific use cases.')

onMounted(() => useSeo({ title: moduleTitle.value, description: moduleDescription.value }))
</script>