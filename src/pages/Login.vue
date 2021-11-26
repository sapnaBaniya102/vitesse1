<template>
  <form action="#" class="space-y-6 shadow-2xl h-100 font-serif">
    <h1 class="text-2xl font-bold text-black pt-6">LOG-IN</h1>
    <input class=" px-4 py-2 w-60 border rounded-md focus:ring" type="email" name="email" placeholder="Email address" required /><br>
    <input class=" px-4 py-2 w-60 border rounded-md focus:outline-none focus:ring" type="password" name="password" placeholder="Password" required />
    <div class="flex text-center items-center justify-between ml-15 ">
      <label class="flex items-center">
        <div class="relative inline-flex items-center">
          <input
            type="checkbox"
            name="remembr_me"
            class="w-10 h-4 transition bg-gray-200 border-none rounded-full shadow-inner outline-none appearance-none  toggle checked:bg-blue-500 disabled:bg-gray-200 focus:outline-none"
          />
          <span class="absolute top-0  w-4 h-4 transition-all transform scale-150 bg-white rounded-full shadow-sm"></span>
        </div>
        <span class="text-center text-sm font-normal text-white-500">Remember me</span>
      </label>
    </div>
    <div>
      <button
        type="submit"
        class="l px-4 py-2  font-medium text-center w-60 text-white transition-colors duration-200 bg-blue-500 rounded-md  hover:bg-blue-600 focus:outline-none focus:ring"
      >
        Login
      </button>
    </div>
    <div class="text-sm text-gray-600">
      Don't have an account yet? &nbsp;
      <router-link to="/register" active-class="active" tag="button">
        <span class="text-blue-600 hover:underline">
          Register
        </span>
      </router-link>
    </div>
  </form>
</template>
