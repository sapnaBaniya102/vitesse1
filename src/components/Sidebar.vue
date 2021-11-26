<script setup lang="ts">
import { collapsed, sidebarWidth } from '~/composables';
</script>
<template>
  <div class="sidebar float-left w-1/6 border-r-1 border-gray-200 fixed" :style="{ width: sidebarWidth }">
    <div class="title text-center mt-2 text-3xl">
      <h1>
        <span v-if="collapsed">
          <div>V</div>
        </span>
        <span v-else>Vitesse</span>
      </h1>
    </div>
    <div class="menu-items mt-10 leading-14 w-full text-2xl pl-0  pr-0">
      <router-link to="/" active-class="active" tag="button">
        <div class="link-container w-full hover:bg-white ml-1">
          <carbon-home />
          <transition name="fade">
            <span v-if="!collapsed">
              <span class=" ml-10">Home</span>
              <slot />
            </span>
          </transition>
        </div>
      </router-link>
      <router-link to="/login" active-class="active" tag="button">
        <div class="link-container w-full ml-1 hover:bg-white">
          <carbon-login />
          <transition name="fade">
            <span v-if="!collapsed">
              <span class=" ml-10">Login</span>
              <slot />
            </span>
          </transition>
        </div>
      </router-link>
      <router-link to="/register" active-class="active" tag="button">
        <div class="link-container w-full ml-1 hover:bg-white">
          <carbon-campsite />
          <transition name="fade">
            <span v-if="!collapsed">
              <span class=" ml-10">Register</span>
              <slot />
            </span>
          </transition>
        </div>
      </router-link>
    </div>
    <div class="sidebarfooter text-2xl text-white bg-blue-500 rounded-md  hover:bg-blue-600 focus:outline-none focus:ring w-full mt-108">
      <router-link to="/" active-class="active" tag="button">
        <div class="link-container w-full ml-1 ">
          <carbon-logout />
          <transition name="fade">
            <span v-if="!collapsed">
              <span class=" ml-10">Logout</span>
              <slot />
            </span>
          </transition>
        </div>
      </router-link>
    </div>
  </div>
</template>
