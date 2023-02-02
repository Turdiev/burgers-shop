<template>
  <div
    class="HomePage"
    @scroll="onScroll()"
  >
      <MainBlock />
      <AboutUsBlock />
      <WorkBlock />
      <MenuBlock />
      <FAQBlock />
      <CallBlock />
      <BannersBlock />
  </div>
</template>

<script>
import MainBlock from '@/components/blocks/MainBlock.vue';
import AboutUsBlock from '@/components/blocks/AboutUsBlock.vue';
import WorkBlock from '@/components/blocks/workBlock/WorkBlock.vue';
import MenuBlock from '@/components/blocks/menuBlock/MenuBlock.vue';
import FAQBlock from '@/components/blocks/FAQBlock.vue';
import CallBlock from '@/components/blocks/CallBlock.vue';
import BannersBlock from '@/components/blocks/bannersBlock/BannersBlock.vue';

export default {
  name: 'HomePage',

  components: {
      MainBlock,
      AboutUsBlock,
      WorkBlock,
      MenuBlock,
      FAQBlock,
      CallBlock,
      BannersBlock
  },

  methods: {
    onScroll() {
      console.log('Scro0LL');
    }
  }
}
</script>
