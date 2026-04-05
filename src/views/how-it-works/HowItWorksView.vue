<template>
  <PageHero
    tag="How It Works"
    title="Load → Store → Think → Act → Adjust → Repeat"
    description="Three data flows. One Adaptive Spine. A cognitive loop that turns fragmented data into governed action — with humans in control at every step."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'How It Works' }]"
  >
    <template #actions>
      <router-link :to="{ name: 'request-demo' }" class="btn btn--primary">Request a Demo</router-link>
      <router-link :to="{ name: 'how-it-works-architecture' }" class="btn btn--ghost">Architecture Deep Dive →</router-link>
    </template>
  </PageHero>

  <!-- ── PAIN: The Human API Problem ─────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">The Problem</span>
        <h2>You Are a Human API</h2>
        <p>Every 30 minutes, someone on your team copies context from one tool into another. CRM to Slack. Slack to email. Email to a doc. That doc into an AI chat that disappears tomorrow.</p>
      </div>

      <div class="card-grid card-grid--3">
        <div class="card reveal" style="border-top:2px solid var(--error);">
          <span class="label-tag" style="color:var(--error);background:rgba(248,113,113,0.08);border-color:rgba(248,113,113,0.25);">Pain Point</span>
          <h3>47+ Disconnected Tools</h3>
          <p>The average revenue team juggles 47 tools. Each one holds a fragment of the truth. No single person — or system — can see all of it at once.</p>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--warning);">
          <span class="label-tag" style="color:var(--warning);background:rgba(251,191,36,0.08);border-color:rgba(251,191,36,0.25);">Pain Point</span>
          <h3>AI Chats That Disappear</h3>
          <p>You spend 40 minutes building context in ChatGPT. You close the tab. It's gone. The next session starts from zero. Your institutional knowledge evaporates daily.</p>
        </div>
        <div class="card reveal reveal-d2" style="border-top:2px solid var(--primary);">
          <span class="label-tag">The Fix</span>
          <h3>One Adaptive Spine</h3>
          <p>IntegrateWise replaces the copy-paste loop with a governed knowledge layer. Your data flows in. AI reasons over it. Humans approve every action. The loop compounds.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── SOLUTION: Three Data Flows ──────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Three Data Flows</span>
        <h2>Structured, Unstructured, and AI — All Converging at Entity 360</h2>
        <p>Three distinct flows meet at the Entity 360 layer. The Truth Boundary ensures AI sessions never contaminate the Spine.</p>
      </div>

      <div class="card-grid card-grid--3">
        <div class="card reveal" style="border-left:3px solid var(--primary);">
          <span class="label-tag">Flow A</span>
          <h3>Structured Data</h3>
          <p>CRM records, billing transactions, support tickets, usage metrics. Passes through the normalization pipeline → Spine → Entity 360.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>Salesforce, HubSpot, Stripe</li>
            <li>Zendesk, Intercom, Jira</li>
            <li>Product analytics, billing systems</li>
          </ul>
        </div>
        <div class="card reveal reveal-d1" style="border-left:3px solid var(--blue);">
          <span class="label-tag" style="color:var(--blue);background:rgba(93,134,216,0.08);border-color:rgba(93,134,216,0.25);">Flow B</span>
          <h3>Unstructured Content</h3>
          <p>Email threads, documents, Slack messages, meeting notes. Processed into the Context Store and linked to entities in the Spine.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>Gmail, Outlook, Slack</li>
            <li>Notion, Confluence, Google Docs</li>
            <li>Meeting transcripts, call recordings</li>
          </ul>
        </div>
        <div class="card reveal reveal-d2" style="border-left:3px solid var(--warning);">
          <span class="label-tag" style="color:var(--warning);background:rgba(251,191,36,0.08);border-color:rgba(251,191,36,0.25);">Flow C</span>
          <h3>AI Sessions</h3>
          <p>ChatGPT, Claude, Gemini interactions. <strong style="color:var(--text-primary);">Never writes to the Spine.</strong> Accumulates in Knowledge UI only — read-only access, zero external writes.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>ChatGPT, Claude, Gemini</li>
            <li>MCP sessions, AI drafts</li>
            <li>Knowledge UI only — Truth Boundary enforced</li>
          </ul>
        </div>
      </div>

      <!-- Convergence callout -->
      <div class="reveal" style="margin-top:var(--sp-10);padding:var(--sp-8);background:var(--surface-1);border:1px solid var(--border-glass);border-radius:var(--r-2xl);text-align:center;position:relative;overflow:hidden;">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 0%,rgba(165,108,255,0.10) 0%,transparent 70%);pointer-events:none;"></div>
        <span class="label-tag" style="position:relative;">Convergence Point</span>
        <p style="font-size:var(--text-xl);font-weight:700;color:var(--text-primary);letter-spacing:-0.02em;margin-bottom:var(--sp-3);position:relative;">
          Spine UI + Context UI + Knowledge UI →
          <span class="gradient-text"> Entity 360 (Read-Only)</span>
        </p>
        <p style="font-size:var(--text-sm);color:var(--text-muted);max-width:560px;margin-inline:auto;position:relative;">
          Entity 360 never writes data anywhere. All insights and actions flow <em>from</em> it, not into it. The Truth Boundary is enforced at the storage layer.
        </p>
      </div>
    </div>
  </section>

  <!-- ── HOW: The 6-Step Cognitive Loop ──────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">The Cognitive Loop</span>
        <h2>Six Steps. One Continuous Loop.</h2>
        <p>Every action feeds back into the Spine. The system gets smarter with every cycle — and humans stay in control at every step.</p>
      </div>

      <div class="hiw-steps">
        <div class="hiw-step reveal">
          <div class="hiw-step__num">01</div>
          <div class="hiw-step__name">Load</div>
          <div class="hiw-step__desc">Connect 50+ systems via native connectors. Structured data (Flow A), unstructured content (Flow B), and AI sessions (Flow C) all enter the pipeline. Read-only by default — nothing writes back until HITL-approved.</div>
        </div>
        <div class="hiw-step reveal reveal-d1">
          <div class="hiw-step__num">02</div>
          <div class="hiw-step__name">Store</div>
          <div class="hiw-step__desc">The Adaptive Spine normalizes, deduplicates, and resolves entities into a single canonical knowledge layer. Entity 360 assembles the complete, always-current view of every account, contact, and relationship.</div>
        </div>
        <div class="hiw-step reveal reveal-d2">
          <div class="hiw-step__num">03</div>
          <div class="hiw-step__name">Think</div>
          <div class="hiw-step__desc">AI reasons over the full picture — structured records, unstructured context, and past AI sessions. Signals are correlated across systems. Insights, risks, and proposals are generated — not executed.</div>
        </div>
        <div class="hiw-step reveal reveal-d3">
          <div class="hiw-step__num">04</div>
          <div class="hiw-step__name">Act</div>
          <div class="hiw-step__desc">Twin Agent works proactively alongside you — surfacing signals, generating insights, and executing approved workflows across connected systems. Approved actions only, via HITL sign-off.</div>
        </div>
        <div class="hiw-step reveal">
          <div class="hiw-step__num">05</div>
          <div class="hiw-step__name">Adjust</div>
          <div class="hiw-step__desc">Every AI proposal is a reviewable card with a full evidence panel and reasoning chain. You approve, edit, or reject. Denied actions update decision memory and improve future proposals. AI never writes without explicit human consent.</div>
        </div>
        <div class="hiw-step reveal reveal-d1">
          <div class="hiw-step__num">06</div>
          <div class="hiw-step__name">Repeat</div>
          <div class="hiw-step__desc">Approved outcomes re-enter the Spine as new verified knowledge. Entity 360 stays current. AI learns from what actually happened. The loop compounds — every cycle makes the system smarter and your team faster.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── PROOF: Key Surfaces ──────────────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Key Surfaces</span>
        <h2>What You Actually Use Every Day</h2>
        <p>Three Tier 1 flagship surfaces that put the cognitive loop to work — without requiring you to think about the architecture underneath.</p>
      </div>

      <div class="card-grid card-grid--3">
        <div class="card reveal" style="border-top:2px solid var(--primary);">
          <span class="label-tag">Tier 1 — Flagship</span>
          <h3>Entity 360</h3>
          <p>Auto-assembled brief for every account — CRM, email, support, product usage, billing. Always current. Never built manually. The complete picture in one place.</p>
          <router-link :to="{ name: 'entity-360' }" class="role-card__link" style="margin-top:var(--sp-5);display:inline-flex;">Explore Entity 360 →</router-link>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--primary);">
          <span class="label-tag">Tier 1 — Flagship</span>
          <h3>Signal Engine</h3>
          <p>The Spine watches every connected system. When risk emerges — a usage drop, a missed invoice, a champion departure — it surfaces with evidence, weeks before your QBR.</p>
          <router-link :to="{ name: 'signals' }" class="role-card__link" style="margin-top:var(--sp-5);display:inline-flex;">Explore Signal Engine →</router-link>
        </div>
        <div class="card reveal reveal-d2" style="border-top:2px solid var(--primary);">
          <span class="label-tag">Tier 1 — Flagship</span>
          <h3>HITL Approval Card</h3>
          <p>Every AI action is a proposal first: evidence panel, reasoning chain, and clear controls to approve, edit, or reject. Nothing executes without you. Every decision is logged immutably.</p>
          <router-link :to="{ name: 'approvals' }" class="role-card__link" style="margin-top:var(--sp-5);display:inline-flex;">Explore Approvals →</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- ── PROOF: What Changes on Day One ──────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Day One Impact</span>
        <h2>What Changes the Moment You Connect</h2>
        <p>No multi-month implementation. No manual configuration. The moment you connect your first tool, the loop starts running.</p>
      </div>

      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <h3>Your workspace arrives ready</h3>
          <p>IntegrateWise starts building a living picture of your customers, accounts, and work — no manual setup required.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>You stop searching across tabs</h3>
          <p>Instead of hunting across five tools, you see the real story — context, relationships, and risks — in one governed place.</p>
        </div>
        <div class="card reveal reveal-d2">
          <h3>AI has your context before you ask</h3>
          <p>AI doesn't start from a blank prompt. It already knows your systems, entities, history, and relationships.</p>
        </div>
        <div class="card reveal">
          <h3>Risks surface before they become crises</h3>
          <p>The system detects patterns between tools — like the $8M renewal risk — and brings them to you with evidence attached.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Nothing executes without approval</h3>
          <p>AI proposes actions, but never bypasses governance. You stay in control of what gets written, changed, or pushed back to any system.</p>
        </div>
        <div class="card reveal reveal-d2">
          <h3>Your AI conversations stop disappearing</h3>
          <p>Brainstorms, analyses, and drafts are captured, governed, and linked back to the actual work and entities they affect.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── CTA: Deep Dives ──────────────────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Deep Dives</span>
        <h2>Go deeper on the architecture</h2>
        <p>Each deep dive covers a specific layer of the system — from data flow boundaries to governance infrastructure to audit trail design.</p>
      </div>
      <div class="card-grid card-grid--3">
        <router-link :to="{ name: 'how-it-works-architecture' }" class="card reveal" style="text-decoration:none;">
          <span class="label-tag">Architecture</span>
          <h3>Architecture & Data Flows</h3>
          <p>Full technical architecture: the three-layer pipeline, flow boundaries, entity schema design, and integration topology.</p>
          <span class="role-card__link" style="margin-top:var(--sp-4);display:inline-flex;">Deep Dive →</span>
        </router-link>
        <router-link :to="{ name: 'how-it-works-governance' }" class="card reveal reveal-d1" style="text-decoration:none;">
          <span class="label-tag">Governance</span>
          <h3>Governance & HITL</h3>
          <p>The Cognitive Loop: how AI reasoning, evidence assembly, human review, and action execution work together without bypassing control.</p>
          <span class="role-card__link" style="margin-top:var(--sp-4);display:inline-flex;">Deep Dive →</span>
        </router-link>
        <router-link :to="{ name: 'how-it-works-evidence' }" class="card reveal reveal-d2" style="text-decoration:none;">
          <span class="label-tag">Evidence</span>
          <h3>Evidence & Audit Trail</h3>
          <p>How evidence is assembled, what the audit trail captures, and how it supports compliance, accountability, and trust.</p>
          <span class="role-card__link" style="margin-top:var(--sp-4);display:inline-flex;">Deep Dive →</span>
        </router-link>
      </div>
    </div>
  </section>

  <CtaSection
    title="See the cognitive loop working on your data."
    description="Book a technical demo — we'll walk through Load → Store → Think → Act with a live account from your stack."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'security' }" class="btn btn--ghost btn--lg">Security & Trust →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHero from '../../components/PageHero.vue'
import CtaSection from '../../components/CtaSection.vue'
import { useReveal } from '../../composables/useReveal.js'

useReveal()

onMounted(() => {
  document.title = 'How It Works — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Three data flows, one Adaptive Spine, and a six-step cognitive loop: Load → Store → Think → Act → Adjust → Repeat. See how IntegrateWise turns fragmented data into governed AI action.')
})
</script>
