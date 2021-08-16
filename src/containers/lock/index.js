import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default class lock extends React.Component {
  handleClick = () => {
    this.props.navigation.navigate("cropregionscreen");
  };
  render() {
    return (
      <View style={{ justifyContent: "center",alignItems:'center',
      flex: 1,
      // backgroundColor: '#F6F7F9',
      paddingTop: 20 + getStatusBarHeight(),
      padding:20
      }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",

          }}
        >
          <Image style={{height:200,width:200}} source={{uri:'https://i.gifer.com/MeG.gif'}} />
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
    marginTop:10,
    backgroundColor: "#272F58",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
    // alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:70,
    paddingVertical:10
  },
  getstart: {
    color: "#fff",
    fontSize: 20,
    alignItems:'center',
    justifyContent:'center'
  },
  para: {
    fontSize: 20,
    marginTop:10
  },
});
