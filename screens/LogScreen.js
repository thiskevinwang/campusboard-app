import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { WebBrowser } from 'expo';

export default class LogScreen extends React.Component {
  static navigationOptions = {
    title: 'Log',
  };

  _handlePress = () => {
    WebBrowser.openBrowserAsync('https://thekevinwang.com');
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={{textAlign: 'center'}}>COMING SOON!</Text>
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
