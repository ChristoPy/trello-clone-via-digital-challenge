import {
  reactive,
  provide,
  inject,
  watch,
} from 'vue'
import { post } from '../utils/request'

const baseState = {
  currentBoardId: '',
  currentColumnIndex: '',
  boards: []
}

export const authStateSymbol = Symbol('auth')
export const useAuthState = () => inject(authStateSymbol)
export const createAuthState = () => {
  const storedAuth = localStorage.getItem('t_auth')
  const state = reactive(storedAuth ? {...baseState, ...JSON.parse(storedAuth)} : baseState)

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
        state.boards.push(board)
      })
  }

  const newColumn = (data) => {
    post(`board/${state.currentBoardId}/column`, { name: data })
      .then((column) => {
        state.boards.filter((board) => {
          if (board.id !== state.currentBoardId) return board
          board.columns.push(column)
        })
      })
  }

  const getColumnData = (index) => {
    const board = state.boards.find(({ id }) => id === state.currentBoardId)  
    return board.columns[index]
  }

  const updateColumn = (index, cards) => {
    const columnData = {...getColumnData(index)}

    post(`board/${state.currentBoardId}/column/${columnData.id}`, {...columnData, cards})
      .then(() => {
        state.boards.filter((board) => {
          if (board.id !== state.currentBoardId) return board
          board.columns.filter((column, columnIndex) => {
            if (index !== columnIndex) return column
            column.cards = [...cards]
          })
        })
      })
  }

  const newCard = (name) => {
    const newCards = getColumnData(state.currentColumnIndex).cards
    newCards.push({ name })

    updateColumn(state.currentColumnIndex, newCards)
  }

  const setCurrentBoardId = (id) => state.currentBoardId = id
  const setCurrentColumnIndex = (index) => state.currentColumnIndex = index

  watch(state, () => {
    localStorage.setItem('t_auth', JSON.stringify(state))
  })

  return {
    state,
    logIn,
    register,
    newBoard,
    newColumn,
    updateColumn,
    setCurrentColumnIndex,
    setCurrentBoardId,
    newCard,
    getColumnData
  }
}
export const provideAuthState = () => provide(authStateSymbol, createAuthState())
