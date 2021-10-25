import {
  reactive,
  provide,
  inject,
  watch,
} from 'vue'
import { post } from '../utils/request'

const baseState = {
  currentBoardId: '',
}

export const authStateSymbol = Symbol('auth')
export const useAuthState = () => inject(authStateSymbol)
export const createAuthState = () => {
  const storedAuth = localStorage.getItem('t_auth')
  const state = reactive(storedAuth ? {...JSON.parse(storedAuth), ...baseState} : baseState)

  const logIn = (credentials) => {
    post('auth/login', credentials)
      .then(({ user, tokens }) => {
        state.user = user
        state.tokens = tokens
      })
  }

  const register = (credentials) => {
    post('auth/register', credentials)
      .then(({ user, tokens }) => {
        state.user = user
        state.tokens = tokens
      })
  }

  const newBoard = (data) => {
    post('board/new', data)
      .then((board) => {
        if (!state.boards) state.boards = []
        state.boards.push(board)
      })
  }

  const newColumn = (data) => {
    post(`board/${state.currentBoardId}/column`, data)
      .then((column) => {
        state.boards.filter((board) => {
          if (board.id !== state.currentBoardId) return board
          board.columns.push(column)
        })
      })
  }

  const setCurrentBoardId = (id) => state.currentBoardId = id

  watch(state, () => {
    localStorage.setItem('t_auth', JSON.stringify(state))
  })

  return {
    state,
    logIn,
    register,
    newBoard,
    newColumn,
    setCurrentBoardId
  }
}
export const provideAuthState = () => provide(authStateSymbol, createAuthState())
