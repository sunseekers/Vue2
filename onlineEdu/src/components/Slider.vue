<template>
	<div class='slider'>
    <swipe class="my-swipe">
		  <swipe-item class="slide"></swipe-item>
		  <swipe-item class="slide"></swipe-item>
		  <swipe-item class="slide"></swipe-item>
		</swipe>
	</div>
</template>
<script>
	import 'vue-swipe/dist/vue-swipe.css'
	import { Swipe, SwipeItem } from 'vue-swipe';
	export default {
		components:{
			'swipe':Swipe,
			'swipe-item':SwipeItem
		}
	}
</script>
<style scoped>
	.my-swipe {
  height: 300px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide{
	width: 100%;
	height: 300px;
	background: url(../assets/img/ban.jpg);
	background-size: 100% 100%; 
	cursor: pointer;
}
</style>