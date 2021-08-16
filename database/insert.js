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
// // var db = openDatabase({ name: "my.db", location: "Shared" });

// // const db = SQLite.openDatabase({
// //   name: "User",
// // });
// export default class insert extends React.Component {
//   handleClick = () => {
//     this.props.navigation.navigate("ViewScreen");
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
//    *  Example Of Insert Rows on SQLite
//    */
//   async InsertQuery() {
//     // single insert query
//     let singleInsert = await this.ExecuteQuery(
//       "INSERT INTO users (id, first_name, last_name, is_deleted) VALUES ( ?, ?, ?, ?)",
//       [1, "Infinite", "Ability", 0]
//     );
//     console.log(singleInsert);
//     // multiple insert of users
//     let Data = [
//       { id: 2, first_name: "Shani", last_name: "Tiwari", is_deleted: "0" },
//       { id: 3, first_name: "John", last_name: "Carter", is_deleted: "0" },
//       { id: 4, first_name: "captain", last_name: "marvel", is_deleted: "0" },
//     ];
//     let query =
//       "INSERT INTO users (id, first_name, last_name, is_deleted) VALUES";
//     for (let i = 0; i < Data.length; ++i) {
//       query =
//         query +
//         "('" +
//         Data[i].id + //id
//         "','" +
//         Data[i].first_name + //first_name
//         "','" +
//         Data[i].last_name + //last_name
//         "','" +
//         Data[i].is_deleted + //is_deleted
//         "')";
//       if (i != Data.length - 1) {
//         query = query + ",";
//       }
//     }
//     query = query + ";";
//     console.log(query);
//     let multipleInsert = await this.ExecuteQuery(query, []);
//     console.log(multipleInsert);
//     // multiple insert of state table
//     let countryData = [
//       { id: 1, user_id: "1", country_name: "India", is_deleted: "0" },
//       { id: 2, user_id: "2", country_name: "USA", is_deleted: "0" },
//       { id: 3, user_id: "3", country_name: "USA", is_deleted: "0" },
//       { id: 4, user_id: "4", country_name: "USA", is_deleted: "0" },
//     ];
//     let countryQuery =
//       "INSERT INTO country (id, user_id, country_name, is_deleted) VALUES";
//     for (let i = 0; i < countryData.length; ++i) {
//       countryQuery =
//         countryQuery +
//         "('" +
//         countryData[i].id + //id
//         "','" +
//         countryData[i].user_id + //user_id
//         "','" +
//         countryData[i].country_name + //country_name
//         "','" +
//         countryData[i].is_deleted + //is_deleted
//         "')";
//       if (i != countryData.length - 1) {
//         countryQuery = countryQuery + ",";
//       }
//     }
//     countryQuery = countryQuery + ";";
//     console.log(countryQuery);
//     let countryMultipleInsert = await this.ExecuteQuery(countryQuery, []);
//     console.log(countryMultipleInsert);

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
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class insert extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
