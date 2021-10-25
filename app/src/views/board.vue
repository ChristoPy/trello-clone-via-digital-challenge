<template>
  <NoColumns/>
  <Columns :id="id"/>
</template>

<script>
import { inject } from 'vue'
import { authStateSymbol } from '@/contexts/auth'
import NoColumns from '@/components/no-columns.vue'
import Columns from '@/components/columns.vue'

export default {
  name: 'Board',
  components: {
    NoColumns,
    Columns
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
