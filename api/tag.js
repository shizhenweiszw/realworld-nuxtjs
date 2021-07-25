import {request} from '@/plugins/request.js'
export const getTags =  data => {
    return request({
        method: 'GET',
        url: '/api/tags',
        data
    })
}