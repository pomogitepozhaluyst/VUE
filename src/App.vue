<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

</script>

<template>
  <router-view></router-view>
</template>

<script>
import {Card} from "@/class/card";

export  default {
  name:'App',


}
</script>

<style>
.all{

  top: -80%;
  left: 35%

}
.blocCards{
  left: -60%;
  top: 50%;
}
h1{
  text-align: center;
  font-size: 100px;
  margin: 10px;
  color: rgba(191,165,64,0.99);
  font-family: "Times New Roman" ;
}
.AddPost{
  left:40%;
  padding: 30px;
  border-radius:18px;
  background-color: rgba(210, 187, 97, 0.99);
}
.AddPost:hover{
  left:40%;
  padding: 30px;
  border-radius:18px;
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
  border-radius:18px;
  //shape-outside: margin-box;
 }
.card:hover {
  background: rgba(240, 240, 240, 0.89); /* Цвет фона */
  width: 300px; /* Ширина блока */
  border: 2px solid #000; /* Параметры рамки */
  margin: 10px;
  padding: 20px;
  min-width: 1000px;
  max-width: 1000px;
  border-radius:18px;
  //shape-outside: margin-box;
 }
.boxTitle{
  padding: 10px;
  text-align: center;
  border-bottom: 2px solid #000000; /* Параметры рамки */
  font-size: 20px;
}
.boxInformation{
  padding: 10px;
  text-align: left;
  font-size: 20px;
  margin-left: 50px;

}
.searchField{
  display: inline;

  background: #390065; /* Цвет фона */
  width: 700px; /* Ширина блока */
  padding: 10px; /* Поля */
  margin: 10px;
  border-radius:25px;
  alignment: center;
}
</style>