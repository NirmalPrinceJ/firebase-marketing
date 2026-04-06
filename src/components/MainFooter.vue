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
              <li><router-link :to="{ name: 'mulesoft' }">MuleSoft Account Success</router-link></li>
              <li><router-link :to="{ name: 'bizops' }">Business Ops Command Center</router-link></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Platform</h4>
            <ul>
              <li><router-link :to="{ name: 'how-it-works' }">How It Works</router-link></li>
              <li><router-link :to="{ name: 'how-it-works-architecture' }">Architecture</router-link></li>
              <li><router-link :to="{ name: 'how-it-works-governance' }">Governance &amp; HITL</router-link></li>
              <li><router-link :to="{ name: 'how-it-works-evidence' }">Evidence &amp; Audit</router-link></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Proof</h4>
            <ul>
              <li><router-link :to="{ name: 'portfolio' }">Portfolio</router-link></li>
              <li><router-link :to="{ name: 'resources' }">Case Studies</router-link></li>
              <li><router-link :to="{ name: 'resources' }">Playbooks</router-link></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Explore</h4>
            <ul>
              <li><a href="/platform" class="footer__deep-link">Explore Full Platform →</a></li>
              <li><router-link :to="{ name: 'portfolio' }">View Portfolio →</router-link></li>
              <li><router-link :to="{ name: 'pricing' }">Pricing</router-link></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Company</h4>
            <ul>
              <li><router-link :to="{ name: 'about' }">About</router-link></li>
              <li><router-link :to="{ name: 'our-story' }">Story</router-link></li>
              <li><router-link :to="{ name: 'security' }">Security</router-link></li>
              <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
              <li><router-link :to="{ name: 'blog' }">Blog</router-link></li>
              <li><router-link :to="{ name: 'faq' }">FAQ</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2026 IntegrateWise. All rights reserved.</p>
        <p>2 Wedges · 8 Products · Governed AI</p>
      </div>
    </div>
  </footer>
</template>
<script setup></script>
