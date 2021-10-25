import { createApp } from 'vue'
import { authStateSymbol, createAuthState } from './contexts/auth'
import App from './App.vue'
import router from './router'

import './index.css'

createApp(App)
  .provide(authStateSymbol, createAuthState())
  .use(router)
  .mount('#app')
