<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
@import '~@/assets/reset.less';
</style>
