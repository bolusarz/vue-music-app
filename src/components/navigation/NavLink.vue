<script setup lang="ts">
import { useRoute } from 'vue-router'

const props = defineProps({
  link: { type: String, required: true },
  title: { type: String, required: true }
})

const route = useRoute()
</script>

<template>
  <li
    class="p-2 transition-all"
    :class="{ 'bg-active-link rounded-[4px]': route.name === props.link }"
  >
    <RouterLink
      :to="{ name: props.link }"
      class="flex gap-2.5 items-center"
      active-class="font-bold text-white-mute"
    >
      <slot />
      {{ props.title }}
    </RouterLink>
  </li>
</template>
