import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
    isLogin: false, // 登录状态
    isCollapseLeftBar: false, // 控制sideBar的伸缩
    innerWidth: '',
    innerHeight: '',
    userInfo: {},
    tags: [] // 标签列表
}

if (window.localStorage.isLogin) {
    state.isLogin = window.localStorage.isLogin
}
if (window.localStorage.userInfo) {
    state.userInfo = JSON.parse(window.localStorage.userInfo)
}
if (window.sessionStorage.tags) {
    state.tags = JSON.parse(window.sessionStorage.tags)
}
const getters = {
    isLogin: state => state.isLogin,
    isCollapseLeftBar: state => state.isCollapseLeftBar,
    innerWidth: state => state.innerWidth,
    innerHeight: state => state.innerHeight,
    userInfo: state => state.userInfo,
    tags: state => state.tags
}
const mutations = {
    SET_INNER_WIDTH(state, data) {
        state.innerWidth = data.width
    },
    SET_LEFT_BAR(state, data) {
        state.isCollapseLeftBar = data.isCollapseLeftBar
    },
    SET_INNER_HEIGHT(state, data) {
        state.innerHeight = data.height
    },
    LOGIN_SUCCESS(state, data) {
        state.isLogin = true
        state.userInfo = data
        window.localStorage.isLogin = true
        window.localStorage.userInfo = JSON.stringify(data)
    },
    LOGIN_FAIL(state) {
        state.isLogin = false
        window.localStorage.clear()
    },
    ADD_TAG(state, data) {
        let isHas = false
        if (state.tags.length) {
            for (let item of state.tags) {
                if (item.title === data.title) {
                    isHas = true
                    item.type = ''
                } else {
                    item.type = 'info'
                }
            }
        }
        if (!isHas) {
            state.tags.push(data)
        }
        window.sessionStorage.tags = JSON.stringify(state.tags)
    },
    DELETE_TAG(state, data) {
        if (state.tags.length > 1) {
            state.tags.splice(data.index, 1)
            window.sessionStorage.tags = JSON.stringify(state.tags)
        }
    },
    CHECKED_TAG(state, data) {
        for (let item of state.tags) {
            if (item.title === data.title) {
                item.type = ''
            } else {
                item.type = 'info'
            }
        }
        window.sessionStorage.tags = JSON.stringify(state.tags)
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state
})
