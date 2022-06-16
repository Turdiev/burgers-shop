<template>
  <div class="order">
    <BannerPage
      title="Order"
    />
  </div>
</template>

<script>
import BannerPage from './../components/blocks/BannerPage.vue';

export default {
  name: 'OrderPage',

  components: {
    BannerPage
  }
}
</script>

<style lang='scss'>
  .order {
    width: 100%;
    margin-top: 50px;
  }
</style>