import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { AntDesign } from '@expo/vector-icons';

export default class IconComponent extends Component {
  render() {
    return (
      <View>
        <AntDesign name="home" size={80} color="red" />
      </View>
    )
  }
}

const styles = StyleSheet.create({})