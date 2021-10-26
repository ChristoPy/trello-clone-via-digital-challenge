<template>
  <div class="min-h-full flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <BoardsList/>
    <NoBoards/>
  </div>
</template>

<script>
import BoardsList from '@/components/boards-list.vue'
import NoBoards from '@/components/no-boards.vue'

export default {
  components: { BoardsList, NoBoards },
  name: 'Home',
}
</script>
