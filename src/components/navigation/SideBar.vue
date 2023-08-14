<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { useIcons } from '@dbetka/vue-material-icons'
import NavLink from './NavLink.vue'
import NavIcon from './NavIcon.vue'
import ExtraNavLinks from './ExtraNavLinks.vue'

const icons = useIcons()
const route = useRoute()

const links = [
  {
    title: 'Dashboard',
    link: 'home',
    iconName: icons.names.home
  },
  {
    title: 'Browse',
    link: 'browser',
    iconName: icons.names.dashboard
  },
  {
    title: 'Favourite',
    link: 'favourite',
    iconName: icons.names.favorite
  },
  {
    title: 'History',
    link: 'history',
    iconName: icons.names.headphones
  }
] as const
</script>

<template>
  <aside class="bg-panel-tint px-5 pt-5">
    <a>
      <img src="/src/assets/logo.svg" alt="" />
    </a>
    <ul class="mt-10 text-xl font-medium flex flex-col gap-2.5">
      <NavLink v-for="link in links" :key="link.title" :link="link.link" :title="link.title">
        <NavIcon :icon-name="link.iconName" :route-name="link.link" />
      </NavLink>
    </ul>
    <ExtraNavLinks class="mt-9" />
  </aside>
</template>
