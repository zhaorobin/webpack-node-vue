<template>
    <div>
        <p>
            <span>用户名：</span>
            <input v-model="username" placeholder="please input your username">
        </p>
        <p>
            <span>邮箱：</span>
            <input v-model="email" placeholder="please input your email">
        </p>
        <p>
            <span>密码：</span>
            <input v-model="password" placeholder="please input your password">
        </p>
        <p>
            <button v-on:click="register">register</button>
        </p>

    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                username: '',
                email: '',
                password: ''
            }
        },
        methods: {
            register: function() {
                let params = {
                    username: this.username,
                    email: this.email,
                    password: this.password
                }
                this.post('/user/register', params);

            }
        }
    }
</script>
