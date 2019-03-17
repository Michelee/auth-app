import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email:"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
        </CardSection>
        
        <CardSection>
          <Button style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Log In</Text>
          </Button>
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
  inputStyle: {
    height: 20,
    width: 100
  }
};

export default LoginForm;
