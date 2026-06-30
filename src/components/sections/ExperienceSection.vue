<script setup lang="ts">
import { experiences } from '@/data/portfolio'
</script>

<template>
  <section id="experience" class="section">
    <div class="eyebrow" aria-hidden="true">experience</div>
    <h2 class="s-heading">Where the work happened</h2>

    <div class="timeline">
      <div v-for="exp in experiences" :key="exp.company" class="exp-block">
        <div class="exp-role">{{ exp.role }}</div>
        <div class="exp-meta">
          <span class="exp-co">{{ exp.company }}</span>
          <span class="exp-dot" aria-hidden="true"></span>
          <span class="exp-where">{{ exp.location }}</span>
          <span class="exp-dot" aria-hidden="true"></span>
          <span class="exp-when">{{ exp.period }}</span>
        </div>
        <ul class="exp-items">
          <li v-for="(bullet, i) in exp.bullets" :key="i">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-html="bullet"></span>
          </li>
        </ul>
      </div>
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

.timeline {
  position: relative;
  padding-left: 26px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 3px;
  top: 13px;
  bottom: 6px;
  width: 1px;
  background: var(--border);
}

.exp-block {
  position: relative;
}

.exp-block::before {
  content: '';
  position: absolute;
  left: -27px;
  top: 12px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--bg);
  box-shadow: 0 0 0 1px var(--accent);
}

.exp-role {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-bright);
  margin-bottom: 5px;
}

.exp-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}

.exp-co {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--accent);
}

.exp-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--border-2);
  flex-shrink: 0;
}

.exp-where,
.exp-when {
  font-size: 11.5px;
  font-family: var(--mono);
  color: var(--text-muted);
}

.exp-items {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.exp-items li {
  display: flex;
  gap: 13px;
  font-size: 13.5px;
  line-height: 1.7;
  color: var(--text);
}

.exp-items li::before {
  content: '—';
  font-family: var(--mono);
  color: var(--border-2);
  flex-shrink: 0;
}

.exp-items li :deep(strong) {
  color: var(--text-bright);
  font-weight: 600;
}
</style>
