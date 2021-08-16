import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";

import {
  StyleSheet,
  TouchableHighlight,
  Linking,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default class Home extends React.Component {
  handleClick = () => {
    this.props.navigation.navigate("Login");
  };
  render() {
    return (
      <View 
      style={{   flex: 1,
        alignItems: "center",
        justifyContent:'center',
        paddingTop: 20 + getStatusBarHeight()
        ,marginBottom:50}}>
        <View style={styles.containerChild1}>
          <Image
            style={styles.logo}
            source={{
              uri:
                "https://i.pinimg.com/originals/46/cc/f1/46ccf1eb2c317642e702313020812921.png",
            }}
          />
          <Text style={styles.head1}>Secure</Text>
          <Text style={styles.head2}>Gaddi</Text>
          <Text style={styles.para}>Get your vehicle safe and secure</Text>

          {/* <StatusBar style="auto" /> */}
        </View>
        <View style={styles.containerChild2}></View>
        <TouchableOpacity
          style={styles.submit}
          onPress={this.handleClick}
          underlayColor="#fff"
        >
          <Text style={styles.getstart}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerChild1: {
    // flex: 1,
    alignItems: "center",

  },

  logo: {
    width: 100,
    height: 40,
    bottom: 20,
    top: 20,
  },
  head1: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#D86363",
    right: 40,
    top: 10,
    bottom: 0,
  },

  head2: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#272F58",
    left: 20,
    right: 0,
  },

  para: {
    fontSize: 14,
    color: "#272F58",
  },
  containerChild2: {
    alignItems: "center",
    // marginTop: 150,
    paddingTop: 20,
    paddingBottom: 20,
    height: 50,
    width: 100,
  },
  submit: {

    paddingVertical:20,
    paddingHorizontal:60,

    backgroundColor: "#272F58",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent:'center'
  },
  getstart: {
    color: "#fff",
  },
});
