<template>
  <input
    required
    placeholder="meu board :)"
    class="input input-bordered w-full"
    v-model="newBoardName"
  >
  <button class="btn btn-block btn-primary" @click="newBoard">ok</button>
</template>

<script>
import { inject, ref } from 'vue'
import { authStateSymbol } from '@/contexts/auth'

export default {
  name: 'NewBoard',
  setup() {
    const auth = inject(authStateSymbol)

    const newBoardName = ref('')

    const newBoard = () => {
      auth.newBoard({ name: newBoardName.value })
    }

    return {
      newBoard,
      newBoardName,
    }
  }
}
</script>
