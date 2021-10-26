<template>
  <div class="navbar fixed w-full bg-white shadow z-10">
    <div class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold">
        <Logo primary/>
      </span>
    </div>
    <div class="flex-none"/>
  </div>
</template>

<script>
import Logo from '@/components/logo.vue';

export default {
  name: 'Header',
  components: { Logo },
}
</script>
