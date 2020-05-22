import Vue from 'vue'
import router from "./router";
Vue.config.productionTip = false;

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = router[this.currentRoute];
      console.log(matchingView);
      return matchingView
          ? require('@/pages/' + matchingView + '.vue').default
          : require('./pages/404.vue').default
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});
