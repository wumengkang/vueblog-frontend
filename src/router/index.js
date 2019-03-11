import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Show from '@/components/pages/Show'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: 'Index',component: Index},
    { path: '/show',name: 'Show',component: Show}
  ]
})
