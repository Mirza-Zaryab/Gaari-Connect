import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const OtpOptionConfig = {
    settings: {
        layout: {},
    },
    routes: [
        {
            path: '/OtpOption',
            component: lazy(() => import('./OtpOption')),

        },

    ]
}
export default OtpOptionConfig;