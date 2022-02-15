import { Text, StyleSheet, View, Animated } from "react-native";
import React, { Component } from "react";

export default class FadeInComponent extends Component {
  constructor() {
    super();
    this.fadeAnim = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.fadeAnim, {
      toValue: 1,
      duration: 1000000,
      useNativeDriver: true,
    }).start();
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{ opacity: this.fadeAnim }}></Animated.View>
        <Text style={styles.content}>Fade In</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "#cc0",
    padding: 10,
    margin: 10,
  },
});
