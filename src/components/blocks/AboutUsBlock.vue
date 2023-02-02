<template>
    <div class="about-us">
        <app-container>
            <div class="about-us__wrapper">
                <div class="about-us__info">
                    <AppTitle
                        class="about-us__title"
                    >
                        The home of<br/> fresh products
                    </AppTitle>
                    <div class="about-us__description">
                        Lorem Ipsum is simply dummy text of the printing and<br v-if="!isMobile"/> typesetting industry.
                        Lorem Ipsum has been the industry's<br v-if="!isMobile"> standard dummy text ever since the 1500.
                    </div>
                    <AppButton
                        text="Learn about us"
                        color="coral"
                        size="medium"
                        class="about-us__button"
                    />
                </div>
                <div class="about-us__image"></div>
            </div>
        </app-container>
    </div>
</template>

<script>
import AppContainer from "@/components/components/AppContainer.vue";
import AppButton from "@/components/components/AppButton.vue";
import AppTitle from "@/components/components/AppTitle.vue";

export default {
    name: 'AboutUsBlock',

    components: {
        AppContainer,
        AppButton,
        AppTitle
    },

    computed: {
        isMobile() {
            return window.innerWidth <= 768;
        }
    },
}
</script>

<style lang="scss">
    .about-us {
        background: url("./../../assets/images/bg-shape-content.png");
        background-repeat: no-repeat;
        background-size: cover;

        &__wrapper {
            display: flex;
            justify-content: space-between;

            @media screen and (max-width: 768px) {
                flex-wrap: wrap;
                justify-content: center;
            }
        }

        &__info {
            position: relative;
            width: 560px;
            margin-top: 290px;
            z-index: 1;

            &::before {
                content: '';
                position: absolute;
                top: -20%;
                left: 6%;
                width: 578px;
                height: 500px;
                background: url("./../../assets/images/bg-text-about-us.png");
                background-repeat: no-repeat;
                background-size: cover;
                z-index: -1;
            }

            @media screen and (max-width: 768px) {
                width: 100%;
                margin-top: 0;
                
                &::before {
                    width: 90%;
                }
            }

        }

        &__title {
            margin-bottom: 29px;

            @media screen and (max-width: 768px) {
                text-align: center;
            }
        }

        &__description {
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 0.36px;
            color: #546285;

            @media screen and (max-width: 768px) {
                text-align: center;
            }
        }

        &__button {
            margin-top: 47px;

            @media screen and (max-width: 768px) {
                width: 86%;
            }

            @media screen and (max-width: 576px) {
                width: 80%;
                margin: 20px 0;
            }
        }

        &__image {
            width: 524px;
            height: 614px;
            background: url("./../../assets/images/about-us-image.png");
            background-repeat: no-repeat;
            background-size: cover;
            margin: 140px 0;

            @media screen and (max-width: 768px) {
                width: 100%;
                background-position-x: center;
                margin: 50px 0;
            }
        }
    }
</style>