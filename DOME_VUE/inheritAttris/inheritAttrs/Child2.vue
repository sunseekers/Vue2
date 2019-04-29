<template>
    <div class="child-2">
        <p>我是子组件的子组件:</p>
        <p>props: {{pChild2}}</p>
        <p @click="test">我是没有被子组件继承的内容$attrs: {{$attrs}}</p>
        <hr>
    </div>
</template>
<script>
    export default {
        props: ['pChild2'],//继承来着父组件的属性
        data () {
            return {};
        },
        inheritAttrs: false,
        methods: {
            test(){
                this.$emit('click');
            }
            
        }
    };
</script>