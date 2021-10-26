<template>
  <div class="artboard phone-1 artboard-demo bg-base-200">
    <div class="flex items-center justify-center">
      <a href="#new-column">
        <button class="btn btn-sm btn-ghost btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Column',
}
</script>

<style scoped>

.artboard {
  align-items: initial;
}

.artboard.artboard-demo {
  background-color: hsl(var(--b2));
}

</style>
