<script setup lang="ts">
import { useRoute } from 'vue-router'

const props = defineProps({
  iconName: { type: String, required: true },
  routeName: { type: String, required: true }
})

const route = useRoute()
</script>

<template>
  <material-icon :name="props.iconName" round filled sharp v-if="route.name === props.routeName" />
  <material-icon :name="props.iconName" round outlined sharp v-else />
</template>
