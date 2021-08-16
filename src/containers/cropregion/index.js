// import React, { useState, useEffect } from "react";
// import { Button, Image, View, Platform } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import Constants from "expo-constants";

// export default function ImagePickerExample() {
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS !== "web") {
//         const {
//           status,
//         } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if (status !== "granted") {
//           alert("Sorry, we need camera roll permissions to make this work!");
//         }
//       }
//     })();
//   }, []);

//   const pickImage = async () => {
//     let result = await ImagePicker.getCameraPermissionsAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && (
//         <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
//       )}
//     </View>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View, Button, Image } from "react-native";
// import { Camera } from "expo-camera";
// import * as ImagePicker from "expo-image-picker";

// export default function Add({ navigation }) {
//   const [cameraPermission, setCameraPermission] = useState(null);
//   const [galleryPermission, setGalleryPermission] = useState(null);

//   const [camera] = useState(null);
//   const [imageUri, setImageUri] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   const permisionFunction = async () => {
//     // here is how you can get the camera permission
//     const cameraPermission = await Camera.requestPermissionsAsync();

//     setCameraPermission(cameraPermission.status === "granted");

//     const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
//     console.log(imagePermission.status);

//     setGalleryPermission(imagePermission.status === "granted");

//     if (
//       imagePermission.status !== "granted" &&
//       cameraPermission.status !== "granted"
//     ) {
//       alert("Permission for media access needed.");
//     }
//   };

//   useEffect(() => {
//     permisionFunction();
//   }, []);

//   const takePicture = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 1,
//     });

//     console.log(result);
//     if (!result.cancelled) {
//       setImageUri(result.uri);
//     }
//   };

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 1,
//     });

//     console.log(result);
//     if (!result.cancelled) {
//       setImageUri(result.uri);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* <View style={styles.cameraContainer}>
//         <Camera
//           ref={(ref) => setCamera(ref)}
//           style={styles.fixedRatio}
//           type={type}
//           ratio={"1:1"}
//         />
//       </View> */}

//       <Button title={"Take Picture"} onPress={takePicture} />
//       <Button title={"Gallery"} onPress={pickImage} />
//       {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1 }} />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   cameraContainer: {
//     flex: 1,
//     flexDirection: "row",
//   },
//   fixedRatio: {
//     flex: 1,
//     aspectRatio: 1,
//   },
//   button: {
//     flex: 0.1,
//     padding: 10,
//     alignSelf: "flex-end",
//     alignItems: "center",
//   },
// });

// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { Camera } from "expo-camera";

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera} type={type}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               );
//             }}
//           >
//             <Text style={styles.text}> Flip </Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     backgroundColor: "transparent",
//     flexDirection: "row",
//     margin: 20,
//   },
//   button: {
//     flex: 0.1,
//     alignSelf: "flex-end",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 18,
//     color: "white",
//   },
// });

import { DragResizeContainer, DragResizeBlock } from "react-native-drag-resize";

import React, { useState, createRef } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regions: [],
    };
    // const regions = {
    //   x: 9.565217391304348,
    //   y: 34.195402298850574,
    //   w: 81.30434782608695,
    //   h: 60.3218390804597675,
    // };
    // this.state = { limitation1: { ...regions } };
  }
  // onclick = (regions) => {
  //   console.log("LIMIT");
  //   console.log(this.regions.w, this.regions.h);
  // };

  onPress =  (regions) => {
    // console.log("​App -> onChange -> regions", regions);

    // console.log('on drag',regions);
    // return regions;
    this.setState({regions})

    // console.log(regions);
    // console.log(regions.nativeEvent);

    // // let item = { fname, email, password };
    // const x = regions[0];
    // const y = regions[1];
    // const w = regions[2];
    // const h = regions[3];
    // const { limitation2 } = this.state.regions;
    // console.log(regions);
    // console.log("XYWH", this.state.regions[0].x);
    
  }
   InsertInDB = async () => {
    console.log("INDAR AYA");
let user_id = "1";
let camera_id = "1";
let json = {
  "lat": this.state.regions[0].toString(),
  "lng": this.state.regions[1].toString(),
  "created_at": "2021-06-21 19:02:13",
  "virtual_coord": {
    "x_value": "22.6356",
    "y_value": "54.358",
    "created_at": "2021-06-21 19:02:13"
  },
  "realtime_coord": {
    "x_value": "22.6356",
    "y_value": "54.358",
    "created_at": "2021-06-21 19:02:13"
  }
};
json = JSON.stringify(json)

    //  console.log('this.state.regions => ',this.state.regions)
    var raw = "";

    var requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://18.224.158.253/plac/public/api/upload-coordinate?user_id="+user_id+"&camera_id="+camera_id+"&json="+json, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      console.log("HOGAAAAAYAAAAAA")
  };
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
        }}
      >
        <Image
          style={{ width: "100%", height: "70%",resizeMode:'contain' }}
          // resizeMode="contain"
          source={{
            uri:
              "https://i.pinimg.com/originals/67/69/1e/67691e82baf6b58ff7a4e571b1091528.gif",
          }}
        />
        <DragResizeBlock
          x={this.state.regions.x}
          y={this.state.regions.y}
          onDragEnd={this.onPress}
          onResizeEnd={this.onPress}
          isDraggable={true}
          isResizable={true}
          zIndex={1}
        ></DragResizeBlock>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.InsertInDB}
          // onPress={() => this.functionCombined()}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
