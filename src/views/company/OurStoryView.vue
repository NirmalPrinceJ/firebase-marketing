<template>
  <section class="section" style="padding-top:120px;">
    <div class="container">
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li>Our Story</li>
        </ol>
      </nav>
      
      <div class="page-hero__content">
        <span class="label-tag">Our Story</span>
        <h1>We Built IntegrateWise Because We Lived the Problem</h1>
        <p>Disconnected tools. AI without context. Decisions without evidence. The problem wasn't the technology — it was the architecture.</p>
      </div>

      <div style="max-width:760px;margin-inline:auto;margin-top:var(--sp-12);">
        <h2 style="font-size:var(--text-2xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-5);margin-top:var(--sp-10);">The $8M Account</h2>
        <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">In a previous life, our founder spent 13 years implementing MuleSoft integration architectures for enterprise clients. He knew what it felt like to have every system connected — and he knew that even with perfect integration, the signals that mattered most were scattered across so many tools that no single person could see all of them at once.</p>
        <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">One quarter, he noticed something: a high-value account was showing a pattern. A P1 support ticket in Zendesk. A usage drop in the product analytics system. An invoice overdue in Stripe. A champion who had quietly left the company. Each signal in isolation looked manageable. Together, they were a company about to churn — and take $8M in ARR with them.</p>

        <div style="background:var(--surface-1);border-left:3px solid var(--primary);border-radius:0 var(--r-xl) var(--r-xl) 0;padding:var(--sp-6) var(--sp-8);margin-block:var(--sp-8);">
          <p style="font-size:var(--text-xl);font-family:var(--font-display);font-weight:700;color:var(--text-primary);line-height:1.4;margin-bottom:0;letter-spacing:-0.02em;">"I saw it because I happened to be looking at all four systems at once. It wasn't a process. It was luck. And I knew most teams would never be that lucky."</p>
        </div>

        <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">He made the call. He brought in the executive team. He flew out to the account. The renewal was saved. The $8M stayed. But what haunted him afterward wasn't the win — it was the realization that this outcome had depended entirely on one person, looking at the right four screens, at the right time.</p>

        <h2 style="font-size:var(--text-2xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-5);margin-top:var(--sp-10);">The Problem Isn't the Tools</h2>
        <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">Organizations don't lack data. They lack correlation. They lack a system that can see all the signals simultaneously, understand how they relate to each other, and surface the pattern that matters before it's too late.</p>
        <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">And when AI entered the picture, it made things worse in a specific way: AI tools started proposing actions with confidence — but without evidence. They acted without context. They executed without permission. Organizations found themselves in a new problem: AI that was fast, but ungoverned. Confident, but untrustworthy.</p>

        <div style="background:var(--surface-1);border-left:3px solid var(--primary);border-radius:0 var(--r-xl) var(--r-xl) 0;padding:var(--sp-6) var(--sp-8);margin-block:var(--sp-8);">
          <p style="font-size:var(--text-xl);font-family:var(--font-display);font-weight:700;color:var(--text-primary);line-height:1.4;margin-bottom:0;letter-spacing:-0.02em;">"AI without context is just expensive noise. <span style="color:var(--primary);">AI without governance is a liability.</span>"</p>
        </div>

        <h2 style="font-size:var(--text-2xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-5);margin-top:var(--sp-10);">The Architecture We Needed to Build</h2>
        <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">IntegrateWise started from a simple premise: build the governed AI workspace that an enterprise architect with 13 years of integration experience would want to use. One that connects everything. One where AI has the full context before it reasons. One where humans remain in control of every action.</p>
        <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">The Adaptive Spine is the foundation: a normalized, always-current knowledge layer that resolves conflicts between sources, maintains source provenance, and presents one authoritative view of every entity in your business.</p>
        <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">The HITL Approval Layer is the promise: AI thinks with full context. Humans decide. The system acts only with explicit approval. Every decision is logged, immutably, with full evidence chain.</p>

        <h2 style="font-size:var(--text-2xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-5);margin-top:var(--sp-10);">What We're Building</h2>
        <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">IntegrateWise is the Knowledge Workspace with a Governed AI Spine that modern organizations deserve. We believe the AI tools of the next decade will be distinguished not by how fast they can act, but by how well they can be trusted — and trust is built through evidence, transparency, and human control.</p>
        <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">We're a remote-first team building the governed AI infrastructure that serious organizations will rely on. If this mission resonates with you — whether as a customer, a partner, or a potential team member — we'd love to talk.</p>
        
        <div style="display:flex;gap:var(--sp-4);flex-wrap:wrap;margin-top:var(--sp-8);">
          <router-link :to="{ name: 'request-demo' }" class="btn btn--primary">Request a Demo</router-link>
          <router-link :to="{ name: 'company', params: { page: 'careers' } }" class="btn btn--ghost">Join the Team →</router-link>
          <router-link :to="{ name: 'contact' }" class="btn btn--outline">Get in Touch</router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">The Numbers</span>
        <h2>By the numbers</h2>
      </div>
      <div class="card-grid card-grid--3">
        <div class="stat-card reveal">
          <div class="stat-card__value">$8M</div>
          <div class="stat-card__label">Protected</div>
          <div class="stat-card__sub">The renewal that started it all</div>
        </div>
        <div class="stat-card reveal reveal-d1">
          <div class="stat-card__value">13</div>
          <div class="stat-card__label">Years MuleSoft</div>
          <div class="stat-card__sub">Enterprise integration architecture</div>
        </div>
        <div class="stat-card reveal reveal-d2">
          <div class="stat-card__value">50+</div>
          <div class="stat-card__label">Connectors</div>
          <div class="stat-card__sub">Native integrations at launch</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Our Principles</span>
        <h2>What we believe about AI</h2>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <h3>Context Before Confidence</h3>
          <p>AI that acts confidently without evidence isn't intelligent — it's dangerous. Every IntegrateWise recommendation is grounded in traceable, source-attributed data.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Governance, Not Speed</h3>
          <p>The best AI doesn't act fastest. It acts most responsibly. Human control isn't a bottleneck — it's the feature that makes AI trustworthy.</p>
        </div>
        <div class="card reveal reveal-d2">
          <h3>Evidence Over Assertion</h3>
          <p>We don't trust AI assertions. We trust AI evidence chains. Every claim is backed by citations to specific records in specific systems.</p>
        </div>
      </div>
    </div>
  </section>
  <CtaSection
    title="Join the team building governed AI."
    description="We're hiring engineers, designers, and customer success leaders who believe AI should earn trust through evidence."
  >
    <router-link :to="{ name: 'company', params: { page: 'careers' } }" class="btn btn--primary btn--lg">View Open Roles</router-link>
  </CtaSection>
</template>

<script setup>
import CtaSection from '../../components/CtaSection.vue'
</script>