// import React, { Component } from "react";
// import { Text, View, Image, StyleSheet } from "react-native";

// export default class livefeed extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Image
//           style={styles.icon}
//           source={{
//             uri:
//               "https://user-images.githubusercontent.com/22610163/30512919-72a57046-9b02-11e7-8ca8-c3e4bd993497.gif",
//           }}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#EEEEEE",
//     alignItems: "center",
//     paddingTop: 50,
//   },
//   icon: {
//     width: 300,
//     height: 300,
//     marginTop: 60,
//   },
// });

import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React, { Component } from "react";
import Constants from "expo-constants";
import { Dimensions } from "react-native";

// import { Video } from "expo-av";
import { ReactPlayer } from "react-player/youtube";
import YouTubePlayer from "react-native-youtube-sdk";
import { WebView } from "react-native-webview";
import { Card } from "react-native-elements"; // Version can be specified in package.json
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default class livefeed extends React.Component {
  state={
    getvideo:false,
    data:''
  }
  InsertInDB = async () => {
    console.log("INDAR AYA");
let user_id = "1";
let camera_id = "1";

    //  console.log('this.state.regions => ',this.state.regions)
    // var raw = "";

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://18.224.158.253/plac/public/api/get-videos?user_id="+user_id+"&camera_id="+camera_id, requestOptions)
      .then(response => response.text())
      .then(result =>{
        let finalResult = JSON.parse(result)
        this.setState({data:finalResult,getvideo:true})
         console.log(this.state.data.data)
        })
      .catch(error => console.log('error', error));
      console.log("HOGAAAAAYAAAAAA")
  };
  render() {
    return (
      <View  style={{
        padding: 20,
        flex: 1,
        // backgroundColor: '#F6F7F9',
        paddingTop: 20 + getStatusBarHeight(),
        padding:20,
        alignItems:'center',
        justifyContent:'center'
      }}>
        {this.state.getvideo===false ?
        <TouchableOpacity onPress={this.InsertInDB}
 style={{width:100,height:50,justifyContent:'center',borderRadius:20,alignItems:'center',backgroundColor:'red'}}>
        <Text style={{color:'white'}} >
          Get Video
        </Text>
        </TouchableOpacity>
        :
       <WebView
        style={styles.container}
        javaScriptEnabled={true}
        source={{
          uri: this.state.data.data[0].video_file,
        }}
      />
        }
        <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()} style={{width:100,height:50,justifyContent:'center',borderRadius:20,alignItems:'center',backgroundColor:'red'}}>


        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
  },
});
{
   <YouTubePlayer
          ref={(ref) => (this.youTubePlayer = ref)}
          videoId="t_aIEOqB8VM"
          autoPlay={true}
          showFullScreenButton={true}
          showSeekBar={true}
          showPlayPauseButton={true}
          startTime={5}
          style={{ width: "100%", height: 200 }}
          onError={(e) => console.log(e)}
          onChangeFullscreen={(e) => console.log(e)}
        /> 
}
