<template>
    <div class="menu">
        <app-container>
            <div class="menu__title">
                <AppTitle>
                    Browse our menu
                </AppTitle>
            </div>
            <div class="menu__sub-title">
                <p>Use our menu to place an order online, or <a href="">phone</a> our store to place a pickup order. Fast and fresh food.</p>
            </div>
            <div class="menu__tab">
                <MenuTab
                    @click="SelectedTab"
                />
            </div>
            <div class="menu__cards">
                <MenuCard
                    v-for="card in cards"
                    :key="card.id"
                    :card="card"
                    class="menu__card"
                    @click="AddProducts"
                />
            </div>
            <div class="menu__button">
                <AppButton
                    text="See Full Menu"
                    color="coral"
                    size="medium"
                />
            </div>
        </app-container>
    </div>
</template>

<script>
import AppContainer from "@/components/components/AppContainer.vue";
import AppButton from "@/components/components/AppButton.vue";
import AppTitle from "@/components/components/AppTitle.vue";
import MenuTab from './MenuTab.vue';
import MenuCard from './MenuCard.vue';

export default {
    name: 'MenuBlock',

    components: {
        AppContainer,
        AppTitle,
        AppButton,
        MenuTab,
        MenuCard
    },

    data() {
        return {
            cards: [],
        };
    },

    computed: {
        burgers() {
            return this.$store.state.burgers;
        },
        hotDog() {
            return this.$store.state.hotDog;
        },
        drinks() {
            return this.$store.state.drinks;
        }
    },

    methods: {
        AddProducts(product) {
            console.log('Pro', product);
            this.$store.dispatch('AddItemToCart', product)
        },

        SelectedTab(name) {
            switch(name) {
                case 'Burgers': {
                    this.cards = [...this.burgers];
                    break;
                }
                case 'Hot Dog': {
                    this.cards = [...this.hotDog];
                    break;
                }
                case 'Drinks': {
                    this.cards = [...this.drinks];
                    break;
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu {
        background: url("./../../../assets/images/bg-shape-menu.png");
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 154px;
        padding-bottom: 140px;

        @media screen and (max-width: 768px) {
            padding: 80px 0;
        }

        &__title {
            display: flex;
            justify-content: center;

            @media screen and (max-width: 576px) {
                text-align: center; 
            }
        }

        &__sub-title {
            display: flex;
            justify-content: center;

            & p {
                font-size: 16px;
                line-height: 27px;
                text-align: center;
                letter-spacing: 0.36px;
                color: #546285;
                width: 466px;
            }

            & a {
                text-decoration: none;
                color: #35B8BE;
            }
        }

        &__tab {
            display: flex;
            justify-content: center;
        }

        &__cards {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px 0;
            margin-top: 40px;

            @media screen and (max-width: 768px) {
                justify-content: center;
            }
        }

        &__button {
            display: flex;
            justify-content: center;
            margin-top: 65px;
        }
    }

</style>