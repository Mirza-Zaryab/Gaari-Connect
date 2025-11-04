import { lazy } from 'react';
import { authRoles } from 'app/auth';

const SignInConfig = {
    settings: {
        layout: {},
    },
    auth: authRoles.onlyGuest,
    routes: [
        {
            path: '/SignIn',
            component: lazy(() => import('./SignIn')),
        },
    ]
}
export default SignInConfig;