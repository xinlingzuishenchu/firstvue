<template>
  <div id="app">
  <h3>tab切换</h3>
    <ul>
      <li>
        <router-link to="/home">主页</router-link>
      </li>
      <li>
        <router-link to="/news">新闻</router-link>
      </li>
    </ul>
    <div>
      <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
        <router-view class="animated"></router-view>
      </transition>
    </div>
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
li{
  display:inline-block;
}
</style>
