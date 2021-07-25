import axios from 'axios'

const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})

reques.interceptors.request.use(function(config){
    config.headers.Authorization
    return config
},function(error){
    return Promise.reject(error)
})

export default request