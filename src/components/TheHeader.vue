<template>
    <header
        class="TheHeader Header"
    >
        <PreHeader :class="{'_show': isScrollBottom}"/>
        <app-container>
            <div class="header">
                <router-link to="/"><div class="header__logo"></div></router-link>
                <div class="header__wrapper">
                    <div
                        v-if="!isMobile"
                        class="header__menu"
                    >
                        <nav class="menu">
                            <router-link to="/"><li class="menu__item">Home</li></router-link>
                            <router-link to="/order"><li class="menu__item">Order</li></router-link>
                            <router-link to="/about"><li class="menu__item">Company</li></router-link>
                            <router-link to="/faq"><li class="menu__item">FAQ</li></router-link>
                            <router-link to="/contact"><li class="menu__item">Contact</li></router-link>
                        </nav>
                    </div>
                    <div
                        class="header__basket"
                        @click="onShowBasket"
                    >
                        <div class="header__basket-count"><span>{{ basketCount || 0 }}</span></div>
                    </div>
                    <transition name="slide-fade">
                        <BasketPopUp
                            v-if="isShowBasket"
                        />
                    </transition>
                    <div
                        v-if="isMobile"
                        class="burger-menu"
                    >
                        <div
                            class="burger-menu__btn"
                            :class="{_active: isActiveMenu}"
                            @click="BurgerMenuActive()"
                        >
                            <span></span>
                        </div>
                        <nav
                            class="burger-menu__wrapper"
                            :class="{_visibility: isActiveMenu}"
                        >
                            <router-link to="/"><li class="burger-menu__item">Home</li></router-link>
                            <router-link to="/order"><li class="burger-menu__item">Order</li></router-link>
                            <router-link to="/about"><li class="burger-menu__item">Company</li></router-link>
                            <router-link to="/faq"><li class="burger-menu__item">FAQ</li></router-link>
                            <router-link to="/contact"><li class="burger-menu__item">Contact</li></router-link>
                        </nav>
                    </div>
                </div>
            </div>
        </app-container>
    </header>
</template>

<script>
import PreHeader from './PreHeader.vue';
import BasketPopUp from './BasketPopUp.vue'
import AppContainer from './components/AppContainer.vue';

export default {
    name: 'TheHeader',

    components: {
        AppContainer,
        PreHeader,
        BasketPopUp
    },

    data() {
        return {
            isActiveMenu: false,
            isScrollBottom: true,
            lastScrollPosition: 0,
            isShowBasket: false
        };
    },

    computed: {
        isMobile() {
            return window.innerWidth <= 768;
        },

        basketCount() {
            return this.$store.getters.GetCountProducts;
        }
    },

    created() {
        window.addEventListener('scroll', this.onScroll);
    },

    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll);
    },

    methods: {
        BurgerMenuActive() {
            this.isActiveMenu = !this.isActiveMenu;
            document.body.style.overflow = this.isActiveMenu ? 'hidden' : 'auto';
        },

        onScroll() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollPosition < 0) {
                return
            }

            if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                return
            }

            this.isScrollBottom = currentScrollPosition < this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
        },

        onShowBasket() {
            this.isShowBasket = !this.isShowBasket;
        }
    }
}
</script>

<style lang="scss">
    .TheHeader {
        position: sticky;
        top: 0;
        left: 0;
        margin-bottom: -50px;
        background-color: #fff;
        z-index: 12;
    }

    .Header {
        transition: transform .3s linear,box-shadow .3s ease,border .3s ease;
    }

    .header {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;

        &__logo {
            width: 40px;
            height: 50px;
            background: url("./../assets/images/logo.png");
            background-repeat: no-repeat;
            background-size: cover;
            cursor: pointer;
        }

        &__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 477px;

            @media screen and (max-width: 768px) {
                & {
                    width: 120px;
                }   
            }
        }

        &__menu {
            width: 376px;
        }

        &__basket {
            position: relative;
            width: 55px;
            height: 55px;
            background: #35B8BE;
            border-radius: 4px;
            cursor: pointer;

            &::before {
                content: '';
                position: absolute;
                top: 30%;
                left: 25%;
                width: 25px;
                height: 17px;
                background: url("./../assets/images/basket-icon.png");
                background-repeat: no-repeat;
                background-size: cover;
                transition: all .4s linear;
            }

            &:hover {
                &::before {
                    transform: scale(1.2);
                }
            }

            &-count {
                position: absolute;
                top: -8px;
                right: -6px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 25px;
                height: 25px;
                background: #FFFFFF;
                box-shadow: 7px 7px 25px rgba(126, 130, 143, 0.27);
                border-radius: 50%;

                & span {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 18px;
                    text-align: center;
                    color: #35B8BE;
                }
            }
        }
    }

    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__item {
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 20px;
            color: #28224B;
            list-style: none;
            transition: all .3s linear;
            cursor: pointer;

            &:hover {
                color: #35B8BE;
            }
        }

        & a {
            text-decoration: none;
        }
    }

    .burger-menu {

        &__btn {
            position: relative;
            top: 0;
            right: 0;
            display: flex;
            align-items: center;
            width: 25px;
            height: 26px;
            cursor: pointer;
            z-index: 1;

            & span,
            & span::before,
            & span::after {
                position: absolute;
                display: block;
                width: 100%;
                height: 2px;
                background-color: #616161;
                transition: all .4s linear;
            }

            & span::before {
                content: '';
                top: -8px;
            }

            & span::after {
                content: '';
                top: 8px;
            }

            &._active {
                top: -40px;

                & span {
                    transform: rotate(45deg);
                }

                & span::before {
                    top: 0;
                    transform: rotate(0);
                }

                & span::after {
                    top: 0;
                    transform: rotate(90deg);
                }
            }

        }

        &__wrapper {
            display: block;
            position: fixed;
            top: -70%;
            left: 0;
            width: 100%;
            height: 50%;
            margin: 0;
            padding: 60px 0;
            list-style: none;
            text-align: center;
            background: #35B8BE;
            box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
            transition: all .5s linear;

            &._visibility {
                top: 0;
            }
        }

        &__item {
            display: block;
            padding: 29.5px 24px;
            color: #fff;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;
            text-decoration: none;
            transition: all .4s linear;

            &:hover {
                background-color: #32878b;
            }
        }

        & a {
            text-decoration: none;
        }
    }

    ._show {
        height: 48px;
        // transform: translate3d(0, -100%, 0);
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active до версии 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }  
</style>