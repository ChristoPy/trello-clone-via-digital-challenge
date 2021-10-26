<template>
  <Columns :id="id"/>
  <NewCardModal/>
  <NewColumnModal/>
</template>

<script>
import { inject } from 'vue'
import { authStateSymbol } from '@/contexts/auth'
import Columns from '@/components/columns.vue'
import NewCardModal from '@/components/new-card-modal.vue'
import NewColumnModal from '@/components/new-column-modal.vue'

export default {
  name: 'Board',
  components: {
    Columns,
    NewCardModal,
    NewColumnModal
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const auth = inject(authStateSymbol)

    auth.setCurrentBoardId(props.id)
  }
}
</script>
