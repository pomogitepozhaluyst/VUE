<template>
<div>
  <div>
  <p style="font-size: 50px; color: #f8f8f8">{{ $route.params.title }}</p>
    <p style="font-size: 50px; color: #f8f8f8">{{$route.query.information}}</p>
  </div>

</div>
</template>

<script>
import {Card} from "@/class/card";
import router from "./router";

export default {
  name:'cardScreen',
  methods: {
    router() {
      return router
    }
  },

  props:
    ['title'],
  query:
    [ "information"],

}

</script>

<style scoped>

</style>