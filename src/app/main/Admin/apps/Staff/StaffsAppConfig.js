import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const StaffsAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/apps/staffinfo/ManageStaffs/:ManageStaffId/:ManageStaffHandle?',
      component: lazy(() => import('./ManageStaff/ManageStaff')),
    },
    {
      path: '/apps/staffinfo/ManageStaffs',
      component: lazy(() => import('./ManageStaffs/ManageStaffs')),
    },
    // {
    //   path: '/apps/staffinfo/orders/:orderId',
    //   component: lazy(() => import('./order/Order')),
    // },
    // {
    //   path: '/apps/staffinfo/orders',
    //   component: lazy(() => import('./orders/Orders')),
    // },
    {
      path: '/apps/staffinfo',
      component: () => <Redirect to="/apps/staffinfo/ManageStaffs" />,
    },
  ],
};

export default StaffsAppConfig;
