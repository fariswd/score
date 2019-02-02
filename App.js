import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Constants } from 'expo'

import IndexScreen from './src/screen/IndexScreen'

export default class App extends React.PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <IndexScreen />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
});
