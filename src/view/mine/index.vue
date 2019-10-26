<template>
  <div>
    <!-- 头像 -->
    <div>
      <p class="dr_avatar">
        <van-image width="100" height="100" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </p>
      <p class="dr_name">{{userName}}</p>
    </div>
    <!-- 资产 -->
    <div class="dr_assert">
      <van-grid :column-num="3">
        <van-grid-item icon="like-o" text="我的收藏" is-link to="my-collect"/>
        <van-grid-item icon="coupon-o" text="优惠券" is-link to="my-coupon"/>
        <van-grid-item icon="balance-pay" text="我的钱包" is-link to="my-wallet" />
      </van-grid>
    </div>
    <!-- 箭头 -->
    <div class="dr_others">
      <van-cell title="我的订单" is-link to="my-order" />
      <van-cell title="我的地址" is-link to="my-address"/>
      <van-cell title="关于我们" is-link to="about-us" />
      <van-cell title="常见问题" is-link to="issues" />
      <van-cell title="设置" is-link to="setting" />
      <van-cell title="售后服务" is-link to="after-service" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      userName: '杨师傅'
    };
  },
  mounted() {

  }
};
</script>

<style scoped>
.dr_avatar {
  vertical-align: middle;
  padding: 10px;
  position: relative;
  height: 100px;
  text-align: center;
  margin: 10px;
}
.dr_name {
  vertical-align: middle;
  padding: 10px;
  text-align: center;
  margin: 5px;
}
.dr_others {
  margin-top: 20px;
}
.dr_assert {
  margin-top: 10px;
}
</style>
