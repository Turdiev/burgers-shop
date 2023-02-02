<template>
  <div class="contact">
    <BannerPage
      title="Contact"
    />
  </div>
</template>

<script>
import BannerPage from "@/components/blocks/BannerPage.vue";

export default {
  name: 'ContactPage',

  components: {
    BannerPage
  }
}
</script>

<style lang='scss'>
  .contact {
    margin-top: 50px;
  }
</style>