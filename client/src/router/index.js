import Vue from 'vue'
import Router from 'vue-router'
import PostComponent from '@/components/PostComponent'
import SliderComponent from '@/components/SliderComponent'
import Carousel from 'bootstrap-vue/es/components/carousel'
Vue.use(Carousel)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostComponent',
      component: PostComponent
    },
    {
      path: '/imageSlider',
      name: 'SliderComponent',
      component: SliderComponent
    }
  ]
})
