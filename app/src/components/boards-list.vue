<template>
  <div class="max-w-md w-full space-y-12" v-if="boards">
    <h2 class="mt-6 text-center text-4xl font-extrabold text-gray-900">
      Suas boards
    </h2>
    <div>
      <div class="card bordered compact shadow mb-4 bg-white" v-for="board of boards" :key="board.id">
        <div class="card-body flex items-center flex-row">

          <h2 class="card-title flex-1">{{ board.name }}</h2>
          <div>
            <button class="btn btn-primary" @click="goToBoard(board.id)">
              Abrir
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 ml-2 stroke-current">  
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>                        
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import { authStateSymbol } from '@/contexts/auth'

export default {
  name: 'BoardsList',
  setup() {
    const auth = inject(authStateSymbol)
    const router = useRouter()

    const goToBoard = (id) => router.push({ name: 'board', params: { id } })

    return {
      goToBoard,
      boards: auth.state.boards,
    }
  }
}
</script>
