// import React from "react";
// import { View, Text } from "react-native";
// import { createAppContainer, createSwitchNavigator } from "react-navigation";
// // import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from "react-navigation-drawer";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Index from "./index.js";
// import About from "./about.js";
// import opt from "../screens/opt.js";
// import livefeed from "../screens/livefeed.js";
// import lock from "../screens/lock.js";
// import congrats from "../screens/congrats.js";
// import carlocked from "../screens/carlocked.js";
// import Mapdash from "..//screens/Mapdash.js";
// import profile from "..//screens/profile.js";
// import payment from "..//screens/payment.js";
// import showregion from "../screens/showregion.js";
// import { Component } from "react";

// const myDrawer = createDrawerNavigator(
//   {
//     // Home:  Index ,
//     Profile: { screen: profile },
//     Payment: { screen: payment },
//     showregion: { screen: showregion },
//   },
//   {
//     initialRouteName: "showregion",
//     useNativeAnimations:false,
//     contentComponent:props => <CustomDrawer {...props} />
//   }
// );

// export default createAppContainer(myDrawer);


// class CustomDrawer extends Component{
//   render(){
//     return <View style={{flex:1,backgroundColor:'red'}}></View>
//   }
// }