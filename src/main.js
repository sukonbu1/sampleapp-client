import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

import VueFlashMessage from 'vue-flash-message'
import 'vue-flash-message/dist/vue-flash-message.min.css'


router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Online Store';
  next();
});

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
})

new Vue({
  router,
  render: function (h) { return h(App) },
   
}).$mount('#app')

