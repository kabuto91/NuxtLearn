<template>
    <div>
        <h2>News-content</h2>
        <p>NewsId:{{$route.params.myId}}</p>
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/news">News</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    validate({params}){
        return /^\d+$/.test(params.myId);
    },
    data(){
        return {
            title:this.$route.params.title,
        }
    },
    //独立设置head信息
    head(){
        return {
            title:this.title,
            meta:[
                {hid:'description',name:'news',content:'This is news page'}
            ]
        }
    }
}
</script>