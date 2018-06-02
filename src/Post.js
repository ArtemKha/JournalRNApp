import React, { Component } from 'react';
import { Text, View } from 'react-native';
import navigationStyles from '../styles/navigationStyles';
import styles from '../styles';

export default class Post extends Component {
  static navigationOptions = {
    title: 'Post',
    ...navigationStyles
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Post</Text>
        <Text style={styles.instructions}>To post, click here</Text>
      </View>
    );
  }
}
