import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import { router } from './routes/route.js'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './style.css'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // Import Quasar plugins and add here
})

myApp.use(router)

myApp.mount('#app')