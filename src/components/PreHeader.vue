<template>
    <div class="pre-header">
        <p class="pre-header__title">We're open and available for takeaway & delivery. <span>Order Now</span></p>
    </div>
</template>

<script>
export default {
    name: 'PreHeader',
}
</script>

<style lang="scss">
    .pre-header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        // height: 48px;
        height: 0;
        // transform: translate3d(0, 0, 0);
        transition: height 0.4s linear;
        overflow: hidden;
        background: #35B8BE;

        &__title {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #FFFFFF;
        }
    }
</style>