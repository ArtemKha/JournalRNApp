import React, { Component } from 'react';
import { Button } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

export default class UserForm extends Component {
  state = { email: '', password: '' };

  submitForm = () => {};

  onChangeEmail = email => {
    this.setState({ email });
  };

  onChangePassword = password => {
    this.setState({ password });
  };

  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={this.onChangeEmail}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry
            value={this.state.password}
            onChangeText={this.onChangePassword}
          />
        </Item>
        <Button title={this.props.type} onPress={this.submitForm} />
      </Form>
    );
  }
}
