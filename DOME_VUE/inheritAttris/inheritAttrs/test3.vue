<template>
  <div id="app">
    <child1
      :p-child1="child1" :p-child2="child2"
      v-on:test1="onTest1" @click="onTest2">  
    </child1>
  </div>
</template>
<script>
    import Child1 from './Child1.vue';
    export default {
        data () {
            return {
              child1:" 我是被子组件继承的内容",
              child2:" 我是被子组件的子组件继承的内容",
            };
        },
        components: { Child1 },
        methods: {
            onTest1 () {
                console.log('test1 running...');
            },
            onTest2 () {
                alert('test2 running');
            }
        }
    };
</script>

