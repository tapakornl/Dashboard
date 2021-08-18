import DashboardPage from 'pages/DashboardPage/DashboardPage'

export const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: 'ni ni-shop text-primary',
        component: DashboardPage,
        layout: '/admin',
    },
]