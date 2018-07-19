<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <h1 @click="change">{{msg}}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: '点击我改变数据'
    }
  },
  methods: {
    change () {
      this.msg = '终于等到你！'
    }
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
