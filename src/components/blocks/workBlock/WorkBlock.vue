<template>
    <div class="work-block">
        <app-container>
            <div class="work-block__title">
                <AppTitle>
                    How it works.
                </AppTitle>
            </div>
            <div class="work-block__items">
                <WorkItem
                    v-for="(item, index) in items"
                    :key="index"
                    :image="item.image"
                    :title="item.title"
                    :text="item.text"
                    class="work-block__item"
                />
            </div>
        </app-container>
    </div>
</template>

<script>
import AppContainer from "@/components/components/AppContainer.vue";
import AppTitle from "@/components/components/AppTitle.vue";
import WorkItem from './WorkItem.vue';

export default {
    name: 'WorkBlock',

    components: {
        AppContainer,
        AppTitle,
        WorkItem
    },

    data() {
        return {
            items: [
                {
                    image: 'one',
                    title: 'Adapt your menu items',
                    text: 'Easily adapt your menu using the webflow CMS and allow customers to browse your items.'
                },
                {
                    image: 'two',
                    title: 'Accept online orders & takeout',
                    text: 'Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.'
                },
                {
                    image: 'three',
                    title: 'Manage delivery or takeout',
                    text: 'Manage your own logistics and take orders simply through the ecommerce system.'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .work-block {
        margin-top: 134px;
        margin-bottom: 128px;

        @media screen and (max-width: 576px) {
            margin-top: 20px;
            margin-bottom: 80px;
        }

        &__title {
            display: flex;
            justify-content: center;
            margin-bottom: 66px;

            @media screen and (max-width: 576px) {
                margin-bottom: 0;
                text-align: center;
            }
        }

        &__items {
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media screen and (max-width: 992px) {
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
            }

            @media screen and (max-width: 768px) {
                gap: 46px;
            }
        }

        &__item:not(:last-child) {
            position: relative;

            &::after {
                content: '';
                position: absolute;
                top: 36%;
                right: -96px;
                width: 100px;
                height: 1px;
                background: #D1CDCD;
            }

            @media screen and (max-width: 1200px) {
                &::after {
                    display: none;
                }
            }

            @media screen and (max-width: 768px) {
                
                &::after {
                    display: block;
                    top: 104%;
                    right: 107px;
                }
            }

            @media screen and (max-width: 576px) {
                &::after {
                    top: 108%;
                }
            }
        }
    }
</style>