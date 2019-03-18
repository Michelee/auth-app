import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB2_u6KzppuFvgyAvvhq66YI66CpNW6xe8',
      authDomain: 'react-native-auth-6f54c.firebaseapp.com',
      databaseURL: 'https://react-native-auth-6f54c.firebaseio.com',
      projectId: 'react-native-auth-6f54c',
      storageBucket: 'react-native-auth-6f54c.appspot.com',
      messagingSenderId: '115664664453'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};

export default App;
