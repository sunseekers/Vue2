<template>
  <div class='my-cursor'>
    <a :href="entry.url" v-for="entry in filteredData">
      <div class="course1">
        <div class='course1Img'></div>
        <div class="intruduce">
        <p>{{entry.course}}</p>
          <p>{{entry.change}}</p>
        <span>{{entry.r1}}</span>
          <span>{{entry.r2}}</span>
        <p>已经有 <b>{{entry.study}}</b> 名学生在这里学习</p>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
  export default{
    props:{
      data:{
        type:Array,
        default(){
          return []
        }
      },
      filterKey:{
        type:String,
        default:''
      }
    },
   computed:{
    filteredData(){
      let filterKey=this.filterKey&&this.filterKey.toLowerCase();
      let data=this.data;
      if(filterKey){
        data=data.filter(function(row){
          return Object.keys(row).some(function(ele){
            return String(row[ele]).indexOf(filterKey)>-1;
          })
        })
      }
      return data;
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
  padding: 5px 10px ;
}
.course1:hover{ box-shadow: 1px 1px 10px;}
.course1:hover .intruduce p:nth-child(1){ color: #1ad1a3;}
.course1:hover .course1Img{ background-size: 140% 140%;}
</style>