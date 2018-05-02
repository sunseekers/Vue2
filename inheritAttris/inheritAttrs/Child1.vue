<template>
    <div class="child-1">
        <p>我是子组件:</p>
        <p>我是子组件props继承的内容: {{pChild1}}</p>
        <hr>
        <p>我是没有被子组件继承的内容$attrs: {{$attrs}}</p>
        <!-- C组件中能直接触发test的原因在于
         B组件调用C组件时 使用 v-on 绑定了$listeners
          属性 -->
        <child2 v-bind="$attrs" v-on="$listeners"></child2>
    </div>
</template>
<script>
    import Child2 from './Child2.vue';
    export default {
        props: ['pChild1'],//继承父组件的 pChild1 属性
        data () {
            return {};
        },
        inheritAttrs: false,//子组件有没有被父组件继承的特性
        components: { Child2 },
        mounted () {
            this.$emit('test1');
        }
    };
</script>
