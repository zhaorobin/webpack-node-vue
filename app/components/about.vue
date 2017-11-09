<template>
    <transition name="fade">
        <div>
            <p>{{ message }}</p>
            <button v-on:click="back">back</button>
            <router-view></router-view>
        </div>
    </transition>
</template>
<script>
    export default {
        data: function() {
            return {
                message: this.$route.params.id
            }
        },
        methods: {
            back: function() {
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>
