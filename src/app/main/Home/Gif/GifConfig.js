import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const GifConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Gif',
            component: lazy(() => import('./Gif')),

        },

    ]
}
export default GifConfig;