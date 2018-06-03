import React, { Component } from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import { graphql } from 'react-apollo';
import styles from '../styles';
import gql from 'graphql-tag';

class Posts extends Component {
  goToPost = item => {
    const { id, title } = item;
    this.props.navigation.navigate('Post', {
      id,
      title
    });
  };
  render() {
    const { loading, allPosts } = this.props;

    if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

    return (
      <View>
        <FlatList
          data={allPosts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Text
              style={styles.instructions}
              onPress={() => this.goToPost(item)}
            >
              {item.title}
            </Text>
          )}
        />
      </View>
    );
  }
}

const postsQuery = gql`
  {
    allPosts {
      id
      title
    }
  }
`;

export default graphql(postsQuery, {
  props: ({ data }) => ({ ...data })
})(Posts);
