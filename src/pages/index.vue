<template>
    <div class="MainPage">
        <TheHeader />
        <router-view />
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
    name: 'MainPage',

    components: {
        TheHeader,
        TheFooter
    }
}
</script>