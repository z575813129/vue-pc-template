<template>
    <div class="c-input">
        <span>{{title}}：</span>
        <el-input :placeholder="placeholder"></el-input>
    </div>

</template>

<script>
    export default {
        name: "c-input",
        data: () => ({
            props: {
                title: String,
                placeholder: String
            }
        })
    }
</script>

<style lang="stylus" scoped>
    @import "../style/var.styl";
    .c-input {
    }
</style>
