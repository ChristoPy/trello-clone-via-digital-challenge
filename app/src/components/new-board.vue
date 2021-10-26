<template>
  <input
    required
    placeholder="meu board :)"
    class="input input-bordered w-full"
    v-model="newBoardName"
  >
  <TButton :loading="creatingBoard" @click="newBoard">ok</TButton>
</template>

<script>
import { inject, ref } from 'vue'
import { authStateSymbol } from '@/contexts/auth'
import TButton from '@/components/t-button.vue'

export default {
  name: 'NewBoard',
  components: { TButton },
  setup() {
    const auth = inject(authStateSymbol)

    const creatingBoard = ref(false)
    const newBoardName = ref('')

    const newBoard = () => {
      auth.newBoard({ name: newBoardName.value })
    }

    return {
      newBoard,
      newBoardName,
      creatingBoard,
    }
  }
}
</script>
