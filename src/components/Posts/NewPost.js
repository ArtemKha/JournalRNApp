import React, { Component } from 'react';
import { Text, View } from 'react-native';
import navigationStyles from '../../styles/navigationStyles';
import PostForm from './PostForm';

export default class NewPost extends Component {
  static navigationOptions = {
    title: 'Post',
    ...navigationStyles
  };

  postForm = data => {
    console.log(data);
  };

  render() {
    return (
      <View>
        <PostForm onSubmit={this.postForm} />
      </View>
    );
  }
}
