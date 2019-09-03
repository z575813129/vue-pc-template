<template>
    <div class="c-header flex fb">
        <p>YunGeo · 云集</p>
        <div class="flex col-15">
            <icon name="search" class="mrm mls" scale="1"></icon>
            <icon name="bell" class="mrm mls" scale="1"></icon>
            <img src="../assets/zs.png" alt="" style="width: 30px;height: 30px;border-radius: 20px">
            <el-dropdown @command="logout">
                  <span class="el-dropdown-link">
                    <span class="ml white">吉小利</span>
                      <i class="el-icon-arrow-down el-icon--right white"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">注销</el-dropdown-item>
                    <el-dropdown-item command="b">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </div>
    </div>

</template>

<script>
    export default {
        name: "c-header",
        methods: {
            logout(item) {
                // if (item === 'a') {
                this.$router.push('/')
                // }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../style/var.styl";

    .c-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding-left: 60px;
        height: $--header_height;
        line-height: $--header_height;
        color: #fff;
        background: $--background_header;
        z-index: 99;
        p {
            font-size: 20px;
            font-weight: 700;
            font-style: italic;
        }
        .f14 {
            font-size: 14px;
        }
    }
</style>
