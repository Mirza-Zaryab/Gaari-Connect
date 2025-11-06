import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const ReceiptConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Receipt',
            component: lazy(() => import('./Receipt')),

        },

    ]
}
export default ReceiptConfig;