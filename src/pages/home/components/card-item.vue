<template>
  <div class="card-item">
    <img :src="itemData.cover" alt="">
    <div class="right">
      <div class="title">{{itemData.title}}</div>
      <div class="desc">{{itemData.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Object,
      default: function(){return {}}
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/reset.less';
.card-item {
  display: flex;
  padding: 20px;
  border: 1px solid @c_border;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    background-color: @c_card;
  }
  img {
    width: 480px;
    height: 260px;
    object-fit: cover;
  }
  .right {
    margin-left: 30px;
    .title {
      font-size: 32px;
      color: @c_txt;
    }
    .desc {
      font-size: 28px;
      color: @c_subtxt;
      word-break: break-word;
    }
  }
}
</style>