import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const forgetpasswordConfig = {
    settings: {
        layout: {},
    },
    routes: [
        {
            path: '/forgetpassword',
            component: lazy(() => import('./forgetpassword')),

        },

    ]
}
export default forgetpasswordConfig;