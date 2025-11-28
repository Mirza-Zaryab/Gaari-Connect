import { authRoles } from 'app/auth';
import Settings from './settings/Settings';
import Support from './support/Support';
import Profile from './profile/Profile';

const MenuConfig = {
    auth: authRoles.onlyGuest,
    routes: [
        {
            path: '/Settings',
            component: Settings,
        },
        {
            path: '/Support',
            component: Support,
        },
        {
            path: '/Profile',
            component: Profile,
        }
    ],
};

export default MenuConfig;