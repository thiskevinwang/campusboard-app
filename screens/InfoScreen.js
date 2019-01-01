import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { WebBrowser } from 'expo';

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
        <Text style={styles.text} onPress={this._handlePress}>
          author: KevinWang
        </Text>
        {/* <ExpoLinksView /> */}
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
