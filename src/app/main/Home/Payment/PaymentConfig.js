import { Redirect } from 'react-router-dom';
import Payment from './Payment';

const PaymentConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Payment',
            component: Payment,

        },

    ]
}
export default PaymentConfig;