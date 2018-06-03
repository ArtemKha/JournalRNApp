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
    const { id, title } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{title}</Text>
        <Text style={styles.instructions}>Post {id}</Text>
      </View>
    );
  }
}
