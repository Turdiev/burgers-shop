<template>
    <div class="work-item">
        <div
            class="work-item__image"
            :class="image"
        ></div>
        <div class="work-item__title">
            <span>{{ title }}</span>
        </div>
        <div class="work-item__description">
            <span>{{ text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkItem',

    components: {},

    props: {
        image: {
            type: String,
            default: '',
        },

        title: {
            type: String,
            default: '',
        },

        text: {
            type: String,
            default: '',
        }
    }
}
</script>

<style lang="scss">
    .work-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__image {
            width: 330px;
            height: 260px;
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 50px;

            &.one {
                background: url("./../../../assets/images/work-item1.png");
                background-position-x: center;
            }

            &.two {
                background: url("./../../../assets/images/work-item2.png");
                background-position-x: center;
            }

            &.three {
                background: url("./../../../assets/images/work-item3.png");
                background-position-x: center;
            }

            @media screen and (max-width: 576px) {
                width: 100%;
            }
        }

        &__title {
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 22px;
            text-align: center;
            letter-spacing: 0.66px;
            color: #08090A;
            margin-bottom: 15px;
        }

        &__description {
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            text-align: center;
            letter-spacing: 0.36px;
            color: #546285;
            width: 286px;
        }
    }

</style>