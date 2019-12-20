<template>
  <div class="review-box">
    <div class="desc">
      <div class="left">
        <h3>The title of the review</h3>
        <div class="time">
          <p>4th July,2019</p>
          <div class="like">
            <img src="@/assets/images/review/icon-praise.png" alt="">
            <span>99</span>
          </div>
        </div>
        <div class="pros">
          <span>Pros</span>
          <p>Butinformation on Auto was all so easy to decipher. It made picking out the best deal so easy mess on most comparison</p>
        </div>
        <div class="cons">
          <span>Cons</span>
          <p>Many of the polished chrome details inside the car can be commissioned with Bentley’s …</p>
        </div>
        <div class="more">
          <span>See more</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="right">
        <span class="score">4.0</span>
        <div class="logo">
          <img src="@/assets/images/review/car.png" alt="">
          <div class="tip">
            <p>Hyundai i10 1.0 Spielen Sie 5dr Benzin-Schrägheck </p>
          </div>
        </div>
      </div>
    </div>
    <div class="author">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '~@/assets/reset.less';
.review-box {
  .desc {
    position: relative;
    width: 100%;
    height: 336px;
    background-color: #F6F7FA;
    display: flex;
    padding: 50px 90px 55px 66px;
    box-sizing: border-box;
    .left {
      margin-right: 93px;
      h3 {
        font-size: 24px;
        line-height: 29px;
        margin-left: 62px;
        margin-bottom: 10px;
      }
      .time {
        width: 678px;
        font-size: 14px;
        color: @c_subtxt;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 62px;
        margin-bottom: 10px;
        .like {
          display: flex;
          align-items: center;
          img {
            width: 22px;
            height: 22px;
            object-fit: cover;
          }
          span {
            margin-left: 11px;
          }
        }
      }
      .pros,
      .cons {
        display: flex;
        justify-content: space-between;
        span {
          width: 48px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          font-size: 12px;
          background-color: #CED3E2;
        }
        p {
          width: 678px;
          font-size: 18px;
          line-height: 24px;
        }
      }
      .pros {
        margin-bottom: 20px;
      }
      .more {
        position: absolute;
        color: @c_blue;
        display: flex;
        align-items: center;
        margin-left: 62px;
        bottom: 55px;
        cursor: pointer;
        span {
          font-size: 14px;
          margin-right: 12px;
        }
        .el-icon-arrow-right {
          width: 8px;
          height: 12px;
        }
      }
    }
    .right {
      position: relative;
      .score {
        position: absolute;
        font-size: 100px;
        line-height: 120px;
        color: @c_subtxt;
        top: 0;
        right: 0;
      }
      .logo {
        margin-top: 30px;
        img {
          width: 200px;
          height: 97px;
          object-fit: contain;
        }
        .tip {
          position: relative;
          padding-left: 15px;
          p {
            &::before {
              position: absolute;
              content: '';
              width: 6px;
              height: 6px;
              top: 8px;
              left: 0;
              background-color: @c_orange;
            }
          }
        }
      }
    }
  }
}
</style>