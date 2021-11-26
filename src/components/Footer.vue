<script setup lang="ts">
import { footerWidth } from '~/composables';
</script>
<template>
  <nav class="text-xl mt-6 flex float-right justify-between m-auto px-3 py-3 inset-x-0 bottom-0 font-semibold" :style="{ width: footerWidth }">
    <div>Vitesse@2021</div>
    <div>Made by Sapna & Simran</div>
    <div><carbon-logo-github />View on Github</div>
  </nav>
</template>
