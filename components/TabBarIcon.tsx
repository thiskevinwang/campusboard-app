import React from "react"
import { Icon } from "expo"

import Colors from "../constants/Colors"

const TabBarIcon = ({ name, focused }: { name: string; focused: boolean }) => {
  return (
    <Icon.Ionicons
      name={name}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
}

export default TabBarIcon
