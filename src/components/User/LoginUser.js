import React, { Component } from 'react';
import { Text, View } from 'react-native';
import UserForm from './UserForm';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LoginUser extends Component {
  loginUser = async ({ email, password }) => {
    try {
      const signin = await this.props.signinUser({
        variables: {
          email,
          password
        }
      });
      console.log(signin.data.signinUser.token);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View>
        <Text>Login</Text>
        <UserForm onSubmit={this.loginUser} type="Login" />
      </View>
    );
  }
}

const signinUser = gql`
  mutation signinUser($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`;

export default graphql(signinUser, { name: 'signinUser' })(LoginUser);
