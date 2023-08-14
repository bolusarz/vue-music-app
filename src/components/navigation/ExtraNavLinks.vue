<script setup lang="ts">
import { useIcons } from '@dbetka/vue-material-icons'

const icons = useIcons()
</script>

<template>
  <header class="px-2.5 flex justify-between">
    <span class="flex gap-2.5 text-neutral-black-blue text-xl font-medium">
      <material-icons :name="icons.names.home" outlined sharp class="w-[23px]" />
      Home
    </span>
    <material-icons :name="icons.names.add_circle_outline" outlined sharp />
  </header>
</template>
