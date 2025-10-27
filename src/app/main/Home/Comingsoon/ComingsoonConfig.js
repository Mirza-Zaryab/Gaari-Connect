import { authRoles } from 'app/auth';
import Comingsoon from './Comingsoon';

const ComingsoonConfig = {
    auth: authRoles.onlyGuest,
    routes: [
        {
            path: '/Comingsoon',
            component: Comingsoon,
        },
    ],
};

export default ComingsoonConfig;