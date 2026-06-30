<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Stat } from '@/types'

const props = defineProps<{ stat: Stat }>()

const cardEl = ref<HTMLElement | null>(null)
const displayValue = ref(
  props.stat.value ?? `0${props.stat.suffix ?? ''}`,
)

onMounted(() => {
  if (!props.stat.target || !cardEl.value) return

  const target = props.stat.target
  const suffix = props.stat.suffix ?? ''
  const duration = 1100

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return
      observer.disconnect()

      let startTime: number | null = null

      function step(timestamp: number) {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        displayValue.value = Math.floor(eased * target).toLocaleString() + suffix
        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          displayValue.value = target.toLocaleString() + suffix
        }
      }

      requestAnimationFrame(step)
    },
    { threshold: 0.3 },
  )

  observer.observe(cardEl.value)
})
</script>

<template>
  <div ref="cardEl" class="stat-card">
    <div class="stat-n">{{ displayValue }}</div>
    <div class="stat-l">{{ stat.label }}</div>
  </div>
</template>

<style scoped>
.stat-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 7px;
  padding: 18px 20px 16px;
  transition: border-color 0.2s;
}

.stat-card:hover {
  border-color: var(--border-2);
}

.stat-n {
  font-family: var(--mono);
  font-size: 27px;
  font-weight: 700;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
  line-height: 1;
  margin-bottom: 7px;
  letter-spacing: -0.02em;
}

.stat-l {
  font-size: 11.5px;
  color: var(--text-muted);
  line-height: 1.5;
  white-space: pre-line;
}
</style>
