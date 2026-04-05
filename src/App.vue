<template>
  <div id="app" data-theme="dark">
    <MainNav />
    <main>
      <router-view />
    </main>
    <MainFooter />
  </div>
</template>

<script setup>
import MainNav from './components/MainNav.vue'
import MainFooter from './components/MainFooter.vue'
</script>