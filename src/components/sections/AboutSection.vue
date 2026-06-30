<script setup lang="ts">
import { stats, summary } from '@/data/portfolio'
import StatCard from '@/components/ui/StatCard.vue'
</script>

<template>
  <section id="about" class="section">
    <div class="eyebrow" aria-hidden="true">about</div>
    <h1 class="s-heading">Building systems that scale,<br>not just code that ships.</h1>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="about-body" v-html="summary"></p>

    <div class="stats-row" aria-label="Key impact metrics">
      <StatCard v-for="stat in stats" :key="stat.label" :stat="stat" />
    </div>
  </section>
</template>

<style scoped>
.section {
  margin-bottom: 76px;
}

.eyebrow {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--accent);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 7px;
}

.eyebrow::before {
  content: '// ';
  opacity: 0.45;
  letter-spacing: 0;
}

.s-heading {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-bright);
  text-wrap: balance;
  margin-bottom: 26px;
  letter-spacing: -0.015em;
  line-height: 1.25;
}

.about-body {
  font-size: 15.5px;
  line-height: 1.82;
  color: var(--text);
  max-width: 62ch;
}

.about-body :deep(strong) {
  color: var(--text-bright);
  font-weight: 600;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
  gap: 12px;
  margin-top: 38px;
}
</style>
