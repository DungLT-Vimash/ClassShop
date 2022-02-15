import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AsyncStorageComponent from "./components/AsyncStorageComponent";
import DisplayTest from "./components/DisplayTest";
import EmployeeListComponent from "./components/EmployeeListComponent";
import FadeInComponent from "./components/FadeInComponent";
import FetchComponent from "./components/FetchComponent";
import FlexboxComponent from "./components/FlexboxComponent";
import IconComponent from "./components/IconComponent";
import ImageComponent from "./components/ImageComponent";
import LocationComponent from "./components/LocationComponent";
import ModalComponent from "./components/ModalComponent";
import PickerComponent from "./components/PickerComponent";
import RegistrationFormComponent from "./components/RegistrationFormComponent";
import ScrollviewComponent from "./components/ScrollviewComponent";
import StylingComponent from "./components/StylingComponent";
import SwitchComponent from "./components/SwitchComponent";
import TouchableComponent from "./components/TouchableComponent";
import WebViewComponent from "./components/WebViewComponent";

class App extends Component {
  state = {
    message: "Hello React Native Application",
    number: 0,
  };
  render() {
    return (
      <AsyncStorageComponent></AsyncStorageComponent>
      // <LocationComponent></LocationComponent>
      // <SwitchComponent></SwitchComponent>
      // <PickerComponent></PickerComponent>
      // <ModalComponent></ModalComponent>
      // <WebViewComponent></WebViewComponent>
      // <FadeInComponent></FadeInComponent>
      // <TouchableComponent></TouchableComponent>
      // <FetchComponent></FetchComponent>
      // <IconComponent></IconComponent>
      // <ImageComponent></ImageComponent>
      // <ScrollviewComponent></ScrollviewComponent>
      // <View
      //   style={{
      //     flex: 1,
      //     justifyContent: 'center',
      //     alignItems: 'stretch',
      //     padding: 10,
      //   }}
      // >
      //   <RegistrationFormComponent></RegistrationFormComponent>
      // </View>
      // <EmployeeListComponent></EmployeeListComponent>
      // <FlexboxComponent></FlexboxComponent>
      // <StylingComponent></StylingComponent>
      //   <View style={styles.container}>
      //   <DisplayTest content={this.state.message} size={20}></DisplayTest>
      //   <DisplayTest content={this.state.number} size={25}></DisplayTest>
      //   <DisplayTest content="Display" size={30}></DisplayTest>
      //   {/* <Text>{this.state.message}</Text>
      //   <Text>{this.state.number}</Text> */}
      //   <Button
      //     title='Increase'
      //     onPress={() => {
      //       this.setState({...this.state, number: this.state.number + 1});
      //     }}
      //   ></Button>
      //   <StatusBar style="auto" />
      // </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
