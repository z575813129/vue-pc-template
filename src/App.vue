<template>
    <div id="app" :style="{height: innerHeight}">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data: () => ({
            innerHeight: ''
        }),
        created() {
            this.screenHight()
        },
        methods: {
            screenHight() {
                let resizeTimer = null
                this.innerHeight = window.innerHeight + 'px'
                console.log(this.innerHeight)
                window.onresize = () => {
                    if (resizeTimer === null) {
                        resizeTimer = setTimeout(() => {
                            this.innerHeight = window.innerHeight + 'px'
                            console.log(this.innerHeight)
                            resizeTimer = null
                        }, 100)
                    }
                }
            }
        }
    }
</script>

<style lang="stylus">
    @import "style/var.styl";
    @import "style/common.css";
    @import "style/cmes.css";
    @import "style/theme-0E74A7/index.css";
    body {
        background: $--background_grey;
    }


</style>
