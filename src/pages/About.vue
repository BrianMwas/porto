<template>
  <div class="md:flex w-screen sm:flex-col">
    <div class="skills bg-white h-full w-screen p-5 overflow-y-scroll">
      <div class="flex flex-col mt-10">
        <h2 class="text-4xl font-display leading-snug mb-5">
          My Story
        </h2>

        <h4 class="text-gray-600 font-bold mb-4">Why a developer?</h4>
        <p class="leading-snug">Around three years ago I got an opportunity to work at an animal park in Egerton University to help build up my confidence around
           knowledge in animal production science. But the park/farm had a big problem in the way the data on the animals productivity was handled and/or stored.
            And I thought why not make a simple tool to help do the same. I wanted to know how I could help and the one way I thought of was building a 
            desktop application that would keep all the data in the cloud that way they would never have an issue on data lost or damaged, there would always 
            be a backup they could sync with. And thats where my journey into becoming a software developer started.</p>

        <h4 class="text-gray-600 font-bold mb-4 mt-6">Of Course, My work.</h4>
        <p class="leading-snug">I have gone through my whole school life in Kenya, nairobi so here's my progress so far.</p>
        <div class="progress mt-10">
           <ul>
             <li class="flex">
               <span class="bg-gray-400 rounded-full h-8 w-8 flex justify-center items-center">
                 <v-icon name="monitor" class="h-4 w-4 text-white"></v-icon>
               </span>
               <div class="flex flex-col ml-4 mt-2">
                 <h3 class=" text-2xl font-display font-light">Work History</h3>
                  <ul class="mt-3">
                    <li class="mb-4">
                      <p class="text-xs inline-block px-1 py-0.5 mb-2 text-white bg-yellow-500 rounded-sm">May 2020 - Current</p>
                      <p class="text-base font-display">MtejaOps - Lead Developer</p>
                      <p class="font-light text-gray-400">A property managing mobile and web application <a href="https://play.google.com/store/apps/details?id=com.mteja.Mteja" class="text-blue-500">Mteja App</a></p>
                    </li>
                    <li class="mb-4">
                      <p class="text-xs inline-block px-1 py-0.5 mb-2 text-white bg-yellow-500 rounded-sm">August 2020 - Current</p>
                      <p class="text-base font-display">NK travel Safaris - Fullstack developer</p>
                      <p class="font-light text-gray-400">A trip finding web application that helps tourists find amazing places to visit in Kenya. </p>
                    </li>
                    <li class="mb-4">
                      <p class="text-xs inline-block px-1 py-0.5 mb-2 text-white bg-yellow-500 rounded-sm">March 2020 - June 2020</p>
                      <p class="text-base font-display">Studykale - Fullstack developer</p>
                      <p class="font-light text-gray-400">An essay writing service web application with ease ui in mind. <a href="http://studykale.com" class="text-blue-500">Studykale</a></p>
                    </li>
                  </ul>
               </div>
             </li>
             <li class="flex mt-5">
               <span class="bg-gray-400 rounded-full h-8 w-8 flex justify-center items-center">
                 <v-icon name="sun" class="h-4 w-4 text-white"></v-icon>
               </span>
               <div class="flex flex-col ml-4 mt-2">
                 <h3 class=" text-2xl font-display font-light">Education</h3>
                  <ul class="mt-3">
                    <li class="mb-4">
                      <p class="text-xs inline-block px-1 py-0.5 mb-2 text-white bg-blue-500 rounded-sm">September 2014 - April 2018</p>
                      <p class="text-base font-display">Animal Production- Kisii University</p>
                      <p class="font-light text-gray-400">I studied animal production science and genetics.</p>
                    </li>
                    <li class="mb-4">
                      <p class="text-xs inline-block px-1 py-0.5 mb-2 text-white bg-blue-500 rounded-sm">February 2010 - December 2013</p>
                      <p class="text-base font-display">High School - Muhuri Muchiri</p>
                      <p class="font-light text-gray-400">I completed high school</p>
                    </li>
                  
                  </ul>
               </div>
             </li>
           </ul>
        </div>
      </div>
    </div>
    <div class="progress bg-gray-900 h-full w-screen p-5 overflow-y-scroll">
      <div class="flex flex-col mt-10 ">
        <h2 class="font-display text-4xl text-white mb-8">
          Skills.
        </h2>
        <h4 class="text-white font-display font-light leading-loose">Design Skills</h4>
        <ul>
          <li>
            <h6 class="text-white">Adobe XD</h6>
            <div class="w-80 h-3 bg-gradient-to-br from-blue-500 to-blue-800 rounded-sm"></div>
          </li>
          <li class="mt-3">
            <h6 class="text-white">Figma</h6>
            <div class="w-72 h-3 bg-gradient-to-br from-blue-500 to-blue-800 rounded-sm"></div>
          </li>
        </ul>

        <h4 class="text-white font-display font-light leading-loose mt-10">Coding Skills</h4>
        <ul>
          <li>
            <h6 class="text-white">Dart</h6>
            <div class="w-85 h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm"></div>
          </li>
          <li class="mt-3">
            <h6 class="text-white">Javscript</h6>
            <div class="w-85  h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm"></div>
          </li>
          <li class="mt-3">
            <h6 class="text-white">CSS</h6>
            <div class="w-85  h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm"></div>
          </li>
          <li class="mt-3">
            <h6 class="text-white">Kotlin</h6>
            <div class="w-72 h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm"></div>
          </li>
        </ul>

        <h4 class="text-white font-display font-light leading-loose mt-10">Frameworks</h4>
        <div class="flex flex-row flex-wrap">
          <div class="rounded-sm h-24 w-48 border-2 md:mr-2 my-3 border-gray-200 p-3">
            <h2 class="font-display text-white text-2xl">Vue</h2>
            <p class="text-white">Frontend</p>
          </div>
          <div class="rounded-sm h-24 w-48 border-2 md:mr-2 my-3 border-gray-200 p-3">
            <h2 class="font-display text-white text-2xl">Nodejs</h2>
            <p class="text-white">Backend</p>
          </div>
          <div class="rounded-sm h-24 w-48 border-2 md:mr-2 my-3 border-gray-200 p-3">
            <h2 class="font-display text-white text-2xl">Tailwind CSS</h2>
            <p class="text-white">Frontend</p>
          </div>
          <div class="rounded-sm h-24 w-48 border-2 md:mr-2 my-3 border-gray-200 p-3">
            <h2 class="font-display text-white text-2xl">Flutter</h2>
            <p class="text-white">Mobile</p>
          </div>
          <div class="rounded-sm h-24 w-48 border-2 md:mr-2 my-3 border-gray-200 p-3">
            <h2 class="font-display text-white text-2xl">Android</h2>
            <p class="text-white">Mobile</p>
          </div>
        </div>

        <h4 class="text-white font-display font-light leading-loose mt-10">Other</h4>
        <div class="flex flex-row flex-wrap">
          <div class="rounded-sm h-auto w-48 border-2 md:mr-2 my-3 border-gray-200 p-3">
            <h2 class="font-display text-white text-xl">SEO</h2>
            <p class="text-white">Google Search Indexing</p>
          </div>
          <div class="rounded-sm h-auto w-48 border-2 md:mr-2 my-3 border-gray-200 p-3">
            <h2 class="font-display text-white text-xl">Emailing</h2>
            <p class="text-white">Email marketing and designing.</p>
          </div>
          <div class="rounded-sm h-auto w-48 border-2 md:mr-2 my-3 border-gray-200 p-3">
            <h2 class="font-display text-white text-xl">Analysis</h2>
            <p class="text-white">Google anaysis for website visits.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style scoped>
  
</style>
