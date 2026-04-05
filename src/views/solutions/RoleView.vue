<template>
  <section class="section" style="padding-top:120px;">
    <div class="container">
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'solutions' }">Solutions</router-link></li>
          <li><router-link :to="{ name: 'solutions' }">Roles</router-link></li>
          <li>{{ roleTitle }}</li>
        </ol>
      </nav>
      
      <div class="page-hero__content" style="margin-bottom:var(--sp-12);">
        <span class="label-tag">By Role</span>
        <h1>{{ roleTitle }}</h1>
        <p>{{ roleDescription }}</p>
      </div>

      <div class="card-grid card-grid--2" v-if="roleContent">
        <div class="card reveal" v-for="(item, i) in roleContent.features" :key="i">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>

      <div v-else class="card reveal">
        <h3>Coming Soon</h3>
        <p>Detailed content for this role is being prepared. Contact us to learn more about how IntegrateWise serves {{ roleTitle }}.</p>
      </div>

      <!-- What you get -->
      <div style="margin-top:var(--sp-12);">
        <h2 style="font-size:var(--text-2xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-6);text-align:center;">What you get</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-5);">
          <div class="card" style="text-align:center;">
            <div style="font-size:2rem;font-weight:900;color:var(--primary);letter-spacing:-0.03em;margin-bottom:var(--sp-2);">360°</div>
            <div style="font-weight:700;margin-bottom:var(--sp-2);">Full Context</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Every account, deal, and signal unified in one always-current view.</p>
          </div>
          <div class="card" style="text-align:center;">
            <div style="font-size:2rem;font-weight:900;color:var(--primary);letter-spacing:-0.03em;margin-bottom:var(--sp-2);">⚡</div>
            <div style="font-weight:700;margin-bottom:var(--sp-2);">Proactive Signals</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Risk and opportunity detected weeks before they become visible.</p>
          </div>
          <div class="card" style="text-align:center;">
            <div style="font-size:2rem;font-weight:900;color:var(--primary);letter-spacing:-0.03em;margin-bottom:var(--sp-2);">✓</div>
            <div style="font-weight:700;margin-bottom:var(--sp-2);">HITL Governance</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Every AI action requires explicit human approval. Nothing executes without you.</p>
          </div>
        </div>
      </div>

      <!-- How it works for role -->
      <div style="margin-top:var(--sp-12);">
        <h2 style="font-size:var(--text-2xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-6);text-align:center;">How it works for {{ roleTitle }}</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-5);">
          <div class="card" style="text-align:center;">
            <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;margin-bottom:var(--sp-3);">01</div>
            <div style="font-weight:700;margin-bottom:var(--sp-2);">Connect your stack</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Link your CRM, email, support, billing, and product tools in minutes.</p>
          </div>
          <div class="card" style="text-align:center;">
            <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;margin-bottom:var(--sp-3);">02</div>
            <div style="font-weight:700;margin-bottom:var(--sp-2);">Spine activates</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">The Adaptive Spine normalizes your data and assembles full context automatically.</p>
          </div>
          <div class="card" style="text-align:center;">
            <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;margin-bottom:var(--sp-3);">03</div>
            <div style="font-weight:700;margin-bottom:var(--sp-2);">AI works alongside you</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Signals surface, actions are proposed with evidence, and you stay in control.</p>
          </div>
        </div>
      </div>

      <CtaSection
        :title="`See how IntegrateWise works for ${roleTitle}.`"
        description="Book a personalized demo focused on your role and use cases."
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
const role = computed(() => route.params.role)

const roleData = {
  founder: {
    title: 'Founders & Owners',
    description: 'Run your entire business from one governed workspace — live views across sales, customers, support, and finance.',
    features: [
      { title: 'Executive Dashboard', description: 'Real-time visibility into ARR, pipeline, churn risk, and team performance across all functions.' },
      { title: 'Cross-Functional Context', description: 'See how sales, success, support, and product data connect — without logging into 5 different tools.' },
      { title: 'Signal Prioritization', description: 'The AI surfaces what needs your attention now, ranked by business impact and urgency.' }
    ]
  },
  'account-success': {
    title: 'Account Success & CSMs',
    description: 'Full account context, proactive churn signals, and HITL-governed outreach — stop reacting and start protecting revenue.',
    features: [
      { title: 'Account 360 View', description: 'Complete customer context in one screen: CRM data, support tickets, email threads, usage trends, billing status.' },
      { title: 'Churn Early Warning', description: 'Get alerted to at-risk accounts 30-60 days before renewal based on usage, sentiment, and engagement patterns.' },
      { title: 'HITL Outreach', description: 'AI drafts proactive outreach with full context; you review and approve before anything sends.' }
    ]
  },
  cio: {
    title: 'CIO / IT Leadership',
    description: 'Enterprise governance for AI without the risk. RBAC, tenant isolation, BYOK, full audit trails.',
    features: [
      { title: 'BYOK Encryption', description: 'Bring Your Own Key — your encryption keys, your data, complete control over data access.' },
      { title: 'Immutable Audit Log', description: 'Write-once audit trail for all AI decisions and human approvals. Compliance-ready out of the box.' },
      { title: 'Tenant Isolation', description: 'Complete data separation between tenants with zero cross-contamination risk.' }
    ]
  },
  cto: {
    title: 'CTO / Engineering',
    description: 'Unified view of technical health, customer impact, and product signals across the stack.',
    features: [
      { title: 'System Health Correlation', description: 'Connect infrastructure metrics to customer impact and support tickets.' },
      { title: 'Developer Velocity', description: 'Track sprint progress, PR velocity, and deployment health alongside customer outcomes.' },
      { title: 'Technical Debt Signals', description: 'Surface technical debt that correlates with customer churn or support escalations.' }
    ]
  },
  revops: {
    title: 'RevOps / CRO',
    description: 'Pipeline intelligence, forecast accuracy, and revenue operations optimization across the entire funnel.',
    features: [
      { title: 'Unified Pipeline View', description: 'See deals across all stages with complete stakeholder mapping and engagement tracking.' },
      { title: 'Forecast Intelligence', description: 'AI-powered forecast predictions based on deal signals, not just stage guesses.' },
      { title: 'Handoff Automation', description: 'Smooth transitions between sales and success with full context preservation.' }
    ]
  },
  support: {
    title: 'Support Teams',
    description: 'Customer context, escalation prediction, and resolution assistance — all in one view.',
    features: [
      { title: 'Full Customer Context', description: 'See account value, health score, recent interactions, and relationship history on every ticket.' },
      { title: 'Escalation Prediction', description: 'Get early warning when a ticket pattern suggests escalation risk.' },
      { title: 'Knowledge Suggestions', description: 'AI suggests relevant documentation and past resolutions based on ticket content.' }
    ]
  },
  finance: {
    title: 'Finance & Collections',
    description: 'Billing risk detection, collections prioritization, and revenue protection — with full account context.',
    features: [
      { title: 'Collections Intelligence', description: 'Prioritize collections by invoice aging, account health, and payment history.' },
      { title: 'Billing Risk Signals', description: 'Detect payment delays, billing contact changes, and renewal risk correlation.' },
      { title: 'Revenue Visibility', description: 'Real-time ARR tracking, expansion opportunities, and churn risk by account segment.' }
    ]
  },
  developers: {
    title: 'Developers',
    description: 'API access, webhook integrations, and custom data flows for technical teams.',
    features: [
      { title: 'REST API', description: 'Full API access to the Spine for custom integrations and data retrieval.' },
      { title: 'Webhook Support', description: 'Real-time event streaming for signal detection and workflow automation.' },
      { title: 'Custom Connectors', description: 'Build private connectors for internal systems using our connector SDK.' }
    ]
  },
  'department-leaders': {
    title: 'Department Leaders',
    description: 'Team performance, cross-functional visibility, and operational intelligence for functional heads.',
    features: [
      { title: 'Team Dashboards', description: 'Role-specific views for sales, success, support, and product teams.' },
      { title: 'Performance Metrics', description: 'Track team KPIs with goal references and trend analysis.' },
      { title: 'Cross-Functional Alignment', description: 'See how your team\'s work connects to other functions and overall business outcomes.' }
    ]
  },
  'business-ops': {
    title: 'Business Ops',
    description: 'Cross-functional visibility across all 12 departments and 11 industries. One governed workspace for the people who keep everything running.',
    features: [
      { title: '12 Departmental Views', description: 'Sales, success, support, finance, product, marketing, engineering, HR, legal, procurement, operations, and executive — all in one governed workspace.' },
      { title: 'Cross-Department Signal Correlation', description: 'Surface patterns that span departments — like a billing delay correlating with a support escalation and a renewal risk — before they become crises.' },
      { title: 'Process Intelligence', description: 'Map how work actually flows across teams. Identify bottlenecks, handoff failures, and process gaps with evidence from every connected system.' },
      { title: 'Operational Truth Layer', description: 'One canonical view of how the business is running — not the version in the deck, but the version in the data.' },
      { title: 'HITL Governance Across Functions', description: 'Every AI-proposed action across any department requires explicit approval. Governance is consistent, not department-specific.' },
      { title: 'Works Across All 11 Industries', description: 'Business Ops in SaaS, healthcare, fintech, retail, pharma, logistics, education, real estate, professional services, media, and nonprofit — all supported.' }
    ]
  },
  'product': {
    title: 'Product & Growth',
    description: 'Connect product usage signals to customer health, revenue outcomes, and team priorities — all in one governed view.',
    features: [
      { title: 'Usage-to-Revenue Correlation', description: 'See how feature adoption, usage drops, and product engagement connect directly to churn risk and expansion signals.' },
      { title: 'Roadmap Intelligence', description: 'Surface which product gaps are driving the most support tickets, churn signals, and customer escalations.' },
      { title: 'Growth Signal Detection', description: 'Identify accounts showing expansion signals based on usage growth, champion engagement, and product breadth.' }
    ]
  },
  'marketing': {
    title: 'Marketing & Demand Gen',
    description: 'Unify campaign data, pipeline influence, and customer signals. Know what is actually driving revenue.',
    features: [
      { title: 'Pipeline Attribution', description: 'Connect campaign touchpoints to pipeline creation and closed revenue — with evidence, not assumptions.' },
      { title: 'ICP Signal Intelligence', description: 'Identify your best-fit customers from real behavioral and firmographic signals across all connected systems.' },
      { title: 'Content & Engagement Signals', description: 'See which content, channels, and campaigns correlate with the highest-value customer outcomes.' }
    ]
  }
}

const roleContent = computed(() => roleData[role.value])
const roleTitle = computed(() => roleContent.value?.title || role.value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))
const roleDescription = computed(() => roleContent.value?.description || 'Role-specific solutions for your team.')

onMounted(() => {
  document.title = `${roleTitle.value} — IntegrateWise Solutions`
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', roleDescription.value)
})
</script>