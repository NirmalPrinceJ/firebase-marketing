<template>
  <PageHero
    tag="How It Works"
    title="Evidence & Audit Trail"
    description="Full transparency into every AI decision, data source, and human approval — with traceability back to the source system."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'How It Works', to: { name: 'how-it-works' } }, { label: 'Evidence' }]"
  />

  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <h2>Trust Through Transparency</h2>
        <p>IntegrateWise shows its work. Every AI-generated insight includes a complete evidence chain — from raw data to final recommendation — that you can inspect, verify, and audit.</p>
      </div>
      
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <h3>Source Citations</h3>
          <p>Click any claim to see the exact data point it came from — including system of origin, record ID, and timestamp.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Reasoning Display</h3>
          <p>See how the AI connected the dots. The reasoning chain shows which signals were correlated and why they matter.</p>
        </div>
        <div class="card reveal reveal-d2">
          <h3>Confidence Scoring</h3>
          <p>Every prediction includes a confidence score based on data quality, recency, and corroboration across sources.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Evidence Chain Terminal -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Evidence Chain</span>
        <h2>What an evidence chain looks like</h2>
      </div>
      <div style="max-width:700px;margin-inline:auto;" class="reveal">
        <div class="terminal-card">
          <div class="terminal-card__header">
            <div class="terminal-card__dot"></div><div class="terminal-card__dot"></div><div class="terminal-card__dot"></div>
            <span class="terminal-card__title">Evidence Chain — Churn Risk Signal</span>
          </div>
          <div class="terminal-card__body">
            <span class="comment">// Signal: at_risk_renewal — Acme Corp</span><br>
            <span class="key">confidence</span>: <span class="val">0.87</span><br>
            <span class="key">evidence</span>: [<br>
            &nbsp;&nbsp;{<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="key">source</span>: <span class="val">zendesk</span>,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="key">record_id</span>: <span class="val">ticket_48291</span>,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="key">signal</span>: <span class="val">P1 open &gt; 14 days</span><br>
            &nbsp;&nbsp;},<br>
            &nbsp;&nbsp;{<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="key">source</span>: <span class="val">product_analytics</span>,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="key">signal</span>: <span class="val">DAU down 42% (30d)</span><br>
            &nbsp;&nbsp;},<br>
            &nbsp;&nbsp;{<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="key">source</span>: <span class="val">stripe</span>,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="key">signal</span>: <span class="val">invoice overdue 21 days</span><br>
            &nbsp;&nbsp;},<br>
            &nbsp;&nbsp;{<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="key">source</span>: <span class="val">salesforce</span>,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="key">signal</span>: <span class="val">champion departed</span><br>
            &nbsp;&nbsp;}<br>
            ]
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Transparency Layers -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Transparency Layers</span>
        <h2>Three layers of transparency in every decision</h2>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <h3>Data Layer</h3>
          <p>Every claim traces back to a specific record in a specific system — with record ID, field name, value, and timestamp. No black-box assertions.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Reasoning Layer</h3>
          <p>The AI's correlation logic is exposed: which signals were combined, what weight each carried, and why the pattern triggered a proposal.</p>
        </div>
        <div class="card reveal reveal-d2">
          <h3>Decision Layer</h3>
          <p>Every human decision — approve, reject, edit — is captured with reviewer identity, timestamp, and any modifications made before execution.</p>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="See the evidence chain working on a real account."
    description="Book a demo — we'll show you a live evidence chain from signal detection to HITL approval."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'how-it-works-governance' }" class="btn btn--ghost btn--lg">Governance Model →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSeo } from '../../composables/useSeo.js'
import PageHero from '../../components/PageHero.vue'
import CtaSection from '../../components/CtaSection.vue'
onMounted(() => useSeo({ title: 'Evidence & Audit Trail', description: 'Full transparency into every AI decision, data source, and human approval — with traceability back to the source system and immutable audit trail.' }))
</script>