<template>
  <div class="relative">
    <header class="text-gray-600 sm:m-4 md:m-2 font-sans md:shadow-none md:bg-white sm:absolute md:relative sm:top-0 sm:left-0 sm:right-0 bg-gray-50 sm:shadow-2xl sm:rounded-sm">
      <div class="burger absolute right-5 top-6 z-10 md:hidden" :class="{ 'open' : openMenu }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav class="flex justify-between sm:flex-col md:flex-row md:flex" :class="{ 'hidden': !openMenu }">
        <span class="logo-bg sm:mt-6 sm:mb-2 sm:ml-3 ">
        </span>
        <ul class="flex md:hidden flex-col lg:flex-row sm:mt-5 md:mt-0">
          <li class="mb-3">
            <p  class="text-xl hover:text-red-400 transform duration-400 ease-in transition-transform hover:translate-x-3">Home</p>
          </li>
          <li class="mb-3">
            <p class="text-xl hover:text-red-400 transform duration-400 ease-in transition-transform hover:translate-x-3">About</p>
          </li>
          <li class="mb-3">
            <p class="text-xl hover:text-red-400 transform duration-400 ease-in transition-transform hover:translate-x-3">Contact Us</p>
          </li>
          <li class="mb-3">
            <p class="text-xl hover:text-red-400 transform duration-400 ease-in transition-transform hover:translate-x-3">Projects</p>
          </li>
        </ul>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
 
  data() {
    return {
      openMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    }
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Rubik&display=swap');

body {
  font-family: 'Rubik',system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  overflow-x: hidden;
}

.logo-bg {
  height: 3em;
  width: 3em;
  background: url('../assets/images/logo.svg') center no-repeat;
  background-size: contain;
}

.burger {
  width: 40px;
  height: 40px;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
}

.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  border-radius: 4px;
  opacity: 1;
  background: #434344;
  left: 0;
  rotate: 0deg;
  transition: .25s ease-in-out;
}


.burger span:nth-child(1) {
  top: 0px;
}

.burger span:nth-child(2) {
  top: 12px;
}

.burger span:nth-child(3) {
  top: 24px;
}

.burger.open span:nth-child(1) {
  top: 18px;
  transform: rotate(135deg);
}

.burger.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.burger.open span:nth-child(3) {
  top: 18px;
  transform: rotate(-135deg);
}

</style>
