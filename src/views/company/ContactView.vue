<template>
  <section class="section" style="padding-top:120px;">
    <div class="container">
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li>Contact</li>
        </ol>
      </nav>
      
      <div class="page-hero__content">
        <span class="label-tag">Contact</span>
        <h1>Get in Touch</h1>
        <p>Questions, partnerships, or just want to see the product — we'd love to hear from you.</p>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(2rem,6vw,5rem);align-items:start;">
        <div>
          <h2 style="font-size:var(--text-2xl);font-weight:800;letter-spacing:-0.03em;margin-bottom:var(--sp-5);">We respond within one business day.</h2>
          <p style="color:var(--text-muted);line-height:1.8;margin-bottom:var(--sp-8);">Whether you have a specific question about IntegrateWise, want to discuss a partnership, or just want to understand if it's a fit for your team — reach out. We'd rather have a real conversation than send you to a knowledge base.</p>

          <div style="display:flex;flex-direction:column;gap:var(--sp-5);">
            <div class="card">
              <h3 style="font-size:var(--text-base);margin-bottom:var(--sp-2);">General Inquiries</h3>
              <a href="mailto:connect@integratewise.ai" style="color:var(--primary);font-size:var(--text-sm);">connect@integratewise.ai</a>
            </div>
            <div class="card">
              <h3 style="font-size:var(--text-base);margin-bottom:var(--sp-2);">Press & Media</h3>
              <a href="mailto:press@integratewise.ai" style="color:var(--primary);font-size:var(--text-sm);">press@integratewise.ai</a>
            </div>
            <div class="card">
              <h3 style="font-size:var(--text-base);margin-bottom:var(--sp-2);">Partnerships</h3>
              <a href="mailto:partners@integratewise.ai" style="color:var(--primary);font-size:var(--text-sm);">partners@integratewise.ai</a>
            </div>
            <div class="card">
              <h3 style="font-size:var(--text-base);margin-bottom:var(--sp-3);">Want a demo instead?</h3>
              <p style="font-size:var(--text-sm);margin-bottom:var(--sp-3);">Book a 30-minute live session — we'll show you the Spine, Signal Engine, and HITL Approvals on a real demo account.</p>
              <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--sm">Request a Demo →</router-link>
            </div>
          </div>
        </div>

        <div>
          <div class="card">
            <h3 style="font-size:var(--text-lg);margin-bottom:var(--sp-6);">Send us a message</h3>
            <form style="display:flex;flex-direction:column;gap:var(--sp-5);" @submit.prevent="submitForm">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-4);">
                <div class="form-group">
                  <label for="first-name">First name</label>
                  <input type="text" id="first-name" v-model="form.firstName" class="form-control" placeholder="Sarah" required>
                </div>
                <div class="form-group">
                  <label for="last-name">Last name</label>
                  <input type="text" id="last-name" v-model="form.lastName" class="form-control" placeholder="Chen" required>
                </div>
              </div>
              <div class="form-group">
                <label for="email">Work email</label>
                <input type="email" id="email" v-model="form.email" class="form-control" placeholder="sarah@company.com" required>
              </div>
              <div class="form-group">
                <label for="company">Company</label>
                <input type="text" id="company" v-model="form.company" class="form-control" placeholder="Acme Corp">
              </div>
              <div class="form-group">
                <label for="subject">What's this about?</label>
                <select id="subject" v-model="form.subject" class="form-control">
                  <option value="">Select a topic...</option>
                  <option value="general">General question</option>
                  <option value="demo">I want a demo</option>
                  <option value="partnership">Partnership inquiry</option>
                  <option value="press">Press / media</option>
                  <option value="security">Security review</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" class="form-control" placeholder="Tell us what you're working on or what you'd like to know..." rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn--primary" :disabled="submitted || submitting">
                {{ submitting ? 'Sending...' : submitted ? 'Message sent!' : 'Send Message →' }}
              </button>
              <div v-if="submitted" style="text-align:center;">
                <p style="color:var(--success);margin:0;">We'll be in touch within one business day.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

onMounted(() => {
  document.title = 'Contact — IntegrateWise'
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', 'Get in touch with the IntegrateWise team. Questions, partnerships, or demo requests — we respond within one business day.')
})

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  subject: '',
  message: ''
})

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyc8AuOFDbcbsio9VOsgGvbqI3MzlQjbzc3UWTtwAy5rSsxUR0RmZvuF1XICTLdLa7i/exec'

const submitted = ref(false)
const submitting = ref(false)

async function submitForm() {
  submitting.value = true
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: 'contact',
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        company: form.company,
        subject: form.subject,
        message: form.message,
        timestamp: new Date().toISOString()
      })
    })
    submitted.value = true
  } catch (e) {
    submitted.value = true
  } finally {
    submitting.value = false
  }
}
</script>