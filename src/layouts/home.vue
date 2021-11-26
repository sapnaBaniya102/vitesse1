<script setup lang="ts">
import { ref } from "vue";

import { users } from '~/data/users';
import { charts } from '~/data/charts';
import { DashboardWidth } from '~/composables';
const date = ref('')
// const app = Vue.createApp(userdata)
// app.component('UserTable', {
//   props: ['user'],
//   template: '<tr><td>{{ user.id }} </td> </tr>'
// })
// app.mount('#user-data')
</script>
<template>
  <main>
    <div class="home text-gray-700 dark:text-gray-200">
      <router-view />
      <Sidebar />
    </div>
    <div class="navbar h-15">
      <Navbar />
    </div>
    <hr class=" mx-auto">
    <main class="px-7 py-7 text-center text-gray-700 dark:text-gray-200 float-right " :style="{ width: DashboardWidth }">
      <router-view />
      <div class="dashboard">
        <h1 class="font-semibold text-2xl text-left ml-2">Dashboard</h1>
      </div>
      <hr class="mt-5 mx-auto">
      <section class="dashboard-wrapper mt-7">
        <div class="dashboard-column grid grid-cols-4 gap-6">
          <div class="column1 border-light-800 border rounded-lg h-32 py-3">
            <div class="grid grid-cols-2">
              <div class="ml-5">
                <h2 class="text-gray-400 text-left pb-3">Total Users</h2>
                <p class="font-semibold text-left text-lg">544</p>
              </div>
              <img src="/image-removebg-preview.png" alt="" width="65">
            </div>
            <p class="text-left pl-4">
              <span class="bg-green-300 text-white px-2 p-1 text-sm rounded-md font-light">20%</span> from 2020</p>
          </div>
          <div class="column1 border-light-800 border rounded-lg h-32 py-3">
            <div class="grid grid-cols-2">
              <div class="ml-5">
                <h2 class="text-gray-400 text-left pb-3">Sessions</h2>
                <p class="font-semibold text-left text-lg">620</p>
              </div>
              <img src="/image-removebg-preview (1).png" alt="" width="75">
            </div>
            <p class="text-left pl-4"><span class="bg-green-300 text-white px-2 p-1 text-sm rounded-md font-light">22%</span> from 2020</p>
          </div>
          <div class="column1 border-light-800 border rounded-lg h-32 py-3">
            <div class="grid grid-cols-2">
              <div class="ml-5">
                <h2 class="text-gray-400 text-left pb-3">Vists</h2>
                <p class="font-semibold text-left text-lg">300</p>
              </div>
              <img src="/image-removebg-preview.png" alt="" width="65">
            </div>
            <p class="text-left pl-4"><span class="bg-green-300 text-white px-2 p-1 text-sm rounded-md font-light">21%</span> from 2020</p>
          </div>
          <div class="column1 border-light-800 border rounded-lg h-32 py-3">
            <div class="grid grid-cols-2">
              <div class="ml-5">
                <h2 class="text-gray-400 text-left pb-3">Articles</h2>
                <p class="font-semibold text-left text-lg">250</p>
              </div>
              <img src="/image-removebg-preview.png" alt="" width="65">
            </div>
            <p class="text-left pl-4"><span class="bg-green-300 text-white px-2 p-1 text-sm rounded-md font-light">30%</span> from 2020</p>
          </div>
        </div>
      </section>

      <!-- import data section and graph -->
      <section class="section2 mt-7 text-left">
        <div class="section2-wrapper grid grid-cols-4 gap-5">
          <div class="import border border-gray-200 rounded-lg col-span-1">
            <div class="import-top grid grid-cols-2 m-3 text-left">
              <div class="import-top-heading">
                <h1 class=" font-medium text-lg">Import Data</h1>
              </div>
              <img src="/ellipsis.png" alt="" width="17" class="justify-self-end mr-5 mt-2">
            </div>
            <hr>
            <div class="import-bottom px-5">
              <p class="py-5 text-gray-500">See and talk to user and import them into your platform.</p>
              <h1 class="font-medium text-lg">Import Users From:</h1>
              <hr class="mt-3">
              <div class="social-media">
                <div class="grid grid-cols-12 my-5">
                  <img src="/twitter.png" alt="" width="35" class="col-span-1">
                  <div class="col-span-8 pl-2">
                    <h2 class="font-medium">Twitter</h2>
                    <h3 class="text-gray-400 text-sm pt-2">Users</h3>
                  </div>
                  <div class="col-span-3 inline-block bg-blue-600 text-white h-8 p-1 rounded-md hover:bg-blue-700 w-20">
                    <h3 class="font-light text-sm pl-2">Launch </h3>
                    <img src="/indicator-1324438792827630844_24.ico" alt="" width="12" class="absolute -mt-4 ml-14" >
                  </div>
                </div>
                <hr>
                <div class="grid grid-cols-12 my-5">
                  <img src="/github.png" alt="" width="35" class="col-span-1">
                  <div class="col-span-8 pl-2">
                    <h2 class="font-medium"> Github </h2>
                    <h3 class="text-gray-400 text-sm pt-2">Users</h3>
                  </div>
                  <div class="col-span-3 inline-block bg-blue-600 text-white h-8 p-1 rounded-md hover:bg-blue-700 w-20">
                    <h3 class="font-light text-sm pl-2">Launch </h3>
                    <img src="/indicator-1324438792827630844_24.ico" alt="" width="12" class="absolute -mt-4 ml-14" >
                  </div>
                </div>
                <hr>
                <div class="font-light text-gray-400 text-sm my-5 mb-8">
                  <p >Or you</p>
                  <p >can <span class="text-blue-500">sync data to your dashboard </span>to ensure data is always up to date.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- graph chart -->
          <div class="graph border border-gray-300 col-span-3 rounded-lg">
            <div class="graph-top grid grid-cols-2 m-3 text-left">
              <div class="graph-top-heading">
                <h1 class=" font-medium text-lg">Monthly Expenses</h1>
              </div>
              <img src="/ellipsis.png" alt="" width="17" class="justify-self-end mr-5 mt-2">
            </div>
            <hr>
            <div class="p-10">
              <h1 class="text-3xl">45% <span class="bg-green-300 text-white px-3 p-1 text-sm rounded-md font-light w-24 ml-4">39.2%</span></h1>
              <Chart canvas-id="test" class="h-sm p-4 mt-5"/>
            </div>
          </div>
        </div>
      </section>
<vuejs-datepicker />
      <!-- Users -->
      <h1 class="text-lg text-left py-7">Users</h1>
      <div class="users-table mb-10">
        <table class="border border-light-800 w-full text-left mx-auto ">
          <thead class="bg-light-400 text-sm text-gray-600 border border-light-800">
            <th class="p-2 px-8 font-medium">NAME</th>
            <th class="font-medium">TITLE</th>
            <th class="font-medium">STATUS</th>
            <th class="font-medium">ROLE</th>
            <th class="font-medium">ACTIONS</th>
          </thead>
          <tbody v-for="user in users" :key="user.id" class="">
            <tr class="border border-b-0 border-gray-300">
              <td class="pl-5 py-3">
                <div class="grid grid-cols-2">
                  <img src="/bill-gates-wealthiest-person.jpeg" alt="" width="40" class="rounded-full col-span-1">
                  <div class="col-span-1 -ml-28">
                    <h3 class="font-medium text-base"> {{ user.name }}</h3>
                    <p class="text-gray-500 font-light text-sm">{{ user.email }}</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <h3 class="font-normal text-sm"> Regional Paradigm Technician</h3>
                  <p class="text-gray-500 font-light text-sm">Optimization</p>
                </div>
              </td>
              <td v-if="user.active==true"> <p class="text-xs font-medium bg-green-200 absolute p-1 rounded-xl px-2"> ACTIVE</p></td>
              <td v-else > <p class="text-xs font-medium bg-red-300 p-1 px-2 rounded-xl absolute"> INACTIVE</p></td>
              <td class="text-sm">{{ user.role }}</td>
              <router-link to="#"><td class="text-sm text-blue-700 font-medium">EDIT</td></router-link> 
            </tr>
          </tbody>
        </table>
        <vuejs-datepicker />
            <VueDateTimePicker v-model="date" class="w-10 h-8 bg-black z-10"  />

        <router-view></router-view>
      </div>
    </main>
    <div class="footer h-12 text-gray-700 dark:text-gray-200">
      <Footer />
    </div>
  </main>
</template>
