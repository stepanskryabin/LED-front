import MainPage from "@/page/MainPage";
import {createRouter, createWebHistory} from 'vue-router';
import PostPage from "@/page/PostPage";
import AboutPage from "@/page/AboutPage";
import PostIdPage from "@/page/PostIdPage";


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/post',
        component: PostPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/post/:id',
        component: PostIdPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;