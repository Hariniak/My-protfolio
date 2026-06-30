<script setup lang="ts">
import { projects } from '@/data/portfolio'
import ProjectCard from '@/components/ui/ProjectCard.vue'
</script>

<template>
  <section id="projects" class="section">
    <div class="eyebrow" aria-hidden="true">projects</div>
    <h2 class="s-heading">Key systems built</h2>

    <div class="proj-grid">
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
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

.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
  gap: 16px;
}

@media (max-width: 480px) {
  .proj-grid {
    grid-template-columns: 1fr;
  }
}
</style>
