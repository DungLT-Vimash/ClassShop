import {
  Button,
  Text,
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";

export default class TouchableComponent extends Component {
  helloHandler = () => {
    Alert.alert("info", "Hello, ", [{ text: "Ok" }]);
  };
  addProductHandler = () => {
    Alert.alert("info", "Add New Product", [{ text: "Ok" }]);
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="Hello" onPress={this.helloHandler}></Button>
        <TouchableOpacity onPress={this.addProductHandler}>
          <View>
            <Ionicons name="add-circle" size={32} color="red"></Ionicons>
            <Text>add new product</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
