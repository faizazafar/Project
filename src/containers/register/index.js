import React, { useState, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as SQLite from "expo-sqlite";

// import * as firebase from "firebase";

// constructor(props) {
//   const [text, setText] = React.useState(null);

//   super(props);
//   this.state = {
//     fname: "",
//     lname: "",
//     mobile: "",
//     email: "",
//     password: "",
//     errors: "",
//     loading: false,
//   };
// }

const db = SQLite.openDatabase("db.db");

const register = ({ navigation }) => {
  const [email, setText] = React.useState(null);
  const [password, setPass] = React.useState(null);
  const [mobile, setMob] = React.useState(null);
  const [fname, setFname] = React.useState(null);
  const [lname, setLname] = React.useState(null);
  //   CHECK(typeof('password') = 'text' AND length('password') >= 6 )
  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists UR (id integer primary key not null, email text , password text ,mobile integer ,fname text ,lname text  );"
      );
    });
  }, []);

  const insertindb = async () => {
    console.log("INDAR AYA");

    let item = { fname, email, password };

    let result = await fetch("http://192.168.0.106:8000/api/register", {
      method: "POST",
      body: JSON.stringify({
        name: fname,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    // Object.keys(validation.errors).forEach((key) => {
    //   console.log(validation.errors[key]);
    // });
    result = await result.json();
    console.log(result);
    console.log("DONE WITH DATA");
  };

  const add = (email, password, mobile, fname, lname) => {
    // is text empty?
    if (
      email === null ||
      email === "" ||
      password === null ||
      password === "" ||
      mobile === null ||
      mobile === "" ||
      fname === null ||
      fname === "" ||
      lname === null ||
      lname === ""
    ) {
      // db.transaction((tx) => {
      //   tx.executeSql("drop table UR ;");
      // });
      // console.log("FALSE");
    }

    db.transaction((tx) => {
      tx.executeSql(
        "insert into UR (email, password, mobile, fname, lname) values (?, ?, ?, ?, ?)",
        [email, password, mobile, fname, lname]
      );
      tx.executeSql("select * from UR", [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
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

  //       if (firebase.auth().currentUser) {
  //         userId = firebase.auth().currentUser.uid;
  //         if (userId) {
  //           firebase
  //             .database()
  //             .ref("New_user/" + userId)
  //             .set({
  //               email: firebase.auth().currentUser.email.trim(),
  //               password: this.state.password,
  //               fname: this.state.fname,
  //               lname: this.state.lname,
  //               mobile: this.state.mobile,
  //             });
  //         }
  //       } else {
  //         this.setState(() => ({ nameError: "Required" }));
  //       }
  //     });
  // }

  // this.props.navigation.navigate("optscreen");

  // const { fname, lname, mobile, email, password } = this.state;
  // firebase
  //   .database()
  //   .ref("user")
  //   .set({
  //     email: this.state.email.trim(),
  //     password: this.state.password,
  //   })
  // this.props.navigation.navigate("optscreen");

  //   if (firebase.auth().currentUser) {
  //     userId = firebase.auth().currentUser.uid;
  //     if (userId) {
  //       firebase
  //         .database()
  //         .ref("users/" + userId)
  //         .set({
  //           fname: this.fname,
  //           lname: this.lname,
  //           mobile: this.mobile,
  //           email: this.email,
  //           password: this.password,
  //         });
  //     }
  //   }
  // };

  // firebase
  //   .auth()
  //   .createUserWithEmailAndPassword(
  //     this.state.email.trim(),
  //     this.state.password
  //   )
  //   .then((user) => {
  //     (user) => this.props.navigation.navigate("optscreen");
  //     if (firebase.auth().currentUser) {
  //       userId = firebase.auth().currentUser.uid;
  //       if (userId) {
  //         firebase
  //           .database()
  //           .ref("user/" + userId)
  //           .set({
  //             fname: this.fname,
  //             lname: this.lname,
  //             mobile: this.mobile,
  //             email: this.email,
  //             password: this.password,
  //           });
  //       }
  //     }
  //   });

  //   if (firebase.auth().currentUser) {
  //     userId = firebase.auth().currentUser.uid;
  //     if (userId) {
  //       firebase
  //         .database()
  //         .ref("user" + userId)
  //         .set({
  //           fname: this.fname,
  //           lname: this.lname,
  //           mobile: this.mobile,
  //           email: this.email,
  //           password: this.password,
  //         });
  //     }
  //   }
  // }

  // // firebase
  //   .database()
  //   .ref("user")
  //   .set({
  //     email: this.state.email.trim(),
  //     password: this.state.password,
  //   })
  //   .then(

  // this.setState({ errors: "", loading: true });

  // const { fname, lname, mobile, email, password } = this.state;
  // firebase
  //   .auth()
  //   .createUserWithEmailAndPassword(email.trim(), password)
  //   .then((user) => {
  // this.props.navigation.navigate("optscreen");

  //   if (firebase.auth().currentUser) {
  //     userId = firebase.auth().currentUser.uid;
  //     if (userId) {
  //       firebase
  //         .database()
  //         .ref("users/" + userId)
  //         .set({
  //           fname: this.fname,
  //           lname: this.lname,
  //           mobile: this.mobile,
  //           email: this.email,
  //           password: this.password,
  //         });
  //     }
  //   }
  // })
  // .catch(function (errors) {
  //   // Handle Errors here.
  //   var errorCode = errors.code;
  //   var errorMessage = errors.message;
  //   console.log("Register!");
  //   console.log(errors);
  // });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View style={{}}>
          <Text style={styles.head1}>
            {" "}
            {"\n "}
            Create Account
          </Text>
          <Text style={styles.para}>
            {"\n "}
            Sign up to get started
            {"\n "}
            {"\n "}
          </Text>
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <Text>First Name {"\n "}</Text>

            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              value={fname}
              onChangeText={(fname) => setFname(fname)}
              // value={this.state.fname}
              // onChangeText={(fname) => this.setState({ fname })}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Text>Last Name {"\n "}</Text>

            <TextInput
              // style={styles.inputStyle}
              // underlineColorAndroid="#f000"
              // placeholder="Enter Email"
              // placeholderTextColor="#8b9cb5"
              // keyboardType="email-address"

              // returnKeyType="next"
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              value={lname}
              onChangeText={(lname) => setLname(lname)}
              // value={this.state.lname}
              // onChangeText={(lname) => this.setState({ lname })}
              blurOnSubmit={false}

              // blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Text>Password {"\n "}</Text>

            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              returnKeyType="next"
              secureTextEntry={true}
              value={password}
              onChangeText={(password) => setPass(password)}
              // onSubmitEditing={() => {
              //   add(text);
              //   setText(null);
              // }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Text>Mobile {"\n "}</Text>

            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter mobile"
              placeholderTextColor="#8b9cb5"
              keyboardType="phone-pad"
              returnKeyType="next"
              value={mobile}
              onChangeText={(mobile) => setMob(mobile)}
              // value={this.state.mobile}
              // onChangeText={(mobile) => this.setState({ mobile })}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Text>Email {"\n "}</Text>

            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Address"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              value={email}
              onChangeText={(email) => setText(email)}
              // onSubmitEditing={
              //   (() => {
              //     add(text);
              //     setText(null);
              //   },
              //   Keyboard.dismiss)
              // }
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => {
              insertindb();
              setText(null);
              setPass(null);
              // setMob(null);
              setFname(null);
            }}
            onPress={()=>{
              navigation.navigate("Otp")
            }}
            // onPress={() => {
            //   // add(email, password, mobile, fname, lname);

            //   setText(null);
            //   setPass(null);
            //   setMob(null);
            //   setFname(null);
            //   setLname(null);

            //   // navigation.navigate("optscreen");
            // }}
          >
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
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
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 40,
    bottom: 20,
    top: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
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

  successTextStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
  head1: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#272F58",
    marginRight: 30,
    top: 10,
    bottom: 0,
  },

  para: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#272F58",
    right: 0,
    top: 5,
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
export default register;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>SQLite Example</Text>
//       <View style={styles.flexRow}>
//         <TextInput
//           onChangeText={(text) => setText(text)}
//           onSubmitEditing={() => {
//             add(text);
//             setText(null);
//           }}
//           placeholder="what do you need to do?"
//           style={styles.input}
//           value={text}
//         />
//       </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     flex: 1,
//     paddingTop: Constants.statusBarHeight,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   flexRow: {
//     flexDirection: "row",
//   },
//   input: {
//     borderColor: "#4630eb",
//     borderRadius: 4,
//     borderWidth: 1,
//     flex: 1,
//     height: 48,
//     margin: 16,
//     padding: 8,
//   },
//   listArea: {
//     backgroundColor: "#f0f0f0",
//     flex: 1,
//     paddingTop: 16,
//   },
//   sectionContainer: {
//     marginBottom: 16,
//     marginHorizontal: 16,
//   },
//   sectionHeading: {
//     fontSize: 18,
//     marginBottom: 8,
//   },
// });
