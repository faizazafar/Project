import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import Nav from './src';
console.disableYellowBox = true

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function App() {
  
  return (
    <Nav />
  
  );
}

// import { DragResizeContainer, DragResizeBlock } from "react-native-drag-resize";

// import React, { useState, createRef } from "react";
// import { Text, View,Image } from "react-native";

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       regions: [
//         {
//           x: 9.565217391304348,
//           y: 34.195402298850574,
//           w: 81.30434782608695,
//           h: 6.3218390804597675,
//         },
//       ],
//     };
//     // const regions = {
//     //   x: 9.565217391304348,
//     //   y: 34.195402298850574,
//     //   w: 81.30434782608695,
//     //   h: 60.3218390804597675,
//     // };
//     // this.state = { limitation1: { ...regions } };
//   }
//   // onclick = (regions) => {
//   //   console.log("LIMIT");
//   //   console.log(this.regions.w, this.regions.h);
//   // };

//   onPress = (regions) => {
//     // console.log("​App -> onChange -> regions", regions);

//     const limitation2 = this.state;
//     console.log(regions);
//     // console.log(regions.nativeEvent);
//   };

//   render() {
//     return (
//       <View style={{alignItems:'center',justifyContent:'center'}}>
//    <Image
//             style={{width:'100%',height:'70%'}}
//             // resizeMode="contain"
//             source={{
//               uri:
//                 "https://i.pinimg.com/originals/67/69/1e/67691e82baf6b58ff7a4e571b1091528.gif",
//             }}
//           />
//       <DragResizeBlock
//         x={this.state.regions.x}
//         y={this.state.regions.y}
//         onDragEnd={this.onPress}
//         onResizeEnd={this.onPress}
//         isDraggable={true}
//         isResizable={true}
//         zIndex={1}
//       >
       
//       </DragResizeBlock>
//       </View>
//     );
//   }
// }
