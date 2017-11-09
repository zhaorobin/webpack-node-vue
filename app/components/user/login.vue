<template>
    <div>
        <p>
            <span>用户名：</span>
            <input v-model="username" placeholder="please input your username">
        </p>
        <p>
            <span>密码：</span>
            <input v-model="password" placeholder="please input your password">
        </p>

        <p>
            <button v-on:click="login">login</button>
        </p>

    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login: function() {
                console.log(this.username);
                console.log(this.password);
                let params = {
                    username: this.username,
                    password: this.password
                }
                this.post('/user/login', params);

            }
        }
    }
</script>
