<template>
  <PageHero
    tag="How It Works"
    title="How IntegrateWise Actually Works"
    description="You connect your systems. We build the intelligence layer. AI detects incidents with evidence. You approve or deny. Nothing happens without you."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'How It Works' }]"
  >
    <template #actions>
      <router-link :to="{ name: 'request-demo' }" class="btn btn--primary">Request a Demo</router-link>
    </template>
  </PageHero>

  <!-- Step 1: Connect Systems -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Step 1</span>
        <h2>Connect Your Systems</h2>
        <p>IntegrateWise connects to the tools your team already uses. No migration. No rip-and-replace. Just connect and go.</p>
      </div>
      <div class="card-grid card-grid--4">
        <div class="card reveal" v-for="(sys, i) in coreSystems" :key="sys.name" :class="i > 0 ? `reveal-d${i % 4}` : ''">
          <h3>{{ sys.name }}</h3>
          <p>{{ sys.desc }}</p>
        </div>
      </div>
      <p class="text-center reveal" style="margin-top:var(--sp-6);color:var(--text-faint);font-family:var(--font-mono);font-size:var(--text-sm);">+ Zendesk · Google Analytics · Jira · and 40 more connectors</p>
    </div>
  </section>

  <!-- Step 2: Build the Spine -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Step 2</span>
        <h2>Build the Spine</h2>
        <p>Once connected, IntegrateWise builds a domain spine — a normalized, always-current data model that becomes the foundation for everything AI does.</p>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal" style="border-left:3px solid var(--primary);">
          <span class="label-tag">MuleSoft Account Success</span>
          <h3>Account Success Spine</h3>
          <p>16 normalized tables covering accounts, contacts, opportunities, support tickets, usage metrics, billing records, email threads, and relationship maps. Every entity is resolved, deduplicated, and linked.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>16 canonical tables</li>
            <li>Account → Contact → Opportunity graph</li>
            <li>Support + Usage + Billing correlation</li>
            <li>Relationship and champion tracking</li>
          </ul>
        </div>
        <div class="card reveal reveal-d1" style="border-left:3px solid var(--warning);">
          <span class="label-tag" style="color:var(--warning);background:rgba(251,191,36,0.08);border-color:rgba(251,191,36,0.25);">Business Ops</span>
          <h3>Business Ops Spine</h3>
          <p>14+ entities spanning revenue, pipeline, burn rate, team performance, infrastructure health, and product metrics. Built for founders and operators who need the full picture.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>14+ business entities</li>
            <li>Revenue → Pipeline → Burn model</li>
            <li>Team + Infrastructure + Product signals</li>
            <li>Cross-department correlation</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Step 3: AI Incidents with Evidence -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Step 3</span>
        <h2>AI Detects Incidents with Evidence</h2>
        <p>The spine watches for cross-system patterns. When something looks wrong, AI creates an incident card — complete with signals, insight, and a suggested action. Here's what they look like.</p>
      </div>
      <div class="card-grid card-grid--2">
        <div class="reveal">
          <IncidentCard
            badge="Account Success"
            title="Churn Risk — Acme Corp"
            :signals="['Zendesk: P1 open 4 days', 'Usage: −38% over 30 days', 'Billing: Invoice #892 overdue 18 days', 'CRM: Champion left Oct 14']"
            insight="Four correlated signals indicate high churn probability. Pattern matches 3 previous churned accounts with 94% confidence."
            suggestion="Send executive outreach to VP referencing open P1, usage drop, and offer escalation path."
          />
        </div>
        <div class="reveal reveal-d1">
          <IncidentCard
            badge="Business Ops"
            title="Burn Rate Spike — Engineering"
            :signals="['Stripe: Infrastructure spend +42% MoM', 'Jira: Sprint velocity −18%', 'HR: 2 senior engineers on PIP', 'AWS: 3 unused reserved instances']"
            insight="Engineering burn is accelerating while output is declining. Spend increase correlates with unused infrastructure, not growth."
            suggestion="Flag for COO review. Recommend infrastructure audit and sprint capacity rebalance."
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Step 4: Human Approval and Audit -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Step 4</span>
        <h2>Human Approval and Audit</h2>
        <p>Every incident card has two buttons: Approve and Deny. Nothing executes without your explicit sign-off. Every decision is logged with full evidence.</p>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <h3>Approve or Deny</h3>
          <p>Every AI-proposed action is a reviewable card. You see the evidence, the reasoning, and the suggested action. You decide what happens next.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Evidence Chain</h3>
          <p>Every card shows exactly which signals from which systems contributed to the AI's recommendation. No black boxes. No unexplained confidence scores.</p>
        </div>
        <div class="card reveal reveal-d2">
          <h3>Immutable Audit Trail</h3>
          <p>Every approval, denial, and modification is logged permanently. Who decided, when, what evidence was presented, and what action was taken.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Where AI Runs -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Governance</span>
        <h2>Where AI Runs — and Where It Doesn't</h2>
        <p>IntegrateWise draws a clear line. AI reads from the spine. AI proposes actions. AI never writes to your source systems without human approval.</p>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal" style="border-top:2px solid var(--primary);">
          <h3>AI Does</h3>
          <ul class="feature-list" style="margin-top:var(--sp-3);">
            <li>Read from all connected systems</li>
            <li>Correlate signals across sources</li>
            <li>Detect patterns and anomalies</li>
            <li>Generate incident cards with evidence</li>
            <li>Propose actions with reasoning</li>
          </ul>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--error);">
          <h3>AI Never</h3>
          <ul class="feature-list" style="margin-top:var(--sp-3);">
            <li>Writes to your CRM or source systems</li>
            <li>Sends emails or messages without approval</li>
            <li>Executes workflows autonomously</li>
            <li>Modifies records without human sign-off</li>
            <li>Acts on confidence alone — evidence required</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- For CS today, BizOps tomorrow -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Start Anywhere</span>
        <h2>For CS Today. BizOps Tomorrow.</h2>
        <p>Most teams start with one wedge — either MuleSoft Account Success or Business Ops. The spine is the same. The governance is the same. Expand when you're ready.</p>
      </div>
      <div class="card-grid card-grid--2">
        <router-link :to="{ name: 'mulesoft' }" class="card reveal" style="text-decoration:none;">
          <span class="label-tag">Wedge 1</span>
          <h3>MuleSoft Account Success</h3>
          <p>Start here if your team manages accounts, renewals, and customer health. 4 products, one spine, immediate value.</p>
          <span class="role-card__link" style="margin-top:var(--sp-4);display:inline-flex;">Explore Account Success →</span>
        </router-link>
        <router-link :to="{ name: 'bizops' }" class="card reveal reveal-d1" style="text-decoration:none;">
          <span class="label-tag" style="color:var(--warning);background:rgba(251,191,36,0.08);border-color:rgba(251,191,36,0.25);">Wedge 2</span>
          <h3>Business Ops Command Center</h3>
          <p>Start here if you're a founder or operator who needs full-stack business visibility. 4 dashboards, one spine, free tier available.</p>
          <span class="role-card__link" style="margin-top:var(--sp-4);display:inline-flex;">Explore Business Ops →</span>
        </router-link>
      </div>
    </div>
  </section>

  <CtaSection
    title="See it working on your data."
    description="Book a 30-minute demo. We'll connect your systems, build the spine, and show you real incidents with evidence — live."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'pricing' }" class="btn btn--ghost btn--lg">View Pricing →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHero from '../components/PageHero.vue'
import CtaSection from '../components/CtaSection.vue'
import IncidentCard from '../components/IncidentCard.vue'
import { useReveal } from '../composables/useReveal.js'

useReveal()

onMounted(() => {
  document.title = 'How It Works — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Connect your systems. IntegrateWise builds the spine. AI detects incidents with evidence. You approve or deny. Nothing happens without you.')
})

const coreSystems = [
  { name: 'Salesforce', desc: 'CRM records, opportunities, contacts, and account data synced in real time.' },
  { name: 'MuleSoft', desc: 'Integration layer connecting enterprise APIs and data flows into the spine.' },
  { name: 'Stripe', desc: 'Billing, invoices, subscription status, and payment signals.' },
  { name: 'HubSpot', desc: 'Marketing, pipeline, and contact engagement data.' },
  { name: 'Slack', desc: 'Team conversations, channel signals, and internal communication context.' },
  { name: 'Zendesk', desc: 'Support tickets, SLA status, escalation patterns, and resolution times.' },
  { name: 'Google Analytics', desc: 'Product usage, traffic patterns, and engagement metrics.' },
  { name: 'Jira', desc: 'Engineering velocity, sprint data, and product development signals.' },
]
</script>