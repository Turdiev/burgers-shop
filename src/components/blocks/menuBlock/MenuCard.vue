<template>
    <div class="card">
        <div class="card__wrapper">
            <div
                class="card__image"
            >
                <img
                    :src="require(`@/assets/images/${card.image}`)"
                    alt=""
                >
            </div>
            <div class="card__info">
                <div class="card__info-wrap">
                    <div class="card__name">
                        {{ card.name }}
                    </div>
                    <div class="card__price">
                        ${{ card.price }} USD
                    </div>
                </div>
                <div class="card__description">
                    <span>{{ card.description }}</span>
                </div>
                <div class="card__action">
                    <div class="card__count">
                        <input
                            v-model="countBurgers"
                            type="number"
                            min="1"
                            max="10"
                        />
                    </div>
                    <button
                        class="card__button"
                        @click="AddToCard"
                    >
                        Add to card
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuCard',

    components: {},

    props: {
        card: {
            type: Object
        }
    },

    data() {
        return {
            countBurgers: 1,
        };
    },

    methods: {
        AddToCard() {
            this.$emit('click', {
                ...this.card,
                count: +this.countBurgers,
                total: +(this.card.price * this.countBurgers).toFixed(2),
            });
        }
    }
}
</script>

<style lang="scss">
    .card {
        width: 526px;
        min-height: 200px;
        background: #FFFFFF;
        border: 1px solid rgba(53, 184, 190, 0.15);
        border-radius: 6px;
        padding: 0 26px;
        transition: all .3s linear;

        &:hover {
            border: 1px solid #35B8BE;
        }

        @media screen and (max-width: 1200px) {
            width: 100%; 
        }

        @media screen and (max-width: 768px) {
            width: 50%;
            padding: 25px;
        }

        @media screen and (max-width: 576px) {
            width: 100%;
        }

        &__wrapper {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;

            @media screen and (max-width: 768px) {
                flex-direction: column;
            }
        }

        &__image {
            width: 168px;
            height: 120px;
            background: rgb(179, 172, 172);
            margin-right: 30px;

            @media screen and (max-width: 768px) {
                width: 250px;
                height: 250px;
                border-radius: 8px;
                margin-right: 0;
                margin-bottom: 20px;
            }

            & img {
                width: 100%;
                height: 100%;

                @media screen and (max-width: 768px) {
                    border-radius: 8px;
                }
            }
        }

        &__info {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        &__info-wrap {
            display: flex;
            justify-content: space-between;
            margin-bottom: 18px;
        }

        &__name {
            font-size: 18px;
            line-height: 20px;
            letter-spacing: 0.6px;
            color: #08090A;
        }

        &__price {
            font-size: 15px;
            line-height: 20px;
            color: #35B8BE;
        }

        &__description {
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.32px;
            color: #546285;
            width: 80%;
        }

        &__action {
            display: flex;
            margin-top: 8px;
        }

        &__count {
            margin-right: 8px;

            & input {
                width: 60px;
                height: 45px;
                background: #FAFAFA;
                border: 1px solid #DDDDDD;
                border-radius: 6px;
                font-size: 16px;
                line-height: 27px;
                text-align: center;
                letter-spacing: 0.36px;
                color: #000000;
            }
        }

        &__button {
            background: #35B8BE;
            border-radius: 6px;
            border: none;
            padding: 9px 12px;
            font-size: 16px;
            line-height: 27px;
            text-align: center;
            letter-spacing: 0.36px;
            color: #fff;
            cursor: pointer;
        }
    }
</style>