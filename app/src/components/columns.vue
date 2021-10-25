<template>
  <div class="bg-base-200 pl-4 min-h-full h-screen flex w-auto space-x-10 flex-nowrap pt-12" v-if="hasColumns">
    <div class="py-8">
      <Column
        v-for="(column, index) of boardData.columns"
        :data="column"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import { authStateSymbol } from '@/contexts/auth'

import Column from './column.vue'

export default {
  name: 'Columns',
  components: {
    Column
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const auth = inject(authStateSymbol)

    const hasColumns = computed(() => {
      const board = auth.state.boards.find(({ id }) => id === auth.state.currentBoardId)
      return !!board.columns.length
    })
    const boardData = computed(() => auth.state.boards.find(({ id }) => id === props.id))

    return {
      hasColumns,
      boardData,
    }
  }
}
</script>
