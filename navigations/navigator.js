
import React from "react";
import { View, Text } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import login from "../screens/login.js";
import register from "../screens/register.js";
import Home from "../screens/Home.js";

// import Dashboard from "../screens/Dashboard.js";
import opt from "../screens/opt.js";
import livefeed from "../screens/livefeed.js";
import lock from "../screens/lock.js";
import congrats from "../screens/congrats.js";
import carlocked from "../screens/carlocked.js";
import Mapdash from "../screens/Mapdash.js";
import profile from "../screens/profile.js";
import payment from "../screens/payment.js";
import cropregion from "../screens/cropregion.js";

const dash = createStackNavigator({
  lockscreen: { screen: lock },
  cropregionscreen:{screen:cropregion},

});
const dash1 = createStackNavigator({
  Mapdashscreen: { screen: Mapdash },
});
const dash2 = createStackNavigator({
  livefeedscreen: { screen: livefeed },
  carlockedscreen: { screen: carlocked },
  cropregionscreen:{screen:cropregion},
  MapdashScreen: { screen: Mapdash },
  // Insertscreen: { screen: Insert },
  // ViewScreen: { screen: ViewData },
});

// export default createAppContainer(myDrawer);
const TabNavigator = createBottomTabNavigator(
  {
    CameraLoc: dash,
    CameraLoc1: dash1,
    CameraLoc2: dash2,
  }
  // {
  //   defaultNavigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ color, size }) => (
  //       const { routeName } = navigation.state;

  //       if(routeName === 'CameraLoc')
  //       {

  //       }
  //       <MaterialCommunityIcons name="camera" color={color} size={size} />
  //     ),
  //   }),
  // }
);

const Homestack = createStackNavigator(
  {
    Homescreen: { screen: Home },
  },
  {
    headerMode: "none",
  }
);
const loginstack = createStackNavigator(
  {
    loginscreen: { screen: login },
    // ObjectdDetScreen: { screen: ObjectdDet },
    // loginbrscreen: { screen: loginbr },
    registerscreen: { screen: register },
    optscreen: { screen: opt },
    congratsscreen: { screen: congrats },
  },
  {
    headerMode: "none",
  }
);
// const Dashboardstack = createStackNavigator(
//   {
//     Dashboardscreen: { screen: Dashboard },
//   },
//   {
//     headerMode: "none",
//   }
// );

const myDrawer = createDrawerNavigator({
  profiledr: { screen: profile },
  paymentdr: { screen: payment },
  cropregion: { screen: cropregion },

  headerMode: "none",
  
},
{
  initialRouteName: "profiledr",
  useNativeAnimations:false,
  contentComponent:props => <CustomDrawer {...props} />
}
);
class CustomDrawer extends React.Component{
  render() {
    return <View style={{flex:1,backgroundColor:'red'}}> </View>
    
  }
}
const RootStack = createSwitchNavigator(
  {
    AppHome: Homestack,
    Applogin: loginstack,

    AppTabnavigator: TabNavigator,

    AppDrawer: myDrawer,
  },
  {
    initialRouteName: "AppHome",
  }
);

export default createAppContainer(RootStack);
