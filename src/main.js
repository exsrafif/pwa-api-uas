import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as firebase from 'firebase'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

// Your web app's Firebase configuration
const configOptions = {
  apiKey: 'AIzaSyD437_4UUfX_9rKsGl1zZqt7hPdfrpEoJY',
  authDomain: 'vue-api-uas.firebaseapp.com',
  databaseURL: 'hhttps://vue-api-uas.firebaseio.com',
  projectId: 'vue-api-uas',
  storageBucket: 'vue-api-uas.appspot.com',
  messagingSenderId: '388255596206',
  appId: '1:388255596206:web:f0e05aface889f5b27773f'
}
// Initialize Firebase(Sign in sign out)
firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
