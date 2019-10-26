<template>
  <div>
    <div>
        <router-view />
    </div>
    <van-tabbar route v-model="active" safe-area-inset-bottom>
      <van-tabbar-item replace to="/main" icon="search" safe-area-inset-bottom>首页</van-tabbar-item>
      <van-tabbar-item replace to="/apply" icon="search" safe-area-inset-bottom>接单</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="search" safe-area-inset-bottom>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-me {
  margin: 0 auto;
}
</style>
