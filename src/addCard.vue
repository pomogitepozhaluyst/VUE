<script>

import {CardManager} from "@/class/card_manager";
import {defineComponent} from "vue";
import {Card} from "@/class/card";

export default defineComponent({
  computed: {
    Card() {
      return Card
    },
    CardManager() {
      return CardManager
    }
  },  data() {
    return {
      title: ' ',
      information: ' ',
    }}

})


</script>

<template>

  <input class="searchField" type="text"
         @input="event=>{
        title = event.target.value;
      }">
  <input class="searchField" type="text"
         @input="event=>{
        information = event.target.value;
      }">
  <router-link :to="{ name:'main'}">
    <button class="AddPost" @click="()=>{CardManager.cardList.push(new Card(title, information))
    }">
      <p>Добавить новость</p>
    </button>
  </router-link>
</template>





<style scoped>
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