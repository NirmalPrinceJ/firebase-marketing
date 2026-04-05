<template>
  <PageHero
    tag="Product"
    title="50+ Integrations"
    description="Native connectors for Salesforce, HubSpot, Zendesk, Stripe, Jira, Slack, Gmail, GitHub, and more. Connect once — the Spine normalizes everything."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Product', to: { name: 'product' } }, { label: 'Integrations' }]"
  />

  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Connectors</span>
        <h2>Connect Everything. Unify Anything.</h2>
        <p>Pre-built, OAuth-based connectors for the tools you already use. No ETL pipelines. No schema mapping headaches. Just connect and the Spine handles the rest.</p>
      </div>

      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <div class="card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
          <h3>CRM</h3>
          <p>Salesforce, HubSpot, Pipedrive, Copper, Microsoft Dynamics, Zoho CRM</p>
        </div>
        <div class="card reveal reveal-d1">
          <div class="card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
          <h3>Email & Communication</h3>
          <p>Gmail, Outlook 365, Slack, Microsoft Teams, Zoom</p>
        </div>
        <div class="card reveal reveal-d2">
          <div class="card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></div>
          <h3>Support</h3>
          <p>Zendesk, Freshdesk, Intercom, Help Scout, Front</p>
        </div>
        <div class="card reveal">
          <div class="card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
          <h3>Billing & Finance</h3>
          <p>Stripe, Chargebee, Recurly, QuickBooks, NetSuite</p>
        </div>
        <div class="card reveal reveal-d1">
          <div class="card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></div>
          <h3>Dev & Product</h3>
          <p>Jira, GitHub, GitLab, Linear, Segment, Amplitude, Mixpanel</p>
        </div>
        <div class="card reveal reveal-d2">
          <div class="card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div>
          <h3>Documents</h3>
          <p>Notion, Google Docs, Confluence, Dropbox, Box</p>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="Connect your stack in minutes."
    description="See how easy it is to connect your systems — most integrations take under 5 minutes to configure."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
  </CtaSection>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import CtaSection from '../../components/CtaSection.vue'
import { onMounted } from 'vue'
import { useReveal } from '../../composables/useReveal.js'

useReveal()
onMounted(() => {
  document.title = '50+ Integrations — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Connect Salesforce, HubSpot, Zendesk, Stripe, Slack, Gmail, Notion, and 50+ more. Connect once — the Adaptive Spine normalizes everything.')
})
</script>