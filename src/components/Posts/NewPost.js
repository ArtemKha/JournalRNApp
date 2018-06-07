import React, { Component } from 'react';
import { View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PostForm from './PostForm';
import Loading from '../../components/Loading';
import navigationStyles from '../../styles/navigationStyles';

class NewPost extends Component {
  state = {
    loading: false
  };

  static navigationOptions = {
    title: 'New Post',
    ...navigationStyles
  };

  postForm = ({ title, body }) => {
    const { newPost, navigation, screenProps } = this.props;
    this.setState({ loading: true });
    newPost({ variables: { title, body, userId: screenProps.user.id } })
      .then(() => {
        navigation.goBack();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props.screenProps.user);

    return (
      <View>
        {this.state.loading ? (
          <Loading />
        ) : (
          <PostForm onSubmit={this.postForm} />
        )}
      </View>
    );
  }
}

const newPost = gql`
  mutation newPost($title: String!, $body: String!, $userId: ID!) {
    createPost(title: $title, body: $body, userId: $userId) {
      id
    }
  }
`;

export default graphql(newPost, {
  name: 'newPost',
  options: {
    refetchQueries: ['postsQuery']
  }
})(NewPost);
