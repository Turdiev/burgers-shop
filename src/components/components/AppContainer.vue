<template>
  <div class="container">
      <slot />
  </div>
</template>

<script>
export default {
    name: 'AppContainer'
}
</script>

<style lang="scss">
    .container {
        max-width: 1240px;
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
        box-sizing: border-box;
    }

    @media screen and (max-width: 1200px) {
        .container {
            max-width: 940px;
        }   
    }

    @media screen and (max-width: 992px) {
        .container {
            max-width: 720px;
        }   
    }

    @media screen and (max-width: 768px) {
        .container {
            max-width: 540px;
        }   
    }

    @media screen and (max-width: 576px) {
        .container {
            padding: 0 16px;
            max-width: none;
        }   
    }
</style>