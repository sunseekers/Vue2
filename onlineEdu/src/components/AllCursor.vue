<template>
  <div class='cursor'>
    <Slider></Slider>
    <div class="cursorWrap">
      <div class="cursorcontent" v-for='(item,index) in cursor' :key='index'>
        <div class="study">
          <div class="studyL lf">
            <img :src="item.url" :alt="item.alt1"/>
            <p>{{item.diffi0}}</p>
            <p>{{item.time}}</p>
          </div>
          <div class='studyR lf'>
            <p>{{item.content}} <span class="rg">{{item.diffi1}}</span></p>
            <p>
              {{item.contents}}
            </p>
            <router-link tag='li' class="button" to='/CursorContent'>开始学习</router-link>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '../assets/css/cursor.css'
  import Slider from './Slider.vue'
  export default{
    components:{
      Slider
    },
    data(){
      return {
        cursor:[
        {
          url:'css.jpg',
          alt1:'抽奖转盘',
          diffi0:'难度：中等 时间：一天',
          time:'大约有1200人学习了这门课程',
          content:'基于CSS3实现抽奖大转盘',
          diffi1:'中级',
          contents:`本课程将 教会大家如何使用 CSS3 的特有属性 transform 制
                作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留
                给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。
                掌握基本的CSS3transform，canvas，包括以下但不限于： 了解CSS3、
                的定义、概念发展简史 ；`,
          ref:''
        },
        {
          url:'src/assets/img/Jquery.png',
          alt1:'jQuery在购物车的使用',
          diffi0:'难度：中等 时间：一天',
          time:'大约有1200人学习了这门课程',
          content:'jQuery在购物车的使用',
          diffi1:'中级',
          contents:`本课程将 教会大家如何使用 CSS3 的特有属性 transform 制
                作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留
                给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。
                掌握基本的CSS3transform，canvas，包括以下但不限于： 了解CSS3、
                的定义、概念发展简史 ；`,
          ref:'cursorContent.html'
        },
        {
          url:'../assets/img/55.gif',
          alt1:'CSS3饼状loading效果',
          diffi0:'难度：中等 时间：一天',
          time:'大约有1200人学习了这门课程',
          content:'CSS3饼状loading效果',
          diffi1:'中级',
          contents:`本课程将 教会大家如何使用 CSS3 的特有属性 transform 制
                作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留
                给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。
                掌握基本的CSS3transform，canvas，包括以下但不限于： 了解CSS3、
                的定义、概念发展简史 ；`,
          ref:'cursorContent.html'
        },
        {
          url:'../assets/img/vue.jpg',
          alt1:'动态数据绑定（一）',
          diffi0:'难度：中等 时间：一天',
          time:'大约有1200人学习了这门课程',
          content:'动态数据绑定（一）',
          diffi1:'中级',
          contents:`本课程将 教会大家如何使用 CSS3 的特有属性 transform 制
                作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留
                给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。
                掌握基本的CSS3transform，canvas，包括以下但不限于： 了解CSS3、
                的定义、概念发展简史 ；`,
          ref:'cursorContent.html'
        },
        {
          url:'../assets/img/3.png',
          alt1:'抽奖转盘',
          diffi0:'难度：中等 时间：一天',
          time:'大约有1200人学习了这门课程',
          content:'基于CSS3实现抽奖大转盘',
          diffi1:'中级',
          contents:`本课程将 教会大家如何使用 CSS3 的特有属性 transform 制
                作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留
                给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。
                掌握基本的CSS3transform，canvas，包括以下但不限于： 了解CSS3、
                的定义、概念发展简史 ；`,
          ref:'cursorContent.html'
        },
        {
          url:'../assets/img/3.png',
          alt1:'抽奖转盘',
          diffi0:'难度：中等 时间：一天',
          time:'大约有1200人学习了这门课程',
          content:'基于CSS3实现抽奖大转盘',
          diffi1:'中级',
          contents:`本课程将 教会大家如何使用 CSS3 的特有属性 transform 制
                作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留
                给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。
                掌握基本的CSS3transform，canvas，包括以下但不限于： 了解CSS3、
                的定义、概念发展简史 ；`,
          ref:'cursorContent.html'
        }
      ]
      }
    }
  }
</script>