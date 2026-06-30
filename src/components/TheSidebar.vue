<script setup lang="ts">
import { navItems, contactLinks } from '@/data/portfolio'

defineProps<{
  activeSection: string
}>()
</script>

<template>
  <aside class="sidebar" aria-label="Site navigation">
    <!-- Identity -->
    <div class="sb-top">
      <div class="sb-name" aria-label="Harini AK">
        Harini AK<span class="cursor" aria-hidden="true"></span>
      </div>
      <div class="sb-role">Software Developer</div>
      <div class="sb-status">
        <span class="status-dot" aria-hidden="true"></span>
        Open to opportunities
      </div>
    </div>

    <!-- Nav -->
    <nav aria-label="Page sections">
      <ul class="sb-nav">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            :class="{ active: activeSection === item.id }"
            :aria-current="activeSection === item.id ? 'true' : undefined"
          >
            <span class="nav-tick" aria-hidden="true"></span>
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- Contact -->
    <div class="sb-contact">
      <template v-for="link in contactLinks" :key="link.text">
        <a
          v-if="link.href"
          :href="link.href"
          class="c-link"
          :target="link.type !== 'email' ? '_blank' : undefined"
          :rel="link.type !== 'email' ? 'noopener noreferrer' : undefined"
        >
          <!-- Email -->
          <svg v-if="link.type === 'email'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          <!-- LinkedIn -->
          <svg v-else-if="link.type === 'linkedin'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          <!-- GitHub -->
          <svg v-else-if="link.type === 'github'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
          {{ link.text }}
        </a>

        <span v-else class="c-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {{ link.text }}
        </span>
      </template>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  width: 265px;
  background: var(--surface);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 44px 28px 36px;
  overflow-y: auto;
  z-index: 50;
}

/* Identity */
.sb-top {
  margin-bottom: 36px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--border);
}

.sb-name {
  font-family: var(--mono);
  font-size: 15px;
  font-weight: 700;
  color: var(--text-bright);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background: var(--accent);
  margin-left: 3px;
  vertical-align: middle;
  animation: blink 1.1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.sb-role {
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 14px;
}

.sb-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 11.5px;
  color: var(--text-muted);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--green);
  flex-shrink: 0;
  animation: pulse-dot 2.4s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(61, 214, 140, 0.4); }
  50% { opacity: 0.7; box-shadow: 0 0 0 4px rgba(61, 214, 140, 0); }
}

/* Nav */
.sb-nav {
  list-style: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.sb-nav a {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 9px 12px;
  border-radius: 5px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.18s, background 0.18s;
}

.sb-nav a:hover {
  color: var(--text);
  background: var(--surface-2);
}

.sb-nav a.active {
  color: var(--text-bright);
  background: var(--accent-dim);
}

.nav-tick {
  width: 14px;
  height: 1px;
  background: var(--border-2);
  flex-shrink: 0;
  transition: background 0.18s, width 0.18s;
}

.sb-nav a.active .nav-tick {
  background: var(--accent);
  width: 18px;
}

/* Contact */
.sb-contact {
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.c-link {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 12px;
  line-height: 1.45;
  transition: color 0.18s;
}

.c-link:hover {
  color: var(--text-bright);
}

.c-link svg {
  flex-shrink: 0;
  margin-top: 1px;
  width: 13px;
  height: 13px;
  opacity: 0.5;
  transition: opacity 0.18s;
}

.c-link:hover svg {
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 860px) {
  .sidebar {
    position: static;
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--border);
    padding: 28px 24px 24px;
  }

  .sb-nav {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 12px;
  }

  .sb-contact {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 14px 24px;
  }
}
</style>
