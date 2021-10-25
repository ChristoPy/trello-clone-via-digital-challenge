<template>
  <div class="min-h-full flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8" v-if="noColumns">
    <div class="max-w-md w-full space-y-12">
      <div>
        <h2 class="mt-6 text-center text-4xl font-extrabold text-gray-900">
          Board sem colunas!
        </h2>
        <p class="mt-2 text-center">Vamos criar uma nova?</p>
      </div>
      <input
        required
        placeholder="minha coluna :)"
        class="input input-bordered w-full"
        v-model="newColumnName"
      >
      <button class="btn btn-block btn-primary" @click="newColumn">ok</button>
    </div>
  </div>
</template>

<script>
import { inject, computed, ref } from 'vue'
import { authStateSymbol } from '@/contexts/auth'

export default {
  name: 'NoColumns',
  setup() {
    const auth = inject(authStateSymbol)

    const noColumns = computed(() => {
      const board = auth.state.boards.find(({ id }) => id === auth.state.currentBoardId)
      return !board.columns.length
    })
    const newColumnName = ref('')

    const newColumn = () => {
      auth.newColumn({ name: newColumnName.value })
    }

    return {
      noColumns,
      newColumn,
      newColumnName,
    }
  }
}
</script>
