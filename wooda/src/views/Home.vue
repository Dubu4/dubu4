<template>
  <HelloWorld />
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    components: {
      HelloWorld
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
  margin-top: 40px;

}

th{
width:130px;
padding:2px 0 10px 0;
background-color: #B2EBF4;
color: #000;
vertical-align: middle;
}
td{
width:130px;
padding:2px 0 10px 0;
}
td:nth-child(odd) {
  background-color: #FAFFFF;
}
img #ico{
  width: 20px;
  height: 20px;
}
</style>