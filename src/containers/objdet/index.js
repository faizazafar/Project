// // require("@tensorflow/tfjs-backend-cpu");
// // require("@tensorflow/tfjs-backend-webgl");

// import React, { Component } from "react";
// import { Text, View } from "react-native";

// export default class objdet extends Component {
//   constructor() {
//     const cocoSsd = require("@tensorflow-models/coco-ssd");
// // 
//     async () => {
//       // Load the model.
//       const model = await cocoSsd.load();

//       // Classify the image.
//       const predictions = await model.detect("../Image/profile.png");

//       console.log("Predictions: ");
//       console.log(predictions);
//     };
//   }
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     );
//   }
// }
