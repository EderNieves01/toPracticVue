import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// podemos importarlo aqui con un div en el html y montandolo alli
// o importarlo en un script desde el App.vue
// import Card from './components/Card.vue'

createApp(App).mount('#app')
// createApp(Card).mount('#card')