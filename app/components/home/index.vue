<template>
    <div>
        <p>{{ msg }}</p>
        <button v-on:click="show">show</button>
        <button v-on:click="showDetail">ajax</button>
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
            },
            showDetail: function() {
                let data = this.get('/api/user.json');
                console.log(data);
            }
        }
    }
</script>
