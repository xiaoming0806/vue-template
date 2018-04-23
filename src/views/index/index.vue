<template>
  <div id="index-warp">
    我是一个首页
  </div>
</template>

<script>
export default {
  mounted () {
    this.$http.get('/api/dataplatform/task/notice').then((response) => {
      let res = response.data
      console.log(res.data) /* eslint-disable */
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/reset.scss';
  @import '@/assets/styles/index.scss';
</style>
