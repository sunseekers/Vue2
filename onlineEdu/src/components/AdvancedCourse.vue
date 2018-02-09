<template>
  <div class='my-cursor' :data='morecourse' :filter-key='searchQuery'>
    <a :href="entry.url" v-for="entry in filteredData">
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
    </a>
  </div>
</template>
<script>
  export default{
    data(){
      return {
      filteredData:[
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
        }
      ]
      }
    }
  }
</script>
<style  scoped>
.course1{
  width: 290px;
  margin: 10px;
  height: 420px;
  border: 2px #eee solid;
  flex: 1;
  cursor: pointer;
  float: left;
  background: #fff;
  overflow: hidden;
}
.course1Img{
  background: url(../assets/img/html.jpg);
  background-size: 100% 100%;
  width: 270px;
  height: 230px;
  margin: 10px;
  background-repeat: no-repeat;
  background-size: cover;
}
.intruduce {
  width: 260px;
  margin: 0 auto;
  color: #7f7f7f;
  font-size: 12px;
  line-height: 22px;
}
.intruduce p:nth-child(1){
  color: #000;
  font-size: 16px;
  line-height: 26px;
}
.intruduce span{
  background: #f0f0f0;
  margin: 10px 0;
  border-radius: 15px;
  display: inline-block;
  padding: 5px ;
}
.course1:hover{ box-shadow: 1px 1px 10px;}
.course1:hover .intruduce p:nth-child(1){ color: #1ad1a3;}
.course1:hover .course1Img{ background-size: 140% 140%;}
</style>