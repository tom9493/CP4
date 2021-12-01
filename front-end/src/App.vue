<template>
<div id="app" class="h-full w-full">
  <div class="bg-gray-500 w-full flex justify-center rounded-sm">
    <router-link to="/" class="flex flex-col items-center h-32 hover:text-blue-900">
      <img src="/icon.jpeg" class="rounded-full p-6 h-24">
      <h4 class="font-bold">My Collection</h4>
    </router-link>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="w-full h-20 pt-2 bg-gray-500 rounded-sm">
    <router-link to="/edit" class="m-5 font-bold hover:shadow-sm hover:text-blue-900">Edit collection items</router-link>
    <p></p>
    <a class="m-5 font-bold hover:text-blue-900" href='https://github.com/tom9493/CP4.git'>Creative Project 4 Github Repository</a>
  </div>
</div>
</template>
