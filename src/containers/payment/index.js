import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-input-credit-card";

export default class payment extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <CreditCardInput onChange={this._onChange} />
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    paddingTop: 50,
  },
  icon: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 22,
    color: "#5F6D7A",
  },
  description: {
    marginTop: 20,
    textAlign: "center",
    color: "#A9A9A9",
    fontSize: 16,
    margin: 40,
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#272F58",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
