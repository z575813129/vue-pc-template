import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
// http://10.86.96.102:9001
const API_ROOT = '/'
export default {
    post: async(url, data, option) => {
        return Vue.axios.post(API_ROOT + url, data, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
    },
    get: async(url, option) => {
        return Vue.axios.get(API_ROOT + url, option)
    }
}
