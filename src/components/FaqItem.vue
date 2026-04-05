<template>
  <div class="faq-item" :class="{ open: isOpen }">
    <button class="faq-question" @click="toggle">
      {{ question }}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </button>
    <div class="faq-answer" v-show="isOpen">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: String
})

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>