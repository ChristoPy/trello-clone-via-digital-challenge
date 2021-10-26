<template>
  <div id="new-column" class="modal">
    <div class="modal-box">
      <h2 class="mb-4 text-3xl font-extrabold text-gray-900">Nova coluna</h2>
      <input
        required
        placeholder="meu card"
        class="w-full input input-bordered"
        v-model="newColumnName"
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
  name: 'NewColumnModal',
  setup() {
    const auth = inject(authStateSymbol)
    const newColumnName = ref('')
    const router = useRouter()

    const goBack = () => router.back()
    const newCard = () => {
      auth.newColumn(newColumnName.value)
      goBack()
      newColumnName.value = ''
    }

    return {
      newColumnName,
      goBack,
      newCard
    }
  }
}
</script>
