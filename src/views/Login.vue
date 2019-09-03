<template>
    <div class="bac">
        <div class="head "><span class="Yun">Anyway</span></div>

        <div class="text">
            <p class="p1">Anyway</p>
            <p>云集，让生活更便捷！</p>
            <p>快乐人生，吉利相伴!</p>
        </div>

        <div class="login">
            <el-row :gutter="0">
                <el-col :span="24">
                    <div class="item">
                        <h3 class=" tc">用户登录</h3>
                        <el-input class="list" v-model="username" placeholder="域账号">
                        </el-input>
                        <el-input class="list" v-model="password" type="password" placeholder="密码">
                        </el-input>
                        <!--<el-select class="list" v-model="select2" slot="prepend" placeholder="中文">-->
                        <!--<el-option label="中文" value="1"></el-option>-->
                        <!--<el-option label="英文" value="2"></el-option>-->
                        <!--</el-select>-->


                        <el-button type="primary" class="sub list" @click="go">登录</el-button>
                        <div class="forget r  ">
                            <a href="#"><span>忘记密码</span></a>
                            <a href="#"><span>免费注册</span></a>
                        </div>

                    </div>

                </el-col>

            </el-row>
        </div>

        <div class="bottom">
            <div class="b-l l ">
            <img src="../assets/contect.png" class="l"/>
            <span>客服热线</span>
            <!--<p>123456</p>-->
        </div>

            <div class="b-r-t r">
                <ul>
                    <li><a href="#">生产执行</a></li>
                    <li><a href="#">设备管理</a></li>
                    <li><a href="#">物流管理</a></li>
                    <li><a href="#">质量控制</a></li>
                    <li><a href="#">新闻资讯</a></li>
                </ul>


            </div>
            <div class="txt l">浙江 杭州 3321847368@qq.com</div>

        </div>
    </div>

</template>

<script>
    import api from '../api/login'

    export default {
        name: "Login",
        data() {
            return {
                select: '',
                passw: '',
                num: '',
                code: '',
                select2: '',
                username: '',
                password: ''
            }
        },
        methods: {
            go() {
                this.$router.push('manage/demo1')
                let data = {
                    username: this.username,
                    password: this.password
                }
                api.login(data).then((r) => {
                    console.log(r)
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .head {
        height: 50px;
        line-height: 50px;
        box-shadow: 0px -4px 26px #fdfdfe;
        .text{
            line-height: 20px
        }
        .Yun {
            float: left;
            color: white;
            font-weight: bold;
            font-style: italic;
            font-size: 22px;
            margin-left: 2%;
        }
        .Rtop {
            margin-right 20px;
            .Menu {
                color white;
            }
        }
    }

    .bac {
        background: url("../assets/login2.jpg") no-repeat;
        background-size: cover;
        opacity: 0.9;
        width: 100%;
        height: 100%;
        position absolute;

        .login {
            position: absolute;
            right: 20%;
            top: 20%;
            width: 300px;
            height: 310px;
            border: solid white 1px;
            background: white;
            border-radius: 5px;
        }

        .item h3 {
            color: #333744;
            font-size: 20px;
            margin: 10%;
        }

        .list {
            margin-left: 12.5%;
            width: 75%;
            margin-bottom: 10%;
        }

        .sub {
            height: 35px;
            margin-left: 10%;
            width: 80%;
            background-color: #333744;
            border-color: #333744;
        }

        .forget {
            font-size: 12px;
            margin-right: 40px;
            margin-top: -21px;
            a {
                margin-left: 12px;
            }
        }
        a:link {
            color: #8b8b8b;
        }

        a:visited {
            color: #8b8b8b
        }
        a:active {
            color: #000
        }

    }

    .text {
        width: 300px;
        color: white;
        margin-top: 10%;
        margin-left: 15%;
        .p1 {
            font-size: 30px;
            font-weight: bold;
            font-family: Arial;

        }
        p {
            margin: 22px;
            line-height: 30px;
            font-size: 17px;
        }
    }

    .bottom {
        border-top: solid 1px rgba(27, 30, 37, 0.8);
        position: absolute;
        bottom: 0;
        height: 80px;
        width: 100%;
        background-color: rgba(27, 30, 37, 0.8);

        .b-l {
            margin-left 10%;
            margin-top 10px;

            img {
                width: 40px;
                height: 40px;
                margin-top 15px;

            }
            span {
                color: #989898;
                margin-left: 30px;
                font-size 15px;
                font-family: PingFangSC-Regular;
            }
            p {
                color: white;
                margin-left: 70px;
                font-size 22px;
                font-family: PingFangSC-Regular;
                margin-top 10px;
                height: 15px;
            }
        }
        .b-r-t {
            width 45%
            border-bottom: solid 1px rgba(152, 152, 152, 0.3);
            margin-right 15%;

            ul {

                font-size: 14px;

                li {
                    float left;
                    margin-right 5%;
                    margin-left 5%
                    margin-bottom 10px;

                }
            }

        }
        .txt {
            color rgba(152, 152, 152, 0.5);
            font-family: PingFangSC-Regular;
            font-size 10px;
            margin-left 22.5%;
            margin-top 12px;

        }

    }

</style>
