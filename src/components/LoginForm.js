import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>

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
  }
};

export default LoginForm;
