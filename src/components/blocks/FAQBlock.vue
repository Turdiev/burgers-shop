<template>
    <div class="faq">
        <app-container>
            <div class="faq__wrapper">
                <div class="faq__image"></div>
                <div class="faq__info">
                    <div class="faq__title">
                        <AppTitle>
                            Order online with our simple checkout.
                        </AppTitle>
                    </div>
                    <div class="faq__description">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                        </span>
                    </div>
                    <AppButton
                        text="See our FAQ"
                        color="coral"
                        size="small"
                        class="faq__button"
                    />
                </div>
            </div>
        </app-container>
    </div>
</template>

<script>
import AppContainer from "@/components/components/AppContainer.vue";
import AppButton from "@/components/components/AppButton.vue";
import AppTitle from "@/components/components/AppTitle.vue";

export default {
    name: 'FAQBlock',

    components: {
        AppContainer,
        AppButton,
        AppTitle
    }
}
</script>

<style lang="scss">
    .faq {
        margin: 120px 0;

        @media screen and (max-width: 768px) {
            margin: 80px 0;
        }

        &__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media screen and (max-width: 992px) {
                flex-direction: column-reverse;
                justify-content: center;
            }
        }

        &__image {
            position: relative;
            width: 578px;
            height: 586px;
            background: url("./../../assets/images/faq-block-image.png");
            background-repeat: no-repeat;
            background-size: cover;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                width: 200px;
                height: 194px;
                background: url("./../../assets/images/spots-image.png");
                background-repeat: no-repeat;
                background-size: cover;
            }

            @media screen and (max-width: 768px) {
                width: 100%;                
            }

            @media screen and (max-width: 768px) {
                height: 495px;

                &::before {
                    width: 156px;
                    height: 146px;
                }
            }

            @media screen and (max-width: 576px) {
                height: 430px;
            }
        }

        &__info {
            width: 529px;

            @media screen and (max-width: 992px) {
                display: flex;
                align-items: center;
                flex-direction: column;
            }

            @media screen and (max-width: 768px) {
                width: 100%;
            }
        }

        &__title {
            margin-bottom: 30px;

            @media screen and (max-width: 992px) {
                text-align: center;
            }
        }

        &__description {
            margin-bottom: 47px;

            @media screen and (max-width: 992px) {
                text-align: center;
            }

            & span {
                font-size: 18px;
                line-height: 27px;
                letter-spacing: 0.36px;
                color: #546285
            }
        }

        &__button {

            @media screen and (max-width: 768px) {
                width: 80%;
                margin-bottom: 30px;
            }
        }
    }

</style>