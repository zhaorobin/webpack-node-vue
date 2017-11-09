<template>
    <div>
        <p>this is info page</p>
        <p>{{ now }}</p>
        <button v-on:click="back">home</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {

            }
        },
        computed: {
            now: function() {
                return new Date()
            }
        },
        methods: {
            back: function() {
                this.$router.push({ path: '/index' })
            }
        }
    }
</script>
