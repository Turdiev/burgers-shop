<template>
    <div
        class="banner"
        :style="bgStyle"
    >
        <div
            v-if="title !== ''"
            class="banner__title"
        >
            <span>{{ title }}</span> {{ titleScd }}
        </div>
        <AppButton
            v-if="btnText !== ''"
            :text="btnText"
            color="white"
            size="small"
            class="banner__button"
        />
    </div>
</template>

<script>
import AppButton from "@/components/components/AppButton.vue";

export default {
    name: 'BannerCard',

    components: {
        AppButton,
    },

    props: {
        bgImage: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        titleScd: {
            type: String,
            default: ''
        },
        btnText: {
            type: String,
            default: ''
        },
    },

    computed: {
        bgStyle() {
            return {
                backgroundImage: `url(${require(`@/assets/images/${this.bgImage}`)}`,
                backgroundPosition: '50% 50%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }
        }
    }
}
</script>

<style lang="scss">
    .banner {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 60px;

        @media screen and (max-width: 576px) {
            padding: 20px;
        }

        &__title {
            font-size: 53px;
            line-height: 60px;
            letter-spacing: 1.65px;
            color: #FFFFFF;

            & span {
                color: #1B9097;
            }

            @media screen and (max-width: 576px) {
                font-size: 42px;
                line-height: 42px;
            }
        }

        &__button {
            margin-top: 52px;

            @media screen and (max-width: 576px) {
                width: 80%;
            }
        }
    }
</style>