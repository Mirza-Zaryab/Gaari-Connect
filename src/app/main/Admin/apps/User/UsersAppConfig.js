import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const UsersAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/apps/userinfo/ManageUsers/:ManageUserId/:ManageUserHandle?',
      component: lazy(() => import('./ManageUser/ManageUser')),
    },
    {
      path: '/apps/userinfo/ManageUsers',
      component: lazy(() => import('./ManageUsers/ManageUsers')),
    },
    // {
    //   path: '/apps/userinfo/orders/:orderId',
    //   component: lazy(() => import('./order/Order')),
    // },
    // {
    //   path: '/apps/userinfo/orders',
    //   component: lazy(() => import('./orders/Orders')),
    // },
    {
      path: '/apps/userinfo',
      component: () => <Redirect to="/apps/userinfo/ManageUsers" />,
    },
  ],
};

export default UsersAppConfig;
