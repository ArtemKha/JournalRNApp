import React, { Component } from 'react';
import { Fab, Icon } from 'native-base';
import { View, StyleSheet, Button } from 'react-native';
import PostList from '../components/Posts/PostList';
import { signOut } from '../../loginUtils';
import navigationStyles from '../styles/navigationStyles';

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

  onSignOut = () => {
    signOut();
    this.props.client.resetStore();
  };

  render() {
    return (
      <View style={homeStyles.container}>
        <PostList
          navigation={this.props.navigation}
          screenProps={this.props.screenProps}
        />
        <Button onPress={this.onSignOut} title="Logout" />
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
    justifyContent: 'space-between'
  },
  newPost: {
    backgroundColor: '#82D8D8'
  }
});

export default Home;
