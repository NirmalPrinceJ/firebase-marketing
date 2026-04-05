<template>
  <PageHero
    tag="Security & Control"
    title="Enterprise Security. Zero Autonomous Writes. Full Audit Trail."
    description="IntegrateWise is designed for organizations where data security and AI governance are non-negotiable. Every security control is architectural — not a configuration option, not a policy document, not a promise."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Security' }]"
  />

  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Security Architecture</span>
        <h2>Security controls summary</h2>
      </div>
      <div class="security-table-wrap reveal">
        <table class="security-table">
          <thead>
            <tr>
              <th>Control</th>
              <th>IntegrateWise</th>
              <th>Typical AI Tool</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Zero autonomous writes to source systems</td><td><span class="check-mark">✓ Architectural guarantee</span></td><td><span class="x-mark">✗ No guarantee</span></td></tr>
            <tr><td>HITL approval on every AI action</td><td><span class="check-mark">✓ All action types</span></td><td><span class="x-mark">✗ Optional / limited</span></td></tr>
            <tr><td>BYOK encryption (bring your own keys)</td><td><span class="check-mark">✓ AWS, Azure, GCP KMS</span></td><td><span class="x-mark">✗ Vendor-managed only</span></td></tr>
            <tr><td>Immutable audit trail</td><td><span class="check-mark">✓ Full chain of custody</span></td><td><span class="x-mark">✗ Limited or none</span></td></tr>
            <tr><td>Tenant isolation</td><td><span class="check-mark">✓ Dedicated compute</span></td><td><span class="x-mark">✗ Shared infrastructure</span></td></tr>
            <tr><td>Role-based access control (RBAC)</td><td><span class="check-mark">✓ Field-level granularity</span></td><td><span class="x-mark">✗ Coarse-grained</span></td></tr>
            <tr><td>Data residency options</td><td><span class="check-mark">✓ US, EU, custom</span></td><td><span class="x-mark">✗ US-only typically</span></td></tr>
            <tr><td>Truth boundary (AI can't contaminate knowledge base)</td><td><span class="check-mark">✓ Enforced at storage layer</span></td><td><span class="x-mark">✗ Not a concept</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Security Details</span>
        <h2>What each control means in practice</h2>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <h3>Zero Autonomous Writes</h3>
          <p>The Truth Boundary is enforced at the storage layer: AI reasoning (Flow C) cannot write to the Spine or to any connected system. Only approved actions can write back — and only to the specific target specified in the approval.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>BYOK Encryption</h3>
          <p>Bring your own keys via AWS KMS, Azure Key Vault, or Google Cloud KMS. All data at rest and in transit is encrypted with keys you control. IntegrateWise cannot access your data without your keys.</p>
        </div>
        <div class="card reveal reveal-d2">
          <h3>Tenant Isolation</h3>
          <p>Your organization's AI reasoning and data never shares compute with other tenants. Enterprise accounts get dedicated processing nodes. No cross-tenant contamination is possible.</p>
        </div>
        <div class="card reveal">
          <h3>RBAC</h3>
          <p>Role-based access control enforced at the Spine layer. Users see only the accounts, data, and actions authorized for their role. Field-level granularity available for sensitive data types.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Immutable Audit Trail</h3>
          <p>Every AI proposal, human decision, and executed action is logged with full chain of custody. The audit log uses append-only storage with cryptographic integrity verification — it cannot be modified.</p>
        </div>
        <div class="card reveal reveal-d2">
          <h3>Data Residency</h3>
          <p>Choose where your data is processed and stored. US and EU options available. Custom regional requirements supported for enterprise accounts. Data never leaves your chosen region.</p>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="Security built in from the first line of architecture."
    description="Request a security review call with our team — we'll walk through every control in detail and answer your specific compliance questions."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Security Review</router-link>
    <router-link :to="{ name: 'role', params: { role: 'cio' } }" class="btn btn--ghost btn--lg">CIO / IT Overview →</router-link>
  </CtaSection>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import CtaSection from '../../components/CtaSection.vue'
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Security — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Enterprise security built into the architecture. Zero autonomous AI writes, HITL on every action, BYOK encryption, immutable audit trails, and full tenant isolation.')
})
</script>