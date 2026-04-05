<template>
  <PageHero
    tag="Evidence & Transparency"
    title="Every AI Action. Explained. Traceable. Reviewable."
    description="IntegrateWise is built on the principle that AI earns trust through transparency — not through confidence. Every recommendation comes with its sources. Every decision is logged. Every action is human-approved."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Evidence & Trust' }]"
  />

  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">The Trust Architecture</span>
        <h2>Three layers of transparency</h2>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <h3>Evidence Chains</h3>
          <p>Every AI recommendation is backed by a structured evidence chain — specific source records, their record IDs, timestamps, and their contribution to the recommendation. You can trace any proposal back to its source data.</p>
        </div>
        <div class="card reveal reveal-d1">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>HITL Approval Layer</h3>
          <p>Every proposed action requires explicit human approval. The evidence chain is presented at the point of decision — so approval is always informed. Nothing executes without sign-off.</p>
        </div>
        <div class="card reveal reveal-d2">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <h3>Immutable Audit Trail</h3>
          <p>Every proposal, decision, and executed action is logged with the decision-maker's identity, timestamp, and evidence state. Immutable — cannot be edited or deleted after the fact.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">What the Audit Trail Captures</span>
        <h2>A complete chain of custody for every action</h2>
      </div>
      <div style="max-width:700px;margin-inline:auto;">
        <div class="terminal-card reveal">
          <div class="terminal-card__header">
            <div class="terminal-card__dot"></div><div class="terminal-card__dot"></div><div class="terminal-card__dot"></div>
            <span class="terminal-card__title">Audit Trail Entry #AT-2025-03-15-847</span>
          </div>
          <div class="terminal-card__body">
            <span class="key">event_type</span>: <span class="val">HITL_APPROVAL</span><br>
            <span class="key">timestamp</span>: <span class="val">2025-03-15T14:32:07Z</span><br>
            <span class="key">decision_maker</span>: <span class="val">sarah.chen@company.com</span><br>
            <span class="key">decision</span>: <span class="val">APPROVED</span><br>
            <span class="key">proposal_id</span>: <span class="val">"prop_847"</span><br>
            <span class="key">action_type</span>: <span class="val">EXECUTIVE_OUTREACH</span><br>
            <span class="key">target_account</span>: <span class="val">"Acme Corp"</span><br>
            <span class="key">evidence_sources</span>: <span class="val">4</span><br>
            <span class="key">evidence_confidence</span>: <span class="val">94%</span><br>
            <span class="key">execution_status</span>: <span class="val">COMPLETED</span><br>
            <span class="key">execution_timestamp</span>: <span class="val">2025-03-15T14:32:12Z</span><br>
            <span class="key">outcome_reingest_id</span>: <span class="val">"ri_2025-03-15-847"</span><br>
            <span class="key">immutable_hash</span>: <span class="val">sha256:a3f89d...</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="AI that shows its reasoning. Every single time."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'security' }" class="btn btn--ghost btn--lg">Security Details →</router-link>
  </CtaSection>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import CtaSection from '../../components/CtaSection.vue'
import { onMounted } from 'vue'
import { useReveal } from '../../composables/useReveal.js'

useReveal()
onMounted(() => {
  document.title = 'Evidence & Trust — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Every AI action is explained, traceable, and reviewable. Evidence chains, HITL approval, and immutable audit trails — trust built into the architecture.')
})
</script>