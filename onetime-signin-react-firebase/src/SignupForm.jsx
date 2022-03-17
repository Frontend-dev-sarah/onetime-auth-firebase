import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-authentication-13d8a.cloudfunctions.net'

export const SignupForm = () => {
    const [phone, setPhone] = useState('')

    // handleSubmit = () => {
    //     axios.post(`${ROOT_URL}/createUser`, {
    //         phone: phone
    //     }).then(() => {
    //         axios.post(`${ROOT_URL}/requestOnetimePassword`, {
    //             phone: phone
    //         }).catch((e) => console.log(e))
    //     })
    // }

    handleSubmit = async () => {
        try {
            await axios.post(`${ROOT_URL}/createUser`, { phone: phone })
            await axios.post(`${ROOT_URL}/requestOnetimePassword`, { phone: phone })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text h2 style={styles.title}>Sign Up</Text>
            <Input
                label='Your phone number'
                leftIcon={{ type: 'font-awesome', name: 'phone' }}
                containerStyle={styles.input}
                value={phone}
                onChangeText={(phone) => setPhone(phone)}
            />
            <Button
                title='Submit'
                onPress={handleSubmit}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginBottom: 50
    },
    input: {
        width: 300
    }
})
