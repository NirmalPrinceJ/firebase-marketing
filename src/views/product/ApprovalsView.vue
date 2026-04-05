<template>
  <PageHero
    tag="Product"
    title="HITL Approvals — AI Proposes. You Decide. Always."
    description="Every AI proposal comes with a full evidence chain assembled from your connected data. You review. You approve or reject. Nothing executes without explicit human sign-off."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Product', to: { name: 'product' } }, { label: 'HITL Approvals' }]"
  />

  <!-- Visual Approval Card Mock -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Governance Core</span>
        <h2>AI Proposes. You Decide.</h2>
        <p>Every AI-generated action proposal includes traceable evidence, clear reasoning, and requires explicit human approval before execution. No exceptions.</p>
      </div>

      <div style="max-width:640px;margin-inline:auto;" class="reveal">
        <div class="approval-card">
          <div class="approval-card__header">
            <span class="approval-card__badge">Proposal #1042</span>
            <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--warning);">⚡ High Confidence · 94%</span>
            <span style="margin-left:auto;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">2 min ago</span>
          </div>
          <h3>Executive Outreach — Acme Corp</h3>
          <p>Schedule a VP-level call within 48 hours to address renewal risk, open P1 ticket, and champion departure. Propose a QBR with executive sponsor.</p>

          <div class="approval-card__evidence">
            <div style="margin-bottom:var(--sp-2);color:var(--text-faint);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;font-size:10px;">Evidence Chain</div>
            <div><span class="signal">⚠</span> Usage dropped 18% over 30 days (Amplitude)</div>
            <div><span class="signal">⚠</span> Champion Sarah Chen left company 22 days ago (LinkedIn + CRM)</div>
            <div><span class="signal">⚠</span> P1 support ticket open 6 days, no resolution (Zendesk)</div>
            <div><span class="signal">⚠</span> Invoice overdue $12,400 — billing contact unresponsive (Stripe)</div>
            <div><span class="signal">⚠</span> Last executive email: 47 days ago (Gmail)</div>
            <div style="margin-top:var(--sp-2);color:var(--text-faint);">Renewal: Sep 14 · ARR: $420,000 · Risk: HIGH</div>
          </div>

          <div class="approval-card__actions">
            <button class="btn--approve">✓ Approve &amp; Execute</button>
            <button class="btn--reject">✕ Reject</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5-Step Flow -->
  <section class="section">
    <div class="container container--narrow">
      <div class="section-header reveal">
        <span class="label-tag">Approval Workflow</span>
        <h2>From signal to action — with you in control.</h2>
        <p>Every step is logged, traceable, and auditable. The human is never removed from the loop.</p>
      </div>
      <div class="flow-steps">
        <div class="flow-step reveal">
          <div class="flow-step__num">1</div>
          <div class="flow-step__content">
            <h3>Signal Detected</h3>
            <p>The Signal Engine identifies a pattern requiring attention — with confidence score and correlated data sources from all connected systems.</p>
          </div>
        </div>
        <div class="flow-step reveal reveal-d1">
          <div class="flow-step__num">2</div>
          <div class="flow-step__content">
            <h3>Evidence Assembled</h3>
            <p>AI gathers relevant data from all connected systems, building a complete evidence chain with citations, timestamps, and source attribution.</p>
          </div>
        </div>
        <div class="flow-step reveal reveal-d2">
          <div class="flow-step__num">3</div>
          <div class="flow-step__content">
            <h3>Proposal Generated</h3>
            <p>AI drafts a recommended action with full reasoning, expected outcome, confidence level, and suggested next steps — editable before approval.</p>
          </div>
        </div>
        <div class="flow-step reveal reveal-d3">
          <div class="flow-step__num">4</div>
          <div class="flow-step__content">
            <h3>Human Review</h3>
            <p>You see the evidence, edit the proposal if needed, and approve or reject with optional reasoning. Nothing executes without your explicit sign-off.</p>
          </div>
        </div>
        <div class="flow-step reveal reveal-d4">
          <div class="flow-step__num">5</div>
          <div class="flow-step__content">
            <h3>Execution &amp; Audit</h3>
            <p>Approved actions execute. Every decision is logged with identity, timestamp, full context, and outcome — feeding back into organizational memory.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 3 Principle Cards -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Design Principles</span>
        <h2>Built on three non-negotiables.</h2>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>Truth Boundary</h3>
          <p>AI reasoning is architecturally separated from your source data. Proposals live in Flow C — they cannot write to the Spine or any connected system without human approval.</p>
        </div>
        <div class="card reveal reveal-d1">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <h3>Full Transparency</h3>
          <p>Every proposal shows its complete evidence chain. You see exactly what data the AI used, where it came from, and why the action was recommended — no black boxes.</p>
        </div>
        <div class="card reveal reveal-d2">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          </div>
          <h3>Complete Audit Trail</h3>
          <p>Every approval, rejection, and edit is logged with identity, timestamp, and reasoning. Full compliance-ready audit trail — exportable, immutable, always available.</p>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="Governed AI you can actually trust."
    description="See the HITL approval workflow in action — and understand why it's the foundation of responsible AI at scale."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'how-it-works-governance' }" class="btn btn--ghost btn--lg">Governance Deep Dive →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHero from '../../components/PageHero.vue'
import CtaSection from '../../components/CtaSection.vue'
import { useSeo } from '../../composables/useSeo.js'

onMounted(() => {
  useSeo({
    title: 'HITL Approvals — AI Proposes. You Decide. Always.',
    description: 'Every AI proposal includes a full evidence chain and requires explicit human approval before execution. No black boxes. No autonomous AI actions. Full audit trail.'
  })
})
</script>
