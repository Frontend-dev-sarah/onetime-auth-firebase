import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { StyleSheet, View } from 'react-native';
import { SignupForm } from './src/SignupForm';
import { SignInForm } from './src/SignInForm';

export default function App() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAjrw1kC32ef4k2S6E7XhWBYS3t3RcprZ8",
      authDomain: "one-time-authentication-13d8a.firebaseapp.com",
      databaseURL: "https://one-time-authentication-13d8a-default-rtdb.firebaseio.com",
      projectId: "one-time-authentication-13d8a",
      storageBucket: "one-time-authentication-13d8a.appspot.com",
      messagingSenderId: "781584691491",
      appId: "1:781584691491:web:8200bd0f7332621e9f9c96",
      measurementId: "G-1J2PTB3DL8"
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);
  }, [])
  return (
    <View style={styles.container}>
      <SignupForm />
      <SignInForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
