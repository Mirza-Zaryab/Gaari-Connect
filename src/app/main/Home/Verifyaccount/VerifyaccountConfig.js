import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const VerifyaccountConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Verifyaccount',
            component: lazy(() => import('./Verifyaccount')),

        },

    ]
}
export default VerifyaccountConfig;