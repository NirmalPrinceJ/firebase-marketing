<template>
  <section class="section" style="padding-top:120px;">
    <div class="container">
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li>Resources</li>
          <li v-if="$route.params.section">{{ $route.params.section.replace(/-/g, ' ') }}</li>
        </ol>
      </nav>
      
      <div class="page-hero__content">
        <span class="label-tag">Resources</span>
        <h1>Guides, Case Studies, and Insights on Governed AI</h1>
        <p>Deep dives on governed AI architecture, the Adaptive Spine, HITL design patterns, knowledge workspaces, and practical lessons from enterprise deployments.</p>
      </div>

      <div class="card-grid card-grid--3" style="margin-top:var(--sp-12);">
        <router-link :to="{ name: 'resources', params: { section: 'case-studies' } }" class="card reveal" style="text-decoration:none;">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </div>
          <h3>Case Studies</h3>
          <p>Real outcomes from real teams. See how IntegrateWise customers protected $8M in renewals, reduced churn, and eliminated context switching.</p>
          <span class="role-card__link">View Case Studies →</span>
        </router-link>
        <router-link :to="{ name: 'resources', params: { section: 'guides' } }" class="card reveal reveal-d1" style="text-decoration:none;">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <h3>Guides & Whitepapers</h3>
          <p>Deep-dive playbooks and frameworks on governed AI implementation, HITL design, and knowledge workspace architecture.</p>
          <span class="role-card__link">View Guides →</span>
        </router-link>
        <router-link :to="{ name: 'blog' }" class="card reveal reveal-d2" style="text-decoration:none;">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <h3>Blog</h3>
          <p>Architecture deep-dives, customer stories, and practical thinking on building AI systems organizations can actually trust.</p>
          <span class="role-card__link">Read the Blog →</span>
        </router-link>
      </div>
    </div>
  </section>

  <CtaSection
    title="Want to see IntegrateWise in action rather than reading about it?"
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
  </CtaSection>
</template>

<script setup>
import CtaSection from '../../components/CtaSection.vue'
</script>