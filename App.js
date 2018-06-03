import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import navigationStyles from './styles/navigationStyles';
import styles from './styles';
import Post from './src/Post';
import Posts from './src/Posts';

// graph.cool/Journal dataBase
const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjhxizhdn57rh0194ubnrb6h3'
});

class App extends Component {
  static navigationOptions = {
    title: 'Home',
    ...navigationStyles
  };

  goToPost = () => {
    this.props.navigation.navigate('Post');
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Text style={styles.welcome}>It's RN Apollo app 🚀</Text>
          <Posts navigation={this.props.navigation} />
        </View>
      </ApolloProvider>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: App
  },
  Post: {
    screen: Post
  }
});
