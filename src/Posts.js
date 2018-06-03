import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { graphql } from 'react-apollo';
import styles from '../styles';
import gql from 'graphql-tag';

class Posts extends Component {
  render() {
    const { loading, allPosts } = this.props;

    if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

    return (
      <View>
        {allPosts.map(item => (
          <Text style={styles.instructions} key={item.id}>
            {item.title}
          </Text>
        ))}
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
