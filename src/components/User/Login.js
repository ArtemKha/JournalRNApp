import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { withApollo } from 'react-apollo';
import CreateUser from './CreateUser';
import LoginUser from './LoginUser';

class Login extends Component {
  state = { register: true };

  changeRegister = () => {
    this.setState(prevState => ({
      register: !prevState.register
    }));
  };

  render() {
    const title = this.state.register ? 'Login' : 'Register';
    return (
      <View style={stylesLogin.container}>
        {this.state.register ? (
          <CreateUser {...this.props} />
        ) : (
          <LoginUser {...this.props} />
        )}
        <Button onPress={this.changeRegister} title={title} />
      </View>
    );
  }
}

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default withApollo(Login);
