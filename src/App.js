import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {
    isLoggedIn: null,

  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB2_u6KzppuFvgyAvvhq66YI66CpNW6xe8',
      authDomain: 'react-native-auth-6f54c.firebaseapp.com',
      databaseURL: 'https://react-native-auth-6f54c.firebaseio.com',
      projectId: 'react-native-auth-6f54c',
      storageBucket: 'react-native-auth-6f54c.appspot.com',
      messagingSenderId: '115664664453'
    });

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        isLoggedIn: user ? true : false
      })
    })
  }

  renderContent() {
    switch (this.state.isLoggedIn) {
      case true:
        return (
          <CardSection>
            <Button
              style={styles.buttonStyle}
              onPress={() => firebase.auth().signOut()}>
              <Text style={styles.textStyle}>Log Out</Text>
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#F5FCFF',
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default App;
