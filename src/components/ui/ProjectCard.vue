<script setup lang="ts">
import type { Project } from '@/types'

defineProps<{ project: Project }>()
</script>

<template>
  <div class="proj-card">
    <div class="proj-header">
      <div class="proj-name">{{ project.name }}</div>
      <div class="proj-badge">{{ project.badge }}</div>
    </div>

    <p class="proj-desc">{{ project.description }}</p>

    <div v-if="project.modules" class="proj-modules">
      <div v-for="mod in project.modules" :key="mod.name" class="mod-row">
        <span class="mod-name">{{ mod.name }}</span>
        {{ mod.description }}
      </div>
    </div>

    <div class="proj-tech">
      <span v-for="chip in project.tech" :key="chip" class="t-chip">{{ chip }}</span>
    </div>
  </div>
</template>

<style scoped>
.proj-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  transition: border-color 0.22s, transform 0.2s, box-shadow 0.22s;
}

.proj-card:hover {
  border-color: rgba(240, 165, 0, 0.28);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.32);
}

.proj-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

.proj-name {
  font-size: 14.5px;
  font-weight: 700;
  color: var(--text-bright);
  line-height: 1.3;
}

.proj-badge {
  font-size: 10px;
  font-family: var(--mono);
  background: var(--accent-dim);
  border: 1px solid var(--accent-mid);
  color: var(--accent);
  padding: 3px 7px;
  border-radius: 3px;
  white-space: nowrap;
  letter-spacing: 0.05em;
  flex-shrink: 0;
  font-weight: 600;
}

.proj-desc {
  font-size: 13px;
  color: var(--text);
  line-height: 1.65;
  flex: 1;
}

.proj-modules {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mod-row {
  font-size: 12px;
  color: var(--text);
  line-height: 1.5;
}

.mod-name {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--blue);
  font-weight: 600;
  letter-spacing: 0.04em;
  display: block;
  margin-bottom: 1px;
}

.proj-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.t-chip {
  font-size: 10.5px;
  font-family: var(--mono);
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 3px 8px;
  border-radius: 3px;
}
</style>
