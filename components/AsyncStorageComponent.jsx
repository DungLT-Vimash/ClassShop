import { Text, StyleSheet, View, TextInput, Alert, Button, AsyncStorage } from "react-native";
import React, { Component } from "react";

export default class AsyncStorageComponent extends Component {
  state = {
    username: "",
  };
  inputHandler = (text) => {
    this.setState({ ...this.state, username: text });
    console.log(this.state);
  };
  saveHandler = async () => {
    try {
      const user = {
        username: this.state.username,
      };
      await AsyncStorage.setItem("User", JSON.stringify(user));
      Alert.alert("Information", "User is now saved", [{ Text: "Ok" }]);
    } catch (err) {
      Alert.alert("Error", "" + err.message, [{ Text: "Ok" }]);
    }
  };
  loadHandler = async () => {
    try {
      const userString = await AsyncStorage.getItem("User");
      const user = JSON.parse(userString);
      this.setState({ ...this.state, username: user.username });
      Alert.alert("Information", "User is loaded", [{ Text: "Ok" }]);
    } catch (err) {
      Alert.alert("Error", "" + err.message, [{ Text: "Ok" }]);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={this.inputHandler}
        ></TextInput>
        <View style={styles.button}>
          <Button title="Save" onPress={this.saveHandler}></Button>
        </View>
        <View style={styles.button}>
          <Button title="Load" onPress={this.loadHandler}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
    marginTop: 5,
  },
  button: {
    marginTop: 5,
    marginBottom: 5
  }
});
