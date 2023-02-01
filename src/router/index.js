import {createRouter, createWebHistory } from "vue-router"
import App from "@/App.vue";
import Main from "@/Main.vue";
import Card from "@/Card.vue";
import addCard from "@/addCard.vue";

const routes =[
    {
        path: '/',
        name:'main',
        component: Main
    },
    {
        path: '/card/:title',
        name: 'cardScreen',
        component: Card,
        props: {default:true}
    },
    {
        path: '/addCard',
        name: 'addCard',
        component: addCard,
        props: {default:true}
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;