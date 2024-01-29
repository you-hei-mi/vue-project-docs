<!--
 * @Description: 
 * @Version: 1.0
 * @Author: zou hua
 * @Date: 2024-01-29 14:58:17
 * @FilePath: \@@@vue-project-docs\docs\.vitepress\theme\components\SponsorsAside.vue
-->
<script setup lang="ts">
// import SponsorsGroup from './SponsorsGroup.vue'
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.sponsors !== false">
    <a class="sponsors-aside-text" href="/sponsor/">Sponsors</a>
    <!-- <SponsorsGroup tier="special" />
    <SponsorsGroup tier="platinum" /> -->
  </div>
</template>

<style>
a.sponsors-aside-text {
  color: var(--vt-c-text-3);
  display: block;
  margin: 3em 0 1em;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}
</style>
