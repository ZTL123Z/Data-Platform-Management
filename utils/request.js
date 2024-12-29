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

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error?.response?.status === 401) {
        alert('登录过期，请重新登录')
        localStorage.clear()
        location.href = '../pages/login/index.html'
    }
    return Promise.reject(error);
});