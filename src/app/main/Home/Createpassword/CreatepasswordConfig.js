import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const CreatepasswordConfig = {
    settings: {
        layout: {},
    },
    routes: [
        {
            path: '/Createpassword',
            component: lazy(() => import('./Createpassword')),

        },

    ]
}
export default CreatepasswordConfig;