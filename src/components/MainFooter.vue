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
          <a href="https://linkedin.com/company/integratewise" target="_blank" rel="noopener" class="footer__social">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
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
