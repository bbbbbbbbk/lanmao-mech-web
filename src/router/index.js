import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '*',
        redirect: '/main'
    },
    {
        name: 'login',
        component: () => import('../view/login'),
        meta: {
            title: '登陆'
        }
    },
    {
        name: 'index',
        component: () => import('../view/index'),
        meta: {
            title: '首页'
        },
        children: [
            {
                path: '/main',
                name: 'main',
                component: () => import('../view/main'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/mine',
                name: 'mine',
                component: () => import('../view/mine'),
                meta: {
                    title: '我的'
                }
            },
            {
                path: '/apply',
                name: 'apply',
                component: () => import('../view/apply'),
                meta: {
                    title: '接单'
                }
            },
        ]
    }
];

// add route path
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export {
    router
};