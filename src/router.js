import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '',
                name: 'device',
                component: () => import('./components/Device.vue')
            },
            {
                path: '/logdevice',
                name: 'logdevice',
                component: () => import('./components/Logdevice.vue')
            },
            {
                path: '/action',
                name: 'action',
                component: () => import('./components/Action.vue')
            },
            {
                path: '/setting',
                name: 'setting',
                component: () => import('./components/Setting.vue')
            },
            {
                path: '/volume',
                name: 'volume',
                component: () => import('./components/Volume.vue')
            },
            {
                path: '/regions',
                name: 'regions',
                component: () => import('./components/Regions.vue')
            },
            {
                path: '/users',
                name: 'users',
                component: () => import('./components/Users.vue')
            },
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
