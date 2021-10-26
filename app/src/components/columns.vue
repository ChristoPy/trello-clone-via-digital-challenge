<template>
  <div class="bg-base-200 pl-4 min-h-full h-screen flex w-auto space-x-10 flex-nowrap pt-12">
    <div v-for="(column, index) of boardData.columns" :key="column.id" class="py-8">
      <Column
        :data="column"
        :index="index"
      />
    </div>
    <div class="py-8">
      <NewColumn/>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import { authStateSymbol } from '@/contexts/auth'

import Column from './column.vue'
import NewColumn from './new-column.vue'

export default {
  name: 'Columns',
  components: {
    Column,
    NewColumn
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const auth = inject(authStateSymbol)

    const boardData = computed(() => auth.state.boards.find(({ id }) => id === props.id))

    return {
      boardData,
    }
  }
}
</script>
