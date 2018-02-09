<template>
	<div class='nav'>
		<nav>
			<ul class="navL">
				<router-link tag='li' 
				:to='item.ref'
				v-for='(item,index) in items' :key='index' 
				:class="{menu:item.routeName==$route.name}">
			{{item.routeName}}
		</router-link>
			</ul>
			<ul class="navR">
				<li>
					<input type="text" placeholder="搜索 课程 / 问答" name="search" id='search' autofocus v-model='searchQuery'/>
					<i class="iconfont">&#xe644;</i>
				</li>
				<li>
					<input type="submit" value="登录" name="login" id="login" @click='show'/>
				</li>
			</ul>
		</nav>
		<Login v-show='isModelVisible' @click='hide'></Login>
	</div>
</template>
<script>
import Login from './Login.vue'
import Router from 'vue-router'
	export default{
		data(){
			return {
				searchQuery:'',
				isModelVisible:false,
				items:[
					{
						ref:'/',
						name:'首页',
						routeName: '首页',
					},
					{
						ref:'/AllCursor',
						name:'课程',
						routeName: '课程'
					},
					{
						ref:'https://qianduan.group/',
						name: '社区',
						routeName: '社区'
					},
					{
						ref:'/Message',
						name: '资讯',
						routeName: '资讯'
					}
				]
			}
		},
		components:{
			Login
		},
		methods:{
			show(){
        this.isModelVisible=true;
			},
			hide(){
        this.isModelVisible=false;
			}
		}
	}
</script>
<style scoped>
.menu{ 
	background: #e7e7e7;
	color: #000;
	border-top: 3px #393636 solid;
}
nav {
	width: 960px;
	height: 70px;
	margin: 0 auto;
	overflow: hidden;
}
.navL li{ 
	width: 120px;
	line-height: 70px;
	text-align: center;
	font-size: 18px;
	float: left;
	cursor: pointer;
	letter-spacing: 20px;
	padding-left: 20px;
	color: #777;
}
.navR li{
	padding-left: 25px;
	float: left;
	position: relative;
}
#search {
	width: 180px;
	height: 35px;
	color: #666;
	padding-left: 20px;
	margin-top: 20px;
	border: 1px solid #666;
	border-radius: 20px;

}
#login{
	width: 100px;
	text-align: center;
	line-height: 50px;
	color: #fff;
	background: #1ad1a3;
	cursor: pointer;
	border:none;
	border-radius: 10px;
	margin-top: 10px;
}

nav ul a:hover{color: #000;}

#regester{
	position: fixed;
  z-index: 9998;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
}
.active{ border-bottom: 2px #00cc99 solid; }
</style>