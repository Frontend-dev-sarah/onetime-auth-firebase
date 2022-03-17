import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import axios from 'axios';
import { getAuth, signInWithCustomToken } from "firebase/auth";

const ROOT_URL = 'https://us-central1-one-time-authentication-13d8a.cloudfunctions.net'

export const SignInForm = () => {

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    handleSubmit = async () => {
        try {
            let { data } = await axios.post(`${ROOT_URL}/verifyOnetimePassword`, {
                phone: phone,
                password: password
            })
            const auth = getAuth();
            await signInWithCustomToken(auth, data.token)
            // let response = await signInWithCustomToken(auth, data.token);
            // const user = response.user;
            //....
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
            <Input
                label='Your password'
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                secureTextEntry={true}
                containerStyle={styles.input}
                value={password}
                onChangeText={(password) => setPassword(password)}
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
