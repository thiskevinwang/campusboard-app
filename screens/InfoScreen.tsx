import React, { useState } from "react"
import { Text, ScrollView, StyleSheet, Dimensions, View } from "react-native"
import { SceneMap, TabView, TabBar } from "react-native-tab-view"
import { WebBrowser, Constants } from "expo"

const FirstRoute = ({ route, jumpTo, position }) => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]}>{}</View>
)

const SecondRoute = ({ route, jumpTo, position }) => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]}>{}</View>
)

const InfoScreen = ({ navigation }) => {
  console.log("InfoScreen rendered")
  const [index, setIndex] = useState(0)
  const [routes, setRoutes] = useState([
    { key: "first", title: "Pink" },
    { key: "second", title: "Purp" },
  ])

  const _handlePress = () => {
    WebBrowser.openBrowserAsync("https://thekevinwang.com")
  }
  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => setIndex(index)}
        initialLayout={{ width: Dimensions.get("window").width }}
        tabBarPosition={"bottom"}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "white" }}
            style={{ backgroundColor: "pink" }}
          />
        )}
      />
      <ScrollView style={styles.container}>
        <Text
          style={[styles.text, { fontSize: 24 }]}
          onPress={this._handlePress}
        >
          Author: Kevin Wang
        </Text>
        <Text style={styles.text}>Version: {Constants.manifest.version}</Text>
        <Text style={styles.text}>
          Build: {Constants.manifest.ios.buildNumber}
        </Text>
      </ScrollView>
    </>
  )
}

InfoScreen.navigationOptions = {
  title: "Info",
}

export default InfoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
  text: {
    textAlign: "center",
  },
  scene: {
    flex: 1,
  },
})
