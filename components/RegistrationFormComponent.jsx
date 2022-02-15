import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native'
import React, { Component } from 'react'

export default class RegistrationFormComponent extends Component {
    state = {
        username: "",
        password: "",
    };
    textChangeHandle = (id,text) => {
        this.setState({...this.state, [id]: text});
    }
    // usernameChangeHandler = (text) => {
    //     this.setState({...this.state, username: text});
    //     console.log(this.state);
    // }
    // passwordChangeHandler = (text) => {
    //     this.setState({...this.state, password: text});
    //     console.log(this.state);
    // }
    registerHandler = () => {
        Alert.alert(
            "your infomation",
            `Username: ${this.state.username} and Password: ${this.state.password}`,
            [{text: "Ok"}]
        )
    }
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.form}>
            <View style={styles.formControl}>
                <Text style={styles.label}>username</Text>
                <TextInput style={styles.input} onChangeText = {this.textChangeHandle.bind(this,'username')}></TextInput>
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>PassWord</Text>
                <TextInput style={styles.input} onChangeText = {this.textChangeHandle.bind(this,'password')}></TextInput>
            </View>
            <View>
                <Button title="register" onPress={this.registerHandler}></Button>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 20,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8, 
        elevation: 5, 
        borderRadius: 10,
    },
    form: { 
        // backgroundColor: "red"
    },
    formControl: {
        width: "100%",
    },
    label: {
        marginTop: 10,
        // backgroundColor: "blue",
        alignItems: "flex-start"
    },
    input: {
        width: "100%",
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
})