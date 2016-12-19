import Vue from 'vue'
import App from './App'
import Utils from './assets/js/Utils'

import * as filters from './filter/index'
import * as directives from './directive/index'

Vue.config.debug = true;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]);
});

Vue.prototype.Util = Utils;

const app = new Vue({
	render: h => h(App)
}).$mount('#app');

