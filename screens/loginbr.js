import React, { Component } from "react";
import { Text, View } from "react-native";

export default class loginbr extends React.Component {
  abc() {
    this.props.navigation.navigate("congratsscreen");
  }
  render() {
    return <View></View>;
  }
}
