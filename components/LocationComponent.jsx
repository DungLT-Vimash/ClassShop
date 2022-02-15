import { Text, StyleSheet, View, Alert, Button } from "react-native";
import React, { Component } from "react";
import * as Location from "expo-location";

export default class LocationComponent extends Component {
  state = {
    location: null,
    error: "",
  };
  componentDidMount = () => {
    const requestPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        this.setState({
          ...this.state,
          error: "Permission to access location war denied",
        });
        return;
      }
      if (status === "granted") {
        Alert.alert("Information", "Permission has granted", [{ text: "Ok" }]);
      }
    };
    requestPermissions();
  };
  getLocationHandler = () => {console.log("ahihi")};
  render() {
    const { location, error } = this.state;
    let text = "Waiting ...";
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
        {!error && (
          <Button
            title="Get Location"
            onPress={this.getLocationHandler}
          ></Button>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
