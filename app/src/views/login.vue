<template>
  <div class="min-h-full flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Entrar
        </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">E-mail</span>
            </label> 
            <input type="text" placeholder="email@exemplo.com" class="input input-bordered">
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Senha</span>
            </label> 
            <input type="text" placeholder="***" class="input input-bordered">
          </div>
        </div>
        <div>
          <button class="btn btn-block btn-primary">ok</button>
        </div>
      </form>
      <p class="mt-2 text-center">
        <a class="link link-primary">não tenho conta</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>
