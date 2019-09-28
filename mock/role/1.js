export const constantRoutes = [
    {
        path: '/redirect',
        component: 'layout/Layout',
        hidden: true,
        children: [
            {
                path: '/redirect/:path*',
                component: 'views/redirect/index'
            }
        ]
    },
    {
        path: '/login',
        component: 'views/login/index',
        hidden: true
    },
    {
        path: '',
        component: 'views/dashboard/index',
        name: 'Dashboard',
        meta: {title: 'Dashborad',icon: 'dashBorad',affix: true}
    }
]