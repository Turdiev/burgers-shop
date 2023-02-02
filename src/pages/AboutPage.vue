<template>
  <div class="about">
    <BannerPage
      title="Company"
    />
  </div>
</template>

<script>
import BannerPage from "@/components/blocks/BannerPage.vue";

export default {
  name: 'AboutPage',

  components: {
    BannerPage
  }
}
</script>

<style lang='scss'>
  .about {
    margin-top: 50px;
  }
</style>