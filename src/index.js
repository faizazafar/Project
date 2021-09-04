import React from 'react';

//Navigations here
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Tabbar from './components/Tabbar';
import Drawer from './components/Drawer';

//Screens
import {Home,Dashboard,carlocked,Splash,camera,congrats,contact,cropregion,alert,livefeed,lock,login,Mapdash,membership,objdet,opt,payment,profile,register,showregion} from './containers';

// const AddChildStack = createStackNavigator({
//   Language: {screen: Language},
//   ParentAcc: {screen: ParentAcc},
//   Questionnaire: {screen: Questionnaire},
//   Interests: {screen: Interests},
// },

//   {
//     initialRouteName: 'Language',
//     headerMode: 'none',
//   },)

const Authstack = createStackNavigator(
  {
    Splash:{screen:Splash},
    Home: {screen:Home},
    Login: {screen: login},
    Register:{screen:register},
    Otp:{screen:opt},
    Congrats:{screen:congrats},
    Dashboard:{screen:Dashboard},
    // CustomerApprove:{screen:CustomerApprove},
    // TableView:{screen:TableView}

  },

  {
    initialRouteName: 'Splash',
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: '#FFFFFF' },
    },
  },
);
// const SignUpExtra = createStackNavigator(
//   {
//     OtherFinish: {screen: OtherFinish},
//   },
//   {
//     initialRouteName:"OtherFinish",
//     headerMode: 'none',

//   }
// )
// const ExploreStack = createStackNavigator(
//   {
//     App: {screen:App},
//     Payment: {screen:Payment},
//     BookDetails: {screen: BookDetails},
//     PlayBook: {screen: PlayBook},
//     WebviewPage:{screen:WebviewPage}

//   },

//   {
//     initialRouteName: 'App',
//     headerMode: 'none',
//   },
// );
// const SearchStack = createStackNavigator(
//   {
//     App: {screen:Search},
//     BookDetails: {screen: BookDetails},
//     PlayBook: {screen: PlayBook},

//   },

//   {
//     initialRouteName: 'App',
//     headerMode: 'none',
//   },
//   );
//   const DownloadsStack = createStackNavigator(
//     {
//       Downloads: {screen:Downloads},
//       BookDetails: {screen: BookDetails},
//       PlayBook: {screen: PlayBook},
//   },

//   {
//     initialRouteName: 'Downloads',
//     headerMode: 'none',
//   },
// );
// const ParentsStack = createStackNavigator(
//   {
//     ParentProfile: {screen:ParentProfile},
//     Settings: {screen: Settings},

//   },

//   {
//     initialRouteName: 'ParentProfile',
//     headerMode: 'none',
//   },
// );

const AppStack = createBottomTabNavigator(
  {
  lock:{screen:lock},
    // CustomerApprove:{screen:CustomerApprove},
    // Map:{screen:Mapdash},
    // Drawer:{screen: Drawer},
    livefeed:{screen: livefeed},
    Dashboard:{screen:Dashboard},
        Map:{screen:Mapdash},

    alert:{screen: alert},

  },

  {
    initialRouteName: 'alert',
    tabBarComponent:(props)=><Tabbar  {...props}/>,
    headerMode: 'none',
  },
);
const DrawerStack = createDrawerNavigator(
  {
    Drawer:AppStack

  },

  {
    initialRouteName: 'Drawer',
    contentComponent:(props)=><Drawer  {...props}/>,
    headerMode: 'none',
  },
);

const RootStack = createAppContainer(
  createSwitchNavigator(
    {
      Authstack,
      AppStack:DrawerStack,
      // App: AppStack,
      // SignUpExtra: SignUpExtra,
      // AddChildStack: AddChildStack,
    },
    {
      initialRouteName: 'Authstack',
    },
  ),
);

export default RootStack;