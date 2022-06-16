<template>
    <h2 class="title">
        <slot />
    </h2>
</template>

<script>
export default {
    name: 'AppTitle',
}
</script>

<style lang="scss">
    .title {
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 55px;
        letter-spacing: 1.65px;
        color: #35B8BE;
        margin: 0;
    }
</style>