import { authRoles } from 'app/auth';
import HostTabs from './HostTabs';

const TabsConfig = {
    auth: authRoles.onlyGuest,
    routes: [
        {
            path: '/HostTabs',
            component: HostTabs,
        },
    ],
};

export default TabsConfig;