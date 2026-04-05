<template>
  <section class="section" style="padding-top:120px;">
    <div class="container">
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'solutions' }">Solutions</router-link></li>
          <li><router-link :to="{ name: 'solutions' }">Industries</router-link></li>
          <li>{{ industryTitle }}</li>
        </ol>
      </nav>
      
      <div class="page-hero__content" style="margin-bottom:var(--sp-12);">
        <span class="label-tag">By Industry</span>
        <h1>{{ industryTitle }}</h1>
        <p>{{ industryDescription }}</p>
      </div>

      <div class="card-grid card-grid--2" v-if="industryContent">
        <div class="card reveal" v-for="(item, i) in industryContent.features" :key="i">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>

      <div v-else class="card reveal">
        <h3>Coming Soon</h3>
        <p>Detailed content for this industry is being prepared. Contact us to learn more about IntegrateWise for {{ industryTitle }}.</p>
      </div>

      <!-- Why IntegrateWise callout -->
      <div style="margin-top:var(--sp-12);background:var(--surface-1);border:1px solid var(--border-glass);border-radius:var(--r-xl);padding:var(--sp-8);border-left:3px solid var(--primary);">
        <h2 style="font-size:var(--text-xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-6);">Why IntegrateWise for {{ industryTitle }}</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-5);">
          <div>
            <div style="font-weight:700;color:var(--primary);margin-bottom:var(--sp-2);">Governed AI</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Every AI action is traceable, auditable, and requires explicit human approval before execution.</p>
          </div>
          <div>
            <div style="font-weight:700;color:var(--primary);margin-bottom:var(--sp-2);">Evidence-backed decisions</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Every proposal comes with a full evidence chain — no black-box outputs, no unexplained recommendations.</p>
          </div>
          <div>
            <div style="font-weight:700;color:var(--primary);margin-bottom:var(--sp-2);">HITL on every action</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Human-in-the-loop governance is built into the platform, not bolted on. You stay in control at every step.</p>
          </div>
        </div>
      </div>

      <!-- Works with your stack -->
      <div style="margin-top:var(--sp-12);">
        <h2 style="font-size:var(--text-xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-6);text-align:center;">Works with your stack</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-4);">
          <div class="card" style="text-align:center;">
            <div style="font-weight:700;margin-bottom:var(--sp-2);">CRM & Sales</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Salesforce, HubSpot, Pipedrive, and more</p>
          </div>
          <div class="card" style="text-align:center;">
            <div style="font-weight:700;margin-bottom:var(--sp-2);">Support & Comms</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Zendesk, Intercom, Gmail, Slack, and more</p>
          </div>
          <div class="card" style="text-align:center;">
            <div style="font-weight:700;margin-bottom:var(--sp-2);">Billing & Product</div>
            <p style="font-size:var(--text-sm);color:var(--text-muted);">Stripe, Chargebee, Mixpanel, Amplitude, and more</p>
          </div>
        </div>
      </div>

      <CtaSection
        :title="`IntegrateWise for ${industryTitle}.`"
        description="Book a demo tailored to your industry's specific challenges and compliance requirements."
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
const industry = computed(() => route.params.industry)

const industryData = {
  saas: {
    title: 'SaaS & B2B Teams',
    description: 'Retention intelligence, renewal signals, and account context. Detect at-risk accounts 30 days before renewal.',
    features: [
      { title: 'Retention Intelligence', description: 'Churn prediction based on usage patterns, support sentiment, and engagement trends specific to SaaS businesses.' },
      { title: 'Expansion Signals', description: 'Identify accounts ready for upsell based on usage growth, feature adoption, and champion engagement.' },
      { title: 'Product-Led Signals', description: 'Connect product usage directly to revenue outcomes and customer health scores.' }
    ]
  },
  healthcare: {
    title: 'Healthcare',
    description: 'HIPAA-compliant intelligence for patient engagement, provider relationships, and operational excellence.',
    features: [
      { title: 'HIPAA Compliance', description: 'BYOK encryption, audit trails, and data handling that meets healthcare compliance requirements.' },
      { title: 'Provider Network Intelligence', description: 'Track provider relationships, credentialing status, and network performance.' },
      { title: 'Patient Engagement Signals', description: 'Proactive outreach for appointment scheduling, medication adherence, and care coordination.' }
    ]
  },
  fintech: {
    title: 'Fintech',
    description: 'Customer intelligence, risk detection, and compliance for financial services companies.',
    features: [
      { title: 'Regulatory Compliance', description: 'Audit trails and data governance that satisfy financial services regulatory requirements.' },
      { title: 'Risk Correlation', description: 'Connect customer behavior signals to credit risk, fraud indicators, and compliance alerts.' },
      { title: 'Customer Lifecycle', description: 'Track onboarding velocity, product adoption, and retention across financial products.' }
    ]
  },
  'retail-ecommerce': {
    title: 'Retail & Ecommerce',
    description: 'Customer intelligence across online and offline channels for retail and direct-to-consumer brands.',
    features: [
      { title: 'Omnichannel Context', description: 'Unify online, in-store, and mobile customer data into single customer profiles.' },
      { title: 'Purchase Pattern Detection', description: 'Identify buying cycles, cross-sell opportunities, and churn risk by customer segment.' },
      { title: 'Inventory & Demand Signals', description: 'Connect customer demand signals to inventory and supply chain operations.' }
    ]
  },
  pharma: {
    title: 'Pharma / Manufacturing',
    description: 'Compliance-focused intelligence for pharmaceutical and manufacturing enterprises.',
    features: [
      { title: 'Regulatory Audit Trails', description: 'Immutable records of all decisions and data access for regulatory compliance.' },
      { title: 'Supply Chain Intelligence', description: 'Track supplier relationships, quality signals, and compliance status across the supply chain.' },
      { title: 'Sales & Distribution', description: 'Monitor sales performance, distributor relationships, and market access metrics.' }
    ]
  },
  logistics: {
    title: 'Logistics & Supply Chain',
    description: 'Connect operations, supplier data, and customer signals into one governed intelligence layer.',
    features: [
      { title: 'Supplier Intelligence', description: 'Track supplier performance, delivery reliability, and risk signals across your entire supply network.' },
      { title: 'Operations Correlation', description: 'Connect operational delays to customer impact and support escalations in real time.' },
      { title: 'Compliance & Audit', description: 'Immutable records of decisions and approvals across logistics operations for regulatory readiness.' }
    ]
  },
  education: {
    title: 'Education & EdTech',
    description: 'Student engagement signals, institutional data, and governed AI for education teams.',
    features: [
      { title: 'Student Engagement Signals', description: 'Surface at-risk students early by correlating attendance, grades, support interactions, and platform usage.' },
      { title: 'Institutional Intelligence', description: 'Unify data across departments, campuses, and systems into one governed knowledge layer.' },
      { title: 'Outcome Tracking', description: 'Connect program participation to measurable outcomes with full evidence chains.' }
    ]
  },
  'real-estate': {
    title: 'Real Estate & PropTech',
    description: 'Unify property data, client relationships, and deal pipelines into one always-current workspace.',
    features: [
      { title: 'Deal Pipeline Intelligence', description: 'Track deals across stages with full stakeholder context, communication history, and risk signals.' },
      { title: 'Client 360', description: 'Complete client profiles assembled from CRM, email, documents, and transaction history.' },
      { title: 'Market Signal Correlation', description: 'Connect market data to portfolio performance and client opportunity signals.' }
    ]
  },
  'professional-services': {
    title: 'Professional Services',
    description: 'Project intelligence, client health, and resource signals — correlated across every engagement.',
    features: [
      { title: 'Engagement Health Scores', description: 'Track project health, client satisfaction, and delivery risk across every active engagement.' },
      { title: 'Resource Intelligence', description: 'Surface utilization gaps, skill mismatches, and capacity risks before they affect delivery.' },
      { title: 'Client Retention Signals', description: 'Detect at-risk client relationships early based on engagement patterns, billing signals, and communication sentiment.' }
    ]
  },
  'media-entertainment': {
    title: 'Media & Entertainment',
    description: 'Audience signals, content performance, and partner data unified into one governed workspace.',
    features: [
      { title: 'Audience Intelligence', description: 'Unify audience behavior, subscription signals, and engagement data across platforms.' },
      { title: 'Content Performance Correlation', description: 'Connect content metrics to revenue outcomes, subscriber retention, and advertiser value.' },
      { title: 'Partner & Distribution Signals', description: 'Track partner relationships, licensing data, and distribution performance in one governed view.' }
    ]
  },
  nonprofit: {
    title: 'Nonprofit & Social Impact',
    description: 'Donor intelligence, program outcomes, and operational data — governed and connected for mission-driven teams.',
    features: [
      { title: 'Donor Intelligence', description: 'Track donor engagement, giving patterns, and relationship health across all communication channels.' },
      { title: 'Program Outcome Tracking', description: 'Connect program activities to measurable impact with full evidence chains and audit trails.' },
      { title: 'Grant & Compliance Management', description: 'Maintain immutable records of grant usage, reporting, and compliance decisions.' }
    ]
  }
}

const industryContent = computed(() => industryData[industry.value])
const industryTitle = computed(() => industryContent.value?.title || industry.value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))
const industryDescription = computed(() => industryContent.value?.description || 'Industry-specific solutions for your sector.')

onMounted(() => {
  document.title = `${industryTitle.value} — IntegrateWise Solutions`
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', industryDescription.value)
})
</script>