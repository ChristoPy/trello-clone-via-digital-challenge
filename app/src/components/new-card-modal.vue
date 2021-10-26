<template>
  <div id="new-card" class="modal">
    <div class="modal-box">
      <h2 class="mb-4 text-3xl font-extrabold text-gray-900">Novo card</h2>
      <input
        required
        placeholder="meu card"
        class="w-full input input-bordered"
        v-model="newCardName"
      >
      <div class="modal-action">
        <TButton @click="newCard" class="btn btn-primary">Criar</TButton> 
        <TButton @click="goBack" class="btn">Fechar</TButton>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { authStateSymbol } from '@/contexts/auth'
import tButton from './t-button.vue'

export default {
  components: { tButton },
  name: 'NewCardModal',
  setup() {
    const auth = inject(authStateSymbol)
    const newCardName = ref('')
    const router = useRouter()

    const goBack = () => router.back()
    const newCard = () => {
      auth.newCard(newCardName.value)
      goBack()
      newCardName.value = ''
    }

    return {
      newCardName,
      goBack,
      newCard
    }
  }
}
</script>
