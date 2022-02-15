import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class DisplayTest extends Component {
  render() {
    return (
      <View>
        {this.props.children}
        <Text styles={{ fontSize: this.props.fontSize}}>{this.props.content}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})