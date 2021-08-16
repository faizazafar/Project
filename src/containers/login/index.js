import React, { useState, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert,
} from "react-native";
// import * as firebase from "firebase";
// import database from "@react-native-firebase/database";
// import Navigator from "./register.js";
import * as SQLite from "expo-sqlite";
// import AsyncStorage from "@react-native-community/async-storage";
// import Dashboard from "./Dashboard";
// import loginbr from "./loginbr.js";
// import { createStackNavigator } from "react-navigation-stack";
// // firebase.initializeApp({
// //   apiKey: "AIzaSyBQAZRPSg7VvXLr1vGNR02HZFxGkjepK-w",
// //   authDomain: "SecureGaddi.firebaseapp.com",
// //   databaseURL: "https://gaddi-38acd-default-rtdb.firebaseio.com",
// //   projectId: "gaddi-38acd",
// //   storageBucket: "gaddi-38acd.appspot.com",
// //   messagingSenderId: "511019454156",
// //   appId: "1:511019454156:android:46aa8619785a889631fc69",
// //   measurementId: "G-8GSGZQ44ST",
// // });
const db = SQLite.openDatabase("db.db");

const login = ({ navigation }) => {
  const [email, setText] = React.useState(null);
  const [password, setPass] = React.useState(null);

  //   CHECK(typeof('password') = 'text' AND length('password') >= 6 )
  // React.useEffect(() => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "create table if not exists UR (id integer primary key not null, email text , password text ,mobile integer ,fname text ,lname text  );"
  //     );
  //   });
  // }, []);

  const add = (email, password) => {
    // is text empty?
    if (
      email === null ||
      email === "" ||
      password === null ||
      password === ""
    ) {
      // db.transaction((tx) => {
      //   tx.executeSql("drop table UR ;");
      // });
      console.log("FALSE");
    }
    db.transaction((tx, res) => {
      tx.executeSql(
        "select * from UR where email = `email` and password = `password` ",
        [email, password]
      );
      if (length(res) > 0) {
        console.log("SUCCESSFUL LOGIN");
        // navigation.navigate("Dashboard");
      } else {
        Alert.alert("Credentials Are Wrong");
      }
    }, null);
  };

  // export default function onRegister() {

  // db.transaction((tx) => {
  //   tx.executeSql("insert into UR (email, password) values (?, ?)", [text]);
  //   tx.executeSql("select * from UR", [], (_, { rows }) =>
  //     console.log(JSON.stringify(rows))
  //   );
  // }, null);

  // const { fname, lname, mobile, email, password, nameError } = this.state;
  // // if (this.state.text === " ") {
  // //   this.setState(() => ({ nameError: "Required" }));
  // // }
  // if (
  //   (this.state.password != "") &
  //   (this.state.email != "") &
  //   (this.state.mobile != "") &
  //   (this.state.fname != "") &
  //   (this.state.lname != "")
  // ) {
  //   this.setState(() => ({ nameError: "" }));
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(
  //       this.state.email.trim(),
  //       this.state.password
  //     )
  //     .then((userId) => {

  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: "center" }}>
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
            </View>
            <ScrollView>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Enter Email" //dummy@abc.com
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  value={email}
                  onChangeText={(email) => setText({ email })}
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
            </ScrollView>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                value={password}
                onChangeText={(password) => setPass({ password })}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => {
                // add(email, password);
                // setText(null);
                // setPass(null);
                navigation.navigate("AppStack");
              }}
            >
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <View
              style={{ position: "absolute", top: "50%", right: 0, left: 0 }}
            ></View>

            <Text style={styles.plain}>Don't have an account ?</Text>
            <Text
              style={styles.registerTextStyle}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              Signup
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default login;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignContent: "center",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#272F58",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },

  logo: {
    width: 100,
    height: 40,
    bottom: 20,
    top: 20,
  },
  inputStyle: {
    flex: 1,
    color: "black",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  registerTextStyle: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  plain: {
    color: "black",
    textAlign: "center",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
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
});
// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";

// const Home = ({ navigation }) => (
//   <View>
//     <TouchableOpacity
//       onPress={() => {
//         navigation.navigate("registerscreen");
//       }}
//     >
//       <Text>Click Here</Text>
//     </TouchableOpacity>
//   </View>
// );

// export default Home;
