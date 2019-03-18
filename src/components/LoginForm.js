import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner
} from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailed = this.onLoginFailed.bind(this);
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({
      error: '',
      loading: true
    })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFailed)
      })
  }

  onLoginFailed() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  render() {
    const { loading } = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email:"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password:"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </CardSection>

        <Text style={styles.errorStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {
            loading
              ? <Spinner size="small" />
              : <Button
              style={styles.buttonStyle}
              onPress={this.onButtonPress}>
              <Text style={styles.textStyle}>Log In</Text>
            </Button>
          }
        </CardSection>
      </Card>
    );
  }
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
