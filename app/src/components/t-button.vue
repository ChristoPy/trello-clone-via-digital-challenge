<template>
  <button class="btn btn-block btn-primary" :class="{ loading }">
    <slot v-if="!loading"/>
  </button>
</template>

<script>
export default {
  name: 'TButton',
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
