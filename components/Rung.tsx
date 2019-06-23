import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react"
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  Switch,
  Button,
} from "react-native"
import Palette from "../constants/Palette"
import { JSXElement } from "@babel/types"

interface Props {
  number: string
  isSelectedCounter: number
  isRightSelected: boolean
  isLeftSelected: boolean
  handleLeftPress: () => void
  handleRightPress: () => void
  handlePress: () => void
}

export default function Rung(props: Props): JSXElement {
  const foo = bar => {
    switch (bar) {
      case 1:
        return Palette.Icon.success
      case 2:
        return Palette.Icon.danger
      default:
        return Palette.Orange.light
    }
  }

  return (
    <View
      style={[{ backgroundColor: foo(props.isSelectedCounter) }, styles.rungs]}
    >
      <View
        style={[
          styles.left,
          {
            backgroundColor: props.isLeftSelected
              ? Palette.Icon.selected
              : null,
          },
        ]}
      >
        <Button
          title="L"
          onPress={props.handleLeftPress}
          color={
            props.isLeftSelected
              ? Palette.Scales.Neutral.N1
              : Palette.Text.muted
          }
        />
      </View>
      <View style={styles.middle}>
        <Button
          title={props.number}
          onPress={props.handlePress}
          color={
            props.number.includes(".5") ? Palette.Text.muted : Palette.Text.dark
          }
        />
      </View>
      <View
        style={[
          styles.right,
          {
            backgroundColor: props.isRightSelected
              ? Palette.Icon.selected
              : null,
          },
        ]}
      >
        <Button
          title="R"
          onPress={props.handleRightPress}
          color={
            props.isRightSelected
              ? Palette.Scales.Neutral.N1
              : Palette.Text.muted
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rungs: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 5,
    shadowColor: "black",
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
    borderBottomLeftRadius: 5,
  },
  middle: {
    flex: 1,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: Palette.Border.default,
  },
  right: {
    flex: 3,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
})
