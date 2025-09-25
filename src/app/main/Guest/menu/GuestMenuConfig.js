import { authRoles } from 'app/auth';
import GuestSetting from './GuestSetting/GuestSetting';
import GuestSupport from './Guestsupport/Support';
import GuestProfile from './Guestprofile/GuestProfile';
import Favouritecar from "./Favouritecar/Favouritecar";
import Notifications from './Notofications/Notifications';

const GuestMenuConfig = {
    auth: authRoles.onlyGuest,
    routes: [
        {
            path: '/GuestSetting',
            component: GuestSetting,
        },
        {
            path: '/GuestSupport',
            component: GuestSupport,
        },
        {
            path: '/GuestProfile',
            component: GuestProfile,
        },
        {
            path: '/FavouriteCars',
            component: Favouritecar,
        },
        {
            path: '/Notifications',
            component: Notifications,
        }
    ],
};

export default GuestMenuConfig;