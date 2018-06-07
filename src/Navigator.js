import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Home from './components/Home';
import Loading from './components/Loading';
import Post from './components/Posts/Post';
import NewPost from './components/Posts/NewPost';
import UpdatePost from './components/Posts/UpdatePost';
import Login from './components/User/Login';

const Navigator = createStackNavigator({
  Home: {
    screen: withApollo(Home)
  },
  Post: {
    screen: Post
  },
  NewPost: {
    screen: NewPost
  },
  UpdatePost: {
    screen: UpdatePost
  }
});

const NavWrapper = ({ loading, user }) => {
  if (loading) return <Loading />;
  if (!user) return <Login />;
  return <Navigator screenProps={{ user }} />;
};

const userQuery = gql`
  query userQuery {
    user {
      id
      email
      posts(orderBy: createdAt_DESC) {
        id
        title
      }
    }
  }
`;

export default graphql(userQuery, {
  props: ({ data }) => ({ ...data })
})(NavWrapper);
