<template>
  <div id="app">
    <input value='增加' type='button' @click='increase'>
    <div>
    	number： {{count}}
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters} from 'vuex'
export default {
  name: 'app',
  computed:mapGetters([
  		'count'
  		]),
  methods:mapActions([
  	  		'increase'
  	  	])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
