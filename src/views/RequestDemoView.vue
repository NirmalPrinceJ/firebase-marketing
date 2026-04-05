<template>
  <section class="section" style="padding-top:120px;">
    <div class="container">
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li>Request a Demo</li>
        </ol>
      </nav>
      
      <div class="page-hero__content">
        <span class="label-tag">Request a Demo</span>
        <h1>See the Spine in Action</h1>
        <p>Book a 30-minute live demo. We'll show you the Governed AI Spine, Account 360, the Signal Engine detecting risk, and a HITL Approval Card being reviewed — all on a demo environment configured to resemble your stack.</p>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(2rem,6vw,5rem);align-items:start;margin-top:var(--sp-12);">
        <div>
          <h2 style="font-size:var(--text-xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-6);">What you'll see in 30 minutes</h2>
          <ul class="feature-list" style="margin-bottom:var(--sp-8);">
            <li>The Adaptive Spine normalizing data from a demo CRM, support, billing, and product analytics system</li>
            <li>Entity 360 — a complete account view assembled automatically in under 60 seconds</li>
            <li>The Signal Engine surfacing a compound churn risk signal with 94% confidence</li>
            <li>A HITL Approval Card with full evidence chain — approve, reject, or edit</li>
            <li>The audit trail capturing the decision with identity and timestamp</li>
            <li>Q&A on your specific stack, team, and use case</li>
          </ul>
          <div class="card">
            <h3 style="font-size:var(--text-base);margin-bottom:var(--sp-3);">Prefer to talk first?</h3>
            <p style="font-size:var(--text-sm);margin-bottom:var(--sp-3);">Email us directly and we'll set up an exploratory call before the demo.</p>
            <a href="mailto:connect@integratewise.ai" style="color:var(--primary);font-size:var(--text-sm);">connect@integratewise.ai</a>
          </div>
        </div>

        <div>
          <div class="card">
            <h3 style="font-size:var(--text-lg);margin-bottom:var(--sp-6);">Book your demo</h3>
            <form style="display:flex;flex-direction:column;gap:var(--sp-5);" @submit.prevent="submitForm">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-4);">
                <div class="form-group">
                  <label for="fn">First name *</label>
                  <input type="text" id="fn" v-model="form.firstName" class="form-control" placeholder="Sarah" required>
                </div>
                <div class="form-group">
                  <label for="ln">Last name *</label>
                  <input type="text" id="ln" v-model="form.lastName" class="form-control" placeholder="Chen" required>
                </div>
              </div>
              <div class="form-group">
                <label for="em">Work email *</label>
                <input type="email" id="em" v-model="form.email" class="form-control" placeholder="sarah@company.com" required>
              </div>
              <div class="form-group">
                <label for="co">Company *</label>
                <input type="text" id="co" v-model="form.company" class="form-control" placeholder="Acme Corp" required>
              </div>
              <div class="form-group">
                <label for="role">Your role</label>
                <select id="role" v-model="form.role" class="form-control">
                  <option value="">Select your role...</option>
                  <option>Founder / Owner</option>
                  <option>Account Success / CSM</option>
                  <option>RevOps / CRO</option>
                  <option>CIO / IT Leadership</option>
                  <option>CTO / Engineering</option>
                  <option>Developer</option>
                  <option>Finance / Collections</option>
                  <option>Support Team Lead</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="stack">What tools are you using today?</label>
                <input type="text" id="stack" v-model="form.stack" class="form-control" placeholder="e.g., Salesforce, Zendesk, Stripe, Slack">
              </div>
              <div class="form-group">
                <label for="context">What's driving your interest?</label>
                <textarea id="context" v-model="form.context" class="form-control" placeholder="Tell us about your main pain point or what you're hoping to achieve..." rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn--primary btn--lg" :disabled="submitted || submitting">
                {{ submitting ? 'Submitting...' : submitted ? 'Request Submitted!' : 'Request My Demo →' }}
              </button>
              <p style="font-size:var(--text-xs);color:var(--text-faint);text-align:center;">We'll confirm your slot within one business day.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSeo } from '../composables/useSeo.js'

onMounted(() => {
  document.title = 'Request a Demo — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Book a 30-minute live demo. See the Adaptive Spine, Entity 360, Signal Engine, and HITL Approval Cards working on real data.')
})

const router = useRouter()

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  role: '',
  stack: '',
  context: ''
})

const submitted = ref(false)
const submitting = ref(false)

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyc8AuOFDbcbsio9VOsgGvbqI3MzlQjbzc3UWTtwAy5rSsxUR0RmZvuF1XICTLdLa7i/exec'

async function submitForm() {
  submitting.value = true
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: 'demo_request',
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        company: form.company,
        role: form.role,
        stack: form.stack,
        context: form.context,
        timestamp: new Date().toISOString()
      })
    })
    submitted.value = true
    setTimeout(() => {
      router.push({ name: 'thank-you' })
    }, 1500)
  } catch (e) {
    submitted.value = true
    setTimeout(() => {
      router.push({ name: 'thank-you' })
    }, 1500)
  } finally {
    submitting.value = false
  }
}
</script>