<script setup lang="ts">
// import Sidebar from "./components/Sidebar.vue"
// import Sidebar from '~/vue-template/my-vitesse-app/src/components/sidebar';
// import { sidebarWidth } from '~/vue-template/my-vitesse-app/src/components/sidebar/state';

// export default {
//   components: { Sidebar },
// }
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})

</script>

<template>
  <router-view />
</template>
