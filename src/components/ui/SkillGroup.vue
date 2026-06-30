<script setup lang="ts">
import type { SkillGroupData } from '@/types'

defineProps<{ group: SkillGroupData }>()
</script>

<template>
  <div class="sg">
    <div class="sg-label">{{ group.label }}</div>
    <div class="sg-pills">
      <span v-for="pill in group.pills" :key="pill" class="sg-pill">{{ pill }}</span>
    </div>
  </div>
</template>

<style scoped>
.sg {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 7px;
  padding: 16px 18px;
}

.sg-label {
  font-size: 10px;
  font-family: var(--mono);
  color: var(--accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 11px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.sg-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.sg-pill {
  font-size: 11.5px;
  font-family: var(--mono);
  color: var(--text);
  background: var(--bg);
  border: 1px solid var(--border);
  padding: 3px 9px;
  border-radius: 3px;
}
</style>
