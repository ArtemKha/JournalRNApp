import React, { Component } from 'react';
import { Form, Item, Input, Label } from 'native-base';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default class PostForm extends Component {
  static defaultProps = {
    post: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      title: props.post.title || '',
      body: props.post.body || ''
    };
  }

  submitForm = () => {
    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body
    });
  };

  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>Title</Label>
          <Input
            style={formStyles.title}
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
          />
        </Item>
        <Item floatingLabel>
          <Label>Body</Label>
          <Input
            multiline
            style={formStyles.body}
            onChangeText={body => this.setState({ body })}
            value={this.state.body}
          />
        </Item>

        <Button title="Save Post" onPress={this.submitForm} />
      </Form>
    );
  }
}

const formStyles = StyleSheet.create({
  body: {
    height: 400,
    textAlignVertical: 'top'
  }
});
