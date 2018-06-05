import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { List, ListItem, Body, Right, Icon } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from '../Loading';

class PostList extends Component {
  goToPost = ({ id, title }) => {
    this.props.navigation.navigate('Post', {
      id,
      title
    });
  };

  render() {
    const { loading, allPosts } = this.props;

    if (loading) return <Loading />;

    return (
      <View>
        <List>
          <FlatList
            data={allPosts}
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

const postsQuery = gql`
  query postsQuery {
    allPosts(orderBy: createdAt_DESC) {
      id
      title
    }
  }
`;

export default graphql(postsQuery, {
  props: ({ data }) => ({ ...data })
})(PostList);
