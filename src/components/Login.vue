<template>
    <div>
        <p>{{msg}}</p>
        <div v-if="!store.state.isAuthorised">
            <router-link to="/">Login</router-link>
            |
            <router-link to="/register">Register</router-link>
        </div>
        <form>
            Input for username:<br/>
            <input v-model="username" id="username_login" type="text" placeholder="Username"/><br/>
            <p v-if="errorNameLogin">Name is empty!</p>
            Input for password:<br/>
            <input v-model="password" id="password_login" type="password" placeholder="Password"/><br/>
            <p v-if="errorPasswordLogin">Password is empty!</p>
        </form>
        <button v-on:click="submitLogin">Login</button>

    </div>
</template>

<script>
    import axios from 'axios';
    import router from '../router';

    export default {
        name: "Login",
        props: ['store'],
        data: () => ({
            msg: 'Lab. 4, Zhetesova Dana, P3217',
            username: "",
            password: "",
            errorNameLogin: false,
            errorPasswordLogin: false
        }),
        methods: {
            loginResponse(response) {
                if (response.data.success === true) {
                    this.store.setAuthorised(true);
                    router.push({
                        name: 'Main'
                    })
                }
            },
            submitLogin: function () {
                if (this.username === "" || this.username === null) {
                    this.errorNameLogin = true;
                } else if (this.password === "" || this.username === null) {
                    this.errorPasswordLogin = true;
                } else {
                    this.errorNameLogin = false;
                    this.errorPasswordLogin = false;
                    axios({
                        method: 'get',
                        url: 'http://localhost:8080/WebLab4_t-1.0-SNAPSHOT/api/users/login?username=' + this.username
                            + "&password=" + this.password,
                        withCredentials: true
                    }).then((response) => {
                        this.loginResponse(response);
                    }).catch(err => {
                        console.log(err);
                    })
                }
            }

        }
    }
</script>

<style scoped>

</style>