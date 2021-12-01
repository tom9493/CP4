<template>
<div class="home flex flex-col items-center bg-gray-200 p-10">
  <img src="https://source.unsplash.com/random" class="w-full h-64 object-cover -mb-20" alt="" />
  <section class="flex flex-col items-center bg-white rounded-lg shadow-lg w-11/12">
    <h1 class="pt-4 font-bold text-gray-700">Catalog</h1>
    <section class="flex-none w-11/12 justify-center bg-white rounded-lg shadow-lg">
      <div class="inline-block w-1/4 m-10 bg-gray-200 rounded-lg shadow-sm" v-for="item in items" :key="item.id">
        <h2 class="m-1 pt-2 pl-3 pr-3 font-medium">{{item.title}}</h2>
        <h3 class="pl-4 pr-3 pb-1 font-medium">Value: ${{item.price}}</h3>
        <div class="flex justify-center">
          <img class="rounded-lg w-11/12 h-40 object-cover" :src="item.path" />
        </div>
        <p class="pl-3 pt-2 pr-3 pb-2">{{item.description}}</p>
      </div>
    </section>
  </section>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      items: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        console.log("Got items!");
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
