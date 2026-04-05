<template>
  <PageHero
    tag="Entity 360"
    title="Every Entity. Complete Context. Always Current."
    description="Entity 360 assembles the full picture of every account, contact, and deal — automatically, from every connected system. No manual work. No stale data."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Product', to: { name: 'product' } }, { label: 'Entity 360' }]"
  />

  <!-- ── PAIN ─────────────────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">The Problem</span>
        <h2>You open 5 tabs to answer one question.</h2>
        <p>Before every customer call, you're the human API — pulling context from CRM, checking email history, scanning support tickets, looking up billing status. It takes 15 minutes to answer a question that should take 15 seconds.</p>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <h3>Context Switching Tax</h3>
          <p>Every tab switch costs 23 minutes of focus. Multiply that by every customer interaction, every deal review, every QBR prep — and you're losing weeks of productive time every quarter.</p>
        </div>
        <div class="card reveal reveal-d1">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <h3>Stale Data, Wrong Decisions</h3>
          <p>CRM was last updated three weeks ago. The champion left. The P1 ticket is still open. You walk into the call blind — and the customer knows it. Trust erodes. Deals slip.</p>
        </div>
        <div class="card reveal reveal-d2">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <h3>AI Without Context</h3>
          <p>You ask your AI assistant about an account. It doesn't know the billing situation, the open ticket, or that the champion left last month. It gives you a generic answer. You're back to the tabs.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── TURNING POINT: VISUAL MOCK ───────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">The Solution</span>
        <h2>One view. Every signal. Assembled automatically.</h2>
        <p>Entity 360 pulls from every connected system and assembles the complete picture — before you even open the account. No manual work. No stale data. No missing context.</p>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(2rem,5vw,4rem);align-items:start;margin-top:var(--sp-10);">
        <div class="reveal">
          <div style="background:var(--bg-2);border:1px solid var(--border-glass);border-radius:var(--r-xl);overflow:hidden;box-shadow:var(--shadow-purple);">
            <div style="padding:var(--sp-4) var(--sp-5);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:var(--sp-3);background:var(--bg-3);">
              <span class="label-tag" style="margin-bottom:0;">Account 360</span>
              <span style="font-size:var(--text-sm);font-weight:700;color:var(--text-primary);">Acme Corp</span>
              <span style="margin-left:auto;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--warning);">⚠ High Risk</span>
            </div>
            <div style="padding:var(--sp-4) var(--sp-5);border-bottom:1px solid var(--divider);display:flex;align-items:center;gap:var(--sp-3);">
              <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);width:72px;flex-shrink:0;">CRM</span>
              <span style="font-size:var(--text-sm);color:var(--text-secondary);">ARR $420k · Renewal Sep 14 · Health <span style="color:var(--warning);">62/100</span></span>
            </div>
            <div style="padding:var(--sp-4) var(--sp-5);border-bottom:1px solid var(--divider);display:flex;align-items:center;gap:var(--sp-3);">
              <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);width:72px;flex-shrink:0;">Email</span>
              <span style="font-size:var(--text-sm);color:var(--text-secondary);">Last contact <span style="color:var(--warning);">14 days ago</span> · Champion left company</span>
            </div>
            <div style="padding:var(--sp-4) var(--sp-5);border-bottom:1px solid var(--divider);display:flex;align-items:center;gap:var(--sp-3);">
              <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);width:72px;flex-shrink:0;">Support</span>
              <span style="font-size:var(--text-sm);color:var(--text-secondary);"><span style="color:var(--error);">3 open tickets (1 P1)</span> · Escalation risk high</span>
            </div>
            <div style="padding:var(--sp-4) var(--sp-5);border-bottom:1px solid var(--divider);display:flex;align-items:center;gap:var(--sp-3);">
              <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);width:72px;flex-shrink:0;">Billing</span>
              <span style="font-size:var(--text-sm);color:var(--text-secondary);">Invoice <span style="color:var(--error);">overdue $12,400</span> · Usage ↓ 18%</span>
            </div>
            <div style="padding:var(--sp-4) var(--sp-5);border-bottom:1px solid var(--divider);display:flex;align-items:center;gap:var(--sp-3);">
              <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);width:72px;flex-shrink:0;">Usage</span>
              <span style="font-size:var(--text-sm);color:var(--text-secondary);">Sessions ↓ 31% · Core feature adoption <span style="color:var(--warning);">low</span></span>
            </div>
            <div style="padding:var(--sp-4) var(--sp-5);background:rgba(251,191,36,0.05);">
              <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--warning);">⚡ CHURN SIGNAL — 4 correlated signals · Proposed: Executive outreach (pending HITL)</span>
            </div>
          </div>
        </div>

        <div class="reveal reveal-d1">
          <h3 style="font-size:var(--text-xl);margin-bottom:var(--sp-5);color:var(--text-primary);letter-spacing:-0.02em;">What Entity 360 assembles — automatically</h3>
          <ul class="feature-list">
            <li>CRM records — account, contacts, opportunities, activities</li>
            <li>Email threads — sentiment, responsiveness, last contact date</li>
            <li>Support tickets — open issues, severity, escalation history</li>
            <li>Billing data — ARR, invoice aging, payment status</li>
            <li>Product usage — feature adoption, session frequency, health score</li>
            <li>Slack &amp; meeting notes — relationship context, key decisions</li>
            <li>Champion tracking — role changes, departures, new stakeholders</li>
            <li>Renewal calendar — contract dates, risk score, prep status</li>
          </ul>
          <p style="color:var(--text-muted);font-size:var(--text-sm);margin-top:var(--sp-5);">All assembled on demand. Sub-second performance. Never built manually.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── 4 ENTITY TYPES ────────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Entity Types</span>
        <h2>Four views. One unified layer.</h2>
        <p>Every entity type gets its own 360 view — assembled from the Spine, always current, always complete.</p>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <h3>Account 360</h3>
          <p>Full account intelligence: ARR, renewal dates, health scores, recent activity, key contacts, and risk signals — assembled from every connected system in real time.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>Revenue and contract details</li>
            <li>Usage and engagement trends</li>
            <li>Support history and escalations</li>
            <li>Communication threads and sentiment</li>
          </ul>
        </div>
        <div class="card reveal reveal-d1">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h3>Contact 360</h3>
          <p>Deep contact profiles that follow people across role changes: engagement history, relationship strength, influence patterns, and communication preferences.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>Role and title history</li>
            <li>Engagement frequency and recency</li>
            <li>Relationship network mapping</li>
            <li>Communication channel preferences</li>
          </ul>
        </div>
        <div class="card reveal">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <h3>Deal 360</h3>
          <p>Pipeline intelligence that surfaces what CRM alone misses: stakeholder mapping, competitive signals, budget verification, and timeline risk — all in one view.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>Multi-threading and stakeholder analysis</li>
            <li>Email sentiment and responsiveness</li>
            <li>Billing and contract signals</li>
            <li>Product usage correlation</li>
          </ul>
        </div>
        <div class="card reveal reveal-d1">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          </div>
          <h3>Dynamic Assembly</h3>
          <p>Entity 360 isn't a static snapshot. It's dynamically assembled from the Spine on every access — always current, always complete, always ready for AI reasoning.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>Sub-second query performance</li>
            <li>Automatic deduplication</li>
            <li>Cross-system identity resolution</li>
            <li>Read-only — AI cannot overwrite</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ── HOW IT'S BUILT ────────────────────────────────────────── -->
  <section class="section">
    <div class="container container--narrow">
      <div class="section-header reveal">
        <span class="label-tag">How It's Built</span>
        <h2>From raw data to complete context.</h2>
        <p>Entity 360 is assembled on demand from the Spine — a read-only view that AI can reason over but never modify.</p>
      </div>
      <div class="flow-steps">
        <div class="flow-step reveal">
          <div class="flow-step__num">1</div>
          <div class="flow-step__content">
            <h3>Adaptive Spine</h3>
            <p>All connected systems feed into the Spine — normalized, deduplicated, and resolved into canonical entities. The single source of truth for everything downstream.</p>
          </div>
        </div>
        <div class="flow-step reveal reveal-d1">
          <div class="flow-step__num">2</div>
          <div class="flow-step__content">
            <h3>Context Store</h3>
            <p>Unstructured content — emails, meeting notes, documents — is vectorized and linked to the right entities. Semantic search over your entire organizational memory.</p>
          </div>
        </div>
        <div class="flow-step reveal reveal-d2">
          <div class="flow-step__num">3</div>
          <div class="flow-step__content">
            <h3>Knowledge UI</h3>
            <p>The workspace layer that surfaces Entity 360 views, signal alerts, and AI proposals — assembled on demand, always current, always complete.</p>
          </div>
        </div>
        <div class="flow-step reveal reveal-d3">
          <div class="flow-step__num">4</div>
          <div class="flow-step__content">
            <h3>Entity 360 (Read-Only)</h3>
            <p>The assembled view your team and AI reason over. Architecturally read-only — AI proposals go through HITL approval before any system is touched. Truth boundary enforced.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── DAY ONE CHANGES ───────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Day One Impact</span>
        <h2>What changes the moment you connect.</h2>
        <p>From the first day the Spine is live, your team works differently — and your AI finally has the context it needs to be genuinely useful.</p>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <h3>Workspace Arrives Ready</h3>
          <p>Open any account and the full context is already there — CRM, email, support, billing, usage. No prep. No tab-switching. No manual assembly.</p>
        </div>
        <div class="card reveal reveal-d1">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <h3>Stop Searching</h3>
          <p>Every piece of context — emails, notes, tickets, contracts — is linked to the right entity and searchable semantically. Find anything in seconds, not minutes.</p>
        </div>
        <div class="card reveal reveal-d2">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <h3>AI Has Full Context</h3>
          <p>Your AI assistant knows the account history, the open tickets, the billing status, and the champion situation — before you ask. Answers are specific, not generic.</p>
        </div>
        <div class="card reveal">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
          </div>
          <h3>Risks Surface Early</h3>
          <p>The Signal Engine watches every entity continuously. Churn risk, renewal risk, billing anomalies — surfaced 30 days before they become visible in any single system.</p>
        </div>
        <div class="card reveal reveal-d1">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>Nothing Executes Without Approval</h3>
          <p>AI proposes. You decide. Every recommendation comes with a full evidence chain. Nothing touches a connected system without explicit human sign-off.</p>
        </div>
        <div class="card reveal reveal-d2">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <h3>AI Conversations Stop Disappearing</h3>
          <p>Every AI interaction is stored in organizational memory — linked to the right entities, searchable, and available to every team member. Context compounds over time.</p>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="See your accounts like never before."
    description="We'll build an Entity 360 view using your actual connected systems — live in the demo, on your real data."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'spine' }" class="btn btn--ghost btn--lg">How the Spine Works →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHero from '../../components/PageHero.vue'
import CtaSection from '../../components/CtaSection.vue'
import { useReveal } from '../../composables/useReveal.js'

useReveal()

onMounted(() => {
  document.title = 'Entity 360 — Every Entity. Complete Context. Always Current. | IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Entity 360 assembles the full picture of every account, contact, and deal — automatically, from every connected system. No manual work. No stale data. AI has the context it needs.')
})
</script>
