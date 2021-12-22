import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51K9J6kEi33B9sYNs5nLjaWcafFllT4sye8hG0FE3jxPG7PKIASggB7aRxqvjFSAIJ7sT4frBpLUeZxk0VWfFvgtJ0087ORCJ24')

const Payment = () => {
    const [appointment, setAppointment] = useState({})

    const { appointmentId } = useParams();

    useEffect(() => {
        fetch(`https://obscure-falls-37171.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => {
                setAppointment(data);
                console.log(data)
            })
    }, [appointmentId])

    return (
        <div>
            <h2>Please Pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;


/* 
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout form
----------------------------------------------------------------
5. Create payment method 
6. server: create payment Intent api
7. Load client secret client
8. Confirm Card payment
9. handle user error
*/
