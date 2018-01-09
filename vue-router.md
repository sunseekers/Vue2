<h1 style='color:rgb(230,3,135);'>2018 我所了解的 vue-router </h1>
<i>vue-router: 简称路由，根据不同的 url 地址，显示不同的效果</i>
<img src='img/Vue-router .png'/>
<span style='color:rgb(230,3,135);' >router-link : </span>组件用于帮助用户进行<span style='color:rgb(230,3,135);'> 导航 </span>，也就是我们传统的 a 标签经常做的事；a 的标签用 href 属性来指定导航的目标地址，而  router-link 组件则用 to 属性来定目标地址；

<span style='color:rgb(230,3,135);' >router-view : </span>组件负责<span style='color:rgb(230,3,135);'> 渲染 </span>匹配到视图,也就是渲染 router-link 指向的目标地址

同一个路径可以匹配多个路由，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。

<h3 style='color:rgb(230,3,135);'>创建 简单的 vue-router </h3>

<img src='img/router.jpg'/>

[查看源码](https://github.com/sunseekers/Vue/blob/master/vue-router.html)

<h3 style='color:rgb(230,3,135);'>嵌套的 vue-router </h3>
当我们想在在路由里面再嵌套路由的时候要怎么办呐？

<img src='img/router1.png'/>

从代码可以看出嵌套路由很简单，只需要加上一个 children 就好，children 里面的写法和外面的一样

$route.params： 表示当前的参数即冒号后面的东西

/detail/:id/age/:age  --->$route.params 表示  id 和 age 组成的对象

[查看源码](https://github.com/sunseekers/Vue/blob/master/vue-router2.html)

<h3 style='color:rgb(230,3,135);'>路由的实例方法 </h3>

router.push({path:'/home'}): 直接添加一个路由，表现为切换路由，往历史记录里面添加一个历史记录

router.replace({path:'news'}): 替换路由，历史记录里面没有添加记录

<img src='img/router.gif'/>

引入了过渡动画 ，页面效果看起来好看多了，哈哈哈哈
[查看源码](https://github.com/sunseekers/Vue/blob/master/routerTransform.html)
