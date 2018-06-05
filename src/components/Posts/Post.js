import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from '../Loading';
import navigationStyles from '../../styles/navigationStyles';
import styles from '../../styles';

class Post extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    ...navigationStyles
  });

  render() {
    const { loading, Post } = this.props;

    return (
      <View style={styles.container}>
        {loading ? (
          <Loading />
        ) : (
          <Text style={styles.welcome}>{Post.body}</Text>
        )}
      </View>
    );
  }
}

const postQuery = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
      body
    }
  }
`;

export default graphql(postQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.id
    }
  })
})(Post);
