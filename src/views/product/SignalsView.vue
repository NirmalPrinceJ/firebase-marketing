<template>
  <PageHero
    tag="Product"
    title="Signal Engine — See Risk Before It Becomes Reality"
    description="Cross-system risk pattern detection — churn signals, renewal risk, billing anomalies, and support escalation patterns surfaced weeks before they're visible."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Product', to: { name: 'product' } }, { label: 'Signal Engine' }]"
  />

  <!-- Stat Bar -->
  <section class="section section--surface" style="padding-block:var(--sp-8);">
    <div class="container">
      <div class="stat-grid reveal" style="grid-template-columns:repeat(3,1fr);margin-block:0;">
        <div class="stat-card">
          <div class="stat-card__value gradient-text">~30 days</div>
          <div class="stat-card__label">Earlier Detection</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value gradient-text">94%</div>
          <div class="stat-card__label">Signal Confidence</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value gradient-text">Cross-system</div>
          <div class="stat-card__label">Correlated Patterns</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Signal Type Cards with colored left borders -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Proactive Detection</span>
        <h2>See Risk Before It Becomes Churn</h2>
        <p>The Signal Engine continuously monitors all connected systems for patterns that predict churn, renewal risk, and escalation — correlating weak signals into strong predictions.</p>
      </div>

      <div class="card-grid card-grid--2" style="margin-top:var(--sp-10);">
        <div class="card reveal" style="border-left:3px solid var(--error);padding-left:calc(var(--sp-6) - 3px);">
          <div style="display:flex;align-items:center;gap:var(--sp-3);margin-bottom:var(--sp-4);">
            <div class="card__icon" style="margin-bottom:0;background:rgba(248,113,113,0.10);border-color:rgba(248,113,113,0.25);color:var(--error);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--error);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Churn Risk</span>
          </div>
          <h3>Churn Risk Signals</h3>
          <p>Usage drops, support ticket sentiment, email responsiveness, and champion turnover — correlated into unified churn predictions with confidence scoring.</p>
          <div style="margin-top:var(--sp-4);padding:var(--sp-3) var(--sp-4);background:var(--bg-0);border-radius:var(--r-md);font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">
            <span style="color:var(--error);">↓ usage -18%</span> + <span style="color:var(--warning);">champion left</span> + <span style="color:var(--warning);">14d no reply</span> → <span style="color:var(--error);">HIGH RISK</span>
          </div>
          <p style="margin-top:var(--sp-3);font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">~30 days before visible churn</p>
        </div>

        <div class="card reveal reveal-d1" style="border-left:3px solid var(--warning);padding-left:calc(var(--sp-6) - 3px);">
          <div style="display:flex;align-items:center;gap:var(--sp-3);margin-bottom:var(--sp-4);">
            <div class="card__icon" style="margin-bottom:0;background:rgba(251,191,36,0.10);border-color:rgba(251,191,36,0.25);color:var(--warning);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--warning);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Renewal Risk</span>
          </div>
          <h3>Renewal Risk Detection</h3>
          <p>Contract expiration proximity, engagement gaps, product usage trends, and stakeholder mapping — surfaced 60–90 days before expiry, not 10.</p>
          <div style="margin-top:var(--sp-4);padding:var(--sp-3) var(--sp-4);background:var(--bg-0);border-radius:var(--r-md);font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">
            <span style="color:var(--warning);">renewal in 87d</span> + <span style="color:var(--warning);">no exec sponsor</span> + <span style="color:var(--error);">usage flat</span> → <span style="color:var(--warning);">RENEWAL RISK</span>
          </div>
          <p style="margin-top:var(--sp-3);font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">60–90 days before expiry</p>
        </div>

        <div class="card reveal" style="border-left:3px solid var(--primary);padding-left:calc(var(--sp-6) - 3px);">
          <div style="display:flex;align-items:center;gap:var(--sp-3);margin-bottom:var(--sp-4);">
            <div class="card__icon" style="margin-bottom:0;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            </div>
            <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Billing Anomaly</span>
          </div>
          <h3>Billing Anomaly Alerts</h3>
          <p>Invoice aging, payment delays, and billing contact changes — connected to account context for intelligent collections prioritization and proactive outreach.</p>
          <div style="margin-top:var(--sp-4);padding:var(--sp-3) var(--sp-4);background:var(--bg-0);border-radius:var(--r-md);font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">
            <span style="color:var(--error);">invoice overdue $12,400</span> + <span style="color:var(--warning);">billing contact changed</span> → <span style="color:var(--primary);">ALERT</span>
          </div>
          <p style="margin-top:var(--sp-3);font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">Same-day alerts</p>
        </div>

        <div class="card reveal reveal-d1" style="border-left:3px solid var(--blue);padding-left:calc(var(--sp-6) - 3px);">
          <div style="display:flex;align-items:center;gap:var(--sp-3);margin-bottom:var(--sp-4);">
            <div class="card__icon" style="margin-bottom:0;background:rgba(93,134,216,0.10);border-color:rgba(93,134,216,0.25);color:var(--blue);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--blue);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Escalation</span>
          </div>
          <h3>Escalation Patterns</h3>
          <p>Support ticket velocity, severity clustering, and cross-channel sentiment — predicting escalation before it happens and routing to the right team automatically.</p>
          <div style="margin-top:var(--sp-4);padding:var(--sp-3) var(--sp-4);background:var(--bg-0);border-radius:var(--r-md);font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">
            <span style="color:var(--warning);">3 tickets in 48h</span> + <span style="color:var(--error);">P1 open</span> + <span style="color:var(--warning);">negative sentiment</span> → <span style="color:var(--blue);">ESCALATION RISK</span>
          </div>
          <p style="margin-top:var(--sp-3);font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">24–48 hours early</p>
        </div>
      </div>
    </div>
  </section>

  <!-- How signals are detected -->
  <section class="section section--surface">
    <div class="container container--narrow">
      <div class="section-header reveal">
        <span class="label-tag">Detection Pipeline</span>
        <h2>How signals are detected</h2>
        <p>The Signal Engine runs continuously across all connected systems, correlating weak signals into high-confidence predictions.</p>
      </div>
      <div class="flow-steps">
        <div class="flow-step reveal">
          <div class="flow-step__num">1</div>
          <div class="flow-step__content">
            <h3>Continuous Monitoring</h3>
            <p>Every connected system is monitored in real time — usage events, email activity, support tickets, billing changes, and CRM updates all feed the engine.</p>
          </div>
        </div>
        <div class="flow-step reveal reveal-d1">
          <div class="flow-step__num">2</div>
          <div class="flow-step__content">
            <h3>Pattern Matching</h3>
            <p>Predefined and learned signal patterns are matched against incoming data. Weak signals are weighted and correlated across systems.</p>
          </div>
        </div>
        <div class="flow-step reveal reveal-d2">
          <div class="flow-step__num">3</div>
          <div class="flow-step__content">
            <h3>Confidence Scoring</h3>
            <p>Each signal is assigned a confidence score based on the number of correlated data points, recency, and historical accuracy for your organization.</p>
          </div>
        </div>
        <div class="flow-step reveal reveal-d3">
          <div class="flow-step__num">4</div>
          <div class="flow-step__content">
            <h3>Proposal Generation</h3>
            <p>High-confidence signals trigger AI proposal generation — a recommended action with full evidence chain, routed to the HITL approval queue.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="Stop reacting. Start detecting."
    description="See the Signal Engine running on real data — and find the risks hiding in plain sight across your systems."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'approvals' }" class="btn btn--ghost btn--lg">See HITL Approvals →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHero from '../../components/PageHero.vue'
import CtaSection from '../../components/CtaSection.vue'
import { useSeo } from '../../composables/useSeo.js'

onMounted(() => {
  useSeo({
    title: 'Signal Engine — See Risk Before It Becomes Reality',
    description: 'The Signal Engine detects churn risk, renewal risk, billing anomalies, and escalation patterns ~30 days early by correlating signals across all connected systems.'
  })
})
</script>
