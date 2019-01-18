<template>
  <div id="apps">
    <h1>API 만들어보기 </h1>
<button @click="wooPosts"><h2 style="color:red;">Click</h2></button>
 <div v-for="post in posts" v-bind:key="post.date" style="background-color:#d3d3d3;">
  <div>{{post.date}}</div>
  <div>{{post.greeting}}</div>
  <div>{{post.url}}</div>
  </div>
  <div v-for="pos in postss" v-bind:key="pos.accept" style="background-color:#fff;">
    <div>{{pos.host}}</div>
    <div>{{pos.connection}}</div>    
    <div>{{pos.user-agent}}</div>
    <div>{{pos.dnt}}</div>
    <div>{{pos.accept}}</div>
    <div>{{pos.accept-encoding}}</div>
    <div>{{pos.accept-language}}</div>

  

   </div>
    </div>
</template>




<script>
import sugar from 'sugar'
import numfm from 'numeral'
export default {
  name: 'app',
  data: function () {
    return {
      posts: [],
      postss:[]
    }
  },
  mounted(){
  
   this.wooPosts();
  },
  methods: {
    wooPosts(){
    const baseURI = 'http://127.0.0.1:3000/ping';
      this.$axios.get(`${baseURI}`)
      .then((result) => {
        this.posts = result; 
        console.log("JJJJJJJ")
        console.log(result.data.headers);
        this.postss = result.data.headers; 
    })
  }
},     
}
</script>



<style>
#apps {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin: 0px auto;
  margin-top: 40px;
  width:350px;

}


</style>