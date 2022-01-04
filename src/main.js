import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import Notifications from '@kyvg/vue3-notification'
import Chart from 'chart.js/auto'
import App from './App.vue'
import './styles/index.css'
import "@hennge/vue3-pagination/dist/vue3-pagination.css"

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(Notifications)
  .mount('#app')

  // let lastText = '';function check() {let toEl = $('.well--container--2edq4 span');let fromEl = document.querySelectorAll('p[data-purpose="transcript-cue-active" ] span')[1];let currentText = fromEl.innerHTML;if (lastText !== currentText) {toEl.html(currentText);}lastText = fromEl.innerHTML;}window.i = setInterval(check, 200);