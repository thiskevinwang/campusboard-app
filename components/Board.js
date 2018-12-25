import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, TextInput, Switch, Button} from 'react-native';
import Palette from '../constants/Palette';
import Rung from './Rung';

export default class Board extends Component<State> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      [
        <Rung number="9" />,
        <Rung number="8.5" />,
        <Rung number="8" />,
        <Rung number="7.5"/>,
        <Rung number="7" />,
        <Rung number="6.5"/>,
        <Rung number="6" />,
        <Rung number="5.5"/>,
        <Rung number="5" />,
        <Rung number="4.5"/>,
        <Rung number="4" />,
        <Rung number="3.5"/>,
        <Rung number="3" />,
        <Rung number="2.5"/>,
        <Rung number="2" />,
        <Rung number="1.5"/>,
        <Rung number="1" />
      ]
    )
  }
}
