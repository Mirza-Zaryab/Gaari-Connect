import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const CarddetailConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Carddetail',
            component: lazy(() => import('./Carddetail')),

        },

    ]
}
export default CarddetailConfig;