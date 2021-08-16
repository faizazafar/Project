// import React, { Component } from "react";
// import {
//   Text,
//   View,
//   Image,
//   StyleSheet,
//   TouchableHighlight,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import TabNavigator from "../screens/index.js";
// import DrawerNavigator from "../screens/Drawer.js";
// import { Index, Drawer } from "./combined.js";
// import { left } from "native-base";
// import "react-native-gesture-handler";
// // import { createDrawerNavigator } from "@react-navigation/drawer";
// // import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "react-navigation-stack";
// import { createDrawerNavigator } from "react-navigation-drawer";
// import { createBottomTabNavigator } from "react-navigation-tabs";

// import { createAppContainer, createSwitchNavigator } from "react-navigation";
// // import { createStackNavigator } from "@react-navigation/stack";
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { LogBox } from "react-native";
// LogBox.ignoreLogs(["Remote debugger"]);
// import livefeed from "./livefeed.js";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Mapdash from "./Mapdash.js";
// import lock from "./lock.js";
// import Bottom_tab from "./Bottom_tab.js";
// import profile from "./profile.js";
// import logout from "./logout.js";
// import history from "./history.js";
// import payment from "./payment.js";
// import membership from "./membership.js";
// import about from "./about.js";
// import carlocked from "./carlocked.js";
// // const Stack = createStackNavigator();
// // const Tab = createBottomTabNavigator();
// // const Drawer = createDrawerNavigator();

// // const NavigationDrawerStructure = (props) => {
// //   //Structure for the navigatin Drawer
// //   const toggleDrawer = () => {
// //     //Props to open/close the drawer
// //     props.navigationProps.toggleDrawer();
// //   };

// //   return (
// //     <View style={{ flexDirection: "row" }}>
// //       <TouchableOpacity onPress={() => toggleDrawer()}>
// //         {/*Donute Button Image */}
// //         <Image
// //           source={{
// //             uri:
// //               "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
// //           }}
// //           style={{
// //             width: 25,
// //             height: 25,
// //             marginLeft: 5,
// //           }}
// //         />
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // function thirdScreenStack({ navigation }) {
// //   return (
// //     <Stack.Navigator initialRouteName="livefeed">
// //       <Stack.Screen
// //         name="LiveFeed"
// //         component={livefeed}
// //         options={{
// //           title: "LiveFeed", //Set Header Title
// //           headerLeft: () => (
// //             <NavigationDrawerStructure navigationProps={navigation} />
// //           ),
// //           headerStyle: {
// //             backgroundColor: "#f4511e", //Set Header color
// //           },
// //           headerTintColor: "#fff", //Set Header text color
// //           headerTitleStyle: {
// //             fontWeight: "bold", //Set Header text style
// //           },
// //         }}
// //       />
// //     </Stack.Navigator>
// //   );
// // }

// // function secondScreenStack({ navigation }) {
// //   return (
// //     <Stack.Navigator initialRouteName="lock">
// //       <Stack.Screen
// //         name="Lock"
// //         component={lock}
// //         options={{
// //           title: "Lock", //Set Header Title
// //           headerLeft: () => (
// //             <NavigationDrawerStructure navigationProps={navigation} />
// //           ),
// //           headerStyle: {
// //             backgroundColor: "#f4511e", //Set Header color
// //           },
// //           headerTintColor: "#fff", //Set Header text color
// //           headerTitleStyle: {
// //             fontWeight: "bold", //Set Header text style
// //           },
// //         }}
// //       />
// //     </Stack.Navigator>
// //   );
// // }
// // function firstScreenStack({ navigation }) {
// //   return (
// //     <Stack.Navigator initialRouteName="Dashboard">
// //       <Stack.Screen
// //         name="Home"
// //         component={Dashboard}
// //         options={{
// //           title: "Home", //Set Header Title
// //           headerLeft: () => (
// //             <NavigationDrawerStructure navigationProps={navigation} />
// //           ),
// //           headerStyle: {
// //             backgroundColor: "#f4511e", //Set Header color
// //           },
// //           headerTintColor: "#fff", //Set Header text color
// //           headerTitleStyle: {
// //             fontWeight: "bold", //Set Header text style
// //           },
// //         }}
// //       />
// //     </Stack.Navigator>
// //   );
// // }

// // function Tabval({ navigation }) {
// //   return (
// //     <Tab.Navigator
// //       initialRouteName="Dashboard"
// //       tabBarOptions={{
// //         activeTintColor: "#272F58",
// //       }}
// //     >
// //       <Tab.Screen
// //         name="LIVEFEED"
// //         component={livefeed}
// //         options={{
// //           tabBarLabel: "livefeed",
// //           headerLeft: () => (
// //             <NavigationDrawerStructure navigationProps={navigation} />
// //           ),
// //           headerStyle: {
// //             backgroundColor: "#f4511e", //Set Header color
// //           },
// //           tabBarIcon: ({ color, size }) => (
// //             <MaterialCommunityIcons name="camera" color={color} size={size} />
// //           ),
// //         }}
// //       />
// //       <Tab.Screen
// //         name="Dashboard"
// //         component={Mapdash}
// //         options={{
// //           tabBarLabel: "Dashboard",
// //           headerLeft: () => (
// //             <NavigationDrawerStructure navigationProps={navigation} />
// //           ),
// //           headerStyle: {
// //             backgroundColor: "#f4511e", //Set Header color
// //           },
// //           tabBarIcon: ({ color, size }) => (
// //             <MaterialCommunityIcons
// //               name="view-dashboard"
// //               color={color}
// //               size={size}
// //             />
// //           ),
// //         }}
// //       />

// //       <Tab.Screen
// //         name="LOCK"
// //         component={lock}
// //         options={{
// //           tabBarLabel: "lock",
// //           headerLeft: () => (
// //             <NavigationDrawerStructure navigationProps={navigation} />
// //           ),
// //           headerStyle: {
// //             backgroundColor: "#f4511e", //Set Header color
// //           },
// //           tabBarIcon: ({ color, size }) => (
// //             <MaterialCommunityIcons name="lock" color={color} size={size} />
// //           ),
// //         }}
// //       />
// //       <Tab.Screen
// //         name="CARLOCKED"
// //         component={carlocked}
// //         options={{
// //           tabBarLabel: "lock",
// //           headerLeft: () => (
// //             <NavigationDrawerStructure navigationProps={navigation} />
// //           ),
// //           headerStyle: {
// //             backgroundColor: "#f4511e", //Set Header color
// //           },
// //           tabBarIcon: ({ color, size }) => (
// //             <MaterialCommunityIcons name="lock" color={color} size={size} />
// //           ),
// //         }}
// //       />
// //     </Tab.Navigator>
// //   );
// // }

// // function grval({ navigation }) {
// //   return (
// //     <Tab.Navigator
// //       initialRouteName="carlocked"
// //       tabBarOptions={{
// //         activeTintColor: "#272F58",
// //       }}
// //     ></Tab.Navigator>
// //   );
// // }

// // const TabNavigator = createBottomTabNavigator({
// //   CameraLoc: livefeed,
// //   CameraLoc1: Mapdash,
// //   CameraLoc2: lock,
// // });
// // const myDrawer = createDrawerNavigator({
// //   profiledr: { screen: profile },
// //   paymentdr: { screen: payment },
// //   lockdr: { screen: lock },
// // });

// export default class Dashboard extends React.Component {
//   //   //   constructor(props) {
//   //   //     super(props);
//   //   //     this.state = {
//   //   //       region: null,
//   //   //     };

//   //   //     this._getLocationAsync();
//   //   //   }

//   //   //   _getLocationAsync = async () => {
//   //   //     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//   //   //     if (status !== "granted") console.log("PERMISSION DENIED");

//   //   //     let location = await Location.getCurrentPositionAsync({
//   //   //       enabledHighAccuracy: true,
//   //   //     });

//   //   //     let region = {
//   //   //       latitude: location.coords.latitude,
//   //   //       longitude: location.coords.longitude,
//   //   //       latitudeDelta: 0.045,
//   //   //       longitudeDelta: 0.045,
//   //   //     };

//   //   //     this.setState({ region: region });
//   //   //     // alert(location.coords.latitude)
//   //   //     // alert(location.coords.longitude)
//   //   //   };

//   render() {
//     // const AppNavigate = createAppContainer(TabNavigator, myDrawer);
//     return (
//       <Drawer /> //       createDrawerNavigator({
//       //         Homescreen: { screen: Home },
//       //       })

//       //       // <Drawer.Navigator initialRouteName="Dashboard">
//       //       //   {/* <Image
//       //       //     style={styles.icon}
//       //       //     source={{
//       //       //       uri:
//       //       //         "https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg",
//       //       //     }}
//       //       //   /> */}

//       //       //   <Drawer.Screen name="Home" component={Tabval} />
//       //       //   {/* <Drawer.Screen name="Ground" component={grval} /> */}
//       //       //   <Drawer.Screen name="Profile" component={profile} />
//       //       //   <Drawer.Screen name="Logout" component={logout} />
//       //       //   <Drawer.Screen name="Payment" component={payment} />
//       //       // </Drawer.Navigator>

//       //       // <NavigationContainer>
//       //   <Tab.Navigator
//       //     initialRouteName="Dashboard"
//       //     tabBarOptions={{
//       //       activeTintColor: "#272F58",
//       //     }}
//       //   >
//       //     <Tab.Screen
//       //       name="LIVEFEED"
//       //       component={livefeed}
//       //       options={{
//       //         tabBarLabel: "livefeed",
//       //         tabBarIcon: ({ color, size }) => (
//       //           <MaterialCommunityIcons name="camera" color={color} size={size} />
//       //         ),
//       //       }}
//       //     />
//       //     <Tab.Screen
//       //       name="Dashboard"
//       //       component={Mapdash}
//       //       options={{
//       //         tabBarLabel: "Dashboard",
//       //         tabBarIcon: ({ color, size }) => (
//       //           <MaterialCommunityIcons
//       //             name="view-dashboard"
//       //             color={color}
//       //             size={size}
//       //           />
//       //         ),
//       //       }}
//       //     />

//       //     <Tab.Screen
//       //       name="LOCK"
//       //       component={lock}
//       //       options={{
//       //         tabBarLabel: "lock",
//       //         tabBarIcon: ({ color, size }) => (
//       //           <MaterialCommunityIcons name="lock" color={color} size={size} />
//       //         ),
//       //       }}
//       //     />
//       //   </Tab.Navigator>
//       // );
//     );
//   }
// }
// //       // </NavigationContainer>
// //       //   <Drawer.Navigator
// //       //     drawerContentOptions={{
// //       //       activeTintColor: "#e91e63",
// //       //       itemStyle: { marginVertical: 5 },
// //       //     }}
// //       //   >
// //       //     <Drawer.Screen
// //       //       name="FirstPage"
// //       //       options={{ drawerLabel: "First page Option" }}
// //       //       component={firstScreenStack}
// //       //     />
// //       //     <Drawer.Screen
// //       //       name="SecondPage"
// //       //       options={{ drawerLabel: "Second page Option" }}
// //       //       component={secondScreenStack}
// //       //     />
// //       //   </Drawer.Navigator>
// //       //       <Stack.Navigator
// //       //         initialRouteName="Dashboard"
// //       //         screenOptions={{
// //       //           headerShown: false,
// //       //         }}
// //       //       >
// //       //         <Stack.Screen name="Home" component={Bottom_tab} />

// //       // <View style={styles.container}>

// //       //         <Text
// //       //           style={{ marginTop: 100, fontSize: 30, alignItems: "center" }}
// //       //         >
// //       //           {" "}
// //       //           Dashboard{" "}
// //       //         </Text>
// //       //         <View>
// //       //           <MapView
// //       //             initialRegion={this.state.region}
// //       //             showsUserLocation={true}
// //       //             showsCompass={true}
// //       //             rotateEnabled={false}
// //       //             style={styles.map}
// //       //             showsMyLocationButton={true}
// //       //           />
// //       //         </View>
// //       //       {/* </Stack.Navigator> */}

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //   },
// // });

// // const Dashboard = createDrawerNavigator({
// //   profiler: { screen: profile },
// //   payment: { screen: payment },
// //   lock: { screen: lock },
// // });
// // export default createAppContainer(Dashboard);

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View  style={{
        flex: 1,
        paddingTop: getStatusBarHeight(),
        backgroundColor: 'white',
      }}>
        <Text> Dashboard </Text>
      </View>
    );
  }
}
