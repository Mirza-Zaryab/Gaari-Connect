import { authRoles } from 'app/auth';
import BookingDetails from './BookingDetails';


const SharedConfig = {
    auth: authRoles.onlyGuest,
    routes: [
        {
            path: '/BookingDetails',
            component: BookingDetails,
        },
    ],
};

export default SharedConfig;