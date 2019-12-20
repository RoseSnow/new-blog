<template>
  <div class="public">
    <div class="article-box">
      <div  v-for="(item, index) in articleList" :key="index">
        <Card :itemData="item" />
      </div>
    </div>

    <!-- backTop -->
    <BackTop />
  </div>
</template>

<script>
import Card from './components/card-item';
import BackTop from '@/components/common/back-top';
export default {
  components: {
    Card,
    BackTop
  },
  data() {
    return {
      articleList: [
        {
          id: 1,
          cover: "http://rosesnow.top/2019/06/21/webpack4.x%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B01/shouye.png",
          title: 'vue实战教程',
          desc: 'vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程'
        }, {
          id: 2,
          cover: "http://rosesnow.top/2019/06/21/webpack4.x%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B01/shouye.png",
          title: 'vue实战教程',
          desc: 'vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程'
        }, {
          id: 3,
          cover: "http://rosesnow.top/2019/06/21/webpack4.x%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B01/shouye.png",
          title: 'vue实战教程',
          desc: 'vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程'
        }, {
          id: 4,
          cover: "http://rosesnow.top/2019/06/21/webpack4.x%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B01/shouye.png",
          title: 'vue实战教程',
          desc: 'vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程'
        }, {
          id: 5,
          cover: "http://rosesnow.top/2019/06/21/webpack4.x%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B01/shouye.png",
          title: 'vue实战教程',
          desc: 'vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程vue实战教程'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/reset.less';
.article-box {
  margin-top: 50px;
}
</style>