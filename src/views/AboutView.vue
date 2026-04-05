<template>
  <PageHero
    tag="About IntegrateWise"
    title="We Built IntegrateWise Because We Lived the Problem"
    description="Modern work isn't hard because people lack capability. It's hard because they're constantly fighting their tools."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'About' }]"
  >
    <template #actions>
      <router-link :to="{ name: 'request-demo' }" class="btn btn--primary">Request a Demo</router-link>
    </template>
  </PageHero>

  <!-- THE STORY OF EFFORTLESS WORK -->
  <section class="section">
    <div class="container">
      <div style="max-width:760px;margin-inline:auto;">
        <div class="reveal">
          <span class="label-tag">The Story</span>
          <h2 style="font-size:var(--text-2xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-5);margin-top:var(--sp-3);">We've Become "Human APIs"</h2>
          <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">
            We copy context between productivity apps, communication tools, and AI chats every 30 minutes — only to start from zero again in the 31st minute. Work now lives across Notion, Coda, Slack, email, CRMs, calendars, billing tools, and AI apps like ChatGPT, Claude, Gemini, and Perplexity — just to move one task forward.
          </p>
          <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">
            Information is trapped in different tabs and histories. Tasks fall between tools. AI brainstorms vanish when chats end. Data exports break formulas and relationships. The result: copy–paste–export–import, again and again. It's exhausting, destroys momentum, and quietly slows down even the best teams.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- THE TURNING POINT -->
  <section class="section section--surface">
    <div class="container">
      <div style="max-width:760px;margin-inline:auto;">
        <div class="reveal">
          <span class="label-tag">The Turning Point</span>
          <h2 style="font-size:var(--text-2xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-5);margin-top:var(--sp-3);">A Customer Success Manager Who Tried Everything</h2>
          <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">
            As a Customer Success Manager, our founder tried everything: Slack workflows, manual exports, new project tools, and every "smart" AI assistant available. He talked to multiple AIs to get the best thinking and wording — then realized those conversations were scattered everywhere with no way to pull them together when it mattered.
          </p>
          <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">
            No matter which tool he tried, the same problems came back: data silos, broken relationships, lost context, and no single place where his work and his thinking truly lived.
          </p>
        </div>

        <div class="reveal" style="background:var(--surface-1);border-left:3px solid var(--primary);border-radius:0 var(--r-xl) var(--r-xl) 0;padding:var(--sp-6) var(--sp-8);margin-block:var(--sp-8);">
          <p style="font-size:var(--text-xl);font-family:var(--font-display);font-weight:700;color:var(--text-primary);line-height:1.4;margin:0;letter-spacing:-0.02em;">
            "The world doesn't need yet another tool. It needs a way to bring all of its tools — and all of its AI conversations — together, intelligently and effortlessly."
          </p>
        </div>

        <div class="reveal">
          <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">
            That's how IntegrateWise was born.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- THE $8M ACCOUNT -->
  <section class="section">
    <div class="container">
      <div style="max-width:760px;margin-inline:auto;">
        <div class="reveal">
          <span class="label-tag">Proven in Real Operations</span>
          <h2 style="font-size:var(--text-2xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-5);margin-top:var(--sp-3);">The $8M Account That Changed Everything</h2>
          <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">
            In a real-world enterprise scenario, the Spine helped identify early signals that a major customer account was at risk. A P1 support ticket in Zendesk. A usage drop in product analytics. An invoice overdue in Stripe. A champion who had quietly left the company. Each signal in isolation looked manageable. Together, they were a company about to churn — and take $8M in ARR with them.
          </p>
          <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">
            By connecting data across tools and sources, the team could see the unfolding problem before it became irreversible. That visibility enabled intervention at the right time and ultimately helped protect the $8M account that had turned red.
          </p>
        </div>

        <div class="reveal" style="background:var(--surface-1);border-left:3px solid var(--primary);border-radius:0 var(--r-xl) var(--r-xl) 0;padding:var(--sp-6) var(--sp-8);margin-block:var(--sp-8);">
          <p style="font-size:var(--text-xl);font-family:var(--font-display);font-weight:700;color:var(--text-primary);line-height:1.4;margin:0;letter-spacing:-0.02em;">
            "I saw it because I happened to be looking at all four systems at once. It wasn't a process. It was luck. And I knew most teams would never be that lucky."
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- DOGFOODING -->
  <section class="section section--surface">
    <div class="container container--narrow">
      <div class="reveal" style="text-align:center;padding:clamp(var(--sp-10),5vw,var(--sp-16)) var(--sp-8);background:var(--surface-0);border:1px solid var(--border-glass);border-radius:var(--r-2xl);position:relative;overflow:hidden;">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 50% 0%,rgba(165,108,255,0.10) 0%,transparent 70%);pointer-events:none;"></div>
        <span class="label-tag" style="position:relative;">Dogfooding</span>
        <h2 style="position:relative;margin-bottom:var(--sp-4);">IntegrateWise Runs on IntegrateWise</h2>
        <p style="font-size:clamp(1.1rem,2vw,1.35rem);color:var(--text-secondary);line-height:1.65;max-width:600px;margin-inline:auto;position:relative;">
          The founder uses the BizOps workspace to run the entire company — leads in HubSpot, billing in Stripe, conversations in Slack, code in GitHub, traffic in Google Analytics — all flowing into the same spine. If IntegrateWise can run IntegrateWise, it can run any business.
        </p>
      </div>
    </div>
  </section>

  <!-- THE CORE MOAT -->
  <section class="section">
    <div class="container">
      <div style="max-width:760px;margin-inline:auto;">
        <div class="reveal">
          <span class="label-tag">The Core Moat</span>
          <h2 style="font-size:var(--text-2xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-5);margin-top:var(--sp-3);">The Spine Is the Innovation</h2>
          <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">
            While other platforms focus on dashboards, automation, or isolated AI assistants, IntegrateWise builds the intelligence layer that sits underneath everything. By organizing truth, context, and signals into a unified system, the Spine enables AI and humans to operate with shared understanding and reliable knowledge.
          </p>
          <p style="font-size:var(--text-lg);color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">
            Over time, the intelligence accumulated in the Spine becomes the platform's primary moat — a living memory and operational understanding that cannot be easily replicated.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- TWO WEDGES -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Two Wedges</span>
        <h2>One Platform. Two Entry Points.</h2>
        <p>IntegrateWise serves two distinct but connected markets — both powered by the same governed AI spine.</p>
      </div>
      <div class="card-grid card-grid--2">
        <div class="card reveal" style="border-left:3px solid var(--primary);">
          <span class="label-tag">Wedge 1</span>
          <h3>MuleSoft Account Success</h3>
          <p>4 products for CS/TAM teams. Health from real signals, 16-table account spine, governed AI incidents with evidence and HITL approval.</p>
          <router-link :to="{ name: 'mulesoft' }" class="role-card__link" style="margin-top:var(--sp-4);display:inline-flex;">Explore Account Success →</router-link>
        </div>
        <div class="card reveal reveal-d1" style="border-left:3px solid var(--warning);">
          <span class="label-tag" style="color:var(--warning);background:rgba(251,191,36,0.08);border-color:rgba(251,191,36,0.25);">Wedge 2</span>
          <h3>Business Ops Command Center</h3>
          <p>4 dashboards for leadership. Universal BizOps spine, initiatives + KPIs + pipeline, approval-first execution across every department.</p>
          <router-link :to="{ name: 'bizops' }" class="role-card__link" style="margin-top:var(--sp-4);display:inline-flex;">Explore Business Ops →</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- WHO IT'S FOR -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Who It's For</span>
        <h2>Built for Everyone Who Feels Like a "Human API"</h2>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <h3>Founders &amp; Leaders</h3>
          <p>A single, truthful view of how the business is actually running — not the version in the deck, but the version in the data.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Sales, Success &amp; Support</h3>
          <p>Teams who live in CRMs, help desks, and inboxes but need the full story in one place — with AI that understands the context.</p>
        </div>
        <div class="card reveal reveal-d2">
          <h3>Finance, Ops &amp; RevOps</h3>
          <p>Teams juggling billing, invoices, reports, and pipeline across multiple tools — who need trustworthy, connected data to diagnose issues.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRINCIPLES -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Our Principles</span>
        <h2>What We Believe About AI</h2>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <h3>Context Before Confidence</h3>
          <p>AI that acts confidently without full context isn't intelligent — it's dangerous. Every recommendation is grounded in traceable, source-attributed data.</p>
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
    title="See IntegrateWise in action."
    description="Book a 30-minute demo. We'll show you the spine, the evidence layer, and real AI incidents — working on your data."
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
  document.title = 'About IntegrateWise — Built by a CSM Who Lived the Problem'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'IntegrateWise was born from the pain of being a human API — copying context between tools every 30 minutes. Built by a CSM who saved an $8M account and realized it was luck, not process.')
})
</script>
