<script setup lang="ts">
import { useScrollSpy } from '@/composables/useScrollSpy'
import TheSidebar from '@/components/TheSidebar.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'

const SECTIONS = ['about', 'experience', 'projects', 'skills', 'education']
const { activeSection } = useScrollSpy(SECTIONS)
</script>

<template>
  <div class="layout">
    <TheSidebar :active-section="activeSection" />
    <main class="main">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
    </main>
  </div>
</template>

<style>
.layout {
  display: flex;
  min-height: 100vh;
}

.main {
  margin-left: 265px;
  flex: 1;
  padding: 64px 68px 88px;
  min-width: 0;
}

@media (max-width: 860px) {
  .layout {
    flex-direction: column;
  }

  .main {
    margin-left: 0;
    padding: 36px 24px 60px;
  }
}
</style>
