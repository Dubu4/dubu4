<template>
<v-content>
  Parent counter : <input type="text" v-model="this.$store.state.counter"/>
  <v-btn @click="addCounter()">+</v-btn>
  <v-btn @click="subCounter()">-</v-btn>
  <!--ko2></ko2-->
</v-content>
</template>

<script>
//import Ko2 from './Ko2.vue'
export default {
  methods:{
  addCounter() {
    this.$store.commit('addCounter');
  },
  subCounter() {
    this.$store.commit('subCounter');
  }
  },
  components: {
    //'ko2': Ko2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;






























  color: #2c3e50;
  text-align: center;
  margin: 0px auto;
  margin-top: 40px;

}
</style>
