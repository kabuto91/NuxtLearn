<template>
    <div>
        <h1>姓名：{{info.name}}</h1>
        <h1>年龄：{{info.age}}</h1>
        <h1>兴趣：{{info.interest}}</h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            name:'hello world'
        }
    },
    async asyncData(){
        // return axios.get('https://yapi.baidu.com/mock/67005/kabuto/test')
        // .then((res)=>{
        //     console.log(res);
        //     return {info:res.data}
        // })
        let {data} = await axios.get('https://yapi.baidu.com/mock/67005/kabuto/test');
        return {info:data}
    }
}
</script>