import React, { useState, useEffect } from "react"
import { View } from "react-native"
import Rung from "./Rung"

interface RungProps {
  isSelectedCounter: number
  isRightSelected: boolean
  isLeftSelected: boolean
  index: number
}

export default function Board({ initialState }: { initialState: RungProps[] }) {
  const [rungs, setRungs]: [RungProps[], () => void] = useState(initialState)
  // console.log(
  //   "rungs",
  //   rungs.map(e => ({ index: e.index, isSelectedCounter: e.isSelectedCounter }))
  // )

  // This sets rungs if initial state is
  useEffect(() => {
    setRungs([...initialState])
  }, [initialState])

  const handlePress = (i: number) => () => {
    /**
     * Check for a previously selected rung.
     */
    const startRungIndex = rungs.reduce((a, c) => {
      // console.log(c.index, ":", c.isSelectedCounter)

      return a + (c.isSelectedCounter === 1 ? c.index : 0)
    }, null)

    /**
     * Ending rung
     */
    const endRungIndex = rungs.reduce((a, c) => {
      return a + (c.isSelectedCounter === 2 ? c.index : 0)
    }, null)

    setRungs(() => {
      rungs[i] = {
        ...rungs[i],
        isSelectedCounter:
          i === startRungIndex
            ? 0
            : startRungIndex && i > startRungIndex
            ? 2
            : 1,
      }

      rungs[startRungIndex] = {
        ...rungs[startRungIndex],
        isSelectedCounter: i <= startRungIndex ? 0 : 1,
      }

      rungs[endRungIndex] = {
        ...rungs[endRungIndex],
        isSelectedCounter: 0,
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
