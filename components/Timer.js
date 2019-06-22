import React, { useState, useEffect, useRef, useCallback } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native"
import moment from "moment"
import Palette from "../constants/Palette"
import { MonoText } from "./StyledText"
import { Icon } from "expo"

export default function Timer() {
  const [state, setState] = useState({
    time: 0,
    isRunning: false,
  })

  let timerID = useRef()
  useEffect(() => {
    return () => clearInterval(timerID.current)
  }, [])

  const tick = useCallback(() => {
    setState(state => ({
      ...state,
      time: state.time + 1,
    }))
  }, [])

  const fire = useCallback(() => {
    setState(state => ({
      ...state,
      isRunning: true,
    }))
    timerID.current = setInterval(() => tick(), 1000)
  }, [])

  const pause = useCallback(() => {
    setState(state => ({
      ...state,
      isRunning: false,
    }))
    clearInterval(timerID.current)
  }, [])

  handlePress = () => {
    !state.isRunning ? fire() : pause()
  }

  handleLongPress = () => {
    setState(state => ({
      time: 0,
      isRunning: false,
    }))
    pause()
  }

  const currentTime = moment(state.time * 1000).format("mm:ss")

  return (
    <TouchableOpacity
      style={[
        styles.timer,
        {
          backgroundColor:
            (state.time == 0) & !state.isRunning
              ? Palette.Icon.danger
              : state.isRunning
              ? Palette.Icon.success
              : Palette.Icon.muted,
        },
      ]}
      onPress={handlePress}
      onLongPress={handleLongPress}
    >
      <Icon.Ionicons
        name={
          state.isRunning
            ? Platform.OS === "ios"
              ? "ios-pause"
              : "md-pause"
            : Platform.OS === "ios"
            ? "ios-play"
            : "md-play"
        }
        size={24}
        color="white"
      />
      <Text
        style={{
          color: "white",
          fontSize: 24,
        }}
      >
        {currentTime}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  timer: {
    flexDirection: "row",
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
    position: "absolute",
  },
})
