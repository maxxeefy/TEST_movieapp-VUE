import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import MovieList from './components/MovieList.vue'
import MovieItem from './components/MovieItem.vue'
import SelectedMovie from './components/SelectedMovie.vue'
import Loader from './components/Loader.vue'

Vue.config.productionTip = false
Vue.component('MovieList', MovieList)
Vue.component('MovieItem', MovieItem)
Vue.component('SelectedMovie', SelectedMovie)
Vue.component('Loader', Loader)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
