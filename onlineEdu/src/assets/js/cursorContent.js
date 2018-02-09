$(function(){
	 	const vueSwipe = VueSwipe.Swipe;
	const vueSwipeItem = VueSwipe.SwipeItem;
	new Vue({
		el:'#app',
		components: {
		    'swipe': vueSwipe,
		    'swipe-item': vueSwipeItem
		  }
	})
})