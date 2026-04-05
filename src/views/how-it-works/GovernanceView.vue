<template>
  <PageHero
    tag="How It Works"
    title="Governance & HITL"
    description="How IntegrateWise ensures human control, audit trails, and compliance — without slowing down execution."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'How It Works', to: { name: 'how-it-works' } }, { label: 'Governance' }]"
  />

  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <h2>Governance That Doesn't Block</h2>
        <p>Every AI action is traceable, reviewable, and reversible. But the system is designed for speed — approvals are streamlined, context-rich, and mobile-friendly.</p>
      </div>
      
      <div class="card-grid card-grid--2">
        <div class="card reveal">
          <h3>Truth Boundary</h3>
          <p>AI never writes directly to source systems. All AI-generated content goes through HITL approval before execution. The Spine remains read-only from source data.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Evidence Chain</h3>
          <p>Every proposal includes citations to specific data points in connected systems. Click any claim to see the source data in context.</p>
        </div>
        <div class="card reveal reveal-d2">
          <h3>Immutable Audit Log</h3>
          <p>Every decision is logged with user identity, timestamp, IP, and full context. Write-once audit trail meets enterprise compliance requirements.</p>
        </div>
        <div class="card reveal reveal-d3">
          <h3>RBAC & Approval Workflows</h3>
          <p>Configurable approval chains by action type, account value, or risk level. Escalate high-stakes decisions to the right stakeholders automatically.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- HITL Flow -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">HITL Flow</span>
        <h2>Signal → Evidence → Proposal → Human Review → Execute → Audit</h2>
        <p>Every governed action follows the same six-stage flow — no shortcuts, no bypasses.</p>
      </div>
      <div style="max-width:700px;margin-inline:auto;">
        <div class="flow-steps">
          <div class="flow-step reveal">
            <div class="flow-step__num">1</div>
            <div class="flow-step__content">
              <h3>Signal</h3>
              <p>The Spine detects a pattern across connected systems — a usage drop, an overdue invoice, a champion departure — and flags it for AI reasoning.</p>
            </div>
          </div>
          <div class="flow-step reveal reveal-d1">
            <div class="flow-step__num">2</div>
            <div class="flow-step__content">
              <h3>Evidence</h3>
              <p>AI assembles a full evidence chain: source records, timestamps, corroborating signals, and confidence scores. Nothing is asserted without citation.</p>
            </div>
          </div>
          <div class="flow-step reveal reveal-d2">
            <div class="flow-step__num">3</div>
            <div class="flow-step__content">
              <h3>Proposal</h3>
              <p>AI generates a structured HITL Approval Card — proposed action, reasoning, evidence panel, and risk assessment. Queued for human review.</p>
            </div>
          </div>
          <div class="flow-step reveal reveal-d3">
            <div class="flow-step__num">4</div>
            <div class="flow-step__content">
              <h3>Human Review</h3>
              <p>The right stakeholder sees the card with full context. They approve, edit, or reject. The system waits. Nothing executes without explicit sign-off.</p>
            </div>
          </div>
          <div class="flow-step reveal">
            <div class="flow-step__num">5</div>
            <div class="flow-step__content">
              <h3>Execute</h3>
              <p>On approval, the action executes against the specific target system specified in the card. Scope is locked — no action beyond what was approved.</p>
            </div>
          </div>
          <div class="flow-step reveal reveal-d1">
            <div class="flow-step__num">6</div>
            <div class="flow-step__content">
              <h3>Audit</h3>
              <p>The full chain — signal, evidence, proposal, decision, execution — is written to the immutable audit log with cryptographic integrity verification.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Governance Principles -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Governance Principles</span>
        <h2>Four principles that make governance real</h2>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal">
          <h3>No Autonomous Writes</h3>
          <p>The Truth Boundary is enforced at the storage layer. AI reasoning (Flow C) cannot write to the Spine or any connected system — ever. This is architectural, not configurable.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Evidence Before Action</h3>
          <p>Every proposal must include a complete evidence chain before it reaches a human reviewer. Proposals without citations are rejected at the system level.</p>
        </div>
        <div class="card reveal">
          <h3>Scoped Execution</h3>
          <p>Approved actions execute only against the specific target and scope defined in the approval card. Scope creep is architecturally impossible.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Immutable Record</h3>
          <p>Every decision — approve, reject, edit, expire — is written to an append-only audit log with cryptographic integrity. The record cannot be altered after the fact.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Audit Log Terminal -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Audit Trail</span>
        <h2>What the audit log captures</h2>
      </div>
      <div style="max-width:700px;margin-inline:auto;" class="reveal">
        <div class="terminal-card">
          <div class="terminal-card__header">
            <div class="terminal-card__dot"></div><div class="terminal-card__dot"></div><div class="terminal-card__dot"></div>
            <span class="terminal-card__title">Audit Log Entry — HITL Decision</span>
          </div>
          <div class="terminal-card__body">
            <span class="comment">// Audit entry: 2024-03-15T14:32:07Z</span><br>
            <span class="key">event_type</span>: <span class="val">hitl_approval_decision</span><br>
            <span class="key">proposal_id</span>: <span class="val">prop_8f3a2c1d</span><br>
            <span class="key">action_type</span>: <span class="val">send_renewal_email</span><br>
            <span class="key">target_account</span>: <span class="val">acme-corp</span><br>
            <span class="key">decision</span>: <span class="val">approved</span><br>
            <span class="key">reviewer</span>: <span class="val">sarah.chen@company.com</span><br>
            <span class="key">reviewer_role</span>: <span class="val">csm</span><br>
            <span class="key">ip_address</span>: <span class="val">192.168.1.42</span><br>
            <span class="key">evidence_chain_id</span>: <span class="val">ev_9b4d7e2f</span><br>
            <span class="key">execution_status</span>: <span class="val">completed</span><br>
            <span class="key">integrity_hash</span>: <span class="val">sha256:a3f8c...</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="See governance in action on your data."
    description="Book a demo — we'll walk through a live HITL approval flow with evidence chain and audit trail."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'how-it-works-evidence' }" class="btn btn--ghost btn--lg">Evidence Deep Dive →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSeo } from '../../composables/useSeo.js'
import PageHero from '../../components/PageHero.vue'
import CtaSection from '../../components/CtaSection.vue'
onMounted(() => useSeo({ title: 'Governance & HITL', description: 'How IntegrateWise ensures human control, audit trails, and compliance — the Signal → Evidence → Proposal → Human Review → Execute → Audit governance flow.' }))
</script>