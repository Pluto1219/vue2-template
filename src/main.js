import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
import routes from './router/index'
import * as filters from './filter/index'
import * as directives from './directive/index'
import Utils from './assets/js/Utils'

Vue.config.debug = true;

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.prototype.Util = Utils;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]);
});

const router = new VueRouter({
  base: __dirname,
  routes
});

router.beforeEach((route, redirect, next) => {
  document.title = route.meta.title || document.title;
  next();
});

const app = new Vue({
  router,
	render: h => h(App)
}).$mount('#app');

