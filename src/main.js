import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style.scss'
Vue.use(BootstrapVue)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
	beforeCreate() {
		this.$store.commit('initialiseStore')
	}
}).$mount('#app')
