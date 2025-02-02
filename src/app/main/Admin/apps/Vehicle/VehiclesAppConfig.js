import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const VehiclesAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/apps/vehicleinfo/ManageVehicles/:ManageVehicleId/:ManageVehicleHandle?',
      component: lazy(() => import('./ManageVehicle/ManageVehicle')),
    },
    {
      path: '/apps/vehicleinfo/ManageVehicles',
      component: lazy(() => import('./ManageVehicles/ManageVehicles')),
    },
    // {
    //   path: '/apps/vehicleinfo/orders/:orderId',
    //   component: lazy(() => import('./order/Order')),
    // },
    // {
    //   path: '/apps/vehicleinfo/orders',
    //   component: lazy(() => import('./orders/Orders')),
    // },
    {
      path: '/apps/vehicleinfo',
      component: () => <Redirect to="/apps/vehicleinfo/ManageVehicles" />,
    },
  ],
};

export default VehiclesAppConfig;
