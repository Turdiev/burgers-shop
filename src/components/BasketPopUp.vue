<template>
    <div class="basket">
        <div class="basket__wrapper">
            <div class="basket__items">
                <div
                    v-for="item in getBasket"
                    :key="item.id"
                    class="basket__item"
                >
                    <div class="basket__row">
                        <div class="basket__item-title">{{ item.name }}</div>
                        <div
                            class="basket__item-delete"
                            @click="removeProduct(item.id)"
                        >
                            <span></span>
                        </div>
                    </div>
                    <div class="basket__row">
                        <div class="basket__count">
                            <div
                                class="basket__quantity _decrement"
                                @click="decrementProduct(item.count, item.id)"
                            ></div>
                            <div class="basket__numbers">{{ item.count }}</div>
                            <div
                                class="basket__quantity _increment"
                                :aria-disabled="disabledBtn"
                                @click="incrementProduct(item.count, item.id)"
                            ></div>
                        </div>
                        <div class="basket__item-price">{{ item.total }} $</div>
                    </div>
                </div>
            </div>
            <div class="basket__finish-price">
                <div class="basket__finish-title">Total amount</div>
                <div class="basket__price">{{ totalAmount }} $</div>
            </div>
            <button class="basket__buy-order">Checkout</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BasketPopUp',

    components: {},

    data() {
        return {
            disabledBtn: false
        };
    },

    computed: {
        getBasket() {
            return this.$store.state.basket;
        },

        totalAmount() {
            return this.getBasket.reduce((accumulator, currentValue) => {
                return (+(accumulator + currentValue.total).toFixed(2));
            }, 0);
        }
    },

    methods: {
        removeProduct(id) {
            this.$store.dispatch('RemoveProductToCard', id);
        },

        decrementProduct(count, idProduct) {
            let newCount = +count - 1;
            
            if(newCount !== 0) {
                this.$store.dispatch('ChangeAmountProduct', {
                    count: newCount,
                    id: idProduct
                });
            }
            else {
                this.removeProduct(idProduct);
            }
        },

        incrementProduct(count, idProduct) {
            let newCount = +count + 1;

            if(newCount <= 10) {
                this.disabledBtn = false
                this.$store.dispatch('ChangeAmountProduct', {
                    count: newCount,
                    id: idProduct
                });
            }
            else {
                this.disabledBtn = true
            }
        }
    }
}
</script>

<style lang="scss">
    .basket {
        position: absolute;
        top: 100px;
        right: 0;
        width: 100%;
        max-width: 374px;
        box-shadow: 8px 10px 32px rgb(0 7 3 / 25%);
        border-radius: 10px;
        background-color: #fff;
        padding: 6px 20px 20px;

        @media screen and (max-width: 576px) {
            width: 89%;
        }

        &__wrapper {

        }

        &__items {
            max-height: 389px;
            overflow: hidden;
            overflow-y: auto;
            margin-right: -10px;
            padding-right: 10px;

            @media screen and (max-width: 576px) {
                max-height: 240px;
            }

            &::-webkit-scrollbar {
                width: 6px;
                height: 6px;
                background-color: #e0e0e0;              /* ширина всей полосы прокрутки */
            }

            // &::-webkit-scrollbar-track {
            //     background: #918f8f;        /* цвет зоны отслеживания */
            // }

            &::-webkit-scrollbar-thumb {
                // border: 3px solid #fff;  /* отступ вокруг бегунка */
                background-color: #bdbdbd; /* цвет бегунка */
                border-radius: 3px; /* округлось бегунка */
            }
        }

        &__item {
            padding: 14px 0 10px;
            border-bottom: 1px solid rgba(226,227,230,.72);

            &-title {
                max-width: 206px;
                font-size: 16px;
                font-weight: 700;
            }

            &-delete {
                position: relative;
                top: 0;
                right: 0;
                display: flex;
                align-items: center;
                width: 18px;
                height: 18px;
                cursor: pointer;

                & span,
                & span::before {
                    position: absolute;
                    display: block;
                    width: 100%;
                    height: 2px;
                    background-color: #616161;
                    transition: all .5s linear;
                }

                & span {
                    transform: rotate(45deg);
                }

                & span::before {
                    content: '';
                    top: 0;
                    transform: rotate(90deg);
                }

                &:hover {
                    & span {
                        transform: rotate(136deg);
                    }
                }
            }
        }
        
        &__row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__row:not(:last-child) {
            margin-bottom: 5px;
        }

        &__count {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 70px;
        }

        &__quantity {
            position: relative;
            width: 24px;
            height: 24px;
            background: #e2e3e6;
            border-radius: 50%;
            transition: .3s all;
            cursor: pointer;

            &._decrement::before {
                content: '-';
                position: absolute;
                top: 0;
                left: 38%;
                font-size: 18px;
                color: gray;
            }

            &._increment::before {
                content: '+';
                position: absolute;
                top: 10%;
                left: 30%;
                font-size: 18px;
                color: gray;
            }
        }

        &__numbers {
            font-weight: 400;
            font-size: 18px;
            line-height: 18px;
        }

        &__finish-price {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 15px 0;
        }

        &__finish-title {
            font-size: 18px;
        }

        &__price {
            color: #35B8BE;
            font-size: 18px;
        }

        &__buy-order {
            height: 39px;
            font-size: 16px;
            max-width: 100%;
            width: 100%;
            border-radius: 6px;
            border: 1px solid #35B8BE;
            background: #fff;
            text-align: center;
            line-height: 37px;
            color: #35B8BE;
            font-family: 'MuseoSansCyrl_700';
            transition: .3s all;
            cursor: pointer;

            &:hover {
                background: #35B8BE;
                color: #fff;
            }
        }
    }
</style>