import React, { useState, useEffect } from "react"
import { View } from "react-native"
import Rung from "./Rung"

interface RungProps {
  isSelectedCounter: number
  isRightSelected: boolean
  isLeftSelected: boolean
}

export default function Board({ initialState }: { initialState: RungProps[] }) {
  const [rungs, setRungs] = useState(initialState)

  // This sets rungs if initial state is
  useEffect(() => {
    setRungs([...initialState])
  }, [initialState])

  const handlePress = i => () => {
    setRungs((rungs: RungProps[]) => {
      rungs[i] = {
        ...rungs[i],
        isSelectedCounter:
          rungs[i].isSelectedCounter + 1 === 3
            ? 0
            : rungs[i].isSelectedCounter + 1,
      }
      return [...rungs]
    })
  }

  const handleLeftPress = i => () => {
    setRungs((rungs: RungProps[]) => {
      rungs[i] = {
        ...rungs[i],
        isLeftSelected: !rungs[i].isLeftSelected,
      }
      return [...rungs]
    })
  }

  const handleRightPress = i => () => {
    setRungs((rungs: RungProps[]) => {
      rungs[i] = {
        ...rungs[i],
        isRightSelected: !rungs[i].isRightSelected,
      }
      return [...rungs]
    })
  }

  return (
    <View style={{ flexDirection: `column-reverse` }}>
      {rungs.map((e, i) => {
        return (
          <Rung
            handlePress={handlePress(i)}
            handleLeftPress={handleLeftPress(i)}
            handleRightPress={handleRightPress(i)}
            isSelectedCounter={e.isSelectedCounter}
            isLeftSelected={e.isLeftSelected}
            isRightSelected={rungs[i].isRightSelected}
            number={`${1 + i * 0.5}`}
            key={i}
          />
        )
      })}
    </View>
  )
}
