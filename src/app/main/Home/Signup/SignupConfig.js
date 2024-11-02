import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const SignupConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Signup',
            component: lazy(() => import('./Signup')),

        },

    ]
}
export default SignupConfig;