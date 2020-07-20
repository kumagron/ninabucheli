import Vue from 'vue'
import router from './classes/router'

Vue.config.productionTip = false

import App from './App.vue'
import FormOverrider from './classes/form'

new Vue({
  router,
  render:h => h(App),
  mounted() {
      this.$nextTick(function () {
          let webflowScript = document.createElement('script')
          webflowScript.setAttribute('src', 'https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/js/webflow.4f36a7b4f.js')
          document.head.appendChild(webflowScript)
          new FormOverrider().OverrideFormSubmit();
           
      });
  }
}).$mount('#app')
