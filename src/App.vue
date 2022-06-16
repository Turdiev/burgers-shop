<template>
  <div id="app">
    <MainPage />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
    <!-- <router-view /> -->
  </div>
</template>

<script>
import MainPage from './pages/index.vue';

export default {
    name: 'App',

    components: {
      MainPage
    }
}
</script>

<style lang="scss">

</style>
