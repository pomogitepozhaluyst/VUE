<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {CardManager} from "@/class/card_manager";

</script>

<template>
  <div class="column">
  <div class = "center">
    <h1> {{ title }}</h1>
    <div >
      <input class="searchField" type="text"
             @input="event=>{
        searchString = event.target.value;
      }">
    </div >
    <router-link :to="{ name:'addCard' }">
      <div class="AddPost" @click="()=>{
      }">
        <p>Добавить новость</p>
      </div>
    </router-link>
  </div>
  <div class="blocCards">
    <div class="card" v-for="post in CardManager.cardList.filter((item)=> (item.title.includes(searchString) || item.information.includes(searchString) ))">
      <router-link :to="{ name:'cardScreen', params: { title: post.title, }, query:{information: post.information}} ">
        <p class="boxTitle">{{ post.title }}</p>
        <p class="boxInformation">{{ post.information }}</p>
      </router-link>
    </div>
  </div>
    </div>
</template>

<script>
import {Card} from "@/class/card";
import {CardManager} from "@/class/card_manager";

export default {
  name: 'Main',
  data() {
    return {
      title: 'kek',
      searchString: '',
    }
  },
  methods: {
    log(huita){
      console.log(huita)
    }
  },

}
</script>

<style>

.column{
  display:flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.center{
  margin-left: auto;
  margin-right: auto;
}

.blocCards {
}

h1 {
  text-align: center;
  font-size: 100px;
  margin: 10px;
  color: rgba(191, 165, 64, 0.99);
  font-family: "Times New Roman";
}

.AddPost {
  padding: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  border-radius: 18px;
  background-color: rgba(210, 187, 97, 0.99);
}

.AddPost:hover {
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  padding: 30px;
  border-radius: 18px;
  background-color: rgba(210, 187, 97, 0.64);

}

.card {
  background: #f0f0f0; /* Цвет фона */
  width: 300px; /* Ширина блока */
  border: 2px solid #000; /* Параметры рамки */
  margin: 10px;
  padding: 20px;
  min-width: 1000px;
  max-width: 1000px;
  border-radius: 18px;
}

.card:hover {
  background: rgba(240, 240, 240, 0.89); /* Цвет фона */
  width: 300px; /* Ширина блока */
  border: 2px solid #000; /* Параметры рамки */
  margin: 10px;
  padding: 20px;
  min-width: 1000px;
  max-width: 1000px;
  border-radius: 18px;
}

.boxTitle {
  padding: 10px;
  text-align: center;
  border-bottom: 2px solid #000000; /* Параметры рамки */
  font-size: 20px;
}

.boxInformation {
  padding: 10px;
  text-align: left;
  font-size: 20px;
  margin-left: 50px;

}

.searchField {
  display: inline;

  background: #390065; /* Цвет фона */
  width: 700px; /* Ширина блока */
  padding: 10px; /* Поля */
  margin: 10px;
  border-radius: 25px;
  alignment: center;
}
</style>