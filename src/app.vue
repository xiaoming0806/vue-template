<template>
    <transition name="fade">
      <router-view />
    </transition>
</template>

<script>

export default {
  mounted () {
  },
  computed: {
  }
}
</script>

<style lang="scss">
  @import './assets/styles/reset.scss';
  @import './assets/styles/public.scss';
</style>
