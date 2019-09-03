<template>
    <div class="index">
        <el-container>
            <el-container>
                <el-aside :width="isCollapseLeftBar?'50px':'180px'">
                    <left-bar></left-bar>
                </el-aside>

                <el-main class="relative">
                    <!--<tag></tag>-->
                    <div class="main-view">
                        <router-view/>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import tag from '../components/Tags'
    import cHeader from '../components/Header'
    import leftBar from '../components/LeftBar'
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: 'index',
        components: {cHeader, leftBar, tag},
        data: () => ({}),
        computed: {
            ...mapGetters(['isCollapseLeftBar'])
        },
        methods: {
            ...mapMutations(['SET_LEFT_BAR'])
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../style/var.styl"
    .index {
        background: $--background_grey;
        width: 100%;
        height: 100%;
        .main-view {
            margin: 15px;
            overflow hidden
            height: calc(100% - 30px);
            position: absolute;
            width calc(100% - 30px)
            box-shadow: 2px 3px 13px #17171769;
        }
    }
</style>
