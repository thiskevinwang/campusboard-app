import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { WebBrowser, Constants } from 'expo';

export default class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  _handlePress = () => {
    WebBrowser.openBrowserAsync('https://thekevinwang.com');
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={[styles.text, {fontSize: 24}]} onPress={this._handlePress}>
          Author: Kevin Wang
        </Text>
        <Text style={styles.text}>Version: {Constants.manifest.version}</Text>
        <Text style={styles.text}>Build: {Constants.manifest.ios.buildNumber}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  text: {
    textAlign: 'center'
  }
});
