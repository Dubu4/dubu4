<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>DUBU</span>
        <span class="font-weight-light">4</span>
      </v-toolbar-title>
      <v-spacer>
        <span class="mr-2">
          <router-link v-bind:to="{ name: 'Home' }">
            <v-btn>Home</v-btn>
          </router-link>
        </span>
        <span class="mr-2">
          <router-link v-bind:to="{ name: 'Look' }">
            <v-btn>Look</v-btn>
          </router-link>
        </span>
        <span class="mr-2">
          <router-link v-bind:to="{ name: 'Dubu4' }">
            <v-btn>Dubu4</v-btn>
          </router-link>
        </span>
        <span class="mr-2">
          <router-link v-bind:to="{ name: 'Ko' }">
            <v-btn>Ko</v-btn>
          </router-link>
        </span>
      </v-spacer>

      <span class="mr-2">
        <router-link v-bind:to="{ name: 'Login' }">
          <v-btn dark>Login</v-btn>
        </router-link>
      </span>
      <span class="mr-2">
        <router-link v-bind:to="{ name: 'Join' }">
          <v-btn dark>Join</v-btn>
        </router-link>
      </span>
    </v-toolbar>
    <router-view></router-view>
    <!--<v-content>
      <HelloWorld/>
    </v-content-->
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  }
};
</script>
