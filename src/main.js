import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import Utils from './assets/js/Utils'

import * as filters from './filter/index'
import * as directives from './directive/index'

Vue.config.debug = true;

Vue.use(VueResource);

Vue.prototype.Util = Utils;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]);
});

const app = new Vue({
	render: h => h(App)
}).$mount('#app');

