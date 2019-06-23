import React from "react"
import { Button } from "react-native"
import Palette from "../constants/Palette"
import styled, { css } from "styled-components/native"

/**
 * # RungView
 * A styled.View that contains a few buttons.
 *
 * @param {boolean} props.right Specifies if the button is a _right-side_ button.
 * @param {boolean} props.left Specifies if the button is a _left-side_ button.
 * @param {boolean} props.middle Specifies if the button is a _middle_ button.
 * @param {boolean} props.isSelected Just for left/right buttons. Designates whether it is selected or not.
 *
 */
const RungView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 5px;
  shadow-color: black;
  shadow-offset: 3px 3px;
  shadow-opacity: 0.5;
  shadow-radius: 3px;
  border-radius: 5px;
`

/**
 * # ButtonContainer
 * A styled.View that helps a button child `<Button />` element with
 * border radius, and other styling.
 *
 * @param {boolean} props.right Specifies if the button is a _right-side_ button.
 * @param {boolean} props.left Specifies if the button is a _left-side_ button.
 * @param {boolean} props.middle Specifies if the button is a _middle_ button.
 * @param {boolean} props.isSelected Just for left/right buttons. Designates whether it is selected or not.
 *
 */
const ButtonContainer = styled.View`
  ${props =>
    props.right &&
    css`
      flex: 3;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
    `}
  ${props =>
    props.left &&
    css`
      flex: 3;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    `}
  ${props =>
    props.middle &&
    css`
      border-left-width: 0.5px;
      border-right-width: 0.5px;
      border-color: ${Palette.Border.default};
      flex: 1;
    `}
  ${props =>
    props.isSelected &&
    css`
      background: ${Palette.Icon.selected};
    `}
`

interface Props {
  number: string
  isSelectedCounter: number
  isRightSelected: boolean
  isLeftSelected: boolean
  handleLeftPress: () => void
  handleRightPress: () => void
  handlePress: () => void
}

/**
 * # Rung
 * A clickable component that represents a "campusboard rung".
 * @param {...*} props
 */
export default function Rung({
  number,
  isSelectedCounter,
  isRightSelected,
  isLeftSelected,
  handleLeftPress,
  handleRightPress,
  handlePress,
}: Props) {
  return (
    <RungView style={{ backgroundColor: foo(isSelectedCounter) }}>
      <ButtonContainer left isSelected={isLeftSelected}>
        <Button
          title="L"
          onPress={handleLeftPress}
          color={
            isLeftSelected ? Palette.Scales.Neutral.N1 : Palette.Text.muted
          }
        />
      </ButtonContainer>
      <ButtonContainer middle>
        <Button
          title={number}
          onPress={handlePress}
          color={number.includes(".5") ? Palette.Text.muted : Palette.Text.dark}
        />
      </ButtonContainer>
      <ButtonContainer right isSelected={isRightSelected}>
        <Button
          title="R"
          onPress={handleRightPress}
          color={
            isRightSelected ? Palette.Scales.Neutral.N1 : Palette.Text.dark
          }
        />
      </ButtonContainer>
    </RungView>
  )
}

/**
 * # foo
 * Some helper function that returns a color
 * @param {number} number
 * @returns hex color string
 * @example "#234361"
 */
const foo = (number: number): string => {
  switch (number) {
    case 1:
      return Palette.Icon.success
    case 2:
      return Palette.Icon.danger
    default:
      return Palette.Orange.light
  }
}
