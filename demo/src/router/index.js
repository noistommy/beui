import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import NotFound from '../views/404NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/button',
      // component: HomeView,
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
      path: '/checkbox-group',
      name: 'checkbox-group',
      component: () => import('../views/CheckBoxGroupView.vue'),
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
      path: '/dosirak-grid',
      name: 'dosirak-grid',
      component: () => import('../views/Grid2View.vue'),
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
      path: '/slider',
      name: 'slider',
      component: () => import('../views/SliderView.vue'),
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: () => import('../views/PaginationView.vue'),
    },
    {
      path: '/selectbox',
      name: 'selectbox',
      component: () => import('../views/SelectBoxView.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue'),
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: () => import('../views/TabsView.vue'),
    },
    {
      path: '/segment',
      name: 'segment',
      component: () => import('../views/SegmentView.vue'),
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/CardView.vue'),
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/CalendarView.vue'),
    },
    {
      path: '/date-picker',
      name: 'date-picker',
      component: () => import('../views/DatePickerView.vue'),
    },
    {
      path: '/tree-list',
      name: 'tree-list',
      component: () => import('../views/TreeListView.vue'),
    },
    {
      path: '/event-tracker',
      name: 'event-tracker',
      component: () => import('../views/EventTracker.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404-not-found',
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  },
})

export default router
