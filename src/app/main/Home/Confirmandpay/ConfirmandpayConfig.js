import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const ConfirmandpayConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Confirmandpay',
            component: lazy(() => import('./Confirmandpay')),

        },

    ]
}
export default ConfirmandpayConfig;