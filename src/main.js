// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import './index.css';
import feather from 'vue-icon';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  
  Vue.use(feather, 'v-icon');
  Vue.component('Layout', DefaultLayout)
}
