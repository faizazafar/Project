import React, { Component,useState, createRef } from "react";
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
  Linking,
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
// const db = SQLite.openDatabase("db.db");

export default class index extends Component {
  constructor(props){
    super(props)
    this.state={
      userEmail:'',
      userPassword:''
    }
  }
  login = () =>{
    const {userEmail,userPassword} = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(userEmail==""){
      //alert("Please enter Email address");
      this.setState({email:'Please enter Email address'})
      
    }
    
    else if(reg.test(userEmail) === false)
    {
    alert("Email is Not Correct");
    // this.setState({email:'Email is Not Correct'})
    return false;
      }
  
    else if(userPassword==""){
      alert("Password is Not Correct");
  
    }
    else{
      var formdata = new FormData();
      formdata.append("email", userEmail);
      formdata.append("password", userPassword);
      fetch('http://18.224.158.253/plac/public/api/signin?=&=',{
        method:'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body:formdata
        
      })
      .then((response) => response.json())
      .then((responseJson)=>{
        if(responseJson.status===true){
          // redirect to profile page
          console.log(responseJson)
          alert("Successfully Login");
          this.props.navigation.navigate("AppStack");
        }else{
           console.log(userEmail,userPassword)
          console.log(responseJson)

           alert("Wrong Login Details");
         }
       })
       .catch((error)=>{
       console.error(error);
       });
      } 
    Keyboard.dismiss();
  };
  
  render() {
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
                  onChangeText={userEmail => this.setState({userEmail})}
                  style={styles.inputStyle}
                  placeholder="Enter Email" //12345
                  placeholderTextColor="#8b9cb5"
                  keyboardType="default"
                  // value={this.state.userPassword}
                  // onSubmitEditing={Keyboard.dismiss}
                  // blurOnSubmit={false}
                  // secureTextEntry={true}
                  underlineColorAndroid="#f000"
                  returnKeyType="next"
     
                />
              </View>
            </ScrollView>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                // value={this.state.userPassword}
                onChangeText={userPassword => this.setState({userPassword})}
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
                this.login()
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
              onPress={()=>{Linking.openURL('tel:03353785571');} }
            >
              Contact Us
              </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  
    )
  }
}




// export default ('login', () => login);

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
