<template>
  <div class="public">
    <h2>login</h2>
    <el-button type="primary" @click="handleLogin">state</el-button>

    <div class="box" v-if="loginState">
      2020/1/1
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yearList: [],
      loginState: false
    }
  },
  created() {
    this.print();
  },
  mounted() {
    let currentY = new Date().getFullYear();
    this.yearList = this.initYearOrMonth(2010, currentY+1);
  },
  methods: {
    hello(m) {
      console.log(`hello ${m}`)
    },
    word() {
      let m = 'word';
      return m;
    },
    async print() {
      console.log('111');
      let m = await this.word();
      this.hello(m);
    },

    handleLogin() {
      this.loginState = !this.loginState
    },
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/reset.less';
</style>