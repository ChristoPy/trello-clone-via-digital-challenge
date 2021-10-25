<template>
  <div class="artboard phone-1 artboard-demo">
    <div class="card-body">
      <h2 class="card-title">{{ data.name }}</h2>
      <div class="card bordered shadow mb-4" v-for="(card, index) of data.cards" :key="index">
        <div class="card-body">
          <h2 class="card-title">{{ card.name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Column',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

.artboard {
  align-items: initial;
}

.artboard .card-body {
  padding: var(--padding-card,1rem);
}

</style>
