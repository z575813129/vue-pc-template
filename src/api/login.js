import http from './config.js'

export default {
    // 登录获取token
    login(data) {
        return http.post('authentication/login', {
            username: data.username,
            password: data.password
        })
    }
}
