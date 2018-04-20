<template>
  <div id="add">
    <img src="./assets/images/logo.png">
    <p>这是一个vuex测试: {{ counter }}</p>
    <router-link to="/index/123">index</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  mounted () {
    let i = 1
    setInterval(() => {
      this.$store.commit('updateCount', i++)
    }, 1000)
  },
  computed: {
    ...mapState({
      counter: (state) => state.count
    })
  }
}
</script>

<style>
#add {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
