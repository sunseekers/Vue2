$(function(){
	const vueSwipe = VueSwipe.Swipe;
	const vueSwipeItem = VueSwipe.SwipeItem;
	Vue.component('my-cursor',{
		props:{
  			data:Array,
  			filterKey:String
  		},
		template:`
  		<div><a :href="entry.url" v-for="entry in filteredData">
				<div class="course1">
					<div class='course1Img'></div>
					<div class="intruduce">
					<p>{{entry.course}}</p>
						<p>{{entry.change}}</p>
					<span>{{entry.r1}}</span>
						<span>{{entry.r2}}</span>
					<p>{{entry.study}}</p>
					</div>
				</div>
			</a></div>`,
		computed:{
		  			filteredData(){
		  				var filterKey=this.filterKey && this.filterKey.toLowerCase();
		  				var data=this.data;
		  				//通过测试的 name
		  				if(filterKey){
		  					data=data.filter(function(row){
			  						return Object.keys(row).some(function(key){
			  						return String(row[key]).indexOf(filterKey)>-1;
			  					})
		  				})
		  				}

		  				return data;
		  			}
		  		},
	});
	new Vue({
		el:'#app',
		  		data:{
  			searchQuery:'',
  			isActive: false,
  			course:[
				{
					course: 'jjL/CSS',
					change: '精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
					r1: 'HTML',
					r2: '网页制作',
					study: '已经有891名学生在这里学习',
					url:'cursor.html'
				},
				{
					course: 'HTML/CSS',
					change: '精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
					r1: 'HTML',
					r2: '网页制作',
					study: '已经有891名学生在这里学习',
					url:'cursorContent.html'
				},
				{
					course: 'HTML/CSS',
					change: '精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
					r1: 'HTML',
					r2: '网页制作',
					study: '已经有891名学生在这里学习',
					url:'cursorContent.html'
				},
				{
					course: 'HTML/CSS',
					change: '精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
					r1: 'HTML',
					r2: '网页制作',
					study: '已经有891名学生在这里学习',
					url:'cursorContent.html'
				},
				{
					course: 'HTML/CSS',
					change: '精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
					r1: 'HTML',
					r2: '网页制作',
					study: '已经有891名学生在这里学习',
					url:'cursorContent.html'
				},
				{
					course: 'HTML/CSS',
					change: '精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
					r1: 'HTML',
					r2: '网页制作',
					study: '已经有891名学生在这里学习',
					url:'cursorContent.html'
				},
			],
			//更多课程
			morecourse:[
				{
					course: 'JavaScript',
					change: '精选课程，和我们一起零基础入门JavaScript，共发布8个课程，等你来挑战',
					r1: 'HTML',
					r2: 'JavaScript',
					study: '已经有891名学生在这里学习',
					url:'cursorContent.html'
				},
				{
					course: '综合实战',
					change: '精选课程，趣味小游戏，小型交互，共发布3个课程，等你来挑战',
					r1: 'HTML',
					r2: '网页制作',
					study: '已经有891名学生在这里学习',
					url:'cursorContent.html'
				}
			]
		},
		components: {
	    'swipe': vueSwipe,
	    'swipe-item': vueSwipeItem
	  },
	  methods:{
	  	show(){
	  		$('#regester').show();
	  	},
			hide(){
				$('#regester').hide();
			},
			doregister(){
				this.isActive=!this.isActive;
			}
		}
	});
	/*Vue.component('more-course',{
		props:['content'],
		template:'#curse-item'
	});*/

})