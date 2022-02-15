import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { Picker } from "@react-native-picker/picker";

const Countries = [
  { id: "vn", name: "vietnam" },
  { id: "us", name: "USA" },
];

export default class PickerComponent extends Component {
  state = {
    selectedValue: "Java",
    selectedCountry: "vn",
    countries: Countries,
  };
  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({ ...this.state, selectedValue: itemValue });
          }}
        >
          <Picker.Item label="Java" value="Java"></Picker.Item>
          <Picker.Item label="PHP" value="PHP"></Picker.Item>
          <Picker.Item label="Android" value="Android"></Picker.Item>
        </Picker>
        <Text>Selected Value: {this.state.selectedValue}</Text>
        <Picker
          selectedValue={this.state.selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ ...this.state, selectedCountry: itemValue })
          }
        >
          {this.state.map((item) => (
            <Picker.Item key={item.id} label={item.name} value={item.id}></Picker.Item>
          ))}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
  },
  picker: {
    height: 50,
    width: "100%",
  },
});
