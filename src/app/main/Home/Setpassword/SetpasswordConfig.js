import { lazy } from 'react';

const SetpasswordConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Setpassword',
            component: lazy(() => import('./Setpassword')),

        },

    ]
}
export default SetpasswordConfig;