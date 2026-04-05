<template>
  <!-- ── Hero ─────────────────────────────────────────────────── -->
  <section class="section" style="padding-top:120px;">
    <div class="container">
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'how-it-works' }">How It Works</router-link></li>
          <li>Architecture & Data Flows</li>
        </ol>
      </nav>

      <div class="page-hero__content">
        <span class="label-tag">Architecture & Data Flows</span>
        <h1>One Pipeline. Three Flows. Hard Truth Boundaries.</h1>
        <p>IntegrateWise is built on a principled architecture that separates data ingestion (Flow A and B) from AI reasoning (Flow C) — and enforces a Truth Boundary that prevents AI from ever contaminating your source of truth.</p>
        <div class="page-hero__actions">
          <router-link :to="{ name: 'request-demo' }" class="btn btn--primary">Request a Demo</router-link>
          <router-link :to="{ name: 'how-it-works-governance' }" class="btn btn--ghost">Governance Model →</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Why Flow C Never Writes ──────────────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">The Truth Boundary</span>
        <h2>Why Flow C Never Writes to the Spine</h2>
        <p>Most AI systems allow session outputs to influence the knowledge base — directly or indirectly. Both create a hallucination vector. IntegrateWise draws a hard architectural line.</p>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(2rem,5vw,4rem);align-items:start;">
        <div class="reveal">
          <p style="color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-5);">When AI session outputs write directly to a database — or when AI recommendations become facts without human review — you create a hallucination vector. Confident AI assertions, unverified, become your source of truth. That's not intelligence. That's contamination.</p>
          <p style="color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-6);">IntegrateWise draws a hard architectural line: <strong style="color:var(--text-primary);">Flow C (AI reasoning) never writes to the Spine.</strong> AI proposals exist only as structured HITL Approval Cards. The moment a human approves, the outcome re-enters as a new Flow A record — verified data, not AI speculation.</p>
          <ul class="feature-list">
            <li><strong>Flow A:</strong> Structured data — CRM, billing, support, usage → writes to Spine</li>
            <li><strong>Flow B:</strong> Unstructured content — email, docs, Slack → Context Store + Spine linking</li>
            <li><strong>Flow C:</strong> AI reasoning — proposals only, zero direct writes to Spine</li>
            <li><strong>Truth Boundary:</strong> Enforced at the storage layer, not just policy</li>
            <li><strong>Re-ingestion:</strong> Approved outcomes enter as verified Flow A records</li>
          </ul>
        </div>
        <div class="reveal reveal-d1">
          <div class="terminal-card">
            <div class="terminal-card__header">
              <div class="terminal-card__dot"></div>
              <div class="terminal-card__dot"></div>
              <div class="terminal-card__dot"></div>
              <span class="terminal-card__title">data-flow-classification.json</span>
            </div>
            <div class="terminal-card__body">
              <span class="comment">// Flow A — Structured System Data</span><br>
              <span class="key">source</span>: <span class="val">"salesforce, stripe, zendesk"</span><br>
              <span class="key">type</span>: <span class="val">"structured_record"</span><br>
              <span class="key">write_to_spine</span>: <span class="val">true</span><br>
              <span class="key">pipeline_stages</span>: <span class="val">8</span><br><br>
              <span class="comment">// Flow B — Unstructured Content</span><br>
              <span class="key">source</span>: <span class="val">"gmail, notion, slack"</span><br>
              <span class="key">type</span>: <span class="val">"semantic_embedding"</span><br>
              <span class="key">write_to_spine</span>: <span class="val">true</span><br>
              <span class="key">context_store</span>: <span class="val">true</span><br><br>
              <span class="comment">// Flow C — AI Reasoning (PROTECTED)</span><br>
              <span class="key">source</span>: <span class="val">"chatgpt, claude, gemini"</span><br>
              <span class="key">type</span>: <span class="val">"proposal_card"</span><br>
              <span class="key">write_to_spine</span>: <span class="warn">false</span><br>
              <span class="key">requires_hitl_approval</span>: <span class="val">true</span><br>
              <span class="key">truth_boundary</span>: <span class="val">"enforced"</span><br>
              <span class="key">knowledge_ui_only</span>: <span class="val">true</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Three Architecture Layers ───────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">Architecture Layers</span>
        <h2>Three Layers That Work Together</h2>
        <p>Each layer has a distinct responsibility. Together they form the governed intelligence infrastructure that makes the cognitive loop possible.</p>
      </div>

      <div style="max-width:700px;margin-inline:auto;">
        <div class="flow-steps">
          <div class="flow-step reveal">
            <div class="flow-step__num">1</div>
            <div class="flow-step__content">
              <h3>Integration Layer</h3>
              <p>50+ native connectors handle authentication, schema mapping, and data extraction. Read-only by default — nothing writes back to any connected system until a HITL-approved action is executed. Supports REST, webhooks, OAuth, and MCP.</p>
            </div>
          </div>
          <div class="flow-step reveal reveal-d1">
            <div class="flow-step__num">2</div>
            <div class="flow-step__content">
              <h3>Intelligence Layer (The Spine)</h3>
              <p>The normalized knowledge store: entity graph, vector store for unstructured content, structured record store. BYOK encrypted. Tenant isolated. The Adaptive Spine resolves conflicts between sources, maintains source provenance, and presents one authoritative view of every entity in your business.</p>
            </div>
          </div>
          <div class="flow-step reveal reveal-d2">
            <div class="flow-step__num">3</div>
            <div class="flow-step__content">
              <h3>Governance Layer</h3>
              <p>AI reasoning (Flow C), evidence assembly, HITL approval infrastructure, audit trail, and RBAC. Every AI-proposed change is human-reviewed before execution. Every decision is logged immutably with full evidence chain. The governance layer is what makes AI trustworthy — not just fast.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── The Cognitive Loop as Pipeline ──────────────────────── -->
  <section class="section section--surface">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">The Cognitive Loop</span>
        <h2>Load → Store → Think → Act → Adjust → Repeat</h2>
        <p>All three data families pass through classification and normalization before entering the Spine. The loop runs continuously — every action feeds back in as new verified knowledge.</p>
      </div>

      <div class="pipeline-grid" style="grid-template-columns:repeat(3,1fr);">
        <div class="pipeline-card reveal">
          <div class="pipeline-card__accent"></div>
          <div class="pipeline-card__num">Step 01</div>
          <div class="pipeline-card__name">Load</div>
          <div class="pipeline-card__desc">50+ native connectors pull structured data, unstructured content, and AI sessions into the pipeline. Read-only by default.</div>
        </div>
        <div class="pipeline-card reveal reveal-d1">
          <div class="pipeline-card__accent"></div>
          <div class="pipeline-card__num">Step 02</div>
          <div class="pipeline-card__name">Store</div>
          <div class="pipeline-card__desc">The Adaptive Spine normalizes, deduplicates, and resolves entities into a single canonical knowledge layer. Entity 360 assembles the complete view.</div>
        </div>
        <div class="pipeline-card reveal reveal-d2">
          <div class="pipeline-card__accent"></div>
          <div class="pipeline-card__num">Step 03</div>
          <div class="pipeline-card__name">Think</div>
          <div class="pipeline-card__desc">AI reasons over the full picture — structured records, unstructured context, and past AI sessions. Signals correlated. Proposals generated — not executed.</div>
        </div>
        <div class="pipeline-card reveal">
          <div class="pipeline-card__accent"></div>
          <div class="pipeline-card__num">Step 04</div>
          <div class="pipeline-card__name">Act</div>
          <div class="pipeline-card__desc">Twin Agent executes approved workflows across connected systems. Approved actions only — via HITL sign-off. Nothing executes without explicit human consent.</div>
        </div>
        <div class="pipeline-card reveal reveal-d1">
          <div class="pipeline-card__accent"></div>
          <div class="pipeline-card__num">Step 05</div>
          <div class="pipeline-card__name">Adjust</div>
          <div class="pipeline-card__desc">Every proposal is a reviewable card with evidence. Approve, edit, or reject. Denied actions update decision memory and improve future proposals.</div>
        </div>
        <div class="pipeline-card reveal reveal-d2">
          <div class="pipeline-card__accent"></div>
          <div class="pipeline-card__num">Step 06</div>
          <div class="pipeline-card__name">Repeat</div>
          <div class="pipeline-card__desc">Outcomes re-enter the Spine as new verified knowledge. Entity 360 stays current. The loop compounds — the system gets smarter with every cycle.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── User Journey: Day One ────────────────────────────────── -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-tag">User Journey</span>
        <h2>What Changes on Day One</h2>
        <p>No multi-month implementation. No manual configuration. The moment you connect your first tool, the architecture starts working for you.</p>
      </div>

      <div class="card-grid card-grid--2">
        <div class="card reveal">
          <h3>Your workspace arrives ready</h3>
          <p>The moment you connect your first tool, IntegrateWise starts building a living picture of your customers, accounts, and work — no manual configuration required.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>You stop searching across tabs</h3>
          <p>Instead of hunting across five tools, you see the real story — context, relationships, and risks — in one governed place.</p>
        </div>
        <div class="card reveal">
          <h3>AI has your context before you ask</h3>
          <p>AI doesn't start from a blank prompt. It already knows your systems, entities, history, and relationships — because the Spine has been building that picture since day one.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Risks surface before they become crises</h3>
          <p>The system detects patterns between tools — like the $8M renewal risk — and brings them to you with evidence attached, weeks before your QBR.</p>
        </div>
        <div class="card reveal">
          <h3>Nothing executes without approval</h3>
          <p>AI proposes actions, but never bypasses governance. You stay in control of what gets written, changed, or pushed back to any connected system.</p>
        </div>
        <div class="card reveal reveal-d1">
          <h3>Your AI conversations stop disappearing</h3>
          <p>Brainstorms, analyses, and drafts are captured, governed, and linked back to the actual work and entities they affect. No more context lost when you close a tab.</p>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="See the architecture working on your data."
    description="Book a technical demo — we'll walk through the three data flows, the Truth Boundary, and the cognitive loop with a live account from your stack."
  >
    <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--lg">Request a Demo</router-link>
    <router-link :to="{ name: 'how-it-works-governance' }" class="btn btn--ghost btn--lg">Governance Model →</router-link>
  </CtaSection>
</template>

<script setup>
import { onMounted } from 'vue'
import CtaSection from '../../components/CtaSection.vue'

onMounted(() => {
  document.title = 'Architecture & Data Flows — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'IntegrateWise architecture: three data flows, the Adaptive Spine, Truth Boundary enforcement, and the Load → Store → Think → Act → Adjust → Repeat cognitive loop.')
})
</script>
