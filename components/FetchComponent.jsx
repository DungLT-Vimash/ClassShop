import { Text, StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import React, { Component } from "react";

export default class FetchComponent extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null
  };
  componentDidMount() {
    this.setState({ ...this.state, isLoading: true, error: null });
    fetch("https://reactnative.dev/movies.json")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        // this.setState({ movies: json.movies });
        this.setState({ ...this.state, isLoading: false, movies: json.movies });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ ...this.state, isLoading: false, error: err});

      });
  }
  render() {
    if(this.state.error){
      return (
        <View style={{ flex: 1,justifyContent: 'center',alignItems:"center"}}>
          <Text>{this.state.error}</Text>
        </View>
      )
    }
    return (
      <View> 
      {
        this.state.isLoading ? (
          <ActivityIndicator style='large' color= 'red'></ActivityIndicator>
        ):(
          <FlatList
          data={this.state.movies}
          keyExtractor={(item, index) => {
            item.id;
          }}
          renderItem={({ item }) => (
            <View>
              <Text>
                {item.title} - {item.description}
              </Text>
            </View>
          )}
        ></FlatList>
        )
      }
        
      </View>
    );
  }
}

const styles = StyleSheet.create({});
