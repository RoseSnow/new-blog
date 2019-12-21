<template>
  <div class="public">
    <div class="article-box">
      <div class="item" v-for="(item, index) in articleList" :key="index">
        <Card :itemData="item" />
      </div>
    </div>

    <!-- backTop -->

  </div>
</template>

<script>
import Card from './components/card-item';
export default {
  components: {
    Card
  },
  data() {
    return {
      articleList: [
        {
          id: 1,
          cover: require("@/assets/images/review/car.png"),
          title: '这是标题1',
          desc: '这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊'
        }, {
          id: 2,
          cover: require("@/assets/images/review/car.png"),
          title: '这是标题1',
          desc: '这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊'
        }, {
          id: 3,
          cover: require("@/assets/images/review/car.png"),
          title: '这是标题1',
          desc: '这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊'
        }, {
          id: 4,
          cover: require("@/assets/images/review/car.png"),
          title: '这是标题1',
          desc: '这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊'
        }, {
          id: 5,
          cover: require("@/assets/images/review/car.png"),
          title: '这是标题1',
          desc: '这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊这是内容啊'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/reset.less';
.article-box {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>