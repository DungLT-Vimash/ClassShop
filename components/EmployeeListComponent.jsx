import { Text, StyleSheet, View, FlatList } from "react-native";
import React, { Component } from "react";

const DummyData = [
  { id: 1, name: "AnhNN" },
  { id: 2, name: "LTD" },
  { id: 3, name: "LD" },
  { id: 4, name: "DanhLD" },
  { id: 5, name: "DungLD" },
  { id: 6, name: "DanhLT" },
  { id: 7, name: "HungNQ" },
  { id: 8, name: "Test" },
  { id: 9, name: "Test2" },
  { id: 10, name: "Test3" },
  { id: 11, name: "Test4" },
];

export default class EmployeeListComponent extends Component {
  state = {
    employees: DummyData,
  };
  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.state.employees}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <View style={styles.itemData}>
            <Text>{itemData.item.name}</Text>
          </View>
        )}
      ></FlatList>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 15,
    margin: 20,
    width: "90%",
  },
  itemData: {
    alignItems: "flex-start",
    margin: 10,
    paddingBottom: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
