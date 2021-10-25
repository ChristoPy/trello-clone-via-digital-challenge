import {
  reactive,
  provide,
  inject,
  watch,
} from 'vue'
import { post } from '../utils/request'

const baseState = {}

export const authStateSymbol = Symbol('auth')
export const useAuthState = () => inject(authStateSymbol)
export const createAuthState = () => {
  const storedAuth = localStorage.getItem('t_auth')
  const state = reactive(storedAuth ? JSON.parse(storedAuth) : baseState)

  console.log(state);

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

  watch(state, () => {
    localStorage.setItem('t_auth', JSON.stringify(state))
  })

  return {
    state,
    logIn,
    register
  }
}
export const provideAuthState = () => provide(authStateSymbol, createAuthState())
