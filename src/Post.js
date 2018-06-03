import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from './components/Loading';
import navigationStyles from './styles/navigationStyles';
import styles from './styles';

class Post extends Component {
  static navigationOptions = {
    title: 'Post',
    ...navigationStyles
  };

  render() {
    const { loading, Post } = this.props;
    if (loading) return <Loading />;

    const { id, title } = Post;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{title}</Text>
        <Text style={styles.instructions}>Post {id}</Text>
      </View>
    );
  }
}

const postQuery = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
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
