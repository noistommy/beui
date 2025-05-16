import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/404NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/beui',
      name: 'beui',
      redirect: '/',
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/color-palette',
      name: 'color-palette',
      component: () => import('../views/ColorPalette.vue'),
    },
    {
      path: '/color-palette-test',
      name: 'color-palette-test',
      component: () => import('../views/ColorPaletteTest.vue'),
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('../views/ButtonView.vue'),
    },
    {
      path: '/input',
      name: 'input',
      component: () => import('../views/InputView.vue'),
    },
    {
      path: '/input-number',
      name: 'input-number',
      component: () => import('../views/InputNumberView.vue'),
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('../views/CheckBoxView.vue'),
    },
    {
      path: '/switch',
      name: 'switch',
      component: () => import('../views/SwitchView.vue'),
    },
    {
      path: '/tag',
      name: 'tag',
      component: () => import('../views/TagsView.vue'),
    },
    {
      path: '/badge',
      name: 'badge',
      component: () => import('../views/BadgeView.vue'),
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/MessageView.vue'),
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('../views/GridView.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue'),
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('../views/TableView.vue'),
    },
    {
      path: '/panel',
      name: 'panel',
      component: () => import('../views/PanelView.vue'),
    },
    {
      path: '/rate',
      name: 'rate',
      component: () => import('../views/RateView.vue'),
    },
    {
      path: '/components/pagination',
      name: 'pagination',
      component: () => import('../views/PaginationView.vue'),
    },
    {
      path: '/components/selectbox',
      name: 'selectbox',
      component: () => import('../views/SelectBoxView.vue'),
    },
    {
      path: '/components/list',
      name: 'list',
      component: () => import('../views/ListView.vue'),
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: () => import('../views/TabsView.vue'),
    },
    {
      path: '/components/tree-list',
      name: 'tree-list',
      component: () => import('../views/TreeListView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404-not-found',
      component: NotFound,
    },
  ],
  scrollBehavior() {
    return { left: 0, top: 0 } // 모든 라우트 변경시 페이지의 최상단으로 스크롤
  },
})

export default router
