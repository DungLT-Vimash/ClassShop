import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class StylingComponent extends Component {
  render() {
    return (
      <View style={{...styles.container, marginTop: 250}}>
        <Text
            style = {[
                styles.content,
                { fontSize: 30, color: "red",fontWeight: "bold"}
            ]}
        >StylingComponent</Text>
        <Text style={styles.content}>Hello world</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    content: {
        fontSize:"italic",
        fontSize: 20
    }
})