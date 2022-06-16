<template>
    <div class="banners">
        <BannerCard
            bg-image="banner-image-burger.png"
            class="banners__card _margin"
        />
        <BannerCard
            bg-image="banner-image-coral.png"
            title="Support"
            title-scd="good food and local business."
            btn-text="Order Now"
            class="banners__card"
        />
    </div>
</template>

<script>
import BannerCard from './BannerCard.vue';

export default {
    name: 'BannersBlock',

    components: {
        BannerCard
    }
}
</script>

<style lang="scss">
    .banners {
        display: flex;
        gap: 22px 0;
        margin: 44px;

        @media screen and (max-width: 992px) {
            flex-direction: column-reverse;
            align-items: center;
        }

        &__card {
            max-width: 50%;
            max-height: 640px;
            height: 100vh;

            &._margin {
                margin-right: 22px;
            }

            @media screen and (max-width: 1200px) {
                max-height: 440px;
            }

            @media screen and (max-width: 992px) {
                max-width: 90%;
                max-height: 300px;

                &._margin {
                    margin-right: 0;
                }
            }

            @media screen and (max-width: 576px) {
                max-width: 90%; 
            }
        }
    }
</style>