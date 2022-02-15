import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import WebView from 'react-native-webview'

export default class WebViewComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView source={{ uri: "http://google.com" }}></WebView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        margin: 20
    }
})