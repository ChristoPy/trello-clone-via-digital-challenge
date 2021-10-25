<template>
  <div class="min-h-full flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Cadastrar
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="register">
        <div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Nome</span>
            </label> 
            <input
              required
              type="text"
              placeholder="Nome sobrenome"
              class="input input-bordered"
              v-model="form.name"
            >
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">E-mail</span>
            </label> 
            <input
              required
              type="email"
              placeholder="email@exemplo.com"
              class="input input-bordered"
              v-model="form.email"  
            >
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Senha</span>
            </label> 
            <input
              required
              type="password"
              placeholder="***"
              class="input input-bordered"
              v-model="form.password"
            >
          </div>
        </div>
        <div>
          <button type="submit" class="btn btn-block btn-primary">ok</button>
        </div>
      </form>
      <p class="mt-2 text-center">
        <router-link class="link link-primary" to="login">já possuo conta</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, inject } from 'vue'
import { authStateSymbol } from '@/contexts/auth'

export default {
  name: 'Register',
  setup() {
    const auth = inject(authStateSymbol)
    const form = reactive({
      name: '',
      email: '',
      password: ''
    })

    const register = () => {
      auth.register(form)
    }

    return {
      form,
      register,
    }
  }
}
</script>
