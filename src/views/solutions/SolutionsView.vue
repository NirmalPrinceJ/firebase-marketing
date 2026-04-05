<template>
  <PageHero
    tag="Solutions"
    title="The Right Solution for Every Team, Industry, and Role"
    description="IntegrateWise adapts to how you work. The same Governed AI Spine powers every solution — tailored to the specific intelligence and governance needs of each role and industry."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Solutions' }]"
  />

  <!-- Stats Hero -->
  <section class="section">
    <div class="container">
      <div class="card-grid card-grid--3">
        <div class="stat-card reveal">
          <div class="stat-card__value">12</div>
          <div class="stat-card__label">Roles</div>
          <div class="stat-card__sub">From Founders to Developers</div>
        </div>
        <div class="stat-card reveal reveal-d1">
          <div class="stat-card__value">11</div>
          <div class="stat-card__label">Industries</div>
          <div class="stat-card__sub">SaaS to Nonprofit</div>
        </div>
        <div class="stat-card reveal reveal-d2">
          <div class="stat-card__value">6</div>
          <div class="stat-card__label">Modules</div>
          <div class="stat-card__sub">Pre-built workflow intelligence</div>
        </div>
      </div>
    </div>
  </section>

  <!-- By Role -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">By Role</span>
        <h2>Built for the people who own the outcomes</h2>
      </div>
      <div class="role-grid">
        <router-link
          v-for="(role, i) in roles"
          :key="role.slug"
          :to="{ name: 'role', params: { role: role.slug } }"
          class="role-card reveal"
          :class="i % 3 > 0 ? `reveal-d${i % 3}` : ''"
        >
          <h3>{{ role.title }}</h3>
          <p>{{ role.desc }}</p>
          <span class="role-card__link">Explore →</span>
        </router-link>
      </div>
    </div>
  </section>

  <!-- By Industry -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">By Industry</span>
        <h2>Governance requirements vary by industry. We meet them all.</h2>
      </div>
      <div class="role-grid">
        <router-link
          v-for="(industry, i) in industries"
          :key="industry.slug"
          :to="{ name: 'industry', params: { industry: industry.slug } }"
          class="role-card reveal"
          :class="i % 3 > 0 ? `reveal-d${i % 3}` : ''"
        >
          <h3>{{ industry.title }}</h3>
          <p>{{ industry.desc }}</p>
          <span class="role-card__link">Explore →</span>
        </router-link>
      </div>
    </div>
  </section>

  <!-- Modules -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Modules</span>
        <h2>Pre-built intelligence for your most critical workflows</h2>
      </div>
      <div class="role-grid">
        <router-link
          v-for="(mod, i) in modules"
          :key="mod.slug"
          :to="{ name: 'module', params: { module: mod.slug } }"
          class="role-card reveal"
          :class="i % 3 > 0 ? `reveal-d${i % 3}` : ''"
        >
          <h3>{{ mod.title }}</h3>
          <p>{{ mod.desc }}</p>
          <span class="role-card__link">Explore →</span>
        </router-link>
      </div>
    </div>
  </section>

  <CtaSection
    title="Not sure which solution fits your team?"
    description="Book a 30-minute call. We'll map IntegrateWise to your specific role, stack, and operational challenges."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'contact' }" class="btn btn--ghost btn--lg">Contact Us →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSeo } from '../../composables/useSeo.js'
import PageHero from '../../components/PageHero.vue'
import CtaSection from '../../components/CtaSection.vue'
import { useReveal } from '../../composables/useReveal.js'
useReveal()
onMounted(() => useSeo({ title: 'Solutions', description: 'IntegrateWise solutions for 12 roles, 11 industries, and 6 pre-built modules — the same Governed AI Spine tailored to every team.' }))

// Roles - 12 roles
const roles = [
  { slug: 'founder', title: 'Founders & Owners', desc: 'Run your entire business from one governed workspace. Live views across sales, customers, support, and finance.' },
  { slug: 'account-success', title: 'Account Success & CSMs', desc: 'Full account context, proactive churn signals, and HITL-governed outreach. Stop reacting and start protecting revenue.' },
  { slug: 'revops', title: 'RevOps / CRO', desc: 'Pipeline health, revenue risk signals, and cross-system renewal intelligence — in one governed workspace.' },
  { slug: 'support', title: 'Support Teams', desc: 'See the full account story the moment a ticket opens — ARR, renewal dates, usage signals, and prior escalations.' },
  { slug: 'finance', title: 'Finance & Collections', desc: 'Invoice aging with full account context. Stop chasing invoices blindly — collect with cross-system intelligence.' },
  { slug: 'cio', title: 'CIO / IT Leadership', desc: 'Enterprise governance for AI without the risk. RBAC, tenant isolation, full audit trails, and BYOK.' },
  { slug: 'cto', title: 'CTO / Engineering', desc: 'Give your team superpowers. BYOAI support, developer APIs, and governed integration architecture.' },
  { slug: 'developers', title: 'Developers', desc: '50+ connectors, REST API, webhooks, BYOK. Build on the governed intelligence spine with well-defined entity schemas.' },
  { slug: 'salesforce-mulesoft', title: 'Salesforce & MuleSoft Teams', desc: 'Your Salesforce data, finally unified with everything else. Built by a 13-year MuleSoft architect.' },
  { slug: 'business-ops', title: 'Business Ops', desc: 'Cross-functional visibility across all 12 departments and 11 industries. One governed workspace for the people who keep everything running.' },
  { slug: 'product', title: 'Product & Growth', desc: 'Connect product usage signals to customer health, revenue outcomes, and team priorities — all in one governed view.' },
  { slug: 'marketing', title: 'Marketing & Demand Gen', desc: 'Unify campaign data, pipeline influence, and customer signals. Know what is actually driving revenue.' },
]

// Industries - 11 industry verticals
const industries = [
  { slug: 'saas', title: 'SaaS & B2B', desc: 'Retention intelligence, renewal signals, and account context for SaaS teams. Detect at-risk accounts 30 days before renewal.' },
  { slug: 'healthcare', title: 'Healthcare & Healthtech', desc: 'Governed intelligence with HITL on every action, full audit trails, and data residency options built in.' },
  { slug: 'fintech', title: 'Fintech & Financial Services', desc: 'Evidence-backed decisions, governed AI, and full auditability for fintech teams.' },
  { slug: 'retail-ecommerce', title: 'Retail & Ecommerce', desc: 'Unify customer, order, support, and finance data. Surface at-risk customers before they churn.' },
  { slug: 'pharma', title: 'Pharma / Manufacturing', desc: 'Compliance, quality, and operations — unified. Detect quality signals early, maintain audit-ready approvals.' },
  { slug: 'logistics', title: 'Logistics & Supply Chain', desc: 'Connect operations, supplier data, and customer signals into one governed intelligence layer.' },
  { slug: 'education', title: 'Education & EdTech', desc: 'Student engagement signals, institutional data, and governed AI for education teams.' },
  { slug: 'real-estate', title: 'Real Estate & PropTech', desc: 'Unify property data, client relationships, and deal pipelines into one always-current workspace.' },
  { slug: 'professional-services', title: 'Professional Services', desc: 'Project intelligence, client health, and resource signals — correlated across every engagement.' },
  { slug: 'media-entertainment', title: 'Media & Entertainment', desc: 'Audience signals, content performance, and partner data unified into one governed workspace.' },
  { slug: 'nonprofit', title: 'Nonprofit & Social Impact', desc: 'Donor intelligence, program outcomes, and operational data — governed and connected for mission-driven teams.' },
]

// Modules - 6 pre-built workflow modules
const modules = [
  { slug: 'account-intelligence', title: 'Account Intelligence', desc: 'Everything you need to know about every account. Always current. Assembled from all connected systems.' },
  { slug: 'cs-command-center', title: 'CS Command Center', desc: 'Health scores, churn signals, renewal calendar, and HITL-governed outreach — in one proactive workspace.' },
  { slug: 'revenue-risk', title: 'Revenue Risk', desc: 'Cross-system renewal signals, billing anomalies, and usage drops — correlated before revenue is at risk.' },
  { slug: 'escalation-intelligence', title: 'Escalation Intelligence', desc: 'See the full account story the moment a ticket escalates — ARR, renewal dates, billing, and churn signals.' },
  { slug: 'collections-risk', title: 'Collections Risk', desc: 'Stop chasing invoices blindly. Connect invoice aging with CRM, support, and engagement data.' },
  { slug: 'executive-console', title: 'Executive Console', desc: 'One view of how the business is actually running. Cross-department visibility with AI-surfaced board-level signals.' },
]
</script>
