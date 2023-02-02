<template>
  <div class="faq-page">
    <BannerPage
      title="FAQ"
    />
  </div>
</template>

<script>
import BannerPage from "@/components/blocks/BannerPage.vue";

export default {
  name: 'FAQPage',

  components: {
    BannerPage
  }
}
</script>

<style lang='scss'>
  .faq-page {
    margin-top: 50px;
  }
</style>