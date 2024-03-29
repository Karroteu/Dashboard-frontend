import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEllipsis, faBook, faChartLine, faGear, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faEllipsis, faBook, faChartLine, faGear, faUser, faEnvelope)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')