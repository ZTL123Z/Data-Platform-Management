// axios 公共配置
// 基地址
axios.defaults.baseURL = 'http://geek.itheima.net'
// 请求拦截
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    token && (
        config.headers.Authorization = `Bearer ${token}`
    )
    return config;
})