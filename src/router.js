import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main'
import Login from './components/Login'
import Register from './components/Register'
import axios from 'axios';

Vue.use(Router);

let store = {
    state: {
        fetched: false,
        isAuthorised: false
    },
    setAuthorised(bool) {
        this.state.isAuthorised = bool;
    }
};


axios({
    withCredentials: true,
    method: 'get',
    url: 'http://localhost:8080/WebLab4_t-1.0-SNAPSHOT/api/users/isAuthorised',
}).then((response) => {
    if (response.data.success === true) {
        store.setAuthorised(true);
    }
    store.state.fetched = true;
}).catch(err => {
    console.log(err);
    store.state.fetched = true;
});


const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/main',
            name: 'Main',
            component: Main,
            props: {store}
        },
        {
            path: '/',
            name: 'Login',
            component: Login,
            props: {store}
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            props: {store}
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.fullPath === '/main' && store.state.fetched) {
        if (!store.state.isAuthorised) {
            next('/');
        }
    }
    next();
});

export default router;
