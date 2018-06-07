import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Fab, Icon } from 'native-base';
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
    if (loading) return <Loading />;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{Post.body}</Text>
        <Fab style={styles.buttonColor} onPress={null}>
          <Icon name="create" />
        </Fab>
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
