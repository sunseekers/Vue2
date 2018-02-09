<template>
	<div class='home'>
    <Slider></Slider>
    <div class="course" id='basis-courses'>
      <h1>基础课程</h1>
      <MyCursor></MyCursor>
    </div>
    <div class="moreCourse" id='MoreCourse'>
      <h1>更多热门课程</h1>
      <AdvancedCourse></AdvancedCourse>
      <div class="rank ">
        <p>经典图书排行榜</p>
        <ul class="book">
          <li>
            <span style="background:#FF3C00; ">1</span>
            <span>《JavaScript高级程序设计》</span>
          </li>
          <li>
            <span style="background:#FF8400;">2</span>
            <span>《JavaScript DOM 艺术编程》</span>
          </li>
          <li>
            <span style="background:#FFB400;">3</span>
            <span>《JavaScript语言精粹》</span>
          </li>
          <li>
            <span>4</span>
            <span>《大话数据结构》</span>
          </li>
          <li>
            <span>5</span>
            <span>《啊哈!算法》</span>
          </li>
          <li>
            <span>6</span>
            <span>《nodejs实战》</span>
          </li>
          <li>
            <span>7</span>
            <span>《深入浅出nodejs》</span>
          </li>
          <li>
            <span>8</span>
            <span>《深入浅出react》</span>
          </li>
          <li>
            <span>9</span>
            <span>《css揭秘》</span>
          </li>
          <li>
            <span>10</span>
            <span>《你不知道的JavaScript》</span>
          </li>
        </ul>
      </div>
    </div>
        <div class="more">
      <div class='message'>
        <p class="top">
          <span>热门资讯</span>
          <span>更多</span>
        </p>
        <ul class='messageUl'>
          <li>
            <span style="background:#FF3C00;position:absolute;top:26px;left:0;">1</span>
            <img src='../assets/img/css.jpg' width="180px" height="105px" style="float:left;"/>
            <div class='messageDiv'>
              <p>创业训练营 <span class="number">999</span></p>
              <p>我们不上课，我们只为您解决问题</p>
              <p>我们不上课，我们只为您解决问题</p>
            </div>
          </li>
          <li>
            <span class="number">999</span>
            <span style="background:#FF8400;">2</span>
            <p class='messagep'>我们不上课，我们只为您解决问题</p>
          </li>
          <li>
            <span class="number">999</span>
            <span style="background:#FFB400;">3</span>
            <p class='messagep'>我们不上课，我们只为您解决问题</p>
          </li>
        </ul>
      </div>

      <div class='message'>
        <p class="top">
          <span>更多话题</span>
          <span>更多</span>
        </p>
        <ul class='messageUl'>
          <li>
            <span style="background:#FF3C00;position:absolute;top:26px;left:0;">1</span>
            <img src='../assets/img/css.jpg' width="180px" height="105px" style="float:left;"/>
            <div class='messageDiv'>
              <p><span class="number">999</span><!--<span class="number1">100</span>-->《资本:道与术》 </p>
              <img class="top1" src='../assets/img/top.jpg'/>
              <span class='messages1'>sunseekers</span>
              <p class='messagep1'><br/>我们不上课，我们只为您解决问题</p>
            </div>
          </li>
          <li>
            <span class="number">999</span>
            <span class="number1">100</span>
            <img class="top1" src='../assets/img/top.jpg'/>
            <span class='messages'>sunseekers</span>
            <p class='messagep'><br/>我们不上课，我们只为您解决问题</p>
          </li>
          <li>
            <span class="number">999</span>
            <span class="number1">100</span>
            <img class="top1" src='../assets/img/top.jpg'/>
            <span class='messages'>sunseekers</span>
            <p class='messagep'><br/>我们不上课，我们只为您解决问题</p>
          </li>
        </ul>
      </div>
    </div>
	</div>
</template>
<script>
  import '../assets/css/index.css'
	import Slider from './Slider.vue'
  import MyCursor from './MyCursor.vue'
  import AdvancedCourse from './AdvancedCourse.vue'
	export default {
		components:{
			Slider,
      MyCursor,
      AdvancedCourse
		}
	}
</script>
<style scoped>
.course{
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
}
h1{
  padding: 10px 0;
  font-size: 20px;
  font-weight: 200;
  color: #07111b;
}
.moreCourse{
  background: #eee;
  width: 100%;
  height: 520px;
  padding: 0 calc(50% - 490px);
}
</style>