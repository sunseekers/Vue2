<template>
	<div class='btn'>
		<h1>{{msg}}</h1>
	  <el-button type="primary" @click='get'>获取数据按钮</el-button>
	</div>
</template>
<script>

import axios from 'axios'
	export default{
		name:'Button',
		data(){
			return {
			msg:'用 button 获取数据，采用 axios 数据交互的简单实例'
			}
		},
		methods:{
			get(){
				axios.get('index.html').then(function(res){
					this.msg=res.data;
				}.bind(this)).catch(function(err){
				  console.log(err);
				}.bind(this))
			}
		}
	}
</script>