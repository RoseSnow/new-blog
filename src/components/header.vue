<template>
  <div class="header-box">
    <div class="public header">
      <div class="left">
        <p @click="handleBackHome">枪在手，跟我走</p>
      </div>
      <div class="right">
        <div class="nav-list" v-for="(item, index) in navList" :key="index">
          <div class="item" @click="handleNav(index)">{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      navList: [
        {
          value: '登陆',
          router: 'Login'
        }, {
          value: '标签',
          router: 'Label'
        }, {
          value: '分类',
          router: 'Classification'
        }, {
          value: '归档',
          router: 'Archive'
        }, {
          value: '关于',
          router: 'About'
        }
      ]
    }
  },
  methods: {
    // back home
    handleBackHome() {
      this.$router.push({name: 'Home'})
    },
    // navTab
    handleNav(index) {
      let {navList} = this;
      this.$router.push({
        name: `${navList[index].router}`
      })
    },
  }
}
</script>

<style lang="less" scoped>
  .header-box {
    width: 100%;
    height: 80px;
    background-color: #1674f6;
    .header {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        position: relative;
        p {
          font-size: 22px;
          color: #8E98B5;
          cursor: pointer;
          &:hover {
            color: #FFF;
          }

          &::before,
          &::after {
            position: absolute;
            content: '';
            width: 75%;
            height: 2px;
            background-color: #8E98B5;
            left: 50%;
            transform: translate(-50%);
            border-radius: 10px;
          }
          &::before {
            top: -8px;
          }
          &::after {
            bottom: -8px;
          }
        }
      }
      .right {
        display: flex;
        .nav-list {
          .item {
            font-size: 16px;
            font-family: '微软雅黑';
            color: #fff;
            font-weight: 600;
            cursor: pointer;
          }
          &:not(:last-child) {
            margin-right: 30px;
          }
        }
      }
    }
  }
</style>