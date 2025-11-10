import { lazy } from 'react';
import { Redirect } from 'react-router-dom';


const CarsListingConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/cars-listing',
            component: lazy(() => import('./CarsListing')),

        },

    ]
}
export default CarsListingConfig;