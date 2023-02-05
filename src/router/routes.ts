import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
        meta: {
            title: 'Pagina inicial'
        },
    },
    {
        path: "/projetos/",
        name: "Projects",
        component: () => import("../views/Projects.vue"),
        meta: {
            title: 'Todos os projetos'
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from) => {
    if (to.name === from.name) return
    document.title = String(to.meta.title)
})


export default router;
