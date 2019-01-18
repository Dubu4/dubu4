<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card mb-5">
          <div class="card-body">
            <div class="form-group mb-3">

              <h2 class="mb-5">회원가입</h2>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder="이메일"
                v-model="email"
              ><span id="alert_email"></span>
            </div>
            <div class="form-group mb-3">
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="비밀번호"
                v-model="password"
              ><span id="alert_password"></span>
            </div>

            <div class="form-group mb-3">
              <input
                type="text"
                name="username"
                class="form-control"
                placeholder="이름"
                v-model="username"
              ><span id="alert_username"></span>
            </div>
            <button
              class="btn btn-primary"
              v-on:click='join'
            >가입</button>
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
      username: ""
    };
  },
  mounted() {},
  methods: {
    join() {
      var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

      if (this.email.length == "") {
        document.getElementById("alert_email").innerHTML =
          "<span style='color:red;'>이메일을 입력해주세요.</span>";
        return false;
      }
      if (!this.email.match(regExp)) {
        document.getElementById("alert_email").innerHTML =
          "<span style='color:red;'>이메일형식에 맞게 입력해주세요.</span>";
        return false;
      } else {
        document.getElementById("alert_email").innerHTML = "";
      }

      if (this.password.length == "") {
        document.getElementById("alert_password").innerHTML =
          "<span style='color:red;'>비밀번호를 입력해주세요.</span>";
        return false;
      }
      if (this.password.length < 6) {
        document.getElementById("alert_password").innerHTML =
          "<span style='color:red;'>비밀번호를 6자이상 입력해주세요</span>";
        return false;
      } else {
        document.getElementById("alert_password").innerHTML = "";
      }
      if (this.username.length == "") {
        document.getElementById("alert_username").innerHTML =
          "<span style='color:red;'>이름을 입력해주세요.</span>";
        return false;
      }else {
        document.getElementById("alert_username").innerHTML = "";
      }
      const data = {
        email: this.email,
        password: this.password,
        username: this.username
      };

      this.$axios
        .post("http://localhost:3000/api/Users", data)
        .then(response => {
          console.log(response);
          localStorage.username = this.username;
        });
      alert(this.username+"님 회원이되신걸 축하합니다.");
      
      location.href='http://localhost:8080'
    }
  }
};
</script>
