<template>
  <div id="app">
    <Navheader></Navheader>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navheader from './components/Navheader.vue'
import AllCursor from './components/AllCursor.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components:{
    Navheader,
    AllCursor,
    Footer,
  },
  data(){
    return {
      searchQuery:'',
      mycursor:[
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
        }
      ]
    }
  }
}
</script>

<style>
</style>
