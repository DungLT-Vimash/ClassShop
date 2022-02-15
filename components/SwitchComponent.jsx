import { Text, StyleSheet, View, Switch } from "react-native";
import React, { Component } from "react";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

export default class SwitchComponent extends Component {
  state = {
    isEnabled: false,
  };
  toggleSwitch = () => {
    this.setState({ ...this.state, isEnabled: !this.state.isEnabled });
    // this.setState({ ...this.state, isEnabled: !isEnabled });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Visible</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={this.toggleSwitch}
          value={this.state.isEnabled}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
