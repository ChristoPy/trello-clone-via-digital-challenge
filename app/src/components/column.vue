<template>
  <div class="artboard phone-1 artboard-demo">
    <div class="card-body">
      <div class="flex items-center flex-row">
        <h2 class="card-title flex-1 mb-0">{{ data.name }}</h2>
        <div>
          <a @click="setCurrentColumnIndex" href="#new-card">
            <button class="btn btn-sm btn-ghost btn-primary" @click="startCreatingCard">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div class="pt-2">
        <draggable v-model="cards" item-key="name" group="cards">
          <template #item="{element}">
            <div class="card bordered shadow mb-4">
              <div class="card-body">
                <h2 class="card-title">{{ element.name }}</h2>
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref, watch, computed } from 'vue'
import { authStateSymbol } from '@/contexts/auth'
import draggable from 'vuedraggable'

export default {
  name: 'Column',
  components: {
    draggable,
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const auth = inject(authStateSymbol)

    const cards = ref([...props.data.cards])
    const creatingCard = ref(true)
    const newCardName = ref('')
    const columnCards = computed(() => {
      return auth.getColumnData(auth.state.currentColumnIndex).cards
    })

    watch(cards, () => auth.updateColumn(props.index, cards))
    watch(columnCards, () => {
      if (props.index == auth.state.currentColumnIndex) {
        cards.value = columnCards.value
      }
    })

    const startCreatingCard = () => creatingCard.value = !creatingCard.value
    const setCurrentColumnIndex = () => auth.setCurrentColumnIndex(props.index)

    return {
      cards,
      creatingCard,
      newCardName,
      startCreatingCard,
      setCurrentColumnIndex
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
