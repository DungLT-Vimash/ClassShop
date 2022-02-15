import {
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableHighlight,
} from "react-native";
import React, { Component } from "react";

export default class ModalComponent extends Component {
  state = {
    modalVisible: false,
  };
  toggleModal = (visible) => {
    this.setState({ modalVisible: visible });
    // Alert.alert("Modal");
  };
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animation="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed");
          }}
        >
          <View>
            <Text>Modal is open</Text>
            <TouchableHighlight
              onPress={() => {
                this.toggleModal(false);
              }}
            >
              <Text>Close Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.toggleModal(true);
          }}
        >
          <Text style={styles.text}>Open Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#ede3f2",
        padding: 10,
        marginTop: 50,
    },
    modal:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ccc",
        height: 500,
        padding: 100
    },
    text: {
        color: "#3f2949",
        marginTop: 10,
    }
});
