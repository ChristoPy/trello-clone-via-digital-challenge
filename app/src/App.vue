<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from '@/components/header.vue'

export default {
  name: 'App',
  components: { Header }
}
</script>
