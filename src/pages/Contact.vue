<template>
  <div class="md:flex min-h-screen">
      <div class="contact-info  bg-blue-600 md:w-1/3 flex flex-col">
        <div class="logo-bg mt-7 mb-10 ml-2"></div>
        <div class="details ml-4">
          <h2 class="font-display text-4xl text-white leading-snug">
            I'd love to hear from you..
          </h2>
          <p class="text-white font-sans leading-loose mb-5">Let's create progress together.</p>

          <ul class="md:flex flex-col mt-16 hidden">
            <li class="mb-7">
              <v-icon name="smartphone" class="h-10 w-10 text-white"></v-icon>
              <p class="text-white">+254705458766</p>
            </li>
            <li class="mb-7">
              <v-icon name="mail" class="h-10 w-10 text-white"></v-icon>
              <p class="text-white">brnmwas@gmail.com</p>
            </li>
            <li>
              <v-icon name="linkedin" class="h-10 w-10 text-white"></v-icon>
              <p class="text-white">linkedin.com/in/mwangi-brian</p>
            </li>
          </ul>
        </div>
      </div>
      <div class=" flex items-center relative md:w-2/3">
        <div class="h-50 w-50 rounded-full bg-red-500 absolute top-0 right:5"></div>
        
        <form class="p-5 w-full" 
              v-on:submit.prevent="sendMessage" 
              name="contact"
              method="post"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
          >
          <h2 class="font-display font-bold mb-5 text-5xl">
            Contact Us
          </h2>
          <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>
          <div class="flex mb-5">
            <input v-model="formData.firstName" type="text" name="firstName" id="firstName" required class="border-gray-200 focus:placeholder-white focus:outline-none focus:text-white focus:bg-blue-600 rounded-sm w-1/2 mr-2 py-5 px-3" placeholder="First name">
            <input v-model="formData.secondName" type="text" name="secondName" id="secondName" class="border-gray-200 focus:placeholder-white focus:outline-none focus:text-white focus:bg-blue-600 rounded-sm w-1/2 py-5 px-3 " placeholder="Second name">
          </div>
          <input v-model="formData.email" type="email" name="email" id="email" required class="border-gray-200 focus:placeholder-white focus:outline-none focus:text-white focus:bg-blue-600 rounded-sm w-full py-5 px-3 mb-5" placeholder="yours@email.com">
          <textarea v-model="formData.message" name="message" id="message" rows="6"  required class="border-gray-200 focus:placeholder-white focus:outline-none focus:text-white focus:bg-blue-600 rounded-sm w-full py-5 px-3 mb-5" placeholder="A little intro to get know you better."></textarea>
          <button type="submit" class="mt-3 bg-white text-red-500 w-1/3 hover:bg-yellow-500 hover:text-white transition duration-200 hover:border-2 hover:border-blue-200 outline-none px-5 py-4 float-right rounded-sm">
            Send
          </button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  metaInfo : {
    title: "Contact Info"
  },
  data() {
    return {
      formData: {},
      sent: false
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    sendMessage(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => {
        this.sent = true;
      }
      )
      .catch(error => alert(error))
      setTimeout(() => {
        this.sent = false;
      }, 3000)
      
      this.formData = {}
      this.$router.push('/success/')
    }
  }
}
</script>

<style>
  .contact-form {
    background: url('../assets/images/kariri.svg') no-repeat;
    background-position: top right;
    background-size: cover;
  }

  #msg {
    height: auto;
  }

  .v-icon {
    height: 24px;
    width: 24px;
    color: white;
  }
</style>