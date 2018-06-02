import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import navigationStyles from './styles/navigationStyles';
import styles from './styles';
import Post from './src/Post';

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
      <View style={styles.container}>
        <Text style={styles.welcome}>It's React Native!</Text>
        <Button onPress={this.goToPost} title="Go to post page" />
      </View>
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
