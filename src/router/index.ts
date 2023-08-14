import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseView from '../views/BrowseView.vue'
import FavouriteView from '../views/FavouriteView.vue'
import HistoryViewVue from '../views/HistoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/browse',
      name: 'browser',
      component: BrowseView
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: FavouriteView
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryViewVue
    }
  ]
})

export default router
