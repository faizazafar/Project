import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";

export default class lock extends React.Component {
  handleClick = () => {
    this.props.navigation.navigate("cropregion");
  };
  render() {
    return (
      <View style={{flex:1, justifyContent: "center", backgroundColor:'white'  }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            marginLeft: 35,
            marginRight: 35,
            marginTop: 100,
            marginBottom: 20,
          }}
        >
          <Text style={styles.para}>Do you want to lock your car ? </Text>
        </View>

        <TouchableOpacity
          style={styles.submit}
          onPress={this.handleClick}
          underlayColor="#fff"
        >
          <Text style={styles.getstart}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  submit: {
    marginRight: 60,
    marginLeft: 60,
    backgroundColor: "#272F58",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  getstart: {
    color: "#fff",
    fontSize: 20,
  },
  para: {
    fontSize: 20,
  },
});
