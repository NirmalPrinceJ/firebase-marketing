<template>
  <PageHero
    tag="Adaptive Spine"
    title="The Living Nervous System of Your Business"
    description="One unified intelligence layer that connects every tool, normalizes every signal, and gives AI the full context it needs — while keeping humans firmly in control."
    :breadcrumbs="[{ label: 'Home', to: { name: 'home' } }, { label: 'Product', to: { name: 'product' } }, { label: 'Adaptive Spine' }]"
  />

  <!-- ── PAIN ─────────────────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">The Problem</span>
        <h2>Your tools don't talk. Your AI doesn't know.</h2>
        <p>The average knowledge worker switches between 47+ tools every 30 minutes — manually copying context that should flow automatically. Your AI is only as smart as the data it can see.</p>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </div>
          <h3>Disconnected Tools</h3>
          <p>CRM, email, support, billing, and product data live in separate silos. No system knows what the others know. You become the human API — copying context by hand, all day, every day.</p>
        </div>
        <div class="card reveal reveal-d1">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <h3>AI Chats Vanish</h3>
          <p>Every AI conversation starts from zero. The context you built yesterday — the nuance, the history, the decisions — disappears the moment you close the tab. Institutional memory evaporates.</p>
        </div>
        <div class="card reveal reveal-d2">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <h3>No Single Truth</h3>
          <p>Which system is right? CRM says one thing, billing says another, support has a third version. Without a canonical source of truth, every decision is built on shaky ground.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── TURNING POINT ─────────────────────────────────────────── -->
  <section class="section">
    <div class="container container--narrow">
      <div class="reveal" style="text-align:center;padding:clamp(var(--sp-10),5vw,var(--sp-16)) var(--sp-8);background:var(--surface-0);border:1px solid var(--border-glass);border-radius:var(--r-2xl);position:relative;overflow:hidden;">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 50% 0%,rgba(165,108,255,0.10) 0%,transparent 70%);pointer-events:none;"></div>
        <span class="label-tag" style="position:relative;">What the Spine Is</span>
        <p style="font-size:clamp(1.1rem,2vw,1.4rem);color:var(--text-primary);line-height:1.65;font-weight:600;letter-spacing:-0.02em;max-width:600px;margin-inline:auto;position:relative;">
          "The Spine is intelligent plumbing — connecting CRM, email, billing, support, WhatsApp, product usage, and historical data into one living nervous system."
        </p>
        <p style="margin-top:var(--sp-4);color:var(--text-muted);font-size:var(--text-sm);position:relative;">Not another integration layer. Not a data warehouse. A living, adaptive intelligence substrate.</p>
      </div>
    </div>
  </section>

  <!-- ── SOLUTION: 3 PILLARS ───────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Core Architecture</span>
        <h2>Three pillars. One unified layer.</h2>
        <p>The Adaptive Spine isn't a sync tool or a data pipeline. It's a new architectural primitive — the intelligence substrate your entire organization runs on.</p>
      </div>
      <div class="card-grid card-grid--3">
        <div class="card reveal">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
          </div>
          <h3>SSOT — Single Source of Truth</h3>
          <p>Every entity — account, contact, deal, ticket — has one canonical record. Conflicts resolved. Duplicates merged. One version of reality, always current, always authoritative.</p>
        </div>
        <div class="card reveal reveal-d1">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
          </div>
          <h3>Universal Intelligence Layer</h3>
          <p>Structured records, semantic embeddings, and event streams — all unified in one queryable layer. AI reasons over complete context, not fragmented snapshots from individual tools.</p>
        </div>
        <div class="card reveal reveal-d2">
          <div class="card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          </div>
          <h3>Adaptive by Design</h3>
          <p>The Spine learns your organization's patterns. Every new signal makes it richer. Every connection adds context. It doesn't just store data — it compounds intelligence over time.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── WHAT IT CONNECTS ──────────────────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">50+ Connectors</span>
        <h2>Everything your business runs on. Connected.</h2>
        <p>Native OAuth connectors pull structured records, unstructured content, and event streams from every system — read-only by default, no ETL pipelines required.</p>
      </div>
      <div class="card-grid card-grid--3" style="margin-top:var(--sp-10);">
        <div class="card reveal" style="border-top:2px solid var(--primary);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">CRM &amp; Sales</div>
          <p style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4);">Accounts, contacts, opportunities, activities, pipeline stages, and deal history — all normalized into canonical entities.</p>
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">Salesforce · HubSpot · Pipedrive · Zoho</div>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--blue);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--blue);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Email &amp; Comms</div>
          <p style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4);">Thread history, sentiment, responsiveness, and relationship signals — extracted and linked to the right entity automatically.</p>
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">Gmail · Outlook · Slack · WhatsApp</div>
        </div>
        <div class="card reveal reveal-d2" style="border-top:2px solid var(--error);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--error);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Support &amp; Tickets</div>
          <p style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4);">Open issues, severity, escalation history, and resolution patterns — connected to account health and churn risk scoring.</p>
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">Zendesk · Intercom · Freshdesk · Linear</div>
        </div>
        <div class="card reveal" style="border-top:2px solid var(--warning);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--warning);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Billing &amp; Finance</div>
          <p style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4);">ARR, invoice aging, payment status, and contract data — surfaced in context alongside every account view and signal.</p>
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">Stripe · Chargebee · QuickBooks · Xero</div>
        </div>
        <div class="card reveal reveal-d1" style="border-top:2px solid var(--success);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--success);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Product &amp; Usage</div>
          <p style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4);">Feature adoption, session frequency, health scores, and engagement trends — the behavioral layer that predicts churn before it shows up in CRM.</p>
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">Amplitude · Mixpanel · Segment · Heap</div>
        </div>
        <div class="card reveal reveal-d2" style="border-top:2px solid var(--primary-dim);">
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--primary-dim);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--sp-4);">Documents &amp; Knowledge</div>
          <p style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4);">Meeting notes, proposals, contracts, and internal docs — vectorized and linked to entities so AI can reason over unstructured context.</p>
          <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);">Notion · Google Drive · Confluence · Docs</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── HOW IT GROWS ──────────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container container--narrow">
      <div class="section-header reveal">
        <span class="label-tag">How It Works</span>
        <h2>Connect → Normalize → Compound</h2>
        <p>The Spine doesn't just store data. It gets richer with every signal — compounding intelligence the longer it runs.</p>
      </div>
      <div class="flow-steps">
        <div class="flow-step reveal">
          <div class="flow-step__num">1</div>
          <div class="flow-step__content">
            <h3>Connect</h3>
            <p>Native OAuth connectors pull structured records, unstructured content, and event streams from 50+ systems. Read-only by default. No ETL pipelines. No data engineering sprints. First value in 60 seconds.</p>
          </div>
        </div>
        <div class="flow-step reveal reveal-d1">
          <div class="flow-step__num">2</div>
          <div class="flow-step__content">
            <h3>Normalize</h3>
            <p>An 8-stage normalization pipeline resolves entity conflicts, deduplicates records, maps schemas, and assigns canonical IDs. The same customer across Salesforce, Zendesk, and Stripe becomes one entity — with full source provenance preserved.</p>
          </div>
        </div>
        <div class="flow-step reveal reveal-d2">
          <div class="flow-step__num">3</div>
          <div class="flow-step__content">
            <h3>Compound</h3>
            <p>Every new signal enriches the Spine. Structured records land in the entity graph. Unstructured content becomes vector embeddings in the Context Store. The intelligence layer grows richer with every connection, every event, every interaction.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── TRUTH BOUNDARY TERMINAL ───────────────────────────────── -->
  <section class="section">
    <div class="container container--narrow">
      <div class="section-header reveal">
        <span class="label-tag">Truth Boundary</span>
        <h2>Three flows. One hard boundary.</h2>
        <p>The Spine classifies every data source into one of three flows — and enforces architectural separation between them. AI can never contaminate your source data.</p>
      </div>
      <div class="terminal-card reveal">
        <div class="terminal-card__header">
          <div class="terminal-card__dot"></div>
          <div class="terminal-card__dot"></div>
          <div class="terminal-card__dot"></div>
          <span class="terminal-card__title">spine.truth-boundary.ts</span>
        </div>
        <div class="terminal-card__body">
          <span class="comment">// Flow A — Structured System Data → writes to Spine ✓</span><br>
          <span class="key">source</span>: <span class="val">"salesforce | stripe | zendesk | hubspot"</span><br>
          <span class="key">type</span>: <span class="val">structured_record</span> &nbsp;&nbsp;<span class="key">write_to_spine</span>: <span class="val">true</span><br><br>
          <span class="comment">// Flow B — Unstructured Content → writes to Spine ✓</span><br>
          <span class="key">source</span>: <span class="val">"gmail | notion | slack | meetings"</span><br>
          <span class="key">type</span>: <span class="val">semantic_embedding</span> &nbsp;<span class="key">write_to_spine</span>: <span class="val">true</span><br><br>
          <span class="comment">// Flow C — AI Reasoning → TRUTH BOUNDARY ENFORCED ✗</span><br>
          <span class="key">source</span>: <span class="val">"signal_engine | ai_session | mcp"</span><br>
          <span class="key">type</span>: <span class="val">proposal_card</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="key">write_to_spine</span>: <span class="warn">false</span><br>
          <span class="key">requires_hitl_approval</span>: <span class="val">true</span><br>
          <span class="key">truth_boundary</span>: <span class="val">enforced_at_storage_layer</span> <span class="comment">// architectural, not a setting</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ── STATS ─────────────────────────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">By the Numbers</span>
        <h2>Proof in production.</h2>
      </div>
      <div class="stat-grid reveal" style="grid-template-columns:repeat(4,1fr);margin-block:0;">
        <div class="stat-card">
          <div class="stat-card__value gradient-text">60s</div>
          <div class="stat-card__label">Time to first value</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value gradient-text">50+</div>
          <div class="stat-card__label">Native connectors</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value gradient-text">94%</div>
          <div class="stat-card__label">Signal confidence</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value gradient-text">$8M</div>
          <div class="stat-card__label">Revenue protected</div>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="See the Spine running on your data."
    description="Book a demo and we'll show you how the Adaptive Spine unifies your disconnected systems into one coherent intelligence layer — live, using your actual tools."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'how-it-works-architecture' }" class="btn btn--ghost btn--lg">Architecture Deep Dive →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHero from '../../components/PageHero.vue'
import CtaSection from '../../components/CtaSection.vue'
import { useReveal } from '../../composables/useReveal.js'

useReveal()

onMounted(() => {
  document.title = 'Adaptive Spine — The Living Nervous System of Your Business | IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'The Adaptive Spine connects CRM, email, billing, support, and product data into one unified intelligence layer — normalizing every signal, enforcing a hard truth boundary, and giving AI the full context it needs.')
})
</script>
