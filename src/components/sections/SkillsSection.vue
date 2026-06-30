<script setup lang="ts">
import { skillGroups } from '@/data/portfolio'
import SkillGroup from '@/components/ui/SkillGroup.vue'
</script>

<template>
  <section id="skills" class="section">
    <div class="eyebrow" aria-hidden="true">skills</div>
    <h2 class="s-heading">Technical toolkit</h2>

    <div class="skills-grid">
      <SkillGroup v-for="group in skillGroups" :key="group.label" :group="group" />
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
  gap: 14px;
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
