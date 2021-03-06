import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App.vue'
import Home from '../views/Home.vue'
import UserProfile from "../views/CategoryProfile.vue"

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/user/:key', component: UserProfile } // key == category name
    ],
    mode: 'history'
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})