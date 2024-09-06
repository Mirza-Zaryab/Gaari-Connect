import FuseUtils from '@fuse/utils';
import appsConfigs from 'app/main/Admin/apps/appsConfigs';
import authRoleExamplesConfigs from 'app/main/Admin/auth/authRoleExamplesConfigs';
import CallbackConfig from 'app/main/Admin/callback/CallbackConfig';
import DocumentationConfig from 'app/main/Admin/documentation/DocumentationConfig';
import LoginConfig from 'app/main/Admin/login/LoginConfig';
import LogoutConfig from 'app/main/Admin/logout/LogoutConfig';
import pagesConfigs from 'app/main/Admin/pages/pagesConfigs';
import RegisterConfig from 'app/main/Admin/register/RegisterConfig';
import UserInterfaceConfig from 'app/main/Admin/user-interface/UserInterfaceConfig';
import { Redirect } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import homeConfigs from 'app/main/Home/homeConfigs';
import HostConfig from 'app/main/Host/HostConfig';
import GuestConfig from 'app/main/Guest/GuestConfig';

const routeConfigs = [
  ...HostConfig,
  ...homeConfigs,
  ...GuestConfig,
  ...appsConfigs,
  ...pagesConfigs,
  ...authRoleExamplesConfigs,

  UserInterfaceConfig,
  DocumentationConfig,
  LogoutConfig,
  LoginConfig,
  RegisterConfig,
  LogoutConfig,
  CallbackConfig,
];

const routes = [
  // if you want to make whole app auth protected by default change defaultAuth for example:
  // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
  // The individual route configs which has auth option won't be overridden.
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/Comingsoon" />,
  },
  {
    path: '/loading',
    exact: true,
    component: () => <FuseLoading />,
  },
  {
    component: () => <Redirect to="/pages/errors/error-404" />,
  },
];

export default routes;
