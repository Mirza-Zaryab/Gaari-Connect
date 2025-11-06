import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const LandingPageAppConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Home/LandingPage',
            component: lazy(() => import('./LandingPage')),

        },

    ]
}
export default LandingPageAppConfig;