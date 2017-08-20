import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
    apiKey: "AIzaSyCwH9HuIqwLmb4HOERyC-XImT02SijurGY",
    authDomain: "one-time-password-3ac48.firebaseapp.com",
    databaseURL: "https://one-time-password-3ac48.firebaseio.com",
    projectId: "one-time-password-3ac48",
    storageBucket: "one-time-password-3ac48.appspot.com",
    messagingSenderId: "1002185381808"
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
