<template>
    <div class="demo1">
         <!--双行搜索条件-->
        <div class="cmes-search">
            <el-row type="flex" class="flex-wrap">
                <el-col class="cmes-col_item">
                    <label>工艺名称：</label>
                    <el-input size="mini" placeholder="工艺名称"></el-input>
                </el-col>
                <el-col class="cmes-col_item">
                    <label>类型选项：</label>
                    <el-select v-model="value" size="mini" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col class="cmes-col_item">
                    <label>日期选项：</label>
                    <el-date-picker
                        v-model="value1"
                        size="mini"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-col>
                <el-col class="cmes-col_item">
                    <label>工艺名称：</label>
                    <el-input size="mini" placeholder="工艺名称"></el-input>
                </el-col>
                <el-col class="cmes-col_item">
                    <label>类型选项：</label>
                    <el-select v-model="value" size="mini" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col class="cmes-col_item">
                    <label>日期选项：</label>
                    <el-date-picker
                        v-model="value1"
                        size="mini"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-col>
            </el-row>

            <el-row class="" type="flex">
                <el-col class="cmes-col_item cmes-col_buttons">
                    <el-button size="small" @click="" icon="el-icon-search" type="primary">查询</el-button>
                    <el-button size="small" @click="" icon="el-icon-refresh">重置</el-button>
                </el-col>
            </el-row>

        </div>
        <!--tab操作buttons-->
        <div class="cmes-table_buttons">
            <el-button icon="el-icon-plus" size="small" @click="">新增</el-button>
            <el-button icon="el-icon-edit" size="small" @click="">编辑</el-button>
            <el-button icon="el-icon-info" size="small" @click="">详情</el-button>
            <el-button icon="el-icon-delete" size="small" @click="">删除</el-button>
        </div>
        <!--tab-->
        <div class="cmes-table_content">
            <el-table
                size="small"
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>


            </el-table>
        </div>
        <!--分页-->
        <div class="cmes-pagination">
            <el-pagination
                layout="total, sizes, prev, pager, next, jumper"
                :page-sizes="[15, 20, 30, 40, 50]"
                :page-size="15"
                :total="100">
            </el-pagination>
        </div>
    </div>

</template>

<script>
    export default {
        components: {},
        name: "demo1",
        data: () => ({
            totalCount: '',
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
            value: '',
            value1: '',
            tableLabels: [
                {label: '物料编号'},
                {label: '日期'},
                {label: '姓名'},
                {label: '地址'}
            ],
            list: [],
            tableData: [
                {
                    label: '日期',
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区上海市普陀区上海市普陀区上海市普陀区上海市普陀区上海市普陀区上海市普陀区上海市普陀区上海市普陀区'
                },
                {
                    label: '日期',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    label: '日期',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    label: '日期',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    label: '日期',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    label: '日期',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    label: '日期',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    label: '日期',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    label: '日期',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    label: '日期',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    label: '日期',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    label: '日期',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    label: '日期',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    label: '日期',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    label: '日期',
                    date: '2016-05-15',
                    name: '王小虎',
                    address: '上海市普陀区'
                }],
            arr: [
                {key: '1', value: '成功'},
                {key: '2', value: '失败'}
            ]
        }),
        mounted() {
            // console.log(this.$store.getters.isCollapseLeftBar)
        },
        methods: {}
    }
</script>

<style lang="stylus" scoped>
    @import "../../style/var.styl";
    .demo1 {
    }

</style>
