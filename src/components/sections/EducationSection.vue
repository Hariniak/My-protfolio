<script setup lang="ts">
import { education, certifications } from '@/data/portfolio'
</script>

<template>
  <section id="education" class="section">
    <div class="eyebrow" aria-hidden="true">education &amp; credentials</div>
    <h2 class="s-heading">Background</h2>

    <div class="edu-card">
      <div class="edu-left">
        <div class="edu-degree">{{ education.degree }}</div>
        <div class="edu-school">{{ education.school }}</div>
        <div class="edu-detail">{{ education.detail }}</div>
      </div>
      <div class="edu-period">{{ education.period }}</div>
    </div>

    <div class="cert-list">
      <div v-for="cert in certifications" :key="cert.name" class="cert-item">
        <div class="cert-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="6"/>
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
          </svg>
        </div>
        <div>
          <div class="cert-name">{{ cert.name }}</div>
          <div class="cert-issuer">{{ cert.issuer }}</div>
        </div>
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

.edu-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 22px 26px;
  margin-bottom: 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.edu-degree {
  font-size: 15.5px;
  font-weight: 700;
  color: var(--text-bright);
  margin-bottom: 5px;
}

.edu-school {
  font-size: 12.5px;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 4px;
}

.edu-detail {
  font-size: 12px;
  color: var(--text-muted);
}

.edu-period {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--text-muted);
  white-space: nowrap;
  flex-shrink: 0;
}

.cert-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cert-item {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 7px;
  padding: 14px 20px;
  transition: border-color 0.2s;
}

.cert-item:hover {
  border-color: var(--border-2);
}

.cert-icon {
  width: 34px;
  height: 34px;
  background: var(--accent-dim);
  border: 1px solid var(--accent-mid);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--accent);
}

.cert-name {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--text-bright);
}

.cert-issuer {
  font-size: 11.5px;
  color: var(--text-muted);
  margin-top: 2px;
}
</style>
