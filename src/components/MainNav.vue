<template>
  <nav class="nav" :class="{ scrolled: isScrolled }" role="navigation" aria-label="Main navigation" id="main-nav">
    <div class="nav__inner">
      <!-- Logo -->
      <router-link :to="{ name: 'home' }" class="nav__logo" aria-label="IntegrateWise home">
        <img src="/Frame 2.png" alt="IntegrateWise" class="nav__logo-img" />
        <span class="nav__logo-text">IntegrateWise</span>
      </router-link>

      <!-- Desktop Nav Links -->
      <ul class="nav__links" role="list">
        <!-- Product Dropdown -->
        <li class="nav__dropdown">
          <router-link :to="{ name: 'product' }" class="nav__link" :class="{ 'nav__link--active': isActive('/product') }">
            Product
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </router-link>
          <div class="nav__dropdown-menu">
            <router-link :to="{ name: 'product-spine' }">Adaptive Spine</router-link>
            <router-link :to="{ name: 'product-entity-360' }">Entity 360</router-link>
            <router-link :to="{ name: 'product-signals' }">Signal Engine</router-link>
            <router-link :to="{ name: 'product-approvals' }">HITL Approvals</router-link>
            <router-link :to="{ name: 'product-memory' }">Memory &amp; Re-ingestion</router-link>
            <router-link :to="{ name: 'product-integrations' }">Integrations</router-link>
          </div>
        </li>

        <!-- Solutions Dropdown -->
        <li class="nav__dropdown">
          <router-link :to="{ name: 'solutions' }" class="nav__link" :class="{ 'nav__link--active': isActive('/solutions') }">
            Solutions
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </router-link>
          <div class="nav__dropdown-menu nav__dropdown-menu--wide">
            <div class="nav__dropdown-col">
              <div class="nav__dropdown-group">By Role</div>
              <router-link :to="{ name: 'role', params: { role: 'founder' } }">Founders &amp; Owners</router-link>
              <router-link :to="{ name: 'role', params: { role: 'account-success' } }">Account Success</router-link>
              <router-link :to="{ name: 'role', params: { role: 'revops' } }">RevOps / CRO</router-link>
              <router-link :to="{ name: 'role', params: { role: 'finance' } }">Finance &amp; Collections</router-link>
              <router-link :to="{ name: 'role', params: { role: 'cto' } }">CTO / Engineering</router-link>
              <router-link :to="{ name: 'role', params: { role: 'business-ops' } }">Business Ops</router-link>
            </div>
            <div class="nav__dropdown-col">
              <div class="nav__dropdown-group">By Industry</div>
              <router-link :to="{ name: 'industry', params: { industry: 'saas' } }">SaaS / B2B</router-link>
              <router-link :to="{ name: 'industry', params: { industry: 'retail-ecommerce' } }">Retail &amp; Ecommerce</router-link>
              <router-link :to="{ name: 'industry', params: { industry: 'real-estate' } }">Real Estate</router-link>
            </div>
            <div class="nav__dropdown-col">
              <div class="nav__dropdown-group">Modules</div>
              <router-link :to="{ name: 'module', params: { module: 'cs-command-center' } }">CS Command Center</router-link>
              <router-link :to="{ name: 'module', params: { module: 'revenue-risk' } }">Revenue Risk</router-link>
              <router-link :to="{ name: 'module', params: { module: 'business-ops-console' } }">Business Ops Console</router-link>
              <router-link :to="{ name: 'module', params: { module: 'collections-risk' } }">Collections Risk</router-link>
              <router-link :to="{ name: 'module', params: { module: 'executive-console' } }">Executive Console</router-link>
            </div>
          </div>
        </li>

        <!-- How It Works Dropdown -->
        <li class="nav__dropdown">
          <router-link :to="{ name: 'how-it-works' }" class="nav__link" :class="{ 'nav__link--active': isActive('/how-it-works') }">
            How It Works
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </router-link>
          <div class="nav__dropdown-menu">
            <router-link :to="{ name: 'how-it-works' }">Overview</router-link>
            <router-link :to="{ name: 'how-it-works-architecture' }">Architecture &amp; Data Flows</router-link>
            <router-link :to="{ name: 'how-it-works-governance' }">Govern, HITL &amp; Act</router-link>
            <router-link :to="{ name: 'how-it-works-evidence' }">Evidence &amp; Audit Trail</router-link>
          </div>
        </li>

        <!-- Company Dropdown -->
        <li class="nav__dropdown">
          <router-link :to="{ name: 'company' }" class="nav__link" :class="{ 'nav__link--active': isActive('/company') || isActive('/our-story') || isActive('/evidence') || isActive('/security') }">
            Company
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </router-link>
          <div class="nav__dropdown-menu">
            <router-link :to="{ name: 'our-story' }">Our Story</router-link>
            <router-link :to="{ name: 'evidence' }">Evidence &amp; Trust</router-link>
            <router-link :to="{ name: 'security' }">Security</router-link>
            <router-link :to="{ name: 'company', params: { page: 'careers' } }">Careers</router-link>
            <router-link :to="{ name: 'company', params: { page: 'press' } }">Press</router-link>
          </div>
        </li>

        <!-- Resources Dropdown -->
        <li class="nav__dropdown">
          <router-link :to="{ name: 'resources' }" class="nav__link" :class="{ 'nav__link--active': isActive('/resources') || isActive('/blog') }">
            Resources
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </router-link>
          <div class="nav__dropdown-menu">
            <router-link :to="{ name: 'resources' }">All Resources</router-link>
            <router-link :to="{ name: 'resources', params: { section: 'case-studies' } }">Case Studies</router-link>
            <router-link :to="{ name: 'resources', params: { section: 'guides' } }">Guides &amp; Whitepapers</router-link>
            <router-link :to="{ name: 'blog' }">Blog</router-link>
          </div>
        </li>

        <li>
          <router-link :to="{ name: 'faq' }" class="nav__link" :class="{ 'nav__link--active': isActive('/faq') }">FAQ</router-link>
        </li>
      </ul>

      <!-- Actions -->
      <div class="nav__actions">
        <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
          <svg v-if="theme === 'dark'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
        <router-link :to="{ name: 'contact' }" class="btn btn--ghost btn--sm">Contact</router-link>
        <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--sm">Request Demo</router-link>
      </div>

      <!-- Hamburger -->
      <button
        class="nav__hamburger"
        @click="openMobile"
        aria-label="Open menu"
        :aria-expanded="mobileOpen.toString()"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div class="mobile-menu" :class="{ open: mobileOpen }" role="dialog" aria-label="Mobile navigation">
    <button class="mobile-menu__close btn btn--ghost btn--sm" @click="closeMobile">&#x2715; Close</button>

    <div class="mobile-menu__group">Product</div>
    <router-link :to="{ name: 'product' }" @click="closeMobile">Product Overview</router-link>
    <router-link :to="{ name: 'product-spine' }" @click="closeMobile">Adaptive Spine</router-link>
    <router-link :to="{ name: 'product-entity-360' }" @click="closeMobile">Entity 360</router-link>
    <router-link :to="{ name: 'product-signals' }" @click="closeMobile">Signal Engine</router-link>
    <router-link :to="{ name: 'product-approvals' }" @click="closeMobile">HITL Approvals</router-link>
    <router-link :to="{ name: 'product-memory' }" @click="closeMobile">Memory &amp; Re-ingestion</router-link>
    <router-link :to="{ name: 'product-integrations' }" @click="closeMobile">Integrations</router-link>

    <div class="mobile-menu__group">Solutions — By Role</div>
    <router-link :to="{ name: 'role', params: { role: 'founder' } }" @click="closeMobile">Founders &amp; Owners</router-link>
    <router-link :to="{ name: 'role', params: { role: 'account-success' } }" @click="closeMobile">Account Success</router-link>
    <router-link :to="{ name: 'role', params: { role: 'revops' } }" @click="closeMobile">RevOps / CRO</router-link>
    <router-link :to="{ name: 'role', params: { role: 'finance' } }" @click="closeMobile">Finance &amp; Collections</router-link>
    <router-link :to="{ name: 'role', params: { role: 'cto' } }" @click="closeMobile">CTO / Engineering</router-link>
    <router-link :to="{ name: 'role', params: { role: 'business-ops' } }" @click="closeMobile">Business Ops</router-link>

    <div class="mobile-menu__group">Solutions — By Industry</div>
    <router-link :to="{ name: 'industry', params: { industry: 'saas' } }" @click="closeMobile">SaaS / B2B</router-link>
    <router-link :to="{ name: 'industry', params: { industry: 'retail-ecommerce' } }" @click="closeMobile">Retail &amp; Ecommerce</router-link>
    <router-link :to="{ name: 'industry', params: { industry: 'real-estate' } }" @click="closeMobile">Real Estate</router-link>

    <div class="mobile-menu__group">Modules</div>
    <router-link :to="{ name: 'module', params: { module: 'cs-command-center' } }" @click="closeMobile">CS Command Center</router-link>
    <router-link :to="{ name: 'module', params: { module: 'revenue-risk' } }" @click="closeMobile">Revenue Risk</router-link>
    <router-link :to="{ name: 'module', params: { module: 'business-ops-console' } }" @click="closeMobile">Business Ops Console</router-link>
    <router-link :to="{ name: 'module', params: { module: 'collections-risk' } }" @click="closeMobile">Collections Risk</router-link>
    <router-link :to="{ name: 'module', params: { module: 'executive-console' } }" @click="closeMobile">Executive Console</router-link>

    <div class="mobile-menu__group">How It Works</div>
    <router-link :to="{ name: 'how-it-works' }" @click="closeMobile">Overview</router-link>
    <router-link :to="{ name: 'how-it-works-architecture' }" @click="closeMobile">Architecture</router-link>
    <router-link :to="{ name: 'how-it-works-governance' }" @click="closeMobile">Governance &amp; HITL</router-link>
    <router-link :to="{ name: 'how-it-works-evidence' }" @click="closeMobile">Evidence &amp; Audit</router-link>

    <div class="mobile-menu__group">Company</div>
    <router-link :to="{ name: 'our-story' }" @click="closeMobile">Our Story</router-link>
    <router-link :to="{ name: 'evidence' }" @click="closeMobile">Evidence &amp; Trust</router-link>
    <router-link :to="{ name: 'security' }" @click="closeMobile">Security</router-link>
    <router-link :to="{ name: 'faq' }" @click="closeMobile">FAQ</router-link>
    <router-link :to="{ name: 'contact' }" @click="closeMobile">Contact</router-link>
    <router-link :to="{ name: 'request-demo' }" @click="closeMobile">Request Demo →</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '../composables/useTheme.js'

const route = useRoute()
const { theme, toggleTheme, initTheme } = useTheme()

const isScrolled = ref(false)
const mobileOpen = ref(false)

function isActive(path) {
  return route.path.startsWith(path)
}

function openMobile() {
  mobileOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeMobile() {
  mobileOpen.value = false
  document.body.style.overflow = ''
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function handleKeydown(e) {
  if (e.key === 'Escape') closeMobile()
}

onMounted(() => {
  initTheme()
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('keydown', handleKeydown)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleKeydown)
})
</script>
