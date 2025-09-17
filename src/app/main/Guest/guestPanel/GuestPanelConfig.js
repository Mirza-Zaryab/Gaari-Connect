import { authRoles } from 'app/auth';
import GuestPanel from './GuestPanel';

const GuestPanelConfig = {
    auth: authRoles.onlyGuest,
    routes: [
        {
            path: '/GuestPanel',
            component: GuestPanel
        }
    ],
};

export default GuestPanelConfig;