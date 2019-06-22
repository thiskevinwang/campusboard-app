import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import Palette from "../constants/Palette";
import { MonoText } from "./StyledText";
import { Icon } from "expo";

export default class Timer extends Component {
  constructor() {
    super();

    this.state = {
      ss: 0,
      mm: 0,
      isRunning: false
    };
  }

  componentWillMount() {}

  // componentDidMount() {
  //   this.timerID = setInterval(
  //     () => this.tick(), 1000
  //   );
  // }

  componentWillUnmount() {
    this.timerID.clearInterval();
  }

  tick() {
    this.setState({
      ss: this.state.ss + 1
    });
    if (this.state.ss == 60) {
      this.setState({
        ss: 0,
        mm: this.state.mm + 1
      });
    }
  }

  fire = () => {
    this.setState({
      isRunning: true
    });
    this.timerID = setInterval(() => this.tick(), 1000);
  };

  pause = () => {
    this.setState({
      isRunning: false
    });
    clearInterval(this.timerID);
  };

  handlePress = () => {
    !this.state.isRunning ? this.fire() : this.pause();
  };

  handleLongPress = () => {
    this.setState({
      ss: 0,
      mm: 0,
      isRunning: false
    });
    this.pause();
  };

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.timer,
          {
            backgroundColor:
              (this.state.ss == 0) & !this.state.isRunning
                ? Palette.Icon.danger
                : this.state.isRunning
                ? Palette.Icon.success
                : Palette.Icon.muted
          }
        ]}
        onPress={this.handlePress}
        onLongPress={this.handleLongPress}
      >
        <Text
          style={{
            color: "white",
            fontSize: 24
          }}
        >
          <Icon.Ionicons
            name={
              this.state.isRunning
                ? Platform.OS === "ios"
                  ? "ios-pause"
                  : "md-pause"
                : Platform.OS === "ios"
                ? "ios-play"
                : "md-play"
            }
            size={24}
            // style={{ marginBottom: 0 }}
            color="white"
          />{" "}
          {this.state.mm < 10 ? "0" + this.state.mm : this.state.mm}:
          {this.state.ss < 10 ? "0" + this.state.ss : this.state.ss}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  timer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",

    width: 120,
    height: 55,
    marginVertical: 30,
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,

    shadowColor: "black",
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,

    top: 50,
    right: 0,
    position: "absolute"
  }
});
