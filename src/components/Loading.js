import React, { PureComponent } from 'react';
import { ActivityIndicator } from 'react-native';

export default class Loading extends PureComponent {
  render() {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
}
