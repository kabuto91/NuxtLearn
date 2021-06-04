<template>
  <div>
    <div class="diss">
      <img src="~static/72928.png" alt="" width="300">
    </div>
    <ul>
      <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
      <li><nuxt-link :to="{name:'news',params:{newsId:3306}}">news</nuxt-link></li>
      <li><nuxt-link :to="{name:'asyncData'}">asyncData</nuxt-link></li>
      
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>
.diss{
  width: 300px;
  height: 100px;
  background-image: url('~static/72928.png');
}
</style>
