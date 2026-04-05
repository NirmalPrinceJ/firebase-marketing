<template>
  <section class="section" style="padding-top:120px;">
    <div class="container">
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li>Company</li>
          <li v-if="$route.params.page">{{ $route.params.page.replace(/-/g, ' ') }}</li>
        </ol>
      </nav>
      
      <div class="page-hero__content">
        <span class="label-tag">Company</span>
        <h1>Building the Workspace That Modern Teams Deserve</h1>
        <p>IntegrateWise is a remote-first team building governed AI infrastructure for serious organizations — where AI thinks in context, earns authority through evidence, and acts only with human approval.</p>
      </div>

      <div class="card-grid card-grid--2" style="margin-top:var(--sp-12);">
        <router-link :to="{ name: 'our-story' }" class="card" style="text-decoration:none;">
          <h3>Our Story</h3>
          <p>Built by a 13-year MuleSoft architect who saved an $8M account — and realized the outcome had depended on luck, not process. Read how that became IntegrateWise.</p>
          <span class="role-card__link">Read Our Story →</span>
        </router-link>
        <router-link :to="{ name: 'company', params: { page: 'careers' } }" class="card" style="text-decoration:none;">
          <h3>Careers</h3>
          <p>Remote-first roles in engineering, AI/ML, customer success, product marketing, and solutions engineering. Help us build the future of governed work.</p>
          <span class="role-card__link">View Open Roles →</span>
        </router-link>
        <router-link :to="{ name: 'evidence' }" class="card" style="text-decoration:none;">
          <h3>Evidence & Trust</h3>
          <p>Every AI action in IntegrateWise comes with traceable evidence and an immutable audit trail. See how we make trust architectural, not aspirational.</p>
          <span class="role-card__link">Explore →</span>
        </router-link>
        <router-link :to="{ name: 'company', params: { page: 'press' } }" class="card" style="text-decoration:none;">
          <h3>Press & Media</h3>
          <p>Brand assets, company facts, approved messaging, and press kit resources for journalists and analysts.</p>
          <span class="role-card__link">Press Kit →</span>
        </router-link>
      </div>
    </div>
  </section>

  <CtaSection
    title="Get in touch with the IntegrateWise team."
  >
    <router-link :to="{ name: 'contact' }" class="btn btn--primary btn--lg">Contact Us</router-link>
    <router-link :to="{ name: 'request-demo' }" class="btn btn--ghost btn--lg">Request Demo →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import CtaSection from '../../components/CtaSection.vue'
onMounted(() => {
  document.title = 'Company — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'IntegrateWise is building the Knowledge Workspace modern teams deserve — where AI thinks in context, earns authority through evidence, and acts only with human approval.')
})
</script>