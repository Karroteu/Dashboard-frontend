import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEllipsis, faBook } from '@fortawesome/free-solid-svg-icons'

library.add(faEllipsis, faBook)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')