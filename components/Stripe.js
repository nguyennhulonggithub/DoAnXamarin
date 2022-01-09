import { StripeProvider } from '@stripe/stripe-react-native';
import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';

const API_URL = Platform.OS === 'android' ? '' 

function Stripe() {
    const [publishableKey, setPublishableKey] = useState('')

    // useEffect(()=>{
    //     async function init(){
    //         const publishableKey = await
    //     }
    // })
    return (
        <StripeProvider publishableKey={publishableKey}>

        </StripeProvider>
    )
}

export default Stripe
