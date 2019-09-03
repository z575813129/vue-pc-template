<template>
    <div class="tags">
        <div class="items">
            <div class="item" v-for="(tag, index) in tags" @click="go(tag)">
                <el-tag @close="close(index)" size="medium"
                        :type="tag.type"
                        :closable="tags.length!==1">{{tag.title}}
                </el-tag>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "tags",
        data: () => ({
            editableTabsValue2: ''
        }),
        computed: {
            ...mapGetters(['tags'])
        },
        methods: {
            ...mapMutations(['ADD_TAG', 'DELETE_TAG', 'CHECKED_TAG']),
            go(item) {
                this.CHECKED_TAG(item)
                this.$router.push(item.path)
            },
            close(index) {
                this.DELETE_TAG(this.tags, index)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../style/var";
    .tags {
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
        width 100%
        height: 40px;
        line-height: 40px;
        .items {
            display: flex;
            padding: 0 5px;
            .item {
                margin: 0 5px;
            }
        }
        .active {
            background: #409EFF;
            color: #fff;
        }
        .el-tag {
            cursor: pointer
        }
    }

</style>
