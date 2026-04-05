<template>
  <div class="incident-card">
    <div class="incident-card__badge">{{ badge }}</div>
    <h3 class="incident-card__title">{{ title }}</h3>
    <div class="incident-card__section">
      <div class="incident-card__label">Signals</div>
      <ul class="incident-card__signals">
        <li v-for="(s, i) in signals" :key="i">{{ s }}</li>
      </ul>
    </div>
    <div class="incident-card__section">
      <div class="incident-card__label" style="color:var(--warning)">AI Insight</div>
      <p class="incident-card__insight">{{ insight }}</p>
    </div>
    <div class="incident-card__section">
      <div class="incident-card__label" style="color:var(--primary)">Suggested Action</div>
      <p class="incident-card__suggestion">{{ suggestion }}</p>
    </div>
    <div class="incident-card__actions">
      <button class="btn--approve">✓ Approve</button>
      <button class="btn--reject">✗ Deny</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  badge: String,
  title: String,
  signals: Array,
  insight: String,
  suggestion: String,
})
</script>

<style scoped>
.incident-card {
  background: var(--surface-0);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  padding: var(--sp-6);
  transition: all var(--transition);
}
.incident-card:hover {
  border-color: var(--border-glass);
  box-shadow: var(--shadow-purple);
}
.incident-card__badge {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--primary);
  background: rgba(165,108,255,0.10);
  border: 1px solid rgba(165,108,255,0.25);
  padding: 2px var(--sp-2);
  border-radius: var(--r-full);
  display: inline-block;
  margin-bottom: var(--sp-3);
}
.incident-card__title {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--sp-4);
}
.incident-card__section { margin-bottom: var(--sp-4); }
.incident-card__label {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-faint);
  margin-bottom: var(--sp-2);
}
.incident-card__signals {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
}
.incident-card__signals li {
  font-size: var(--text-sm);
  color: var(--text-muted);
  padding-left: var(--sp-4);
  position: relative;
  line-height: 1.6;
}
.incident-card__signals li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--text-faint);
}
.incident-card__insight,
.incident-card__suggestion {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.65;
}
.incident-card__actions {
  display: flex;
  gap: var(--sp-3);
  margin-top: var(--sp-5);
}
</style>
