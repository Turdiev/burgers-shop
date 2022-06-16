<template>
    <div
        class="button"
        :class="classes"
    >
        {{ text }}
    </div>
</template>

<script>
export default {
    name: 'AppButton',

    props: {
        text: {
            type: String,
            default: ''
        },

        color: {
            type: String,
            default: ''
        },

        size: {
            type: String,
            default: ''
        }
    },

    computed: {
        classes() {
            return `${this.color} ${this.size}`;
        }
    }

}
</script>

<style lang="scss">
    .button {
        border-radius: 6px;
        padding: 20px 35px;
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        text-align: center;
        transition: all .3s linear;
        cursor: pointer;
    }

    .coral {
        background: #35B8BE;
        color: #fff;

        &:hover {
            background: #1B9097;
        }
    }

    .white {
        background: #fff;
        color: #35B8BE;

        &:hover {
            background: #1B9097;
            color: #fff;
        }
    }

    .large {
        width: 225px;
    }

    .medium {
        width: 194px;
    }

    .small {
        width: 170px;
    }

</style>