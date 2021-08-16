// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableHighlight,
// } from "react-native";
// import { openDatabase } from "react-native-sqlite-storage";

// // const SQLite = require("react-native-sqlite-storage");
// // const db = SQLite.openDatabase({
// //   name: "User",
// // });
// // var db = openDatabase({ name: "my.db", location: "Shared" });
// export default class select extends React.Component {
//   handleClick = () => {
//     this.props.navigation.navigate("Dashboardscreen");
//   };

//   constructor() {
//     super();
//   }
//   /**
//    * Execute sql queries
//    *
//    * @param sql
//    * @param params
//    *
//    * @returns {resolve} results
//    */
//   ExecuteQuery = (sql, params = []) =>
//     new Promise((resolve, reject) => {
//       db.transaction((trans) => {
//         trans.executeSql(
//           sql,
//           params,
//           (trans, results) => {
//             resolve(results);
//           },
//           (error) => {
//             reject(error);
//           }
//         );
//       });
//     });
//   /**
//    * Select Query Example
//    */
//   async SelectQuery() {
//     let selectQuery = await this.ExecuteQuery("SELECT * FROM users", []);
//     var rows = selectQuery.rows;
//     for (let i = 0; i < rows.length; i++) {
//       var item = rows.item(i);
//       console.log(item);
//     }

//     <TouchableHighlight
//       style={[styles.buttonContainer, styles.loginButton]}
//       onPress={this.handleClick()}
//     >
//       <Text style={styles.buttonText}>Continue</Text>
//     </TouchableHighlight>;
//   }
// }
// const styles = StyleSheet.create({
//   buttonContainer: {
//     height: 45,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//     width: 250,
//     borderRadius: 30,
//   },
//   loginButton: {
//     backgroundColor: "#272F58",
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 20,
//   },
// });

import React, { Component } from "react";
import { Text, View } from "react-native";

export default class select extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
