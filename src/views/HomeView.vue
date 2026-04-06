<template>
  <!-- 1. HERO -->
  <section class="hero">
    <HeroCanvas />
    <div class="container container--wide">
      <div class="hero__inner">
        <div class="hero__eyebrow">
          <span class="label-tag">Knowledge Workspace Over the Spine, Powered by AI</span>
        </div>
        <h1 class="hero__headline">
          <span class="gradient-text">Built for MuleSoft Account Success.</span><br>
          Extended to every business operation.
        </h1>
        <p class="hero__sub">
          IntegrateWise connects Salesforce, MuleSoft, support, email, calendar, and operational systems into one governed intelligence layer. Health, risks, renewals, KPIs, blockers, and cross-system gaps surface automatically — with evidence attached and human approval built in.
        </p>
        <div class="hero__actions">
          <router-link :to="{ name: 'mulesoft' }" class="btn btn--primary btn--lg">Explore MuleSoft Account Success</router-link>
          <router-link :to="{ name: 'bizops' }" class="btn btn--ghost btn--lg">Explore Business Ops Command Center</router-link>
          <router-link :to="{ name: 'request-demo' }" class="btn btn--outline btn--lg">Book Demo</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. TRUST STRIP -->
  <section class="section--sm section--surface">
    <div class="container container--wide">
      <p class="trust-strip__headline">One platform. Two wedges. One governed intelligence layer.</p>
      <div class="trust-strip">
        <span v-for="t in trustItems" :key="t" class="trust-strip__item">{{ t }}</span>
      </div>
    </div>
  </section>

  <!-- 3. WHY INTEGRATEWISE EXISTS -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Why IntegrateWise Exists</span>
        <h2>Your systems know everything. None of them work as one.</h2>
        <p>Every team already has the data. Salesforce knows the account. MuleSoft knows the integration estate. Support tools know the escalations. Email and calendar know the real conversations. Billing knows commercial risk. Ops systems know where execution is breaking down. But none of them reason together.</p>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <h3>Fragmented truth</h3>
          <p>Every team works from partial context. There is no shared operating picture across customer, commercial, technical, and operational signals.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>AI without context</h3>
          <p>Most AI tools summarize fragments. Without connected systems, relationship history, and evidence, every answer is just a confident guess.</p>
        </div>
        <div class="card reveal reveal-d2">
          <h3>No governed action layer</h3>
          <p>Even when AI spots something important, teams still need proof, review, and control. Real businesses cannot run on autonomous prompts.</p>
        </div>
      </div>
      <div class="reveal" style="background:var(--surface-1);border:1px solid var(--border-glass);border-radius:var(--r-xl);padding:var(--sp-6);border-left:3px solid var(--primary);margin-top:var(--sp-10);max-width:700px;margin-inline:auto;">
        <p style="font-size:var(--text-base);color:var(--text-secondary);line-height:1.7;margin:0;">IntegrateWise fixes this by connecting the systems you already use, normalizing the truth into one spine, surfacing high-signal incidents, and keeping every action behind approval.</p>
      </div>
    </div>
  </section>

  <!-- 4. TWO WEDGES -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Two Wedges, One Platform</span>
        <h2>Two commercial wedges. One shared architecture.</h2>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal" style="border-left:3px solid var(--primary);">
          <span class="label-tag">MuleSoft Account Success</span>
          <h3>For CS, account, and post-sales teams</h3>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>Detect churn and renewal risk early</li>
            <li>Connect CRM, support, usage, billing, email, and calendar</li>
            <li>Build account intelligence from real signals</li>
            <li>Surface account incidents with evidence</li>
            <li>Help CSMs and leaders act with confidence</li>
          </ul>
          <router-link :to="{ name: 'mulesoft' }" class="btn btn--outline btn--sm" style="margin-top:var(--sp-5);">See MuleSoft Account Success</router-link>
        </div>
        <div class="card reveal reveal-d1" style="border-left:3px solid var(--warning);">
          <span class="label-tag" style="color:var(--warning);background:rgba(251,191,36,0.08);border-color:rgba(251,191,36,0.25);">Business Ops Command Center</span>
          <h3>For founders, CEOs, COOs, CIOs, and operators</h3>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>Track operational health in one place</li>
            <li>Connect systems across departments</li>
            <li>Surface cross-functional risks early</li>
            <li>Align initiatives, KPIs, and execution</li>
            <li>Keep AI recommendations visible, reviewable, and controlled</li>
          </ul>
          <router-link :to="{ name: 'bizops' }" class="btn btn--outline btn--sm" style="margin-top:var(--sp-5);">See Business Ops Command Center</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. WHAT THE PLATFORM DOES -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">What the Platform Actually Does</span>
        <h2>A governed intelligence workspace over your real business context.</h2>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal"><h3>Connect your systems</h3><p>IntegrateWise connects Salesforce, MuleSoft, support, email, calendar, billing, project, and operational tools through a governed connector layer.</p></div>
        <div class="card reveal reveal-d1"><h3>Build the Spine</h3><p>The Adaptive Spine normalizes entities, relationships, activities, and signals into a structured source of truth that AI can reason over.</p></div>
        <div class="card reveal"><h3>Surface incidents</h3><p>Cross-system signals are evaluated continuously to identify risks, anomalies, opportunities, and operational gaps.</p></div>
        <div class="card reveal reveal-d1"><h3>Keep humans in control</h3><p>Every recommendation is reviewable. Every action is proposed with evidence. Nothing executes without approval.</p></div>
      </div>
    </div>
  </section>

  <!-- 6. CORE CAPABILITIES -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Core Platform Capabilities</span>
        <h2>Built for real operating environments, not generic AI demos.</h2>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal"><h3>Adaptive Spine</h3><p>A governed intelligence model that connects structured data, context, and relationships across your systems.</p></div>
        <div class="card reveal reveal-d1"><h3>Cross-System Signals</h3><p>Health, risk, performance, and execution patterns surface from multiple tools together — not from one isolated dashboard.</p></div>
        <div class="card reveal reveal-d2"><h3>AI Incidents</h3><p>High-signal moments packaged into incidents with clear signals, explanation, impact, and suggested action.</p></div>
        <div class="card reveal"><h3>Evidence Chains</h3><p>Every recommendation links back to underlying signals, records, and contextual proof.</p></div>
        <div class="card reveal reveal-d1"><h3>Human-in-the-Loop Governance</h3><p>AI can propose. Humans approve, edit, reject, and control what happens next.</p></div>
        <div class="card reveal reveal-d2"><h3>Auditability</h3><p>Decisions, rationale, evidence, approvals, and resulting actions stay visible and traceable.</p></div>
      </div>
    </div>
  </section>

  <!-- 7. MULESOFT ACCOUNT SUCCESS PREVIEW -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">MuleSoft Account Success</span>
        <h2>Built for account health, renewal protection, and strategic customer visibility.</h2>
        <p>Instead of chasing updates across Salesforce, support tickets, billing notes, inboxes, and meeting history, teams get one connected account picture with governed intelligence built in.</p>
      </div>
      <ul class="feature-list reveal" style="max-width:640px;margin-inline:auto;margin-bottom:var(--sp-10);">
        <li v-for="item in msOutcomes" :key="item">{{ item }}</li>
      </ul>
      <div class="card-grid card-grid--2">
        <router-link v-for="p in msProducts" :key="p.name" :to="p.to" class="card reveal" style="text-decoration:none;">
          <h3>{{ p.name }}</h3>
          <p>{{ p.desc }}</p>
          <span class="role-card__link" style="margin-top:var(--sp-3);display:inline-flex;">Explore →</span>
        </router-link>
      </div>
      <div class="text-center" style="margin-top:var(--sp-8);"><router-link :to="{ name: 'mulesoft' }" class="btn btn--outline">Explore MuleSoft Account Success →</router-link></div>
    </div>
  </section>

  <!-- 8. BUSINESS OPS PREVIEW -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Business Ops Command Center</span>
        <h2>Built for founders and operators who need one business-wide operating picture.</h2>
        <p>Instead of hunting through spreadsheets, Slack threads, CRM reports, and project boards, leaders can see initiatives, KPIs, pipeline, delivery, and risk in one connected system.</p>
      </div>
      <ul class="feature-list reveal" style="max-width:640px;margin-inline:auto;margin-bottom:var(--sp-10);">
        <li v-for="item in boOutcomes" :key="item">{{ item }}</li>
      </ul>
      <div class="card-grid card-grid--2">
        <router-link v-for="p in boProducts" :key="p.name" :to="p.to" class="card reveal" style="text-decoration:none;">
          <h3>{{ p.name }}</h3>
          <p>{{ p.desc }}</p>
          <span class="role-card__link" style="margin-top:var(--sp-3);display:inline-flex;">Explore →</span>
        </router-link>
      </div>
      <div class="text-center" style="margin-top:var(--sp-8);"><router-link :to="{ name: 'bizops' }" class="btn btn--outline">Explore Business Ops Command Center →</router-link></div>
    </div>
  </section>

  <!-- 9. AI INCIDENTS -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">AI Incidents</span>
        <h2>AI that works on evidence, not abstract prompts.</h2>
        <p>IntegrateWise detects real operating patterns across systems, packages them into structured incidents, and presents them for review with context, explanation, and suggested action.</p>
      </div>
      <div class="card-grid card-grid--3">
        <IncidentCard class="reveal" v-bind="incidents[0]" />
        <IncidentCard class="reveal reveal-d1" v-bind="incidents[1]" />
        <IncidentCard class="reveal reveal-d2" v-bind="incidents[2]" />
      </div>
      <div class="text-center" style="margin-top:var(--sp-8);"><router-link :to="{ name: 'how-it-works' }" class="btn btn--outline">See How AI Incidents Work →</router-link></div>
    </div>
  </section>

  <!-- 10. HOW IT WORKS MINI -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">How It Works</span>
        <h2>Connect → Build Spine → Surface Incidents → Approve or Deny</h2>
      </div>
      <div class="card-grid card-grid--4">
        <div class="card reveal" v-for="(s, i) in steps" :key="s.num" :class="i > 0 ? `reveal-d${i}` : ''">
          <div style="font-family:var(--font-mono);font-size:var(--text-sm);color:var(--primary);font-weight:700;margin-bottom:var(--sp-3);">{{ s.num }}</div>
          <h3>{{ s.name }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>
      <div class="text-center" style="margin-top:var(--sp-8);"><router-link :to="{ name: 'how-it-works' }" class="btn btn--outline">See Full How It Works →</router-link></div>
    </div>
  </section>

  <!-- 11. INTEGRATIONS -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Integrations</span>
        <h2>Works across the systems your team already uses.</h2>
        <p>The point is not to replace your stack. The point is to make your stack think together.</p>
      </div>
      <div class="trust-strip reveal" style="justify-content:center;gap:var(--sp-6);flex-wrap:wrap;">
        <span v-for="s in coreSystems" :key="s" class="trust-strip__item">{{ s }}</span>
      </div>
    </div>
  </section>

  <!-- 12. WHY TEAMS CHOOSE -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Why Teams Choose IntegrateWise</span>
        <h2>Not another dashboard. Not another isolated AI tool.</h2>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal"><h3>Unified truth</h3><p>A connected model of the business across tools, relationships, and context.</p></div>
        <div class="card reveal reveal-d1"><h3>Operational intelligence</h3><p>Signals become incidents instead of staying buried in dashboards, inboxes, and updates.</p></div>
        <div class="card reveal"><h3>Governed AI</h3><p>Recommendations are explainable, reviewable, and controlled.</p></div>
        <div class="card reveal reveal-d1"><h3>Practical execution</h3><p>The system helps teams see what matters and decide what to do next without giving up approval or accountability.</p></div>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <CtaSection title="See IntegrateWise in action on real business context.">
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Book Demo</router-link>
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
  document.title = 'IntegrateWise — Knowledge Workspace Over the Spine, Powered by AI'
})

const trustItems = [
  'Evidence-backed AI',
  'Human approval before action',
  'Cross-system intelligence',
  'Adaptive Spine architecture',
  'Auditability and governance by design'
]

const msOutcomes = [
  'Health scores driven by real signals',
  'Renewal risk surfaced early',
  'Stakeholder and relationship visibility',
  'Support and billing issues tied back to account risk',
  'Executive-ready account context',
  'AI incidents with evidence and suggested next steps'
]

const msProducts = [
  { name: 'CSM Accounts Hub', desc: 'Daily command center for account managers and CSMs.', to: { name: 'csm-hub' } },
  { name: 'CSM Account 360', desc: 'Full account view across commercial, stakeholder, technical, and support dimensions.', to: { name: 'csm-360' } },
  { name: 'Intelligence Center', desc: 'High-signal AI incidents, risks, and summaries across the book of business.', to: { name: 'intelligence-center' } },
  { name: 'Strategic Account Success', desc: 'Deeper planning and multi-threaded success management for critical accounts.', to: { name: 'strategic-success' } }
]

const boOutcomes = [
  'Initiative and KPI visibility in one place',
  'Early detection of execution risk',
  'Cross-functional dependency awareness',
  'Leadership-ready operating reviews',
  'AI-assisted issue detection with evidence',
  'Approval-first operating actions'
]

const boProducts = [
  { name: 'Founder Ops', desc: 'Lightweight command center for solo founders and small teams.', to: { name: 'founder-ops' } },
  { name: 'CEO Dashboard', desc: 'Strategic visibility into revenue, operations, initiatives, and risk.', to: { name: 'ceo-dashboard' } },
  { name: 'COO Dashboard', desc: 'Operational execution, blockers, process health, and accountability.', to: { name: 'coo-dashboard' } },
  { name: 'CIO/CTO Dashboard', desc: 'Platform health, systems risk, integration stability, and technical execution.', to: { name: 'cio-cto-dashboard' } }
]

const incidents = [
  {
    badge: 'Account Success',
    title: 'Payment Failure Detected',
    signals: [
      'Stripe invoice failed due to expired card',
      'Billing-related support escalation opened',
      'Renewal due in 31 days',
      'Recent executive engagement has dropped'
    ],
    insight: 'The combination of billing friction, open support pressure, and an approaching renewal creates elevated churn and downgrade risk.',
    suggestion: 'Trigger proactive account outreach, confirm billing resolution path, and review renewal risk with the account owner before the next customer touchpoint.'
  },
  {
    badge: 'RevOps',
    title: 'Revenue Pipeline at Risk',
    signals: [
      'Pipeline coverage dropped below target',
      'Multiple stage-3 deals have stalled',
      'Rep activity volume is down week over week',
      'Forecast confidence has weakened'
    ],
    insight: 'The current combination suggests a likely shortfall unless pipeline generation and deal progression improve quickly.',
    suggestion: 'Escalate stalled deals for manager review, launch a focused pipeline recovery sprint, and identify capacity or prioritization gaps across the team.'
  },
  {
    badge: 'CIO/CTO',
    title: 'Integration Health Degrading',
    signals: [
      'MuleSoft API errors increased significantly in the last 24 hours',
      'Salesforce sync latency is exceeding internal expectations',
      'Downstream systems are showing stale records',
      'A recent deployment correlates with the signal shift'
    ],
    insight: 'Integration instability is beginning to affect operational reliability and reporting integrity across connected systems.',
    suggestion: 'Review recent deployment changes, isolate the failure pattern, notify impacted teams, and prioritize containment before downstream business impact expands.'
  }
]

const steps = [
  { num: '01', name: 'Connect', desc: 'Link Salesforce, MuleSoft, support, email, calendar, billing, project, and operational systems through native connectors and governed ingestion.' },
  { num: '02', name: 'Build Spine', desc: 'Normalize entities, records, relationships, signals, and context into the Adaptive Spine so the system can reason across your business.' },
  { num: '03', name: 'Surface Incidents', desc: 'IntegrateWise detects meaningful patterns, risks, anomalies, and opportunities and turns them into reviewable incidents with evidence.' },
  { num: '04', name: 'Approve or Deny', desc: 'Humans remain in control. Every recommendation can be reviewed, edited, approved, or rejected before any action is taken.' }
]

const coreSystems = ['Salesforce', 'MuleSoft', 'Gmail', 'Google Calendar', 'Zendesk', 'Stripe', 'Slack', 'Jira']
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
  font-size: var(--text-sm);
  color: var(--text-faint);
  margin-bottom: var(--sp-4);
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
</style>
