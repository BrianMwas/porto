<template>
  <div class="h-screen md:flex">
    <div class="bg-white min-h-full md:w-1/2 flex flex-col justify-around relative">
      <div class="flex flex-col w-full p-5 ">
        <span class="logo-bg mt-7 mb-5"> </span>
        <ul class=" flex flex-col items-start ml-2">
          <li class="mb-1 inline-block">
            <g-link
              class="text-base hover:text-red-400 cursor-pointer transform duration-400 ease-in transition-transform hover:translate-x-3"
              to="/about/"
            >
              About
            </g-link>
          </li>
          <li class="mb-1 inline-block">
            <g-link
              class="text-base hover:text-red-400 cursor-pointer transform duration-400 ease-in transition-transform hover:translate-x-3"
              to="/contact/"
            >
              Contact Us
            </g-link>
          </li>
        </ul>
      </div>
      <div class="absolute top-0 right-0 corner-img h-56 w-56"></div>
      <div class="w-full p-5">
        <h2 class="text-5xl font-display font-bold leading-snug">Hi, Brian here</h2>
        <p class="leading-loose mt-3 mb-5">Is it a brand new idea you have or you want help with the one you have. I am here to help, I use building stacks to separate your idea into components and join them up until your dream becomes a reality.</p>
        <div class="flex my-5">
          <button @click="toContact" class="bg-red-500 px-4 py-4 md:w-1/3 sm:w-1/2 rounded-sm text-white hover:bg-gray-600 duration-200 ease-in transition">
            Contact Us
          </button>
          <button @click="toProjects" class="ml-3 rounded-sm px-4 py-4 md:w-1/3 sm:w-1/2 bg-blue-300 hover:text-white transition duration-200 ease-in hover:bg-gray-600">
            Our Work.
          </button>
        </div>
        
      </div>
    </div>
    <div class="h-screen w-3/4 overflow-visible hidden md:block">
      <div class="image"></div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Get Started.",
  },
  methods: {
    toContact() {
      this.$router.push("/contact");
    },
    toProjects() {
      this.$router.push("/about");
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.intro {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 24% 100%);
}

.image {
  height: 100%;
  width: 100%;
  background: url("../assets/images/Inn.svg") no-repeat center;
}

.corner-img {
  background: url("../assets/images/corner_two.svg") no-repeat center;
  background-size: contain;
}
</style>
