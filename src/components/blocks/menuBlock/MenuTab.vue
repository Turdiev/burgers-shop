<template>
    <div class="tab">
        <div
            v-for="(tab, index) in tabs"
            :key="index"
            class="tab__item"
            :class="{_active: activeTab === tab.name}"
            @click="CurrentTab(tab.name)"
        >
            {{ tab.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuTab',

    components: {},

    props: {},

    data() {
        return {
            tabs: [
                {
                    name: 'Burgers'
                },
                {
                    name: 'Hot Dog'
                },
                {
                    name: 'Drinks'
                }
            ],
            activeTab: 'Burgers',
        };
    },

    mounted() {
        this.$emit('click', 'Burgers');
    },

    methods: {
        CurrentTab(name) {
            this.$emit('click', name);
            this.activeTab = name;
        }
    }
}
</script>

<style lang="scss">
    .tab {
        display: flex;
        flex-wrap: wrap;
        gap: 30px 0;

        @media screen and (max-width: 768px) {
            justify-content: center;   
        }

        @media screen and (max-width: 576px) {
            gap: 10px 0;
        }

        &__item {
            border: 1px solid rgba(97, 114, 131, 0.2);
            border-radius: 6px;
            padding: 16px 46px;
            font-size: 15px;
            line-height: 20px;
            color: #222222;
            transition: all .4s linear;
            text-align: center;
            cursor: pointer;

            &:hover {
                background: #35B8BE;
                color: #fff;
            }

            &._active {
                background: #35B8BE;
                color: #fff;
            }

            @media screen and (max-width: 576px) {
                width: 100%;  
            }
        }

        &__item:not(:last-child) {
            margin-right: 30px;

            @media screen and (max-width: 576px) {
                margin-right: 0;
            }
        }
    }
</style>