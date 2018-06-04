import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from './components/Loading';
import styles from '../../styles';

class PostList extends Component {
  goToPost = id => {
    this.props.navigation.navigate('Post', {
      id
    });
  };

  render() {
    const { loading, allPosts } = this.props;

    if (loading) return <Loading />;

    return (
      <View>
        <FlatList
          data={allPosts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Text
              style={styles.instructions}
              onPress={() => this.goToPost(item.id)}
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
