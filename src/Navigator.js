import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';
import PostList from './components/Posts/PostList';
import Post from './components/Posts/Post';
import NewPost from './components/Posts/NewPost';
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

  goToNewPost = () => {
    this.props.navigation.navigate('NewPost');
  };

  render() {
    return (
      <View style={homeStyles.container}>
        <Text style={styles.welcome}>It's the RN Apollo app 🚀</Text>
        <PostList navigation={this.props.navigation} />
        <TouchableHighlight
          onPress={this.goToNewPost}
          style={homeStyles.newPosts}
        >
          <Text style={homeStyles.newPostText}>New post +</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF'
  },
  newPosts: {
    // justifyContent: 'space-between'
    // alignItems: 'center',
    padding: 20,
    backgroundColor: '#82D8D8'
  },
  newPostText: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default createStackNavigator({
  Home: {
    screen: Home
  },
  Post: {
    screen: Post
  },
  NewPost: {
    screen: NewPost
  }
});
