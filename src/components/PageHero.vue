<template>
  <section class="page-hero">
    <div class="container">
      <nav aria-label="Breadcrumb" v-if="breadcrumbs && breadcrumbs.length">
        <ol class="breadcrumb">
          <li v-for="(crumb, i) in breadcrumbs" :key="i">
            <router-link v-if="crumb.to" :to="crumb.to">{{ crumb.label }}</router-link>
            <span v-else>{{ crumb.label }}</span>
          </li>
        </ol>
      </nav>
      <div class="page-hero__content">
        <span class="label-tag">{{ tag }}</span>
        <h1>{{ title }}</h1>
        <p v-if="description">{{ description }}</p>
        <div class="page-hero__actions" v-if="$slots.actions">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  tag: String,
  title: String,
  description: String,
  breadcrumbs: Array,
})
</script>
