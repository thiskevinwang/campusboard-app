import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, TextInput, Switch, Button} from 'react-native';
import Palette from '../constants/Palette';

export default class Rung extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSelectedCounter: 0,
      isRightSelected: false,
      isLeftSelected: false
    }

    this.handlePress = this.handlePress.bind(this);
    this.handleLeftPress = this.handleLeftPress.bind(this);
    this.handleRightPress = this.handleRightPress.bind(this);
  }

  handlePress() {
    this.setState( state => ({
      isSelectedCounter: state.isSelectedCounter + 1
    }));

    if (this.state.isSelectedCounter == 2) {
      this.setState( state => ({
        isSelectedCounter: 0
      }));
    }
  }

  handleLeftPress() {
    this.setState( state => ({
      isLeftSelected: !state.isLeftSelected
    }));
  }

  handleRightPress() {
    this.setState( state => ({
      isRightSelected: !state.isRightSelected
    }));
  }

  foo = (bar) => {
    switch(bar){
    case 1:
      return Palette.Icon.success;
    case 2:
      return Palette.Icon.danger;
    default:
      return Palette.Orange.light;
    }
  }

  render() {
    return (
      <View style={[
        {backgroundColor: this.foo(this.state.isSelectedCounter)},
        styles.rungs
      ]}>
        <View style={[
          styles.left,
          {backgroundColor: this.state.isLeftSelected ? Palette.Icon.selected : null}
        ]}>
          <Button
            title="L"
            onPress={this.handleLeftPress}
            color={this.state.isLeftSelected ? Palette.Scales.Neutral.N1 : Palette.Text.muted}
          />
        </View>
        <View style={styles.middle}>
          <Button
            title={this.props.number}
            onPress={this.handlePress}
            color={ this.props.number.includes('.5') ? Palette.Text.muted : Palette.Text.dark}
          />
        </View>
        <View style={[
          styles.right,
          {backgroundColor: this.state.isRightSelected ? Palette.Icon.selected : null}
        ]}>
          <Button
            title="R"
            onPress={this.handleRightPress}
            color={this.state.isRightSelected ? Palette.Scales.Neutral.N1 : Palette.Text.muted}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rungs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    borderRadius: 5,
    // borderWidth: 0.2,
    // borderColor: Palette.Neutral.dark
    // borderRightWidth: 5
  },
  left: {
    flex: 3,
    borderTopLeftRadius: 5, // OHHHHH THUGLIFE!!!
    borderBottomLeftRadius: 5

  },
  middle:{
    flex: 1,
    borderLeftWidth: .5,
    borderRightWidth: .5,
    borderColor: Palette.Border.default
  },
  right: {
    flex: 3,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }
});
