import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Navigator from './src/Navigator';

// graph.cool/Journal dataBase
const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjhxizhdn57rh0194ubnrb6h3'
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigator />
    </ApolloProvider>
  );
}
