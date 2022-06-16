<template>
    <div class="MainPage">
        <TheHeader />
        <!-- <HomePage /> -->
        <router-view />
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from './../components/TheHeader.vue';
// import HomePage from './HomePage.vue';
import TheFooter from './../components/TheFooter.vue';

export default {
    name: 'MainPage',

    components: {
        TheHeader,
        // HomePage,
        TheFooter
    }
}
</script>