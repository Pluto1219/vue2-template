<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
  import Hello from './components/Hello'

  export default {
    name: 'app',
    data() {
      return {
      	item: {
      		id: 1,
          name: 'vue'
        }
      }
    },
    mounted() {
      let that = this;
      console.log(that.item);
      that.Util.log(that.item);
    },
    components: {
      Hello
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
