import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import { WebBrowser } from 'expo';

import Timer from '../components/Timer';
import { MonoText } from '../components/StyledText';
import Board from '../components/Board';
import Palette from '../constants/Palette';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      wipe: false
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {!this.state.wipe ? <Board /> : null}
        </ScrollView>

        <View style={[
            styles.modalButton,
            {backgroundColor: !this.state.wipe ?
              Palette.Icon.danger : Palette.Icon.success}
          ]}>
          <Button
            title={this.state.wipe ? 'load' : 'clear'}
            color={Palette.Neutral.lightest}
            onPress={this.clearAndLoad}
          />
        </View>
        <Timer />
      </View>
    );
  }

  clearAndLoad = () => {
    this.setState({
      wipe: !this.state.wipe
    })
  }

  // _maybeRenderDevelopmentModeWarning() {
  //   if (__DEV__) {
  //     const learnMoreButton = (
  //       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
  //         Learn more
  //       </Text>
  //     );
  //
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         Development mode is enabled, your app will be slower but you can use useful development
  //         tools. {learnMoreButton}
  //       </Text>
  //     );
  //   } else {
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         You are not in development mode, your app will run at full speed.
  //       </Text>
  //     );
  //   }
  // }
}

const styles = StyleSheet.create({
  modalButton: {
    flex: 1,
    backgroundColor: Palette.Icon.selected,

    bottom: 0,
    right: 0,
    position: 'absolute',

    width: 55,
    height: 55,

    justifyContent: 'center',

    shadowColor: 'black',
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    paddingBottom: 4, //TODO: fix
    // borderWidth: 1,
    // borderColor: Palette.Blue.light,
    borderRadius: 35,
    marginRight: 20,
    marginBottom: 40,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  // welcomeContainer: {
  //   alignItems: 'center',
  //   marginTop: 10,
  //   marginBottom: 20,
  // },
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: '#fbfbfb',
  //   paddingVertical: 20,
  // },
  // tabBarInfoText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   textAlign: 'center',
  // },
  // navigationFilename: {
  //   marginTop: 5,
  // },
  // helpContainer: {
  //   marginTop: 15,
  //   alignItems: 'center',
  // },
  // helpLink: {
  //   paddingVertical: 15,
  // },
  // helpLinkText: {
  //   fontSize: 14,
  //   color: '#2e78b7',
  // },
});
