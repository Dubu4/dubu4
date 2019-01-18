<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card mb-5">
          <div class="card-body">
            <div class="form-group mb-3">

              <h2 class="mb-5">LOGIN</h2>
              <input
                type="email"
                name=""
                class="form-control"
                placeholder="Enter email"
                v-model="email"
              >
            </div>
            <div class="form-group mb-3">
              <input
                type="password"
                name=""
                class="form-control"
                placeholder="Enter password"
                v-model="password"
              >
            </div>
            <button
              class="btn btn-primary"
              v-on:click="login"
            >Login</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World",
      posts: [],
      email: "",
      password: "",
      id: [],
      name:""
    };
  },
  mounted() {
   
  },
  methods: {
    login() {
      const credentials = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      this.$axios
        .post("http://localhost:3000/api/Users/login", credentials)
        .then(response => {
          console.log(response);
          localStorage.email = this.email;
        });
    }
  }
};
</script>
