import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Fab, Icon } from 'native-base';
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
        <PostList navigation={this.props.navigation} />
        <Fab style={homeStyles.newPost} onPress={this.goToNewPost}>
          <Icon name="add" />
        </Fab>
      </View>
    );
  }
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  newPost: {
    backgroundColor: '#82D8D8'
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
