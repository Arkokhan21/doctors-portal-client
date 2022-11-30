import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../../Shared/Loading/Loading';

const Payment = () => {

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

    const booking = useLoaderData()

    const { treatment, price, appointmentDate, slot } = booking

    const navigation = useNavigation()

    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl mb-6'>Payment for <strong>{treatment}</strong></h2>
            <p className='text-xl'>Please Pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 mt-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;