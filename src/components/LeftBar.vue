<template>

    <div class="left-bar">

        <div class="relative h100" :class="{'w200': !isCollapseLeftBar, 'w65': isCollapseLeftBar}">
            <div class="icon-right" @click="controlSideBar" v-if="isCollapseLeftBar"
                 :class="{'l165': !isCollapseLeftBar, 'l65': isCollapseLeftBar}">
                <i class="el-icon-d-arrow-right" v-if="isCollapseLeftBar"></i>
            </div>

            <div class="icon-left" @click="controlSideBar" v-else
                 :class="{'l165': !isCollapseLeftBar, 'l65': isCollapseLeftBar}">
                <i class="el-icon-d-arrow-left"></i>
            </div>

            <el-menu :default-active="'./demo1'"
                     :collapse-transition="false"
                     router
                     unique-opened
                     background-color="#fff"
                     text-color="#515152"
                     active-text-color="#03A9F4"
                     @select="go()"
                     :collapse="isCollapseLeftBar">

                <!--<el-menu-item :index="factory.path" @click="go(factory)">-->
                    <!--<icon name="cog" class="mr" scale="1.2"></icon>-->
                    <!--<span slot="title">-->
                  <!--{{factory.title}}-->
                <!--</span>-->
                <!--</el-menu-item>-->


                <el-submenu :index="demo.path">
                    <template slot="title">
                        <icon name="cog" class="mr" scale="1.2"></icon>
                        <span slot="title">{{demo.title}}</span>
                    </template>

                    <el-menu-item-group>
                        <el-menu-item :index="rentItem.path"

                                      v-for="(rentItem, rentIndex) in  demo.children"
                                      @click="go(rentItem)"
                                      :key="rentIndex">
                            <icon :name="rentItem.icon" class="mr" scale="1.2"></icon>
                            {{rentItem.title}}
                        </el-menu-item>
                    </el-menu-item-group>


                </el-submenu>

            </el-menu>

        </div>
    </div>

</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        data: () => ({
            // factory: {id: '1', title: 'demo1', path: './demo1'},
            demo: {
                id: '1', title: 'demo',
                path: '../demo',
                children: [
                    {id: '1-1', title: '单行demo', path: './demo1', icon: 'cog'},
                    {id: '1-2', title: '双行demo', path: './demo2', icon: 'cog'},
                    {id: '1-3', title: '三行demo', path: './demo3', icon: 'cog'}
                ]
            },
        }),
        computed: {
            ...mapGetters(['isCollapseLeftBar'])
        },
        methods: {
            ...mapMutations(['SET_LEFT_BAR', 'ADD_TAG']),
            controlSideBar() {
                this.isCollapseLeftBar ? this.SET_LEFT_BAR({isCollapseLeftBar: false}) : this.SET_LEFT_BAR({isCollapseLeftBar: true})
            },
            go(item) {
                if (item) {
                    let data = {
                        title: item.title,
                        path: item.path,
                        type: ''
                    }
                    this.ADD_TAG(data)
                }
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "../style/var.styl";

    .left-bar {
        position: fixed;
        left 0
        top: 0
        bottom 0
        background: #fff;
        z-index: 99;
        overflow-x hidden
        .collapse {
            text-align: center;
            background: #c5cbd3;
            height: 40px;
            line-height: 40px;
            color: #fff;
        }
        .w200 {
            width: $--leftbar_width !important;
            transition: width 0.1s;
        }
        .w65 {
            width: 50px;
            transition: width 0.1s;
        }
        .l65 {
            left 47px
        }
        .l165 {
            left 165px
        }
        .icon-right, .icon-left {
            position fixed
            top 45%
            cursor pointer
            line-height 100px
            height 100px
            width 30px
            z-index: 999
        }
        .icon-right:hover {
            left 53px
            text-align center
            transition: all 0.1s ease, 0.1s ease;
        }
        .el-icon-d-arrow-right:hover {
            right  250px
            text-align center
            transition: all 0.1s ease, 0.1s ease;
        }
        .el-icon-d-arrow-left, .el-icon-d-arrow-right {
            color #0e74a7 !important
        }
        .icon-left:hover {
            left 155px
            transition: all 0.1s ease, 0.1s ease;
        }
        .el-icon-d-arrow-left:hover {
            left 150px
            text-align center
            transition: all 0.1s ease, 0.1s ease;
        }
        .icon-bg {
            position absolute
            left auto
            top 45%
            width 0
            height 0
            border-left: 20px solid hotpink
            border-right: 20px solid skyblue
            border-top: 20px solid rosybrown
            border-bottom: 20px solid blue
            z-index -1
        }
        .h100 {
            height 100%
        }
        .pl15 {
            padding-left 15px !important
        }
        .pl20 {
            padding-left 20px !important
        }
    }
</style>


