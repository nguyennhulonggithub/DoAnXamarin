import { CardField, useConfirmPayment } from "@stripe/stripe-react-native"

import React, { useState } from 'react'
import { Alert, Button, Modal, StyleSheet, TextInput, View } from "react-native"
import { API_URL } from "./Stripe";

function Card(props) {
    const [email, setEmail] = useState();
    const [cardDetails, setCardDetails] = useState()
    const { confirmPayment, loading } = useConfirmPayment();

    const fetchPaymentIntentClientSecret = async () => {
        const response = await fetch(`${API_URL}/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const { clientSecret, error } = await response.json()
        return { clientSecret, error };
    }

    const handlePayPress = async () => {
        if (!cardDetails?.complete || !email) {
            Alert.alert("Please enter complete card details and Email");
            return;
        }

        const billingDetails = { email: email }

        try {
            const { clientSecret, error } = await fetchPaymentIntentClientSecret();

            if (error) {
                console.log(error);
            } else {
                const { paymentIntent, error } = await confirmPayment(clientSecret, {
                    type: "Card",
                    billingDetails: billingDetails,
                });
                if (error) {
                    alert(`Payment Confirmation Error ${error.message}`);
                } else if (paymentIntent) {
                    alert('Payment Successful');
                    console.log('Payment successful', paymentIntent);
                }
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Modal animationType="slide" visible='false'>
            <View style={styles.container}>
                <TextInput autoCapitalize="none"
                    placeholder="E-mail"
                    keyboardType="name-phone-pad"
                    onChange={(value) => setEmail(value.nativeEvent.text)}
                    style={styles.input}
                />
                <CardField
                    onCardChange={cardDetails => {
                        setCardDetails(cardDetails);
                    }}
                    postalCodeEnabled={false}
                    placeholder={{
                        number: '4000 0025 0000 3155'
                    }}
                    style={styles.cardField}
                    cardStyle={{
                        borderColor: 'white',
                        borderWidth: 1,
                        borderRadius: 8,
                        backgroundColor: '#efefef'
                    }} />
                <Button title='Pay' onPress={handlePayPress} disabled={loading} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20
    },
    input: {
        backgroundColor: '#efefef',
        width: '100%',
        height: 50,
        fontSize: 18,
        borderRadius: 8,
        padding: 10
    },
    cardField: {
        width: '100%',
        height: 50,
        marginVertical: 30
    }
})

export default Card
