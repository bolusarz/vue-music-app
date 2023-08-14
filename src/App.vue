<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/navigation/SideBar.vue'
</script>

<template>
  <section class="flex flex-row h-full">
    <SideBar class="basis-1/4 border-r border-[rgba(24, 24, 24, 0.15)] border-solid" />
    <main class="basis-3/4">
      <RouterView />
    </main>
  </section>
</template>
