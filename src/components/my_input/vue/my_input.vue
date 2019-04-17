<template>
    <div class="my_input">
        <div>
            <input type="text" placeholder="请输入" :value="my_npt" @input="updateData">
        </div>
        <div>{{ my_npt }}</div>
    </div>
</template>


<style lang="less">
    .my_input{
        width: 100px;
        height: 50px;
        border: 3px solid #583fe6;
    }
</style>

<script>
    import obj from '../js/my_input.js'
    export default obj
</script>
