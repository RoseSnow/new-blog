<template>
  <div class="card-item">
    <img class="cover" :src="itemData.cover" alt="">
    <div class="right">
      <div class="title-box">
        <div class="title">{{itemData.title}}</div>
        <div class="time">{{itemData.time}}</div>
      </div>
      <div class="desc line3">{{itemData.desc}}</div>
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
  width: 630px;
  height: 180px;
  display: flex;
  padding: 20px;
  border: 1px solid @c_border;
  margin-bottom: 20px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: @c_card;
  }
  .cover {
    width: 240px;
    height: 140px;
    object-fit: contain;
  }
  .right {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title-box {
      .title {
        font-size: 24px;
        color: @c_txt;
      }
      .time {
        color: @c_subtxt;
      }
    }
    
    .desc {
      font-size: 18px;
      color: @c_subtxt;
      word-break: break-word;
    }
  }
}
</style>