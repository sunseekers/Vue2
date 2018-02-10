<template>
  <div>
    <Slider></Slider>
    <div class="cursorWrap">
      <div class="cursorcontent">
        <div class="study">
          <div class="studyL lf">
            <img src='../assets/img/3.png' alt="抽奖转盘"/>
            <p>难度：中等 时间：一天</p>
            <p>大约有 <b>1200</b> 人学习了这门课程</p>
          </div>
          <div class='studyR lf'>
            <p>基于CSS3实现抽奖大转盘 <span class="rg">中级</span></p>
            <p>
              本课程将 教会大家如何使用 CSS3 的特有属性 transform 制
              作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留
              给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。
            </p>
            <p><span>CSS3</span><span>动画</span><span>JavaScript</span></p>
          </div>
        </div>
        <div class="aim">
          <p class="comp">课程目标</p>
          <ul class="comli">
            <li>针对设计稿样式进行合理的HTML架构，包括以下但不限于：</li>
            <li>掌握常用HTML标签的含义、用法</li>
            <li>能够基于设计稿来合理规划HTML文档结构</li>
            <li>理解语义化，合理地使用HTML标签来构建页面</li>
            <li>掌握基本的CSS编码，包括以下但不限于：</li>
            <li>了解CSS的定义、概念、发展简史</li>
            <li>掌握CSS选择器的含义和用法</li>
            <li>实践并掌握CSS的颜色、字体、背景、边框、盒模型、简单
            布局等样式的定义方式</li>
          </ul>
        </div>
        <div class="describe">
          <p class="comp">任务描述</p>
          <p>CSS3 实现抽奖大转盘</p>
        </div>
        <div class='path'>
          <p class="comp">课程思路</p>
          <ul class="comli">
            <li>首先来分析下抽奖转盘的特点,确定一下设计的整体构思。</li>
            <li>以一个从没写过抽奖转盘的新手角度来考虑，大概会遇到一下几个难点：</li>
            <li>1、转盘如何才能开始旋转；</li>
            <li>2、转盘的速度控制。为了更加逼真的模拟现实中的转盘旋转，需要将转盘速度控制为 慢-快-慢；
            </li>
            <li>3、如何等分切割转盘的扇形区域；</li>
            <li>4、奖品是如何随机抽取的；</li>
            <li>5、如何判定旋转已经结束；</li>
            <li>接下来，就将逐个解决以上问题，同时，也一步步完成我们的抽奖转盘。</li>
          </ul>
        </div>
        <div class='data'>
          <p class="comp">在线学习参考资料</p>
          <ul class="comli">
            <li><a href="/">MDN HTML入门</a></li>
            <li><a href="/">MDN CSS3入门教程</a></li>
            <li><a href="/">w3cplus</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '../assets/css/cursorContent.css'
  import Slider from './Slider.vue'
  export default{
    components:{
      Slider
    }
  }
</script>