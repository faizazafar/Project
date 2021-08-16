// import React, { Component } from "react";
// import { StatusBar } from "expo-status-bar";

// import {
//   StyleSheet,
//   TouchableHighlight,
//   Linking,
//   Text,
//   Image,
//   View,
//   Button,
// } from "react-native";

// export default class congrats extends React.Component {
//   handleClick = () => {
//     this.props.navigation.navigate("Dashboard");
//   };
//   render() {
//     return (
//       <View>
//         <View
//           style={{
//             alignItems: "center",
//             justifyContent: "center",
//             alignContent: "center",
//             marginLeft: 35,
//             marginRight: 35,
//             marginTop: 200,
//             marginBottom: 20,
//           }}
//         >
//           <Text style={{ alignItems: "center", alignContent: "center" }}>
//             {" "}
//             CONGRATULATIONS{" "}
//           </Text>
//         </View>
//         <TouchableHighlight
//           style={styles.submit}
//           onPress={this.handleClick}
//           underlayColor="#fff"
//         >
//           <Text style={styles.getstart}>Continue</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   submit: {
//     marginRight: 60,
//     marginLeft: 60,

//     paddingTop: 20,
//     paddingBottom: 20,
//     backgroundColor: "#272F58",
//     borderRadius: 30,
//     borderWidth: 1,
//     borderColor: "#fff",
//     alignContent: "center",
//     alignItems: "center",
//   },
//   getstart: {
//     color: "#fff",
//   },
// });

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  ListView,
  TouchableOpacity,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

export default class congrats extends React.Component {
  handleClick = () => {
    this.props.navigation.navigate("AppStack");
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://img.icons8.com/color/70/000000/facebook-like.png",
          }}
        />
        <Text style={styles.title}>
          Congrats, your account has {"\n"} been registered
        </Text>
        <Text style={styles.description}>
          Now you can watch live feeds of your parked car and feel free about
          security concerns
        </Text>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.handleClick}
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
