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
  }, data() {
    return {
      title: ' ',
      information: ' ',
      character: ' ',
      appearance: ' '
    }
  }

})


</script>

<template>
    <div class="back" @click="this.$router.push({ name: 'main'})">
          <p >Вернуться</p>
    </div>
  <div class="column">

    <div class="center">
      <p style="color:rgb(229,205,117);">Имя</p>
      <input class="searchField" type="text"
             @input="event=>{
        title = event.target.value;
      }">
      <p style="color:rgb(229,205,117);">Описание</p>
      <input class="searchField" type="text"
             @input="event=>{
        information = event.target.value;
      }">
      <p style="color:rgb(229,205,117);">Характер</p>
      <input class="searchField" type="text"
             @input="event=>{
        character = event.target.value;
      }">
      <p style="color:rgb(229,205,117);">Внешность</p>
      <input class="searchField" type="text"
             @input="event=>{
        appearance = event.target.value;
      }">
      <div class="AddPost">
        <router-link :to="{ name:'main'}" class="l">
          <div
              @click="()=>{CardManager.cardList.push(new Card(title, information, character, appearance))
    }">
            <p>Добавить новость</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>

</template>


<style scoped>

.back {
  align-content: flex-start;
  display: flex;
  background-color: rgba(210, 187, 97, 0.99);
  justify-content: flex-start;
    width: 30%;
  padding: 20px;
  margin: 10px;
  border-radius: 18px;
}
.back:hover {
  justify-content: left;
  align-content: flex-start;
    width: 30%;
  padding: 20px;
  border-radius: 18px;
  background-color: rgba(210, 187, 97, 0.64);

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