<template>
<div class="home flex flex-col items-center bg-gray-200 p-10">
  <img src="https://source.unsplash.com/random" class="w-full h-64 object-cover -mb-20" alt="" />
  <section class="flex flex-col items-center bg-white rounded-lg shadow-lg w-10/12">
    <h1 class="pt-4 font-bold text-gray-700">Edit Collection Items</h1>
    <div class="flex flex-col items-start bg-gray-200 shadow-lg p-3 m-5 w-10/12">
      <h2 class="p-2 font-bold">Add an Item</h2>
      <div class="p-2">
        <div class="form">
          <input v-model="title" placeholder="Title" class="border border-black mb-2">
          <p></p>
          <input v-model="price" placeholder="Value" class="border border-black mb-2">
          <p></p>
          <textarea v-model="description" placeholder="Description" class="border border-black mb-2"></textarea>
          <p></p>
          <input type="file" name="photo" @change="fileChanged">
          <button @click="upload" class="border border-black pr-1 pl-1">Upload</button>
        </div>
        <div class="w-full" v-if="addItem">
          <div class="w-2/3 m-10 bg-gray-400 rounded-lg shadow-lg">
            <div class="flex justify-center">
              <h1 class="font-bold">New Item Added!</h1>
            </div>
            <h2 class="m-1 pt-2 pl-3 pr-3 font-medium">{{addItem.title}}</h2>
            <h3 class="pl-4 pr-3 pb-1 font-medium">Value: ${{addItem.price}}</h3>
            <div class="flex justify-center relative">
              <img class="rounded-lg w-11/12 h-40 object-cover" :src="addItem.path" />
            </div>
            <p class="pl-3 pt-2 pr-3 pb-2">{{addItem.description}}</p>
          </div>
        </div>
      </div>
      <h2 class="p-2 font-bold">Edit/Delete an Item</h2>
      <div class="p-2">
        <div class="form">
          <input v-model="findTitle" placeholder="Search" class="border border-black">
          <div class="border border-black" v-if="suggestions.length > 0">
            <div class="hover:border hover:text-blue-900" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.title}}
            </div>
          </div>
        </div>
        <div class="upload" v-if="findItem">
          <div class="flex justify-center">
            <div class="w-1/3 m-10 bg-gray-400 rounded-lg shadow-lg">
              <h1 class="m-1 font-bold">Edit values here:</h1>
              <input v-model="findItem.title" placeholder="New title" class="m-1 font-medium">
              <p></p>
              <input v-model="findItem.price" placeholder="New price" class="m-1 font-medium">
              <p></p>
              <textarea v-model="findItem.description" placeholder="New description" class="m-1"></textarea>
            </div>
            <div class="w-1/3 m-10 bg-gray-400 rounded-lg shadow-lg">
              <h2 class="m-1 pt-2 pl-3 pr-3 font-medium">{{findItem.title}}</h2>
              <h3 class="pl-4 pr-3 pb-1 font-medium">Value: ${{findItem.price}}</h3>
              <div class="flex justify-center relative">
                <img class="rounded-lg w-11/12 h-40 object-cover" :src="findItem.path" />
              </div>
              <p class="pl-3 pt-2 pr-3 pb-2">{{findItem.description}}</p>
              <div></div>
            </div>
          </div>
        </div>
        <div class="flex justify-center" v-if="findItem">
          <div class="flex justify-center w-1/2">
            <button class="bg-gray-400 rounded-lg hover:shadow-lg p-1" @click="deleteItem(findItem)">Delete Item</button>
          </div>
          <div class="flex justify-center w-1/2">
            <button class="bg-gray-400 rounded-lg hover:shadow-lg p-1" @click="editItem(findItem)">Finish Editing</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
      title: "",
      price: null,
      items: [],
      file: null,
      addItem: null,
      findTitle: "",
      findItem: null,
      description: "",
    }
  },
  computed: {
    suggestions() {
      let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      return items.sort((a, b) => a.title > b.title);
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          title: this.findItem.title,
          price: this.findItem.price,
          description: this.findItem.description,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      if (this.title.length == 0) {
        this.title = "No Title";
      }
      if (this.price == null) {
        this.price = 0;
      }
      if (this.description.length == 0) {
        this.description = "No description";
      }
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/items', {
          title: this.title,
          price: this.price,
          description: this.description,
          path: r1.data.path
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
