import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class FlexboxComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box,styles.box1]}>
            <Text>Box 1</Text>
        </View>
        <View style={[styles.box,styles.box2]}>
            <Text>Box 2</Text>
        </View>
        <View style={[styles.box,styles.box3]}>
            <Text>Box 3</Text>
        </View>
        <View style={[styles.box,styles.box1]}>
            <Text>Box 1</Text>
        </View>
        <View style={[styles.box,styles.box2]}>
            <Text>Box 2</Text>
        </View>
        <View style={[styles.box,styles.box3]}>
            <Text>Box 3</Text>
        </View>
        <View style={[styles.box,styles.box1]}>
            <Text>Box 1</Text>
        </View>
        <View style={[styles.box,styles.box2]}>
            <Text>Box 2</Text>
        </View>
        <View style={[styles.box,styles.box3]}>
            <Text>Box 3</Text>
        </View>
        <View style={[styles.box,styles.box1]}>
            <Text>Box 1</Text>
        </View>
        <View style={[styles.box,styles.box2]}>
            <Text>Box 2</Text>
        </View>
        <View style={[styles.box,styles.box3]}>
            <Text>Box 3</Text>
        </View>
        <View style={[styles.box,styles.box1]}>
            <Text>Box 1</Text>
        </View>
        <View style={[styles.box,styles.box2]}>
            <Text>Box 2</Text>
        </View>
        <View style={[styles.box,styles.box3]}>
            <Text>Box 3</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        // flex so phan chiem tren man hinh
        flex: 1,
        flexDirection: "row", //xep ngang
        backgroundColor: "yellow",
        // justifyContent: "space-between",// can doc
        // justifyContent: "space-around",
        justifyContent: "center",
        // alignItems: "center",//can ngnag
        // alignItems: "stretch",
        alignItems: "flex-end",
        margin: 20,
        flexWrap: "wrap", //xuong dong khi het hang
    },
    box: {
        width: 70,
        height: 80
    },
    // box con flex 1 + 2 + 3 rooif chia 
    // 1/6 2/6 3/6
    box1: {
        // flex: 1,
        backgroundColor: "red"
    },
    box2: {
        // flex: 2,
        backgroundColor: "green"
    },
    box3: {
        // flex: 3,
        backgroundColor: "blue"
    },
    
})