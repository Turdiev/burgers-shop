<template>
    <div class="footer">
        <app-container>
            <div class="footer__wrapper">
                <div class="footer__left">
                    <div class="footer__logo"></div>
                    <div class="footer__text">
                        <span>Takeaway & Delivery template for small - medium businesses.</span>
                    </div>
                </div>
                <div class="footer__right">
                    <div
                        v-for="item in category"
                        :key="item.name"
                        class="category"
                    >
                        <div class="category__title">{{ item.name }}</div>
                        <div
                            v-for="link in item.links"
                            :key="link.name"
                            class="category__link"
                        >
                            <a href="">{{ link.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__separator"></div>
            <div class="footer__legal">
                <div class="footer__copyright">
                    Built by <a href="">Flowbase</a>· Powered by <a href="">Webflow</a>
                </div>
                <div class="footer__socials">
                    <div class="footer__social _instagram"></div>
                    <div class="footer__social _twitter"></div>
                    <div class="footer__social _youtube"></div>
                </div>
            </div>
        </app-container>
    </div>
</template>

<script>
import AppContainer from './components/AppContainer.vue';

export default {
    name: 'TheFooter',

    components: {
        AppContainer
    },

    data() {
        return {
            category: [
                {
                    name: 'company',
                    links: [
                        {
                            name: 'Home',
                            url: ''
                        },
                        {
                            name: 'Order',
                            url: ''
                        },
                        {
                            name: 'FAQ',
                            url: ''
                        },
                        {
                            name: 'Contact',
                            url: ''
                        }
                    ]
                },
                {
                    name: 'TEMPLATE',
                    links: [
                        {
                            name: 'Style Guide',
                            url: ''
                        },
                        {
                            name: 'Changelog',
                            url: ''
                        },
                        {
                            name: 'Licence',
                            url: ''
                        },
                        {
                            name: 'Webflow University',
                            url: ''
                        }
                    ]
                },
                {
                    name: 'FLOWBASE',
                    links: [
                        {
                            name: 'More Cloneables',
                            url: ''
                        },
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .footer {
        background: url("./../assets/images/bg-footer.png");
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 100px;

        @media screen and (max-width: 576px) {
           padding-top: 60px;
        }

        &__wrapper {
            display: flex;
            justify-content: space-between;
            margin-bottom: 118px;

            @media screen and (max-width: 768px) {
                flex-direction: column;
                gap: 20px 0;
                margin-bottom: 80px;
            }

            @media screen and (max-width: 576px) {
                margin-bottom: 50px;   
            }
        }

        &__left {
            display: flex;
            flex-direction: column;
            width: 17%;

            @media screen and (max-width: 992px) {
                width: 30%; 
            }

            @media screen and (max-width: 576px) {
                width: 60%;
            }
        }

        &__logo {
            width: 35px;
            height: 45px;
            background: url("./../assets/images/logo.png");
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 28px;
            cursor: pointer;
        }

        &__text {
            font-size: 15px;
            line-height: 27px;
            letter-spacing: 0.36px;
            color: #546285;
        }

        &__right {
            display: flex;
            justify-content: space-between;
            width: 620px;

            @media screen and (max-width: 992px) {
                width: 60%; 
            }

            @media screen and (max-width: 768px) {
                width: 100%;
            }

            @media screen and (max-width: 576px) {
                flex-wrap: wrap;
            }
        }

        &__separator {
            width: 100%;
            height: 1px;
            background: rgba(126, 130, 143, 0.09);
        }

        &__legal {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 60px;
            padding-bottom: 70px;
        }

        &__copyright {
            font-size: 15px;
            line-height: 20px;
            color: #353448;

            & a {
                color: #35B8BE;
                text-decoration: none;
            }
        }

        &__socials {
            display: flex;
        }

        &__social {
            position: relative;
            width: 40px;
            height: 40px;
            border: 1px solid rgba(126, 130, 143, 0.3);
            border-radius: 100px;
            cursor: pointer;


            &._instagram::before {
                content: '';
                position: absolute;
                top: 26%;
                left: 28%;
                width: 18px;
                height: 18px;
                background: url("./../assets/images/instagram.svg");
                background-repeat: no-repeat;
                background-size: cover;
            }

            &._twitter::before {
                content: '';
                position: absolute;
                top: 26%;
                left: 28%;
                width: 18px;
                height: 15px;
                background: url("./../assets/images/twitter.svg");
                background-repeat: no-repeat;
                background-size: cover;
            }

            &._youtube::before {
                content: '';
                position: absolute;
                top: 30%;
                left: 28%;
                width: 18px;
                height: 13px;
                background: url("./../assets/images/youtube.svg");
                background-repeat: no-repeat;
                background-size: cover;
            }

            &._instagram::before:hover,
            &._twitter::before:hover,
            &._youtube::before:hover {
                transform: scale(1.4);
            }
        }

        &__social:not(:last-child) {
            margin-right: 24px;
        }


    }

    .category {
        display: flex;
        flex-direction: column;

        &__title {
            font-weight: 600;
            font-size: 13px;
            line-height: 20px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #08090A;
            margin-bottom: 28px;
        }

        &__link {
            margin-bottom: 28px;
            
            & a {
                font-size: 16px;
                line-height: 20px;
                text-decoration: none;
                color: #546285;

                & a:hover {
                    color: #08090A;
                }
            }

            
        }
    }
</style>