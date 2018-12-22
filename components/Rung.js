import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, TextInput, Switch, Button} from 'react-native';
import Palette from '../constants/Palette';

export default class Rung extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSelected: false
    }

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    this.setState( state => ({
      isSelected: !state.isSelected
    }));
  }

  render() {
    return (
      <View style={[
        this.state.isSelected ? orange.base : orange.light,
        style.rungs
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
  rungs: {
    margin: 5,
    // shadowColor: 'black',
    // shadowOffset: { height: 3, width: 3 },
    // shadowOpacity: 0.5,
    // shadowRadius: 3,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: Palette.Neutral.dark
  }
});

const orange = StyleSheet.create({
  lightest: {
    backgroundColor: Palette.Orange.lightest
  },
  light: {
    backgroundColor: Palette.Orange.light
  },
  base: {
    backgroundColor: Palette.Orange.base
  },
  dark: {
    backgroundColor: Palette.Orange.dark
  }
});
