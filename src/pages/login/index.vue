<template>
  <div class="public">
    <h2>login</h2>
    <div class="list" v-for="(item, index) in yearList" :key="index">
      <div class="item">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yearList: []
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

    // 初始化年-月
    initYearOrMonth(m, n) {
      let initList = [];
      for (let i = m; i>=m && i<=n; i++) {
        initList.push({name: i})
      }
      initList.map((item, index) => {
        item.id = index
      })
      return initList;
    },
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/reset.less';
</style>