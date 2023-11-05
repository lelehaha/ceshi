<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
html,body,#app {
    height: 100%;
    background-color: #eee7e7;
    margin: 0;
}
html {
  overflow: hidden;
}
</style>
