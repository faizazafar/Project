// import React from "react";
// import { View, Text, Image } from "react-native";
// import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// // import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import CreateConnection from "../database/Create.js";
// import Insert from "../database/insert.js";
// import ViewData from "../database/select.js";
// import cropregion from "./cropregion";
// // import login from "../screens/login.js";
// // import register from "../screens/register.js";
// // import Home from "../screens/Home.js";
// // import Reg_log from "../screens/Reg_log.js";
// // import SplashScreen from "../screens/SplashScreen.js";
// // import Dashboard from "../screens/Dashboard.js";
// import opt from "../screens/opt.js";
// import livefeed from "../screens/livefeed.js";
// import lock from "../screens/lock.js";
// import congrats from "../screens/congrats.js";
// import carlocked from "../screens/carlocked.js";
// import Mapdash from "..//screens/Mapdash.js";
// import profile from "..//screens/profile.js";
// import payment from "..//screens/payment.js";
// const dash = createStackNavigator(
//   {
//     lockscreen: { screen: lock },
//   },
//   {
//     headerMode: "none",
//   }
// );
// const dash1 = createStackNavigator(
//   {
//     Mapdashscreen: { screen: Mapdash },
//   },
//   {
//     headerMode: "none",
//   }
// );
// const dash2 = createStackNavigator(
//   {
//     livefeedscreen: { screen: livefeed },
//     carlockedscreen: { screen: carlocked },
//     cropregionscreen:{screen:cropregion},
//     congratsscreen:{screen:congrats},
//     Mapdashscreen:{screen:Mapdash}
 
//   },
//   {
//     headerMode: "none",
//   }
// );
// // export default createAppContainer(myDrawer);
// const TabNavigator = createBottomTabNavigator(
//   {
//     LiveFeed: dash2,
//     Dashboard: dash1,
//     Lock: dash,
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor, color, size }) => {
//         const { routeName } = navigation.state;
//         if (routeName === "LiveFeed") {
//           return (
//             // <MaterialCommunityIcons name="camera" color={color} size={size} />
//             <Image
//               source={require("../Image/cctv.gif")}
//               style={{
//                 width: 50,
//                 height: 30,
//               }}
//             />
//           );
//         } else if (routeName === "Dashboard") {
//           return (
//             // <MaterialCommunityIcons
//             //   name="monitor-dashboard"
//             //   color={color}
//             //   size={size}
//             // />
//             <Image
//               source={require("../Image/map.gif")}
//               style={{
//                 width: 40,
//                 height: 30,
//               }}
//             />
//           );
//         } else if (routeName === "Lock") {
//           return (
//             // <MaterialCommunityIcons name="lock" color={color} size={size} />
//             <Image
//               source={require("../Image/lock.gif")}
//               style={{
//                 width: 40,
//                 height: 30,
//               }}
//             />
//           );
//         }
//       },
//     }),
//   },

//   {
//     initialRouteName: "Mapdash",
//   },

//   {
//     headerMode: "none",
//   }
// );

// export default TabNavigator;
