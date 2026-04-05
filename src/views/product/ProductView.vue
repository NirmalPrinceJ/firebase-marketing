<template>
  <!-- Show child route if navigated to a sub-page -->
  <router-view v-if="$route.name !== 'product'" />

  <!-- Product Overview -->
  <template v-else>
    <PageHero
      tag="Product"
      title="The Governed AI Spine"
      description="Six integrated layers that work together: a living knowledge spine, proactive signal detection, evidence-backed AI proposals, human-in-the-loop approvals, persistent memory, and 50+ native connectors."
      :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Product' }]"
    >
      <template #actions>
        <router-link :to="{ name: 'request-demo' }" class="btn btn--primary">Request a Demo</router-link>
        <router-link :to="{ name: 'how-it-works' }" class="btn btn--ghost">How It Works →</router-link>
      </template>
    </PageHero>

    <section class="section section--surface">
      <div class="container">
        <div class="section-header reveal">
          <span class="label-tag">Architecture Overview</span>
          <h2>Three Layers. One Coherent System.</h2>
          <p>IntegrateWise is organized into an Intelligence Layer, a Governance Layer, and an Action Layer — each building on the one below.</p>
        </div>

        <!-- Layer 1 -->
        <div style="margin-bottom:var(--sp-12);">
          <div class="layer-label">Layer 1 — Intelligence</div>
          <div class="card-grid card-grid--3">
            <router-link :to="{ name: 'product-spine' }" class="card" style="text-decoration:none;">
              <div class="card__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              </div>
              <h3>Adaptive Spine</h3>
              <p>Single source of truth — normalizing structured and unstructured data from every connected system into one canonical intelligence layer.</p>
              <span class="role-card__link">Explore →</span>
            </router-link>
            <router-link :to="{ name: 'product-entity-360' }" class="card" style="text-decoration:none;">
              <div class="card__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3>Entity 360</h3>
              <p>Complete, always-current view of every account, customer, and deal — assembled automatically from all connected systems.</p>
              <span class="role-card__link">Explore →</span>
            </router-link>
            <router-link :to="{ name: 'product-memory' }" class="card" style="text-decoration:none;">
              <div class="card__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3>Memory &amp; Re-ingestion</h3>
              <p>Persistent AI memory that compounds over time. Approved decisions and AI sessions become lasting organizational knowledge.</p>
              <span class="role-card__link">Explore →</span>
            </router-link>
          </div>
        </div>

        <!-- Layer divider -->
        <div class="layer-divider">
          <div class="layer-divider__line"></div>
          <span class="layer-divider__label">Layer 2 — Detection</span>
          <div class="layer-divider__line"></div>
        </div>

        <!-- Layer 2 -->
        <div style="margin-bottom:var(--sp-12);">
          <div class="card-grid card-grid--2">
            <router-link :to="{ name: 'product-signals' }" class="card" style="text-decoration:none;">
              <div class="card__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h3>Proactive Signal Engine</h3>
              <p>Cross-system risk pattern detection — churn signals, renewal risk, billing anomalies, and support escalation patterns surfaced weeks before they're visible.</p>
              <span class="role-card__link">Explore →</span>
            </router-link>
            <router-link :to="{ name: 'product-integrations' }" class="card" style="text-decoration:none;">
              <div class="card__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <h3>50+ Integrations</h3>
              <p>Native connectors for Salesforce, HubSpot, Zendesk, Stripe, Jira, Slack, Gmail, GitHub, and more. Connect once — the Spine normalizes everything.</p>
              <span class="role-card__link">Explore →</span>
            </router-link>
          </div>
        </div>

        <!-- Layer divider -->
        <div class="layer-divider">
          <div class="layer-divider__line"></div>
          <span class="layer-divider__label">Layer 3 — Governance &amp; Action</span>
          <div class="layer-divider__line"></div>
        </div>

        <!-- Layer 3 -->
        <div>
          <router-link :to="{ name: 'product-approvals' }" class="card" style="text-decoration:none;display:block;max-width:600px;margin-inline:auto;">
            <div class="card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Evidence + HITL Approval Cards</h3>
            <p>Every AI proposal comes with a full evidence chain assembled from your connected data. You review. You approve or reject. Nothing executes without explicit human sign-off. This is the core of governed AI execution.</p>
            <span class="role-card__link">Explore HITL Approvals →</span>
          </router-link>
        </div>
      </div>
    </section>

    <CtaSection
      title="See the full product in action."
      description="30-minute demo. Live on your data. See the Spine, the evidence layer, and the HITL approval workflow working together."
    >
      <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
      <router-link :to="{ name: 'how-it-works-architecture' }" class="btn btn--ghost btn--lg">View Architecture →</router-link>
    </CtaSection>
  </template>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import CtaSection from '../../components/CtaSection.vue'
import { useReveal } from '../../composables/useReveal.js'
useReveal()
</script>

<style scoped>
.layer-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-faint);
  margin-bottom: var(--sp-5);
}
.layer-divider {
  display: flex;
  align-items: center;
  gap: var(--sp-4);
  margin-block: var(--sp-8);
}
.layer-divider__line {
  flex: 1;
  height: 1px;
  background: var(--divider);
}
.layer-divider__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-faint);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
</style>
