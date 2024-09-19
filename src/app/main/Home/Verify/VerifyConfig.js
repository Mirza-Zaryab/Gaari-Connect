import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const VerifyConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Verify',
            component: lazy(() => import('./Verify')),

        },

    ]
}
export default VerifyConfig;