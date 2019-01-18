<template>
  <div class="container my-5">
  <div class="row justify-content-center">
  <div class="col-6">
    <!--div class="card mb-5">
  <div class="card-body">
    <div class="form-group mb-3">
    <input type="email" name=""  class="form-control" placeholder="Enter email" v-model="email">
    </div>
    <div class="form-group mb-3">
      <input type="password" name=""  class="form-control" placeholder="Enter password" v-model="password">
    </div>
    <button class="btn btn-primary" v-on:click="login">Login</button>
  </div>
</div-->

<div class="card mb-5">
  <div class="card-body">
    <div class="form-group mb-3">
      <h2 class="mb-5">글쓰기</h2>
    <input type="text" name="" id="" class="form-control" placeholder="Enter the title" v-model="title">
    </div>
    <div class="form-group mb-3">
    <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="Enter the content" v-model="content"></textarea>
    </div>
    <button class="btn btn-primary" v-on:click="addPost">Add Post</button>
  </div>
</div>

<h2>POST LIST</h2>
<div class="card mb-5" v-for="post in posts" v-bind:key="post.id">
  <div calss="card-body">
   <div style="font-size:5px; text-ailgn:right; ">id : {{post.id}}</div>
    <div><h3>{{post.title}}</h3></div>
    <p v-text="post.content"></p>
     <button class="btn btn-primary wiss" v-on:click="delPost(post.id)">삭제</button>
  </div>
</div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      message :"Hello World",
      posts: [],
      title: "",
      content: "",
      email:"",
      password:"",
      id: []
    }
  },
  mounted(){
this.getPosts()
  },
  methods:{
    addPost(){
      const data ={
        title : this.title,
        content : this.content,
       

      }
      this.$axios.post('http://localhost:3000/api/Posts', data).then(response=>{
        console.log(response)
        this.getPosts()
        this.clearInput()
  })
    },
    getPosts(){
      const data ={
        title : this.title,
        content : this.content,
        id : this.id
      }
      this.$axios.get('http://localhost:3000/api/Posts').then(response =>{
        
        this.posts = response.data
        this.posts.reverse()
      })
  },
  delPost(id){
    
    this.$axios.delete('http://localhost:3000/api/Posts/'+id ).then(response=>{
        console.log(response)     
         this.getPosts()
        //this.posts.reverse()           
  })
  .catch(function(error){
    console.log("오류남")
  })
  },
  clearInput(){
    this.title=""
    this.content=""
  },
  login(){
    const credentials ={
      email:this.email,
      password:this.password
    }
    this.$axios.post('http://localhost:3000/api/Users/login',credentials).then(response=>{
    console.log(response)
    
    })
  }
  }
  }

</script>

<style>
.btn .btn-primary .wiss{ 
  float: right;
  padding: 50px;
}
</style>
