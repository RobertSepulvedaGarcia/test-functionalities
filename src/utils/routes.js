import login from '../pages/login/login';
import signUp from '../pages/signUp/signUp';
export const routes = [{
        path: '/',
        component: login,
    },
    {
        path: '/sign-up',
        component: signUp,
    },
];