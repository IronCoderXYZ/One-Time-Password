import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

class SignUpForm extends Component {
  state = { phone: '' };
  const ROOT_URL = 'https://us-central1-one-time-password-3ac48.cloudfunctions.net';

  handleSubmit = () => {
    axis.post(`${ROOT_URL}/createUser`, {
      phone: this.state.phone
    }).then(() => {
        axios.post(`${ROOT_URL}/requestOneTimePassword`,
          { phone: this.state.phone })
      })
  }

  render() {
    return (
      <View style={{ marginBottom: 10 }}>
        <FormLabel>Enter Phone Number</FormLabel>
        <FormInput
          value={ this.state.phone }
          onChangeText={ phone => this.setState({ phone }) }
        />
        <Button
          onPress={ this.handleSubmit }
          title='Submit'
        />
      </View>
    );
  }
}

export default SignUpForm;
