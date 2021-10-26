<template>
  <div class="max-w-md w-full space-y-12" v-if="noBoards">
    <div>
      <h2 class="mt-6 text-center text-4xl font-extrabold text-gray-900">
        Tudo vazio por aqui!
      </h2>
      <p class="mt-2 text-center">Vamos começar criando um novo board?</p>
    </div>
    <button class="btn btn-block btn-primary" @click="newBoard" v-if="!creatingNewBoard">criar board</button>
    <NewBoard v-else/>
  </div>
</template>

<script>
import { inject, computed, ref } from 'vue'
import { authStateSymbol } from '@/contexts/auth'
import NewBoard from './new-board.vue'

export default {
  name: 'BoBoards',
  components: { NewBoard },
  setup() {
    const auth = inject(authStateSymbol)

    const noBoards = computed(() => !auth.state.boards.length)

    const creatingNewBoard = ref(false)
    const newBoardName = ref('')

    const newBoard = () => {
      creatingNewBoard.value = true
    }

    return {
      noBoards,
      newBoard,
      newBoardName,
      creatingNewBoard,
    }
  }
}
</script>
