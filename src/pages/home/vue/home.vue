


<template>
    <div class="my_container">
        {{ msg }}
        <div class="my_inner_container">
            {{ div_m }}
        </div>
        <my_input v-model="div_m"></my_input>

    </div>

</template>

<style scoped lang="less" >
  @import "../less/home";
</style>

<script>
    import obj from '../js/home'
    export default obj
</script>