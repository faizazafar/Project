import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  TouchableHighlight,
  Linking,
  Text,
  Image,
  View,
  Button,
  TextInput,
} from "react-native";

export default class opt extends React.Component {
  handleClick = () => {
    this.props.navigation.navigate("Congrats");
  };
  render() {
    return (
      <View
        style={{
          marginLeft: 35,
          marginRight: 35,
          marginTop: 200,
          marginBottom: 20,
        }}
      >
        <View style={{ alignItems: "center", alignContent: "center" }}>
          <Text style={{ marginTop: 20 }}>
            {" "}
            Please enter OTP verification {"\n"} code sent to your number{" "}
          </Text>
          <View style={styles.SectionStyle}>
            <Text>First Name {"\n "}</Text>

            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Code"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
        </View>
        <TouchableHighlight
          style={styles.submit}
          onPress={this.handleClick}
          underlayColor="#fff"
        >
          <Text style={styles.getstart}>Continue</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  submit: {
    marginRight: 60,
    marginLeft: 60,
    marginTop: 30,

    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#272F58",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
    alignContent: "center",
    alignItems: "center",
  },
  getstart: {
    color: "#fff",
  },
});
