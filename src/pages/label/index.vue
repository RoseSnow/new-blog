<template>
  <div class="public">
    <h2>Review</h2>
    <Review />
  </div>
</template>

<script>
import Review from '@/components/review'
export default {
  name: 'app',
  components: {
    Review
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/reset.less';
</style>