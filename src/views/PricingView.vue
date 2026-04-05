<template>
  <PageHero
    tag="Pricing"
    title="Simple Pricing for 8 Products"
    description="Per-user, monthly pricing. No platform fees. No hidden costs. Start with a free tier and scale when you're ready."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Pricing' }]"
  >
    <template #actions>
      <router-link :to="{ name: 'request-demo' }" class="btn btn--primary">Request a Demo</router-link>
    </template>
  </PageHero>

  <!-- MuleSoft Account Success -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">MuleSoft Account Success</span>
        <h2>Protect Revenue. Detect Risk. Act with Evidence.</h2>
        <p>Four products built for Customer Success teams running on MuleSoft-connected ecosystems.</p>
      </div>
      <div class="card-grid card-grid--4">
        <div class="card reveal">
          <span class="label-tag">Core</span>
          <h3>CSM Accounts Hub</h3>
          <p>Unified account view, health scores, renewal calendar, and team workspace for CS managers.</p>
          <div class="pricing-value">$79<span class="pricing-unit">/user/mo</span></div>
          <router-link :to="{ name: 'csm-hub' }" class="btn btn--outline btn--sm">Learn More →</router-link>
        </div>
        <div class="card reveal reveal-d1">
          <span class="label-tag">Included</span>
          <h3>CSM Account 360</h3>
          <p>Auto-assembled entity brief — CRM, support, billing, usage, and email context in one live view.</p>
          <div class="pricing-value">Included<span class="pricing-unit"> with Hub</span></div>
          <router-link :to="{ name: 'csm-360' }" class="btn btn--outline btn--sm">Learn More →</router-link>
        </div>
        <div class="card reveal reveal-d2">
          <span class="label-tag">Intelligence</span>
          <h3>Intelligence Center</h3>
          <p>AI-powered churn prediction, cross-system signal correlation, and proactive risk detection.</p>
          <div class="pricing-value">$149<span class="pricing-unit">/user/mo</span></div>
          <router-link :to="{ name: 'intelligence-center' }" class="btn btn--outline btn--sm">Learn More →</router-link>
        </div>
        <div class="card reveal reveal-d3">
          <span class="label-tag">Strategic</span>
          <h3>Strategic Account Success</h3>
          <p>Executive-level account strategy, QBR intelligence, and multi-threaded relationship mapping.</p>
          <div class="pricing-value">$249<span class="pricing-unit">/user/mo</span></div>
          <router-link :to="{ name: 'strategic-success' }" class="btn btn--outline btn--sm">Learn More →</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Business Ops Command Center -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Business Ops Command Center</span>
        <h2>Operational Intelligence for Every Leader.</h2>
        <p>Four dashboards that give founders, CEOs, COOs, and CIO/CTOs a governed, real-time view of the business.</p>
      </div>
      <div class="card-grid card-grid--4">
        <div class="card reveal">
          <span class="label-tag" style="color:var(--primary);background:rgba(165,108,255,0.08);border-color:rgba(165,108,255,0.25);">Free Tier Available</span>
          <h3>Founder Ops</h3>
          <p>Full-stack business view for founders — revenue, pipeline, burn, support, and product signals in one place.</p>
          <div class="pricing-value">$49<span class="pricing-unit">/user/mo</span></div>
          <router-link :to="{ name: 'founder-ops' }" class="btn btn--outline btn--sm">Learn More →</router-link>
        </div>
        <div class="card reveal reveal-d1">
          <span class="label-tag">Executive</span>
          <h3>CEO Dashboard</h3>
          <p>Board-ready metrics, revenue intelligence, and strategic risk signals — updated in real time.</p>
          <div class="pricing-value">$99<span class="pricing-unit">/user/mo</span></div>
          <router-link :to="{ name: 'ceo-dashboard' }" class="btn btn--outline btn--sm">Learn More →</router-link>
        </div>
        <div class="card reveal reveal-d2">
          <span class="label-tag">Operations</span>
          <h3>COO Dashboard</h3>
          <p>Operational efficiency, team performance, process bottlenecks, and cross-department coordination.</p>
          <div class="pricing-value">$149<span class="pricing-unit">/user/mo</span></div>
          <router-link :to="{ name: 'coo-dashboard' }" class="btn btn--outline btn--sm">Learn More →</router-link>
        </div>
        <div class="card reveal reveal-d3">
          <span class="label-tag">Technology</span>
          <h3>CIO/CTO Dashboard</h3>
          <p>Infrastructure health, integration status, security posture, and technology spend governance.</p>
          <div class="pricing-value">$99<span class="pricing-unit">/user/mo</span></div>
          <router-link :to="{ name: 'cio-cto-dashboard' }" class="btn btn--outline btn--sm">Learn More →</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Bundles -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Bundles</span>
        <h2>Save with Team Bundles</h2>
        <p>Pre-configured bundles for common team shapes. All include full access to included products.</p>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal">
          <span class="label-tag">CS Team</span>
          <h3>CS Team Bundle</h3>
          <p>CSM Accounts Hub + Intelligence Center for 5 users. Everything a CS team needs to detect risk and protect revenue.</p>
          <div class="pricing-value">$399<span class="pricing-unit">/month</span></div>
          <div class="pricing-detail">5 users included · Hub + Intelligence Center</div>
        </div>
        <div class="card reveal reveal-d1">
          <span class="label-tag">CS Leadership</span>
          <h3>CS Leadership Bundle</h3>
          <p>CSM Accounts Hub + Intelligence Center + Strategic Account Success for 5 users. Full CS stack for leaders.</p>
          <div class="pricing-value">$599<span class="pricing-unit">/month</span></div>
          <div class="pricing-detail">5 users included · Hub + Intelligence + Strategic</div>
        </div>
        <div class="card reveal">
          <span class="label-tag">BizOps</span>
          <h3>BizOps Leadership Suite</h3>
          <p>All 4 Business Ops dashboards — Founder Ops, CEO, COO, and CIO/CTO — for 5 users.</p>
          <div class="pricing-value">$349<span class="pricing-unit">/month</span></div>
          <div class="pricing-detail">5 users included · All 4 BizOps dashboards</div>
        </div>
        <div class="card reveal reveal-d1">
          <span class="label-tag">Growth</span>
          <h3>Founder + Growth</h3>
          <p>Founder Ops + CEO Dashboard for 3 users. Built for early-stage teams that need full visibility without the overhead.</p>
          <div class="pricing-value">$149<span class="pricing-unit">/month</span></div>
          <div class="pricing-detail">3 users included · Founder Ops + CEO Dashboard</div>
        </div>
        <div class="card reveal" style="grid-column:1/-1;">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--sp-4);">
            <div>
              <span class="label-tag">Enterprise</span>
              <h3>Enterprise Bundle</h3>
              <p>All 8 products, all departments, custom integrations, dedicated support, and SLA guarantees.</p>
            </div>
            <div style="text-align:right;">
              <div class="pricing-value">Custom</div>
              <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--sm">Contact Sales →</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Free Tier -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Free Tier</span>
        <h2>Start Free. Upgrade When You're Ready.</h2>
        <p>No credit card required. No time pressure on Founder Ops. Try the platform risk-free.</p>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal" style="border-top:2px solid var(--primary);">
          <span class="label-tag" style="color:var(--primary);background:rgba(165,108,255,0.08);border-color:rgba(165,108,255,0.25);">Free Forever</span>
          <h3>Founder Ops — Free Tier</h3>
          <p>Full Founder Ops experience with up to 3 connected systems. See your business in one place — forever free.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>3 connectors included</li>
            <li>1 user seat</li>
            <li>Core dashboards and signals</li>
            <li>No credit card required</li>
          </ul>
          <router-link :to="{ name: 'founder-ops' }" class="btn btn--primary btn--sm" style="margin-top:var(--sp-5);">Get Started Free →</router-link>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--warning);">
          <span class="label-tag" style="color:var(--warning);background:rgba(251,191,36,0.08);border-color:rgba(251,191,36,0.25);">14-Day Trial</span>
          <h3>CSM Accounts Hub — Trial</h3>
          <p>Full CSM Accounts Hub experience for 14 days. Connect up to 5 accounts and see the intelligence layer in action.</p>
          <ul class="feature-list" style="margin-top:var(--sp-4);">
            <li>5 accounts included</li>
            <li>Full Hub + Account 360 access</li>
            <li>Signal detection active</li>
            <li>No credit card required</li>
          </ul>
          <router-link :to="{ name: 'csm-hub' }" class="btn btn--outline btn--sm" style="margin-top:var(--sp-5);">Start 14-Day Trial →</router-link>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="Not sure which plan fits? Let's figure it out together."
    description="Book a 15-minute call. We'll map your team shape to the right products and bundles — no pressure, no pitch."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'contact' }" class="btn btn--ghost btn--lg">Contact Sales →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHero from '../components/PageHero.vue'
import CtaSection from '../components/CtaSection.vue'
import { useReveal } from '../composables/useReveal.js'

useReveal()

onMounted(() => {
  document.title = 'Pricing — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Simple per-user monthly pricing for 8 IntegrateWise products. MuleSoft Account Success from $79/mo. Business Ops from $49/mo. Free tier available.')
})
</script>

<style scoped>
.pricing-value {
  font-size: var(--text-3xl);
  font-weight: 900;
  font-family: var(--font-display);
  color: var(--text-primary);
  letter-spacing: -0.03em;
  margin-top: var(--sp-4);
  margin-bottom: var(--sp-2);
}
.pricing-unit {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-muted);
  letter-spacing: 0;
}
.pricing-detail {
  font-size: var(--text-sm);
  color: var(--text-faint);
  margin-top: var(--sp-2);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}
</style>