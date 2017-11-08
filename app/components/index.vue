<template>
    <div>
        <p>{{ msg }}</p>
        <button v-on:click="show">show</button>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                msg: 'Hello World'
            }
        },
        methods: {
            show: function() {
                this.msg = 'this is a index page'
            }
        }
    }
</script>
