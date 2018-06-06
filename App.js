import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import Navigator from './src/Navigator';
import { getToken } from './loginUtils';
import configs from './configs';

const httpLink = createHttpLink({
  uri: `https://api.graph.cool/simple/v1/${configs.key}`
});

const authLink = setContext(async (req, { headers }) => {
  const token = await getToken();
  console.log('token', token);

  return {
    ...headers,
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  };
});

const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    );
  }
}
