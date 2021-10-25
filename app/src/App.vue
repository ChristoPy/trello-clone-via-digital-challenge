<template>
  <Header/>
  <router-view/>
</template>

<script>
import { inject, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { authStateSymbol } from '@/contexts/auth'
import Header from '@/components/header.vue'

export default {
  name: 'App',
  components: { Header },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const auth = inject(authStateSymbol)

    const tryBlockAccess = () => {
      if (!auth.state.user && route.meta.closed && route.name !== 'login') {
        router.replace({ name: 'login' })
      }
    }
    const tryRedirectToHome = () => {
      if (auth.state.user && auth.state.tokens && route.name !== 'home') {
        router.replace({ name: 'home' })
      }
    }

    watch(auth.state, tryRedirectToHome)
    watch(route, tryBlockAccess)
  }
}
</script>
