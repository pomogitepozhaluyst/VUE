<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {CardManager} from "@/class/card_manager";

</script>

<template>
  <div class="column">
    <div class="center">
      <h1> {{ title }}</h1>
      <div>
        <input class="searchField" type="text"
               @input="event=>{
        searchString = event.target.value;
      }">
      </div>

        <router-link :to="{ name:'addCard' }">
      <div class="AddPost">

          <div @click="()=>{
      }">
            <p>Добавить персонажа</p>
          </div>
      </div>

        </router-link>
    </div>
    <div class="blocCards">
      <div class="card"
           v-for="card in CardManager.cardList.filter((item)=> (item.title.toLowerCase().includes(searchString.toLowerCase()) || item.information.toLowerCase().includes(searchString.toLowerCase()) ))">
        <router-link
            :to="{ name:'cardScreen', params: { title: card.title, }, query:{information: card.information, character: card.character, appearance: card.appearance}} ">
          <p class="boxTitle">{{ card.title }}</p>
          <p class="boxInformation">{{ card.information }}</p>
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
      title: 'HoMM 5',
      searchString: '',
    }
  },
}
</script>

<style>

.column {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.center {
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
  color: rgba(215, 200, 142, 0.64);

  background: #390065;
  width: 700px;
  padding: 10px;
  margin: 10px;
  border-radius: 25px;
  alignment: center;
}
</style>