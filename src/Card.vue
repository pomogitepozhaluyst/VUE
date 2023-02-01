<template>
  <div>

    <div class="mainBlock">
      <div class="back" @click="this.$router.push({ name: 'main'})">
        <p class="backText">Вернуться</p>
      </div>
      <p class="blocsInformation">{{ $route.params.title }}</p>
      <p class="blocs">Описание</p>
      <p class="blocsInformation">{{ $route.query.information }}</p>
      <p class="blocs">Внешность</p>
      <p class="blocsInformation">{{ $route.query.appearance }}</p>
      <p class="blocs">Характер</p>
      <p class="blocsInformation">{{ $route.query.character }}</p>
    </div>

  </div>
</template>

<script>
import {Card} from "@/class/card";
import router from "./router";

export default {
  name: 'cardScreen',

  props:
      ['title'],
  query:
      ["information", "appearance", "character"],

}

</script>

<style scoped>
.back {
  align-content: flex-start;
  display: flex;
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

}

.mainBlock {
  justify-content: center;
  background: #e1cb66;
  border-radius: 10px;

}
.backText{
  color: #181818;
  font-size: 30px;
}
.backText:hover{
  color: #5d5d5d;
  font-size: 30px;
}
.blocs {
  margin: 20px;
  font-size: 35px;
  color: #000000;
  border-bottom: 2px solid #4f4f4f;
  font-weight: bold;

}

.blocsInformation {
  text-align: center;

  margin: 20px;
  font-size: 25px;
  color: #000000;
  padding-bottom: 20px;
}

</style>