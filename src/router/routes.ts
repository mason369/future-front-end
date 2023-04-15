// 路由模块
import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
    // 重定向
    {
        path: '/',
        redirect: '/home',
    },
    {
        // 首页
        path: '/home',
        name: 'home',
        component: () => import('../views/Home/index.vue'),
    },
    {
        // 登录/注册
        path: '/login',
        name: 'login',
        component: () => import('../views/Login/index.vue'),
    },
    // 主页
    {
        path: '/main',
        name: 'main',
        component: () => import('../views/Main/index.vue'),
        children: [
            {
                // 私信
                path: '/main/@me',
                name: 'message',
                components: {
                    leftAside: () => import('../views/ChannelMessage/index.vue'),
                    rightMain: () => import('../views/FriendInterface/index.vue'),
                },
            },
            //     跳转至chat聊天界面
            {
                path: '/main/@me/:id',
                name: 'chat',
                components: {
                    leftAside: () => import('../views/ChannelMessage/index.vue'),
                    rightMain: () => import('../views/Chat/index.vue'),
                },
                props: true,
            },
            //频道服务器
            {
                path: '/channels/:id',
                name: 'channels',
                components: {
                    leftAside: () => import('../views/Channels/index.vue'),
                    rightMain: () => import('../views/FriendInterface/index.vue'),
                },
                props: true,
            },
            //FriendInterface
            {
                path: '/main/@me',
                name: 'friend',
                components: {
                    leftAside: () => import('../views/ChannelMessage/index.vue'),
                    rightMain: () => import('../views/FriendInterface/index.vue'),
                },
            },
            //Store
            {
                path: '/main/store',
                name: 'friend',
                components: {
                    leftAside: () => import('../views/ChannelMessage/index.vue'),
                    rightMain: () => import('../views/Store/index.vue'),
                },
            },
        ],
    },
    //     404
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../components/NotFound.vue'),
    },
];
