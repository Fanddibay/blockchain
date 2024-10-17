import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/pages/product_1',
                    name: 'empty',
                    component: () => import('@/views/pages/product_1.vue')
                },
                {
                    path: '/newRegister',
                    name: 'formOrder',
                    component: () => import('@/views/pages/newRegister.vue')
                },
                {
                    path: '/userManagement',
                    name: 'userManagement',
                    component: () => import('@/views/pages/userManagement.vue')
                },
                {
                    path: '/taskrequest',
                    name: 'taskrequest',
                    component: () => import('@/views/pages/taskRequest.vue')
                },
                {
                    path: '/mytask',
                    name: 'mytask',
                    component: () => import('@/views/pages/myTask.vue')
                },
                {
                    path: '/completedtask',
                    name: 'completedtask',
                    component: () => import('@/views/pages/completedTask.vue')
                },
                {
                    path: '/whistlist',
                    name: 'whistlist',
                    component: () => import('@/views/pages/whistlist.vue')
                },
                {
                    path: '/myproduct',
                    name: 'myproduct',
                    component: () => import('@/views/pages/myProduct.vue')
                },
                {
                    path: '/myprofile',
                    name: 'myprofile',
                    component: () => import('@/views/pages/myProfile.vue')
                },
                {
                    path: '/editProfile',
                    name: 'editProfile',
                    component: () => import('@/views/pages/editProfile.vue')
                },
                {
                    path: '/trackingOrders',
                    name: 'trackingOrders',
                    component: () => import('@/views/pages/trackingOrders.vue')
                },
                {
                    path: '/farmerManagement',
                    name: 'farmerManagement',
                    component: () => import('@/views/pages/farmerManagement.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        }
    ]
});

export default router;
