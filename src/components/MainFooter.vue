<template>
  <footer class="footer" role="contentinfo">
    <div class="container container--wide">
      <div class="footer__top">
        <div class="footer__brand">
          <router-link :to="{ name: 'home' }" class="footer__logo">
            <img src="/Frame 2.png" alt="IntegrateWise" class="nav__logo-img" />
            <span>IntegrateWise</span>
          </router-link>
          <p class="footer__tagline">Knowledge Workspace Over the Spine, Powered by AI</p>
          <a href="mailto:connect@integratewise.ai" class="footer__email">connect@integratewise.ai</a>
        </div>

        <div class="footer__cols">
          <div class="footer__col">
            <h4>Product</h4>
            <ul>
              <li><router-link :to="{ name: 'product-spine' }">Adaptive Spine</router-link></li>
              <li><router-link :to="{ name: 'product-entity-360' }">Entity 360</router-link></li>
              <li><router-link :to="{ name: 'product-signals' }">Signal Engine</router-link></li>
              <li><router-link :to="{ name: 'product-approvals' }">HITL Approvals</router-link></li>
              <li><router-link :to="{ name: 'product-memory' }">Memory</router-link></li>
              <li><router-link :to="{ name: 'product-integrations' }">Integrations</router-link></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Solutions</h4>
            <ul>
              <li><router-link :to="{ name: 'role', params: { role: 'founder' } }">For Founders</router-link></li>
              <li><router-link :to="{ name: 'role', params: { role: 'account-success' } }">Account Success</router-link></li>
              <li><router-link :to="{ name: 'industry', params: { industry: 'saas' } }">SaaS</router-link></li>
              <li><router-link :to="{ name: 'industry', params: { industry: 'healthcare' } }">Healthcare</router-link></li>
              <li><router-link :to="{ name: 'module', params: { module: 'cs-command-center' } }">CS Command Center</router-link></li>
              <li><router-link :to="{ name: 'module', params: { module: 'revenue-risk' } }">Revenue Risk</router-link></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Company</h4>
            <ul>
              <li><router-link :to="{ name: 'our-story' }">Our Story</router-link></li>
              <li><router-link :to="{ name: 'how-it-works' }">How It Works</router-link></li>
              <li><router-link :to="{ name: 'evidence' }">Evidence</router-link></li>
              <li><router-link :to="{ name: 'security' }">Security</router-link></li>
              <li><router-link :to="{ name: 'resources' }">Resources</router-link></li>
              <li><router-link :to="{ name: 'blog' }">Blog</router-link></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Support</h4>
            <ul>
              <li><router-link :to="{ name: 'faq' }">FAQ</router-link></li>
              <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
              <li><router-link :to="{ name: 'request-demo' }">Request Demo</router-link></li>
              <li><router-link :to="{ name: 'resources', params: { section: 'legal', page: 'privacy' } }">Privacy Policy</router-link></li>
              <li><router-link :to="{ name: 'resources', params: { section: 'legal', page: 'terms' } }">Terms of Service</router-link></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; 2026 IntegrateWise. All rights reserved.</p>
        <a href="https://linkedin.com/company/integratewise" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;font-size:var(--text-xs);color:var(--text-faint);text-decoration:none;transition:color var(--transition);" aria-label="IntegrateWise on LinkedIn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          LinkedIn
        </a>
        <p>Knowledge Workspace &middot; Governed AI Spine &middot; HITL Approvals</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
