<template>
  <div>
    <van-cell title="单元格" is-link />
    <van-cell title="单元格" is-link value="内容" />
    <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
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
