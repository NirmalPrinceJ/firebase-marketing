<template>
  <PageHero
    tag="Resources"
    title="Playbooks, Incidents, and Case Studies"
    description="Practical guides, real AI incident examples, and case studies from teams using IntegrateWise to protect revenue and run operations."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Resources' }]"
  >
    <template #actions>
      <router-link :to="{ name: 'request-demo' }" class="btn btn--primary">Request a Demo</router-link>
    </template>
  </PageHero>

  <!-- Resource Cards -->
  <section class="section">
    <div class="container">
      <div class="card-grid card-grid--3">
        <!-- Playbooks -->
        <div class="card reveal">
          <span class="label-tag">Playbooks</span>
          <h3>Implementation Playbooks</h3>
          <p>Step-by-step guides for deploying IntegrateWise across your team. From first connector to full spine — with governance built in from day one.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>CS Team Deployment Guide</li>
            <li>BizOps Quick Start</li>
            <li>Connector Configuration</li>
            <li>Spine Customization</li>
          </ul>
          <span class="role-card__link" style="margin-top:var(--sp-5);display:inline-flex;">Coming Soon</span>
        </div>

        <!-- Incident Library -->
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--primary);">
          <span class="label-tag">Incident Library</span>
          <h3>5 AI Incident Examples</h3>
          <p>Real-world incident patterns that IntegrateWise detects across connected systems. Each includes signals, AI insight, and suggested action.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>Churn Risk — Multi-signal correlation</li>
            <li>Renewal Risk — Champion departure</li>
            <li>Burn Rate Spike — Engineering</li>
            <li>Pipeline Stall — Sales velocity drop</li>
            <li>Support Escalation — SLA breach pattern</li>
          </ul>
          <router-link :to="{ name: 'how-it-works' }" class="role-card__link" style="margin-top:var(--sp-5);display:inline-flex;">See Incidents in Action →</router-link>
        </div>

        <!-- Case Studies -->
        <div class="card reveal reveal-d2">
          <span class="label-tag" style="color:var(--warning);background:rgba(251,191,36,0.08);border-color:rgba(251,191,36,0.25);">Coming Soon</span>
          <h3>Case Studies</h3>
          <p>Detailed stories from teams using IntegrateWise to protect revenue, reduce churn, and run operations with governed AI intelligence.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>$8M renewal saved — CS team</li>
            <li>18% churn reduction in 90 days</li>
            <li>60% faster escalation response</li>
          </ul>
          <span class="role-card__link" style="margin-top:var(--sp-5);display:inline-flex;">Coming Soon</span>
        </div>
      </div>
    </div>
  </section>

  <!-- About Link Card -->
  <section class="section section--surface">
    <div class="container">
      <router-link :to="{ name: 'about' }" class="card reveal" style="text-decoration:none;display:block;max-width:640px;margin-inline:auto;text-align:center;">
        <span class="label-tag">Company</span>
        <h3>About IntegrateWise</h3>
        <p>Built by a CSM who lived the problem. Learn about our origin story, our two-wedge strategy, and the principles that guide every product decision.</p>
        <span class="role-card__link" style="margin-top:var(--sp-4);display:inline-flex;justify-content:center;">Read Our Story →</span>
      </router-link>
    </div>
  </section>

  <CtaSection
    title="Want to see IntegrateWise in action rather than reading about it?"
    description="Book a demo and we'll show you real incidents, real evidence, and real governance — on your data."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'how-it-works' }" class="btn btn--ghost btn--lg">How It Works →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHero from '../components/PageHero.vue'
import CtaSection from '../components/CtaSection.vue'
import { useReveal } from '../composables/useReveal.js'

useReveal()

onMounted(() => {
  document.title = 'Resources — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Playbooks, AI incident examples, and case studies from teams using IntegrateWise to protect revenue and run operations with governed AI.')
})
</script>