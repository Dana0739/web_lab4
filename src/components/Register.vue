<template>
    <div id="register_form">
        <p>{{msg}}</p>
        <div v-if="!store.state.isAuthorised">
            <router-link to="/">Login</router-link>
            |
            <router-link to="/register">Register</router-link>
        </div>
        <form>
            Input for username:<br/>
            <input v-model="username" id="username_register" type="text" placeholder="Username"/><br/>
            <p v-if="errorNameRegister">Name is empty!</p>
            Input for password:<br/>
            <input v-model="password" id="password_register" type="password" placeholder="Password"/><br/>
            <p v-if="errorPasswordRegister">Password is empty!</p>
        </form>
        <button v-on:click="submitRegister">Register</button>
    </div>
</template>

<script>
    import axios from 'axios';
    import router from '../router';

    export default {
        name: "Register",
        props: ['store'],
        data: () => ({
            msg: 'Lab. 4, Zhetesova Dana, P3217',
            username: "",
            password: "",
            errorNameRegister: false,
            errorPasswordRegister: false
        }),
        methods: {
            registerResponse(response) {
                if (response.data.success === true) {
                    this.store.setAuthorised(true);
                    router.push({
                        name: 'Main'
                    })
                }
            },
            submitRegister: function () {
                if (this.username === "" || this.username === null) {
                    this.errorNameRegister = true;
                } else if (this.password === "" || this.username === null) {
                    this.errorPasswordRegister = true;
                } else {
                    this.errorNameRegister = false;
                    this.errorPasswordRegister = false;
                    axios({
                        withCredentials: true,
                        method: 'get',
                        url: 'http://localhost:8080/WebLab4_t-1.0-SNAPSHOT/api/users/register?username=' + this.username
                            + "&password=" + this.password,
                    }).then((response) => {
                        this.registerResponse(response);
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