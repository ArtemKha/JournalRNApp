import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { List, ListItem, Body, Right, Icon } from 'native-base';
import Loading from '../Loading';

export default class PostList extends Component {
  goToPost = ({ id, title }) => {
    this.props.navigation.navigate('Post', {
      id,
      title
    });
  };

  render() {
    const { loading, screenProps } = this.props;
    if (loading) return <Loading />;

    return (
      <View>
        <List>
          <FlatList
            data={screenProps.user.posts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ListItem onPress={() => this.goToPost(item)}>
                <Body>
                  <Text>{item.title}</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            )}
          />
        </List>
      </View>
    );
  }
}
