import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const OptionConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Option',
            component: lazy(() => import('./Option')),

        },

    ]
}
export default OptionConfig;