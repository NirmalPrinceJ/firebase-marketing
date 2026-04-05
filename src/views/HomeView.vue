<template>
  <!-- HERO -->
  <section class="hero">
    <HeroCanvas />
    <div class="container container--wide">
      <div class="hero__inner">
        <div class="hero__eyebrow">
          <span class="label-tag">Knowledge Workspace · Powered by AI</span>
          <span class="hero__status">System Active</span>
        </div>
        <h1 class="hero__headline">
          <span class="gradient-text">Knowledge Workspace</span><br>
          Over the Spine and Powered by AI.
        </h1>
        <p class="hero__sub">
          Stop being a human API. IntegrateWise connects every tool, preserves every conversation, and gives AI the full context it needs — while keeping you in control of every action.
        </p>
        <div class="hero__actions">
          <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
          <router-link :to="{ name: 'how-it-works' }" class="btn btn--ghost btn--lg">See How It Works →</router-link>
        </div>

        <!-- Hero Visual -->
        <div class="hero__img-wrap">
          <div class="hero-visual">
            <!-- Panel 1: Account Intelligence -->
            <div class="hv-panel">
              <div class="hv-panel__label">Account Intelligence</div>
              <div class="hv-panel__title">Acme Corp — Entity 360</div>
              <div class="hv-row">
                <div class="hv-row__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A56CFF" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <div class="hv-row__text">
                  <div class="hv-row__name">CRM · Salesforce</div>
                  <div class="hv-row__sub">Deal: $240K · Renewal: 47 days</div>
                </div>
              </div>
              <div class="hv-row">
                <div class="hv-row__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A56CFF" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div class="hv-row__text">
                  <div class="hv-row__name">Email · 3 threads</div>
                  <div class="hv-row__sub">Last contact: 2 days ago</div>
                </div>
              </div>
              <div class="hv-row">
                <div class="hv-row__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F87171" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
                </div>
                <div class="hv-row__text">
                  <div class="hv-row__name" style="color:var(--error)">Support · P1 open</div>
                  <div class="hv-row__sub">Zendesk — 4 days unresolved</div>
                </div>
              </div>
              <div class="hv-row">
                <div class="hv-row__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <div class="hv-row__text">
                  <div class="hv-row__name" style="color:var(--warning)">Usage: −38%</div>
                  <div class="hv-row__sub">Product — 30 day trend</div>
                </div>
              </div>
            </div>

            <!-- Panel 2: Adaptive Spine -->
            <div class="hv-panel hv-panel--center">
              <div class="hv-panel__label" style="color:var(--primary-soft)">Adaptive Spine</div>
              <div class="hv-panel__title">Proactive Signal Engine</div>
              <div class="hv-signal">
                <div class="hv-signal__dot"></div>
                <div class="hv-signal__text"><strong style="color:var(--text-primary)">Churn Risk: HIGH</strong><br>P1 ticket + usage drop + billing delay correlate at 94% confidence</div>
              </div>
              <div class="hv-signal" style="background:rgba(165,108,255,0.06);border-color:rgba(165,108,255,0.15);">
                <div class="hv-signal__dot" style="background:var(--primary)"></div>
                <div class="hv-signal__text"><strong style="color:var(--text-primary)">Renewal Risk</strong><br>47 days to expiry — no QBR scheduled, champion role change detected</div>
              </div>
              <div style="margin-top:12px;">
                <div class="hv-spine-line" v-for="item in spineLines" :key="item.label" :style="{ opacity: item.opacity }">
                  <div class="hv-spine-node"></div>
                  <div class="hv-spine-bar"></div>
                  <div class="hv-spine-label">{{ item.label }}</div>
                </div>
              </div>
            </div>

            <!-- Panel 3: HITL Approval -->
            <div class="hv-panel">
              <div class="hv-panel__label">Evidence + HITL Approval</div>
              <div class="hv-panel__title">AI Proposes. You Decide.</div>
              <div style="background:var(--bg-0);border-radius:8px;padding:10px;border:1px solid var(--border);margin-bottom:8px;">
                <div style="font-family:var(--font-mono);font-size:10px;color:var(--primary);font-weight:700;margin-bottom:6px;">PROPOSED ACTION</div>
                <div style="font-size:11px;color:var(--text-secondary);line-height:1.5;">Send executive outreach to Acme Corp VP — reference open P1, usage drop, and offer executive sponsor escalation path.</div>
              </div>
              <div style="background:var(--bg-0);border-radius:8px;padding:10px;border:1px solid rgba(251,191,36,0.15);margin-bottom:8px;">
                <div style="font-family:var(--font-mono);font-size:10px;color:var(--warning);margin-bottom:4px;">EVIDENCE CHAIN</div>
                <div style="font-size:10px;color:var(--text-faint);line-height:1.7;">
                  → Zendesk #4823: P1 open 4 days<br>
                  → Usage −38% (30d) via Product Analytics<br>
                  → Billing: Invoice #892 overdue 18 days<br>
                  → SF: Champion left Oct 14
                </div>
              </div>
              <div class="hv-metric">
                <div class="hv-metric__val">94%</div>
                <div class="hv-metric__label">Signal confidence</div>
              </div>
              <div class="hv-approve-btn">✓ Approve &amp; Send</div>
            </div>
          </div>
          <div class="hero-logos-bar">
            <span class="logo-strip__label">Connected to →</span>
            <span class="logo-item" v-for="logo in logos" :key="logo">{{ logo }}</span>
            <span class="logo-item" style="color:var(--primary);opacity:1;">+43 more</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROBLEM NARRATIVE -->
  <section class="section section--surface">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(3rem,6vw,5rem);align-items:start;">
        <div>
          <span class="label-tag">The Problem</span>
          <h2 style="font-size:var(--text-3xl);font-weight:900;letter-spacing:-0.03em;margin-bottom:var(--sp-5);line-height:1.15;">Your Tools Don't Talk.<br>Your AI Doesn't Know.</h2>
          <p style="font-size:var(--text-base);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-5);">
            The modern enterprise runs on 47+ disconnected tools. Every team has a different version of the truth. AI assistants hallucinate because they're working from fragments, not the full picture.
          </p>
          <p style="font-size:var(--text-base);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">
            Meanwhile, the signals that would predict a churned customer, a missed renewal, or a billing risk are buried across systems no single person can see at once.
          </p>
          <div style="background:var(--surface-1);border:1px solid var(--border-glass);border-radius:var(--r-xl);padding:var(--sp-6);border-left:3px solid var(--primary);">
            <p style="font-size:var(--text-lg);font-family:var(--font-display);font-weight:700;color:var(--text-primary);line-height:1.5;margin:0;">
              "We became human APIs — copying context between tools every 30 minutes, only to start from zero again."
            </p>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:var(--sp-4);">
          <div class="pain-card reveal" v-for="(pain, i) in painPoints" :key="i" :class="i > 0 ? `reveal-d${i}` : ''">
            <div class="pain-card__icon" v-html="pain.icon"></div>
            <h3>{{ pain.title }}</h3>
            <p>{{ pain.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- THE SOLUTION -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">The Solution</span>
        <h2>One Governed Spine. Complete Organizational Intelligence.</h2>
        <p>IntegrateWise is a Knowledge Workspace empowered by the Adaptive Spine — a unified intelligence layer that connects tools, data, conversations, and decisions. AI understands your context, reasons across systems, and proposes actions while you stay in control.</p>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal" v-for="(card, i) in solutionCards" :key="card.title" :class="i % 3 > 0 ? `reveal-d${i % 3}` : ''">
          <div class="card__icon" v-html="card.icon"></div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.desc }}</p>
          <router-link :to="card.to" class="role-card__link">Learn more →</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS STRIP -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">How It Works</span>
        <h2>Load → Store → Think → Act → Adjust → Repeat</h2>
        <p>The cognitive loop that turns fragmented data into governed action — with humans in control at every step.</p>
      </div>
      <div class="hiw-steps">
        <div class="hiw-step reveal" v-for="(step, i) in hiwSteps" :key="step.num" :class="i > 0 ? `reveal-d${i}` : ''">
          <div class="hiw-step__num">{{ step.num }}</div>
          <div class="hiw-step__name">{{ step.name }}</div>
          <div class="hiw-step__desc">{{ step.desc }}</div>
        </div>
      </div>
      <div class="text-center" style="margin-top:var(--sp-8);">
        <router-link :to="{ name: 'how-it-works' }" class="btn btn--outline">Explore Full Architecture →</router-link>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Real Outcomes</span>
        <h2>Evidence, Not Claims</h2>
        <p>Built by a 13-year MuleSoft architect. Validated on enterprise accounts. Real outcomes from real teams.</p>
      </div>
      <div class="stat-grid">
        <div class="stat-card reveal" v-for="(stat, i) in stats" :key="stat.value" :class="i > 0 ? `reveal-d${i}` : ''">
          <div class="stat-card__value">{{ stat.value }}</div>
          <div class="stat-card__label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- EXPLORE THE SITE -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Explore IntegrateWise</span>
        <h2>Built for Every Team</h2>
        <p>Solutions tailored to your role, industry, and operational challenge — all powered by the same Governed AI Spine.</p>
      </div>
      <div class="explore-grid">
        <router-link v-for="(card, i) in exploreCards" :key="card.title" :to="card.to" class="explore-card reveal" :class="i % 3 > 0 ? `reveal-d${i % 3}` : ''">
          <div class="explore-card__cat">{{ card.cat }}</div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.desc }}</p>
          <span class="explore-card__link">{{ card.link }}</span>
        </router-link>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <CtaSection
    title="The best way to understand IntegrateWise is to see it."
    description="Book a 30-minute demo. We'll show you the Spine, the evidence layer, and the HITL approval card working on real data — from your own connected systems."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'how-it-works' }" class="btn btn--ghost btn--lg">How It Works →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import HeroCanvas from '../components/HeroCanvas.vue'
import CtaSection from '../components/CtaSection.vue'
import { useReveal } from '../composables/useReveal.js'
import { useSeo } from '../composables/useSeo.js'

useReveal()
onMounted(() => {
  useSeo({ title: 'Knowledge Workspace with a Governed AI Spine', description: 'IntegrateWise connects CRM, email, support, billing, and product signals into one governed AI workspace. AI thinks in context. Actions wait for human approval.' })
  document.title = 'IntegrateWise — Knowledge Workspace Over the Spine and Powered by AI'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Stop being a human API. IntegrateWise connects every tool, preserves every conversation, and gives AI the full context it needs — while keeping you in control of every action.')
})

const spineLines = [
  { label: 'CRM', opacity: 1 },
  { label: 'Support', opacity: 0.5 },
  { label: 'Usage', opacity: 0.4 },
  { label: 'Billing', opacity: 0.3 },
]

const logos = ['Salesforce', 'HubSpot', 'Zendesk', 'Stripe', 'Jira', 'Slack', 'Gmail']

const painPoints = [
  {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>`,
    title: 'You Are the Human API',
    desc: 'Copy–paste–export–import, again and again. Work lives across Notion, Slack, CRM, email, billing, and AI chats — and you are the connector between all of them.',
  },
  {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    title: 'AI Without Context Is Noise',
    desc: 'AI assistants hallucinate because they work from fragments. Without the full picture, every suggestion is a guess dressed up as confidence.',
  },
  {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    title: 'Actions Without Governance',
    desc: 'Most AI tools either hallucinate without evidence or execute autonomously. Neither is acceptable when real decisions and real money are at stake.',
  },
]

const solutionCards = [
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
    title: 'Adaptive Spine',
    desc: 'One adaptive knowledge layer that normalizes structured and unstructured data from every connected system. The single source of truth your organization never had.',
    to: { name: 'product-spine' },
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    title: 'Proactive Signal Engine',
    desc: 'Detect cross-system risk patterns weeks before they become visible. Churn signals, renewal risk, billing anomalies, and support escalation patterns — correlated automatically.',
    to: { name: 'product-signals' },
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: 'Evidence + HITL Approval Cards',
    desc: 'Every AI proposal comes with a traceable evidence chain. You see the reasoning. You approve or reject. Nothing executes without explicit human sign-off.',
    to: { name: 'product-approvals' },
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    title: 'Entity 360',
    desc: 'A complete, always-current view of every account, customer, and deal — assembled automatically from CRM, email, support, billing, and product signals.',
    to: { name: 'product-entity-360' },
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    title: 'Memory & Re-ingestion',
    desc: 'AI sessions, approved actions, and decisions become persistent organizational memory. The system gets smarter with every interaction — compounding intelligence over time.',
    to: { name: 'product-memory' },
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    title: 'Transparency & Governance',
    desc: 'Full audit trail. RBAC controls. BYOK encryption. Immutable logs. A truth boundary that ensures AI never writes directly to your source of truth.',
    to: { name: 'evidence' },
  },
]

const hiwSteps = [
  { num: '01', name: 'Load', desc: 'Connect 50+ systems via native connectors. Structured data, unstructured content, and AI sessions flow into the pipeline.' },
  { num: '02', name: 'Store', desc: 'The Adaptive Spine normalizes entities and relationships into a single source of truth. Entity 360 assembles the complete view.' },
  { num: '03', name: 'Think', desc: 'AI reasons over the full picture — structured records, unstructured context, and past conversations. Generates insights, risks, and proposals.' },
  { num: '04', name: 'Act', desc: 'Twin Agent works proactively alongside you — providing signals, insights, suggestions, warnings, and executing approved workflows.' },
  { num: '05', name: 'Adjust', desc: 'Every AI proposal is a reviewable card with evidence. You approve, edit, or reject. AI never writes without explicit human consent.' },
  { num: '06', name: 'Repeat', desc: 'Actions are re-ingested back into the Spine. Entity 360 stays current. AI learns from what actually happened. The loop compounds.' },
]

const stats = [
  { value: '$8M', label: 'Revenue protected in a single account renewal' },
  { value: '18%', label: 'Churn reduction in 90 days for CS teams' },
  { value: '60s', label: 'First value: complete Account 360 in under a minute' },
  { value: '60%', label: 'Reduction in escalation response time' },
]

const exploreCards = [
  { cat: 'By Role', title: 'For Founders & Owners', desc: 'Run your entire business from one governed workspace — live views across sales, customers, support, and finance.', link: 'Explore →', to: { name: 'role', params: { role: 'founder' } } },
  { cat: 'By Role', title: 'For Account Success & CSMs', desc: 'Full account context, proactive churn signals, and HITL-governed outreach — stop reacting and start protecting revenue.', link: 'Explore →', to: { name: 'role', params: { role: 'account-success' } } },
  { cat: 'By Role', title: 'For CIO / IT Leadership', desc: 'Enterprise governance for AI without the risk. RBAC, tenant isolation, BYOK, full audit trails.', link: 'Explore →', to: { name: 'role', params: { role: 'cio' } } },
  { cat: 'By Industry', title: 'For SaaS & B2B Teams', desc: 'Retention intelligence, renewal signals, and account context. Detect at-risk accounts 30 days before renewal.', link: 'Explore →', to: { name: 'industry', params: { industry: 'saas' } } },
  { cat: 'Module', title: 'CS Command Center', desc: 'Health scores, churn signals, renewal calendar, QBR intelligence, and HITL-governed outreach — in one workspace.', link: 'Explore →', to: { name: 'module', params: { module: 'cs-command-center' } } },
  { cat: 'Company', title: 'Our Story', desc: 'Built by a 13-year MuleSoft architect who lived the problem. We built IntegrateWise because we had to.', link: 'Read Our Story →', to: { name: 'our-story' } },
]
</script>

<style scoped>
/* Hero visual */
.hero-visual {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 12px;
  padding: 24px;
  background: var(--bg-0);
  border-radius: 20px 20px 0 0;
  border: 1px solid var(--border);
  border-bottom: none;
  box-shadow: 0 -20px 80px rgba(165,108,255,0.12);
  min-height: 360px;
  position: relative;
  overflow: hidden;
}
.hero-visual::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(165,108,255,0.08) 0%, transparent 70%);
  pointer-events: none;
}
@media (max-width: 860px) { .hero-visual { grid-template-columns: 1fr; } }

.hv-panel {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
  position: relative;
  overflow: hidden;
}
.hv-panel--center {
  background: var(--surface-1);
  border-color: var(--border-glass);
  box-shadow: 0 0 40px rgba(165,108,255,0.10);
}
.hv-panel__label {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-faint);
  margin-bottom: 10px;
}
.hv-panel__title {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}
.hv-row {
  display: flex; align-items: center; gap: 8px;
  padding: 8px; background: var(--bg-0);
  border-radius: 8px; margin-bottom: 6px;
  border: 1px solid var(--border);
}
.hv-row__icon {
  width: 28px; height: 28px;
  border-radius: 6px;
  background: rgba(165,108,255,0.12);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.hv-row__text { font-size: 11px; }
.hv-row__name { color: var(--text-secondary); font-weight: 600; }
.hv-row__sub { color: var(--text-faint); font-size: 10px; }
.hv-metric { text-align: center; padding: 12px 0; }
.hv-metric__val {
  font-size: 28px; font-weight: 900;
  color: var(--primary); letter-spacing: -0.03em;
  font-family: var(--font-display);
}
.hv-metric__label { font-size: 11px; color: var(--text-faint); margin-top: 4px; }
.hv-signal {
  display: flex; align-items: flex-start; gap: 8px;
  padding: 8px; border-radius: 8px;
  background: rgba(251,191,36,0.06);
  border: 1px solid rgba(251,191,36,0.15);
  margin-bottom: 6px;
}
.hv-signal__dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--warning);
  margin-top: 3px; flex-shrink: 0;
}
.hv-signal__text { font-size: 11px; color: var(--text-muted); line-height: 1.5; }
.hv-spine-line {
  display: flex; align-items: center; gap: 6px;
  margin-bottom: 6px;
}
.hv-spine-node {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--primary); opacity: 0.7;
}
.hv-spine-bar {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, var(--primary), transparent);
  opacity: 0.3;
}
.hv-spine-label {
  font-family: var(--font-mono); font-size: 10px;
  color: var(--text-faint);
}
.hv-approve-btn {
  display: flex; align-items: center; justify-content: center;
  gap: 6px; width: 100%; padding: 8px;
  background: rgba(74,222,128,0.10);
  border: 1px solid rgba(74,222,128,0.25);
  border-radius: 8px; margin-top: 8px;
  font-size: 11px; font-weight: 600;
  color: #4ADE80;
  font-family: var(--font-mono);
}
.hero-logos-bar {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-top: none;
  border-radius: 0 0 20px 20px;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}

/* Pain cards */
.pain-card {
  background: var(--surface-0);
  border: 1px solid rgba(248,113,113,0.15);
  border-radius: var(--r-xl);
  padding: var(--sp-6);
}
.pain-card__icon {
  width: 36px; height: 36px; border-radius: var(--r-md);
  background: rgba(248,113,113,0.10);
  border: 1px solid rgba(248,113,113,0.20);
  display: flex; align-items: center; justify-content: center;
  color: var(--error); margin-bottom: var(--sp-4);
}
.pain-card h3 { font-size: var(--text-base); font-weight: 700; margin-bottom: var(--sp-2); }
.pain-card p { font-size: var(--text-sm); color: var(--text-muted); line-height: 1.65; }

/* HIW steps */
.hiw-steps {
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: var(--sp-4);
}
@media (max-width: 860px) { .hiw-steps { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 480px) { .hiw-steps { grid-template-columns: 1fr; } }
.hiw-step {
  padding: var(--sp-5);
  background: var(--surface-0);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  text-align: center;
  transition: all var(--transition);
}
.hiw-step:hover {
  border-color: var(--border-glass);
  box-shadow: var(--shadow-purple);
}
.hiw-step__num {
  font-family: var(--font-mono); font-size: var(--text-xs);
  color: var(--primary); font-weight: 700; margin-bottom: var(--sp-3);
  opacity: 0.7;
}
.hiw-step__name { font-size: var(--text-sm); font-weight: 700; margin-bottom: var(--sp-2); }
.hiw-step__desc { font-size: var(--text-xs); color: var(--text-muted); line-height: 1.6; }

/* Explore grid */
.explore-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: var(--sp-5);
}
@media (max-width: 860px) { .explore-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 600px) { .explore-grid { grid-template-columns: 1fr; } }
.explore-card {
  background: var(--surface-0);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  padding: var(--sp-6);
  display: flex; flex-direction: column;
  text-decoration: none;
  transition: all var(--transition);
}
.explore-card:hover {
  border-color: var(--border-glass);
  background: var(--surface-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-purple);
}
.explore-card__cat {
  font-family: var(--font-mono); font-size: var(--text-xs);
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--text-faint); margin-bottom: var(--sp-3);
}
.explore-card h3 { font-size: var(--text-base); font-weight: 700; margin-bottom: var(--sp-2); }
.explore-card p { font-size: var(--text-sm); color: var(--text-muted); line-height: 1.6; flex: 1; }
.explore-card__link {
  display: inline-flex; align-items: center; gap: var(--sp-2);
  font-size: var(--text-xs); font-weight: 600; color: var(--primary);
  font-family: var(--font-mono); text-transform: uppercase;
  letter-spacing: 0.06em; margin-top: var(--sp-5);
}
</style>
