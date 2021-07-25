import {request} from '@/plugins/request.js'

export const getArticles =  params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}

export const getFeedArticles =  params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        headers: {
            Authorization: `Token `
        },
        params
    })
}

export const addFavorite =  slug => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`,
    })
}

export const deleteFavorite =  slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`,
    })
}

//获取文章详情
export const getArticle =  slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`,
    })
}

//获取文章详情
export const getComments =  slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`,
    })
}