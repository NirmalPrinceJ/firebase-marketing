<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-card reveal">
        <h2>{{ title }}</h2>
        <p v-if="description">{{ description }}</p>
        <div class="cta-card__actions">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
})
</script>
