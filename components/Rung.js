import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, TextInput, Switch, Button} from 'react-native';

export default class Rung extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    this.setState( state => ({
      isActive: !state.isActive
    }));
  }

  render() {
    const blue = '#4286f4'

    return (
      <View style={[
        this.state.isActive ? orange.base : orange.light,
        style.margin
      ]}>
        <Button
          title={this.props.number}
          onPress={this.handlePress}
          color='black'
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  margin: {
    marginVertical: 2
  }
});

const orange = StyleSheet.create({
  lightest: {
    backgroundColor: '#FDF8F3'
  },
  light: {
    backgroundColor: '#FAE3CD'
  },
  base: {
    backgroundColor: '#D9822B'
  },
  dark: {
    backgroundColor: '#95591E'
  }
});
