<template>
  <PageHero
    tag="How It Works"
    title="One Pipeline. Three Flows. Governed Intelligence."
    description="Data from your CRM, messaging, email, billing, and support systems flows through an Adaptive Spine that acts as the single source of truth. AI thinks in context, proposes actions with evidence, and executes only with your approval."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'How It Works' }]"
  >
    <template #actions>
      <router-link :to="{ name: 'request-demo' }" class="btn btn--primary">Request a Demo</router-link>
      <router-link :to="{ name: 'how-it-works-architecture' }" class="btn btn--ghost">Architecture Deep Dive →</router-link>
    </template>
  </PageHero>

  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Core Flow</span>
        <h2>Load → Store → Think → Act → Adjust → Repeat</h2>
        <p>The cognitive loop that turns fragmented data into governed action — with humans in control at every step.</p>
      </div>

      <div class="hiw-steps">
        <div class="hiw-step reveal">
          <div class="hiw-step__num">01</div>
          <div class="hiw-step__name">Load</div>
          <div class="hiw-step__desc">Connect 50+ systems via native connectors. Structured data, unstructured content, and AI sessions flow into the pipeline.</div>
        </div>
        <div class="hiw-step reveal reveal-d1">
          <div class="hiw-step__num">02</div>
          <div class="hiw-step__name">Store</div>
          <div class="hiw-step__desc">The Adaptive Spine normalizes entities and relationships into a single source of truth. Entity 360 assembles the complete view.</div>
        </div>
        <div class="hiw-step reveal reveal-d2">
          <div class="hiw-step__num">03</div>
          <div class="hiw-step__name">Think</div>
          <div class="hiw-step__desc">AI reasons over the full picture — structured records, unstructured context, and past conversations. Generates insights, risks, and proposals.</div>
        </div>
        <div class="hiw-step reveal reveal-d3">
          <div class="hiw-step__num">04</div>
          <div class="hiw-step__name">Act</div>
          <div class="hiw-step__desc">Twin Agent works proactively alongside you — providing signals, insights, suggestions, warnings, and executing approved workflows.</div>
        </div>
        <div class="hiw-step reveal reveal-d4">
          <div class="hiw-step__num">05</div>
          <div class="hiw-step__name">Adjust</div>
          <div class="hiw-step__desc">Every AI proposal is a reviewable card with evidence. You approve, edit, or reject. AI never writes without explicit human consent.</div>
        </div>
        <div class="hiw-step reveal">
          <div class="hiw-step__num">06</div>
          <div class="hiw-step__name">Repeat</div>
          <div class="hiw-step__desc">Actions are re-ingested back into the Spine. Entity 360 stays current. AI learns from what actually happened. The loop compounds.</div>
        </div>
      </div>
    </div>
  </section>

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
          <p>CRM records, billing transactions, support tickets, usage metrics. Passes through the 8-stage normalization pipeline → Spine → Entity 360.</p>
        </div>
        <div class="card reveal reveal-d1" style="border-left:3px solid var(--blue);">
          <span class="label-tag">Flow B</span>
          <h3>Unstructured Content</h3>
          <p>Email threads, documents, Slack messages, meeting notes. Processed into the Context Store and linked to entities. 8-stage pipeline → Spine (linking) + Context Store.</p>
        </div>
        <div class="card reveal reveal-d2" style="border-left:3px solid var(--warning);">
          <span class="label-tag">Flow C</span>
          <h3>AI Sessions</h3>
          <p>AI chats and MCP interactions. <strong>Never writes to Spine.</strong> Accumulates in Knowledge UI only. Read-only access for context-aware AI — no external writes permitted.</p>
        </div>
      </div>

      <div style="margin-top:var(--sp-10);padding:var(--sp-6);background:var(--surface-0);border-radius:var(--r-xl);text-align:center;">
        <p style="font-size:var(--text-lg);color:var(--text-muted);">
          <strong style="color:var(--text-primary);">Convergence Point:</strong> Spine UI + Context UI + Knowledge UI → 
          <span style="color:var(--primary);font-weight:700;">Entity 360 (Read-Only)</span>
        </p>
        <p style="font-size:var(--text-sm);color:var(--text-faint);margin-top:var(--sp-3);">
          Entity 360 never writes data anywhere. All insights and actions flow <em>from</em> it, not into it.
        </p>
      </div>
    </div>
  </section>

  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Key Surfaces</span>
        <h2>What you actually use</h2>
      </div>

      <div class="card-grid card-grid--2" style="max-width:800px;margin-inline:auto;">
        <div class="card reveal">
          <span class="label-tag">Tier 1 — Flagship</span>
          <h3>Account 360</h3>
          <p>Auto-assembled brief for every account — CRM, email, support, product usage. Always current. Never built manually.</p>
        </div>
        <div class="card reveal reveal-d1">
          <span class="label-tag">Tier 1 — Flagship</span>
          <h3>Proactive Signal Engine</h3>
          <p>The Spine watches every connected system. When risk emerges, it surfaces — with evidence — weeks before your QBR.</p>
        </div>
        <div class="card reveal">
          <span class="label-tag">Tier 1 — Flagship</span>
          <h3>HITL Approval Card</h3>
          <p>Every AI action is a proposal first: evidence panel, reasoning chain, and clear controls to approve, edit, or reject. Nothing executes without you.</p>
        </div>
        <div class="card reveal reveal-d1">
          <span class="label-tag">Tier 2 — Value</span>
          <h3>The Cognitive Loop</h3>
          <p>Load → Store → Think → Act → Adjust → Repeat. Data flows in, the Spine normalizes it, AI reasons over it, humans govern every action, and outcomes feed back into the loop.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Deep Dives</span>
        <h2>Explore the architecture</h2>
      </div>
      <div class="card-grid card-grid--3">
        <router-link :to="{ name: 'how-it-works-architecture' }" class="card reveal" style="text-decoration:none;">
          <h3>Architecture & Data Flows</h3>
          <p>Full technical architecture: the three-layer pipeline, flow boundaries, entity schema design, and integration topology.</p>
          <span class="role-card__link">Deep Dive →</span>
        </router-link>
        <router-link :to="{ name: 'how-it-works-governance' }" class="card reveal reveal-d1" style="text-decoration:none;">
          <h3>Governance & HITL</h3>
          <p>The Cognitive Loop: how AI reasoning, evidence assembly, human review, and action execution work together.</p>
          <span class="role-card__link">Deep Dive →</span>
        </router-link>
        <router-link :to="{ name: 'how-it-works-evidence' }" class="card reveal reveal-d2" style="text-decoration:none;">
          <h3>Evidence & Audit Trail</h3>
          <p>How evidence is assembled, what the audit trail captures, and how it supports compliance and accountability.</p>
          <span class="role-card__link">Deep Dive →</span>
        </router-link>
      </div>
    </div>
  </section>

  <CtaSection
    title="See the architecture working on your data."
    description="Book a technical demo — we'll walk through Load → Store → Think → Act with a live account."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'security' }" class="btn btn--ghost btn--lg">Security →</router-link>
  </CtaSection>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import CtaSection from '../../components/CtaSection.vue'
</script>