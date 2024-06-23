<template>
 <div id="apps">
    <div id="nav">
      <router-link to="/">Home </router-link> |
      <router-link to="/micro-vue">vue </router-link>
      <router-link to="/react">react </router-link>
    </div>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  name: 'app',

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
