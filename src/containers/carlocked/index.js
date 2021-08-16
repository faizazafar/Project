import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  ListView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export default class carlocked extends React.Component {
  handleClick = () => {
    this.props.navigation.navigate("MapdashScreen");
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={{
            uri:
              "https://i.pinimg.com/originals/9c/49/04/9c4904c7730fde517a3d2fba6641ff0c.gif",
          }}
        />
        <Text style={styles.title}>
          Congrats, your car has {"\n"} been locked
        </Text>
        <Text style={styles.description}>
          Now you can watch live feeds of your parked car and feel free about
          security concerns
        </Text>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.handleClick}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
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
