// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.mixin({
  mounted() {
    // document.addEventListener('DOMNodeInserted', function (e) {
    //   console.log('foo')
    //   if (e.target.className == 'w-webflow-badge') {
    //     e.target.parentElement.removeChild(e.target)
    //   }
    // })

    this.$nextTick(() => {
      // Add custom behavior in mounted
      let webflowScript = document.createElement('script')
      webflowScript.setAttribute(
        'src',
        'https://uploads-ssl.webflow.com/5f13464bce6db715dc783b31/js/webflow.4f36a7b4f.js',
      )
      document.head.appendChild(webflowScript)
    })
  },
})

app.use(router)

app.mount('#app')
