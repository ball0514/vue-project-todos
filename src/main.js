// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import Vue from 'vue'

// library.add(faShoppingCart, faInstagram, faFacebookSquare)

// Vue.component('font-awesome-icon', FontAwesomeIcon) //使用kebab-case

const app = createApp(App)

app.use(router)

app.mount('#app')
