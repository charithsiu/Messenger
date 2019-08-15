import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { CarouselPlugin } from 'bootstrap-vue/es/components'
import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide';


Vue.use(BootstrapVue)

Vue.use(CarouselPlugin)
Vue.component('b-carousel', bCarousel);
Vue.component('b-carousel-slide', bCarouselSlide);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
