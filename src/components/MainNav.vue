<template>
  <nav class="nav" :class="{ scrolled: isScrolled }" role="navigation" aria-label="Main navigation">
    <div class="nav__inner">
      <router-link :to="{ name: 'home' }" class="nav__logo" aria-label="IntegrateWise home">
        <svg width="48" height="32" viewBox="0 0 120 80" fill="none" aria-hidden="true">
          <path d="M12 40 Q24 10 40 40 Q56 70 72 40 Q88 10 108 40" stroke="white" stroke-width="6" stroke-linecap="round" fill="none"/>
          <circle cx="12" cy="40" r="8" fill="white" opacity="0.7"/>
          <circle cx="40" cy="40" r="7" fill="white"/>
          <line x1="40" y1="40" x2="40" y2="60" stroke="white" stroke-width="5" stroke-linecap="round"/>
          <circle cx="72" cy="40" r="7" fill="white"/>
          <line x1="72" y1="40" x2="72" y2="20" stroke="white" stroke-width="5" stroke-linecap="round"/>
          <circle cx="108" cy="40" r="7" fill="white" opacity="0.5"/>
        </svg>
        <span class="nav__logo-text">IntegrateWise</span>
      </router-link>

      <ul class="nav__links" role="list">
        <!-- Product -->
        <li class="nav__dropdown">
          <span class="nav__link">Product <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></span>
          <div class="nav__dropdown-menu nav__dropdown-menu--wide">
            <div class="nav__dropdown-col">
              <div class="nav__dropdown-group">MuleSoft Account Success</div>
              <router-link :to="{ name: 'mulesoft' }">Overview</router-link>
              <router-link :to="{ name: 'csm-hub' }">CSM Accounts Hub</router-link>
              <router-link :to="{ name: 'csm-360' }">CSM Account 360</router-link>
              <router-link :to="{ name: 'intelligence-center' }">Intelligence Center</router-link>
              <router-link :to="{ name: 'strategic-success' }">Strategic Account Success</router-link>
            </div>
            <div class="nav__dropdown-col">
              <div class="nav__dropdown-group">Business Ops Command Center</div>
              <router-link :to="{ name: 'bizops' }">Overview</router-link>
              <router-link :to="{ name: 'founder-ops' }">Founder Ops</router-link>
              <router-link :to="{ name: 'ceo-dashboard' }">CEO Dashboard</router-link>
              <router-link :to="{ name: 'coo-dashboard' }">COO Dashboard</router-link>
              <router-link :to="{ name: 'cio-cto-dashboard' }">CIO/CTO Dashboard</router-link>
            </div>
          </div>
        </li>

        <!-- How It Works -->
        <li class="nav__dropdown">
          <router-link :to="{ name: 'how-it-works' }" class="nav__link" :class="{ 'nav__link--active': isActive('/how-it-works') }">
            How It Works <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </router-link>
          <div class="nav__dropdown-menu">
            <router-link :to="{ name: 'how-it-works' }">Overview</router-link>
            <router-link :to="{ name: 'how-it-works-architecture' }">Architecture Deep Dive</router-link>
            <router-link :to="{ name: 'how-it-works-governance' }">Governance &amp; HITL</router-link>
            <router-link :to="{ name: 'how-it-works-evidence' }">Evidence &amp; Audit</router-link>
          </div>
        </li>

        <li><router-link :to="{ name: 'pricing' }" class="nav__link" :class="{ 'nav__link--active': isActive('/pricing') }">Pricing</router-link></li>

        <!-- Resources -->
        <li class="nav__dropdown">
          <router-link :to="{ name: 'resources' }" class="nav__link" :class="{ 'nav__link--active': isActive('/resources') || isActive('/blog') || isActive('/faq') }">
            Resources <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </router-link>
          <div class="nav__dropdown-menu">
            <router-link :to="{ name: 'resources' }">All Resources</router-link>
            <router-link :to="{ name: 'blog' }">Blog</router-link>
            <router-link :to="{ name: 'faq' }">FAQ</router-link>
          </div>
        </li>

        <!-- Company -->
        <li class="nav__dropdown">
          <span class="nav__link">Company <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></span>
          <div class="nav__dropdown-menu">
            <router-link :to="{ name: 'about' }">About IntegrateWise</router-link>
            <router-link :to="{ name: 'our-story' }">Our Story</router-link>
            <router-link :to="{ name: 'security' }">Security</router-link>
            <router-link :to="{ name: 'contact' }">Contact</router-link>
          </div>
        </li>
      </ul>

      <div class="nav__actions">
        <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
          <svg v-if="theme === 'dark'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <router-link :to="{ name: 'request-demo' }" class="btn btn--primary btn--sm">Book Demo</router-link>
      </div>

      <button class="nav__hamburger" @click="openMobile" aria-label="Open menu" :aria-expanded="mobileOpen.toString()">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </nav>

  <div class="mobile-menu" :class="{ open: mobileOpen }" role="dialog" aria-label="Mobile navigation">
    <button class="mobile-menu__close btn btn--ghost btn--sm" @click="closeMobile">&#x2715; Close</button>

    <div class="mobile-menu__group">MuleSoft Account Success</div>
    <router-link :to="{ name: 'mulesoft' }" @click="closeMobile">Overview</router-link>
    <router-link :to="{ name: 'csm-hub' }" @click="closeMobile">CSM Accounts Hub</router-link>
    <router-link :to="{ name: 'csm-360' }" @click="closeMobile">CSM Account 360</router-link>
    <router-link :to="{ name: 'intelligence-center' }" @click="closeMobile">Intelligence Center</router-link>
    <router-link :to="{ name: 'strategic-success' }" @click="closeMobile">Strategic Account Success</router-link>

    <div class="mobile-menu__group">Business Ops Command Center</div>
    <router-link :to="{ name: 'bizops' }" @click="closeMobile">Overview</router-link>
    <router-link :to="{ name: 'founder-ops' }" @click="closeMobile">Founder Ops</router-link>
    <router-link :to="{ name: 'ceo-dashboard' }" @click="closeMobile">CEO Dashboard</router-link>
    <router-link :to="{ name: 'coo-dashboard' }" @click="closeMobile">COO Dashboard</router-link>
    <router-link :to="{ name: 'cio-cto-dashboard' }" @click="closeMobile">CIO/CTO Dashboard</router-link>

    <div class="mobile-menu__group">How It Works</div>
    <router-link :to="{ name: 'how-it-works' }" @click="closeMobile">Overview</router-link>
    <router-link :to="{ name: 'how-it-works-architecture' }" @click="closeMobile">Architecture</router-link>
    <router-link :to="{ name: 'how-it-works-governance' }" @click="closeMobile">Governance &amp; HITL</router-link>
    <router-link :to="{ name: 'how-it-works-evidence' }" @click="closeMobile">Evidence &amp; Audit</router-link>

    <div class="mobile-menu__group">More</div>
    <router-link :to="{ name: 'pricing' }" @click="closeMobile">Pricing</router-link>
    <router-link :to="{ name: 'resources' }" @click="closeMobile">Resources</router-link>
    <router-link :to="{ name: 'blog' }" @click="closeMobile">Blog</router-link>
    <router-link :to="{ name: 'faq' }" @click="closeMobile">FAQ</router-link>

    <div class="mobile-menu__group">Company</div>
    <router-link :to="{ name: 'about' }" @click="closeMobile">About</router-link>
    <router-link :to="{ name: 'our-story' }" @click="closeMobile">Our Story</router-link>
    <router-link :to="{ name: 'security' }" @click="closeMobile">Security</router-link>
    <router-link :to="{ name: 'contact' }" @click="closeMobile">Contact</router-link>
    <router-link :to="{ name: 'request-demo' }" @click="closeMobile">Book Demo →</router-link>
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
function isActive(path) { return route.path.startsWith(path) }
function openMobile() { mobileOpen.value = true; document.body.style.overflow = 'hidden' }
function closeMobile() { mobileOpen.value = false; document.body.style.overflow = '' }
function handleScroll() { isScrolled.value = window.scrollY > 20 }
function handleKeydown(e) { if (e.key === 'Escape') closeMobile() }
onMounted(() => { initTheme(); window.addEventListener('scroll', handleScroll, { passive: true }); document.addEventListener('keydown', handleKeydown); handleScroll() })
onUnmounted(() => { window.removeEventListener('scroll', handleScroll); document.removeEventListener('keydown', handleKeydown) })
</script>
