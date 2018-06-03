import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Text, View, Button } from 'react-native';
import Posts from './Posts';
import Post from './Post';
import styles from './styles';
import navigationStyles from './styles/navigationStyles';

class Home extends Component {
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
        <Text style={styles.welcome}>It's RN Apollo app 🚀</Text>
        <Posts navigation={this.props.navigation} />
      </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: Home
  },
  Post: {
    screen: Post
  }
});
