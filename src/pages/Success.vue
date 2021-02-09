<template>
  <div class="h-screen flex items-center bg-white flex-col">
      <div class="image h-1/3 w-full"></div>
      <div class="mt-10 h-2/3 w-full flex items-center flex-col">
          <h2 class="text-4xl font-display text-green-500 text-center leading-loose">Message received.</h2>
          <p class="text-center">Thank you for your interest we will reply in the next hour or sooner.</p>
          <g-link class="mt-3 px-4 py-3 bg-red-400 text-white" to="/">Go back Home</g-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .image {
        background: url('../assets/images/kariri.svg') no-repeat center;
        background-size: cover;
    }
</style>