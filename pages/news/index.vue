<template>
    <div>
        <h2>News Index page</h2>
        <p>NewsId:{{$route.params.newsId}}</p>
        <ul>
            
            <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
            <li><nuxt-link :to="{name:'news-myId',params:{myId:123, title:'I am News'}}">news-1</nuxt-link></li>
            <li><nuxt-link :to="{name:'news-myId',params:{myId:'aaa'}}">news-2</nuxt-link></li>
            
        </ul>
    </div>
</template>

<script>
export default {
    transition:'test'
}
</script>