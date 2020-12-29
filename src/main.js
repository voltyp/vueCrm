import Vue from 'vue'
import Vuelidate from "vuelidate"
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from "@/filters/date.filter"
import currencyFilter from "@/filters/currency.filter";
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyAlS8HhO6aeMexyl4pdtfd1rTZbQ_3Fy1U",
  authDomain: "vue-crm-d0873.firebaseapp.com",
  projectId: "vue-crm-d0873",
  storageBucket: "vue-crm-d0873.appspot.com",
  messagingSenderId: "688106366499",
  appId: "1:688106366499:web:bc699d6ed0f5012e677396",
  measurementId: "G-19LY6EJV03"
})

let app

firebase.auth().onAuthStateChanged(() => {
  // для избежания дублирования приложений
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

})
