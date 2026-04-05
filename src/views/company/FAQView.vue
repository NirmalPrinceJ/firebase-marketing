<template>
  <section class="section" style="padding-top:120px;">
    <div class="container container--narrow">
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li>FAQ</li>
        </ol>
      </nav>
      
      <div class="page-hero__content">
        <span class="label-tag">FAQ</span>
        <h1>Frequently Asked Questions</h1>
        <p>Answers to the most common questions about IntegrateWise — what it is, how it works, how it integrates, and what makes it different.</p>
      </div>

      <div class="section-header reveal" style="text-align:left;margin-inline:0;max-width:100%;">
        <span class="label-tag">Product</span>
      </div>
      
      <div class="faq-list">
        <FaqItem question="What is IntegrateWise?">
          IntegrateWise is a Knowledge Workspace with a Governed AI Spine. It connects to your CRM, support desk, billing system, email, product analytics, and other tools — normalizes all the data into a single intelligent layer — and gives AI the full context it needs to reason accurately. AI proposes actions; humans approve every one before anything executes.
        </FaqItem>
        <FaqItem question="What is the &quot;Adaptive Spine&quot;?">
          The Adaptive Spine is IntegrateWise's core knowledge layer — a normalized, always-current entity graph that ingests data from all connected systems, resolves conflicts, maintains source provenance, and presents one authoritative view of every account, customer, or deal in your organization. It's the single source of truth your organization never had.
        </FaqItem>
        <FaqItem question="What is HITL, and why does it matter?">
          HITL stands for Human-in-the-Loop. In IntegrateWise, it means that every AI-proposed action — an email, a CRM update, a Slack notification — requires explicit human approval before it executes. The HITL Approval Card shows you the proposed action alongside its full evidence chain. You approve, reject, or edit. The system executes only on your approval. This is how AI earns trust: by showing its work and waiting for your decision.
        </FaqItem>
        <FaqItem question="What is the &quot;Truth Boundary&quot;?">
          The Truth Boundary is an architectural guarantee that AI reasoning (Flow C) never writes directly to the Spine or to any source system. It prevents AI hallucinations from contaminating your knowledge base. AI reasoning produces proposals — not facts. Only human-approved actions can write back to connected systems, and only to the specific target specified in the approval.
        </FaqItem>
      </div>

      <div class="section-header reveal" style="text-align:left;margin-inline:0;max-width:100%;margin-top:var(--sp-10);">
        <span class="label-tag">Integrations</span>
      </div>
      <div class="faq-list">
        <FaqItem question="What systems does IntegrateWise connect to?">
          IntegrateWise connects to 50+ systems via native connectors, including Salesforce, HubSpot, Zendesk, Intercom, Stripe, QuickBooks, Jira, GitHub, Slack, Gmail, Outlook, MS Teams, Notion, Google Drive, Dropbox, and many more. Custom integrations are supported via REST API and webhooks. If your system has an API, IntegrateWise can connect to it.
        </FaqItem>
        <FaqItem question="How does it work with MuleSoft?">
          IntegrateWise was designed by a 13-year MuleSoft architect. If your organization already uses MuleSoft, IntegrateWise integrates directly with your Anypoint layer — reading normalized data from your existing flows and adding the governed AI reasoning and HITL approval layer on top.
        </FaqItem>
        <FaqItem question="How long does setup take?">
          Most teams reach first value within 60 seconds of connecting their first system (the first Account 360 is visible immediately). Full organizational depth — with all systems connected and the Signal Engine running across all your accounts — typically takes 24 hours. There's no ETL setup, no custom data pipelines, and no data engineering required.
        </FaqItem>
      </div>

      <div class="section-header reveal" style="text-align:left;margin-inline:0;max-width:100%;margin-top:var(--sp-10);">
        <span class="label-tag">Security</span>
      </div>
      <div class="faq-list">
        <FaqItem question="Can AI act on my data without my knowledge?">
          No. This is the core architectural guarantee of IntegrateWise. No AI action executes without explicit human approval. The Truth Boundary prevents AI from writing to any system — connected source systems or the Spine itself. Every proposed action is queued for human review and remains pending until you approve, reject, or let it expire.
        </FaqItem>
        <FaqItem question="Do you support BYOK (bring your own keys)?">
          Yes. IntegrateWise supports BYOK via AWS KMS, Azure Key Vault, and Google Cloud KMS. You retain cryptographic control over all data at rest and in transit. IntegrateWise cannot access your encrypted data without your keys. Key rotation and revocation are in your hands.
        </FaqItem>
        <FaqItem question="Is my data shared with other customers?">
          No. IntegrateWise uses strict tenant isolation — your organization's data never shares compute, storage, or AI reasoning infrastructure with other tenants. Enterprise accounts receive dedicated processing nodes. Cross-tenant contamination is architecturally impossible.
        </FaqItem>
      </div>

      <div class="section-header reveal" style="text-align:left;margin-inline:0;max-width:100%;margin-top:var(--sp-10);">
        <span class="label-tag">Getting Started</span>
      </div>
      <div class="faq-list">
        <FaqItem question="How do I get started?">
          Request a demo. We'll schedule a 30-minute live session where we show you the Spine, the Signal Engine, and the HITL Approval Cards working on a demo account. If it's a fit, we'll scope a proof-of-concept with your actual stack. Most teams are live within days.
        </FaqItem>
        <FaqItem question="What does pricing look like?">
          Pricing is based on the number of connected systems, user seats, and modules activated. We offer flexible arrangements for teams at different stages. Contact us for a pricing conversation — we'd rather understand your situation than send a generic price sheet.
        </FaqItem>
      </div>
    </div>
  </section>

  <CtaSection
    title="Still have questions? We'd love to answer them live."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'contact' }" class="btn btn--ghost btn--lg">Contact Us →</router-link>
  </CtaSection>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CtaSection from '../../components/CtaSection.vue'
import FaqItem from '../../components/FaqItem.vue'

onMounted(() => {
  document.title = 'FAQ — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Answers to the most common questions about IntegrateWise — the Adaptive Spine, HITL approvals, integrations, security, and getting started.')
})
</script>