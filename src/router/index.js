import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: resolve => require(['../views/Login'], resolve)
        },
        {
            path: '/manage',
            name: 'manage',
            component: resolve => require(['../views/Index'], resolve),
            children: [
                {
                    path: 'demo1',
                    component: resolve => require(['../views/demo/Demo1'], resolve)
                },
                {
                    path: 'demo2',
                    component: resolve => require(['../views/demo/Demo2'], resolve)
                },
                {
                    path: 'demo3',
                    component: resolve => require(['../views/demo/Demo3'], resolve)
                }
            ]
        }
    ]
})
