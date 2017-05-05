/**
 * Created by kevrat on 05.04.2017.
 */
export default [
    {
        name: 'home',
        path: '/home',
        // component: '/client/ui/Pages/Home.vue',
    },
    {
        name: 'login',
        path: '/login',
        component: '/client/ui/Pages/Login.vue',
    },
    {
        name:'profile',
        path: '/profile',
        component: '/client/ui/Pages/EmptyPage.vue',

    },
    {
        name:'vote',
        path: '/vote',
        component: '/client/ui/Pages/EmptyPage.vue',

    },
    {
        name:'people',
        path: '/people',
        component: '/client/ui/Pages/EmptyPage.vue',

    },
    {
        name:'chat',
        path: '/chat',
        component: '/client/ui/Pages/EmptyPage.vue',

    },
    {
        name:'not-found',
        path: '*',
        component: '/client/ui/Pages/NotFound.vue',

    },
    // {
    //     path: '/page1',
    //     name: 'page1',
    //     component: '/client/ui/Page1.vue',
    //     // Nested routes
    //     children: [
    //         {
    //             path: 'a',
    //             name: 'page1a',
    //             component: '/client/ui/Page1A.vue',
    //         },
    //         {
    //             path: 'b',
    //             name: 'page1b',
    //             component: '/client/ui/Page1B.vue',
    //         },
    //     ],
    // },
];