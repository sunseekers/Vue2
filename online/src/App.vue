<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Rate></Rate>
    <Button></Button>
  </div>
</template>

<script>
import Rate from './components/Rate.vue'
import Button from './components/button.vue'
export default {
  name: 'app',
  components:{
    Rate,Button
  }
}
console.log(1);
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
