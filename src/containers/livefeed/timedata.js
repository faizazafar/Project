// import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
// import React, { Component } from "react";
// // import Video from "react-native-video";
// import {Video} from "expo-av"
// import { DragResizeBlock } from "react-native-drag-resize";
// import Service from "../../../libs/service";
// import dateFormat from "../../../libs/dateformat";

// export default class livefeed extends Component {
//   constructor() {
//     super();
//     this.state = {
//       videoIndex: 0,
//       videos: [],
//       screenStatus: "Getting videos from Api ...",
//       regions: {
//         x: 100,
//         y: 100
//       }
//     };
//   }

//   componentDidMount() {
//     this.getVideos();
//   }

//   saveCoordinates = async () => {
//     let { regions } = this.state;

//     let pt_left_top = { x: regions.x, y: regions.y };
//     let pt_right_top = { x: regions.x + regions.w, y: regions.y };
//     let pt_left_bottom = { x: regions.x, y: regions.y + regions.h };
//     let pt_right_bottom = {
//       x: regions.x + regions.x,
//       y: regions.y + regions.h
//     };

//     let created_at = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");

//     console.log("test82 created_at:", created_at);

//     let jsonObj = {
//       lat: "22.6356",
//       lng: "54.358",
//       created_at,
//       virtual_coord: {
//         x_value: pt_left_top.x,
//         y_value: pt_left_top.y,
//         x2_value: pt_right_top.x,
//         y2_value: pt_right_top.y,
//         x3_value: pt_left_bottom.x,
//         y3_value: pt_left_bottom.y,
//         x4_value: pt_right_bottom.x,
//         y4_value: pt_right_bottom.y,
//         created_at
//       },
//       realtime_coord: {
//         x_value: pt_left_top.x,
//         y_value: pt_left_top.y,
//         x2_value: pt_right_top.x,
//         y2_value: pt_right_top.y,
//         x3_value: pt_left_bottom.x,
//         y3_value: pt_left_bottom.y,
//         x4_value: pt_right_bottom.x,
//         y4_value: pt_right_bottom.y,
//         created_at
//       }
//     };

//     let params = {
//       user_id: 1,
//       camera_id: 1,
//       json: JSON.stringify(jsonObj)
//     };

//     let s = new Service();
//     let response = await s.callPostWithParamsAndBody(
//       params,
//       jsonObj,
//       "upload-coordinate"
//     );

//     Alert.alert(response.data.message);
//   };

//   onPress = regions => {
//     //console.log("tets82 onPress: ", JSON.stringify(this.draggableBox.state));
//     this.setState({ regions: this.draggableBox.state });
//   };

//   async getVideos() {
//     let time = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
//     console.log(time," ", new Date())
//     this.setState({
//       screenStatus: "Getting videos from Api for " + time
//     });

//     let params = {
//       user_id: 1,
//       camera_id: 1,
//       last_sync: '2021-09-07 03:15:00-03:20:00'
//     };

//     let s = new Service();
//     let response = await s.callPostWithParams(params, "get-videos");
//     console.log("test82 videos:", JSON.stringify(response));
//     if (response.status) {
//       if (response.data.length > 0) {
//         this.setState({
//           videoIndex: 0,
//           videos: response.data,
//           screenStatus: "Loading video..."
//         });
//       } else {
//         this.setState({
//           videoIndex: 0,
//           videos: response.data,
//           screenStatus: "Videos list is empty, please upload videos"
//         });
//       }
//     } else {
//       Alert.alert(response.message);
//     }
//   }

//   onVideoEnd() {
//     console.log("test82 video end");
//     let { videoIndex, videos } = this.state;

//     if (videoIndex < videos.length - 1) {
//       this.setState({
//         videoIndex: videoIndex + 1,
//         screenStatus: "Loading next video..."
//       });
//     } else {
//       //get new videos
//       this.setState({
//         videoIndex: 0,
//         videos: [],
//         screenStatus: "Getting videos from Api ..."
//       });

//       this.getVideos();
//     }
//   }

//   onError() {
//     console.log("test82 on Error");
//   }

//   render() {
//     let { videoIndex, videos, screenStatus, regions } = this.state;

//     if (videos.length == 0) {
//       return (
//         <View style={styles.container}>
//           <Text style={styles.status}>{screenStatus}</Text>
//           {screenStatus.includes("empty") && (
//             <TouchableOpacity
//               style={styles.retyrBtn}
//               onPress={this.getVideos.bind(this)}
//             >
//               <Text style={styles.buttonText}>Retry</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       );
//     } else {
//       //console.log("test82 video file: ", videos[videoIndex].video_file);

//       return (
//         <View style={styles.container}>
//           <Text style={styles.status}>{screenStatus}</Text>
//           <Video
//             key={videoIndex.toString()}
//             repeat={false}
//             controls={true}
//             onEnd={this.onVideoEnd.bind(this)}
//             onError={this.onError.bind(this)}
//             source={{
//               uri: encodeURI(videos[videoIndex].video_file)
//             }}
//             ref={ref => {
//               this.player = ref;
//             }}
//             style={styles.backgroundVideo}
//             resizeMode="contain"
//           />
//           <DragResizeBlock
//             ref={ref => {
//               this.draggableBox = ref;
//             }}
//             x={regions.x}
//             y={regions.y}
//             w={regions.w}
//             h={regions.h}
//             onDragEnd={this.onPress}
//             onResizeEnd={this.onPress}
//             isDraggable={true}
//             isResizable={true}
//             zIndex={1}
//           ></DragResizeBlock>

//           <TouchableOpacity
//             style={[styles.buttonContainer, styles.loginButton]}
//             onPress={this.saveCoordinates.bind(this)}
//           >
//             <Text style={styles.buttonText}>Save Coordinates</Text>
//           </TouchableOpacity>
//         </View>
//       );
//     }
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#555",
//     justifyContent: "center"
//   },
//   backgroundVideo: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0
//   },
//   status: {
//     textAlign: "center",
//     fontSize: 20,
//     color: "#fff",
//     width: "80%",
//     alignSelf: "center"
//   },
//   buttonContainer: {
//     position: "absolute",
//     bottom: 100,
//     height: 45,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     alignSelf: "center",
//     marginTop: 30,
//     width: 250,
//     borderRadius: 30
//   },
//   retyrBtn: {
//     height: 45,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 30,
//     width: 250,
//     borderRadius: 30,
//     backgroundColor: "#272F58",
//     alignSelf: "center"
//   },
//   loginButton: {
//     backgroundColor: "#272F58"
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 20
//   }
// });

import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import Video from "react-native-video";
// import {Video} from "expo-av"
import CalendarPicker from 'react-native-calendar-picker';

import { DragResizeBlock } from "react-native-drag-resize";
import Service from "../../../libs/service";
import dateFormat from "../../../libs/dateformat";
// let to = require('./index');
let from = require('./index');

    // let DATE='';
    // DATE=from[0];
    // let r_1='';
    // r_1=from[1];
    // let r_2=''
    // r_2=from[2];
    // let created_date = dateFormat(DATE, "yyyy-mm-dd HH:MM:ss");
    // let created_r_1 = dateFormat(r_1, "yyyy-mm-dd HH:MM:ss");
    // let created_r_2 = dateFormat(r_2, "yyyy-mm-dd HH:MM:ss");
    
    let newdate=''
    let newrange_1=''
    let newrange_2=''


export default class Datetime extends Component {
  constructor() {
    super();  
    this.state = {
      videoIndex: 0,
      selectedStartDate: null,
      videos: [],
      date:'',
      range1:'',
      range2:'',
      screenStatus: "Getting videos from Api ...",
      regions: {
        x: 100,
        y: 100
      }
    };
    this.onDateChange = this.onDateChange.bind(this);

  }

   componentDidMount(props) {
    let created_date = dateFormat(this.props.from, "yyyy-mm-dd");
    let created_r_1 = dateFormat(this.props.from1, "HH:MM:ss");
    let created_r_2 = dateFormat(this.props.from2, "HH:MM:ss");
    
      newdate=  created_date.slice(0,10);
    newrange_1=  created_r_1.slice(10,23);
    newrange_2=  created_r_2.slice(10,23);  
    console.log('TIME FROM OTHER another SIDE', created_date)
    console.log('TIME FROM OTHER another SIDE',created_r_1)
    console.log('TIME FROM OTHER another SIDE',created_r_2)
    // this.setState({date:newdate});
    // this.setState({range1:newrange_1});
    // this.setState({range2:newrange_2});
   this.getVideos(created_date,created_r_1,created_r_2);





  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    })};

  saveCoordinates = async () => {
    let { regions } = this.state;

    let pt_left_top = { x: regions.x, y: regions.y };
    let pt_right_top = { x: regions.x + regions.w, y: regions.y };
    let pt_left_bottom = { x: regions.x, y: regions.y + regions.h };
    let pt_right_bottom = {
      x: regions.x + regions.w,
      y: regions.y + regions.h
    };

    let created_at = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");

    console.log("test82 created_at:", created_at);

    let jsonObj = {
      lat: "22.6356",
      lng: "54.358",
      created_at,
      virtual_coord: {
        x_value: pt_left_top.x,
        y_value: pt_left_top.y,
        x2_value: pt_right_top.x,
        y2_value: pt_right_top.y,
        x3_value: pt_left_bottom.x,
        y3_value: pt_left_bottom.y,
        x4_value: pt_right_bottom.x,
        y4_value: pt_right_bottom.y,
        created_at
      },
      realtime_coord: {
        x_value: pt_left_top.x,
        y_value: pt_left_top.y,
        x2_value: pt_right_top.x,
        y2_value: pt_right_top.y,
        x3_value: pt_left_bottom.x,
        y3_value: pt_left_bottom.y,
        x4_value: pt_right_bottom.x,
        y4_value: pt_right_bottom.y,
        created_at
      }
    };

    let params = {
      user_id: 1,
      camera_id: 1,
      json: JSON.stringify(jsonObj)
    };
    console.log("COORDINATES", jsonObj);

    let s = new Service();
    let response = await s.callPostWithParamsAndBody(
      params,
      jsonObj,
      "upload-coordinate"
    );

    Alert.alert(response.data.message);
  };

  onPress = regions => {
    //console.log("tets82 onPress: ", JSON.stringify(this.draggableBox.state));
    this.setState({ regions: this.draggableBox.state });
  };

  async getVideos(a,b,c) {
    let time = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");

    this.setState({
      screenStatus: "Getting videos from Api for " + time
    });
    // 2021-09-07 02:00:00-11:40:00
   let dash='-';
    let params = {
      user_id: 1,
      camera_id: 1,
      last_sync: a+" "+b+dash+c
    };
    console.log("LAST ",params)
    let s = new Service();
    let response = await s.callPostWithParams(params, "get-videos");
    // console.log("test82 videos:", JSON.stringify(response));
    // console.log("JSONNNNNN",response.data.reverse()[0].video_file)
    if (response.status) {
      if (response.data.length > 0) {
        this.setState({
          videoIndex: 0,
          videos: response.data.reverse(),
          screenStatus: "Loading video..."
        });
      } else {
        this.setState({
          videoIndex: 0,
          videos: response.data,
          screenStatus: "Videos list is empty, please upload videos"
        });
      }
    } else {
      Alert.alert(response.message);
    }
  }

  onVideoEnd() {
    console.log("test82 video end");
    let { videoIndex, videos } = this.state;

    if (videoIndex < videos.length - 1) {
      this.setState({
        videoIndex: videoIndex + 1,
        screenStatus: "Loading next video..."
      });
    } else {
      //get new videos
      this.setState({
        videoIndex: 0,
        videos: [],
        screenStatus: "Getting videos from Api ..."
      });

      this.getVideos();
    }
  }

  onError() {
    console.log("test82 on Error");
  }

  render() {

    let { videoIndex, videos, screenStatus,selectedStartDate, regions } = this.state;
    // let value=[videos.reverse()];
    // let value2=value[0];
    // value2=value2;
    // value2=JSON.stringify(value2);
    // let newvideo= JSON.parse(JSON.stringify(value2));
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  console.log("NEW VIDEO", videos)
    if (videos.length == 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.status}>{screenStatus}</Text>
          {screenStatus.includes("empty") && (
            <TouchableOpacity
              style={styles.retyrBtn}
              onPress={this.getVideos.bind()}
            >
              <Text style={styles.buttonText}>Retry</Text>
            </TouchableOpacity>
          )}
        </View>
      );
    } else {
      //console.log("test82 video file: ", videos[videoIndex].video_file);

      return (
        <View style={styles.container}>
          <Text style={styles.status}>{screenStatus}</Text>
          <Video
            key={videoIndex.toString()}
            repeat={false}
            controls={true}
            onEnd={this.onVideoEnd.bind(this)}
            onError={this.onError.bind(this)}
            selectedVideoTrack={{
              type: "resolution",
              value: 640*480
            }}
            source={{
              // uri: encodeURI(videos)
              uri:videos[videoIndex].video_file
            }}
            ref={ref => {
              this.player = ref;
            }}
            style={styles.backgroundVideo}
            resizeMode="contain"
          />
          <DragResizeBlock
            ref={ref => {
              this.draggableBox = ref;
            }}
            x={regions.x}
            y={regions.y}
            w={regions.w}
            h={regions.h}
            onDragEnd={this.onPress}
            onResizeEnd={this.onPress}
            isDraggable={true}
            isResizable={true}
            zIndex={1}
          ></DragResizeBlock>

          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={this.saveCoordinates.bind(this)}
          >
            <Text style={styles.buttonText}>Save Coordinates</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center"
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  status: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    width: "80%",
    alignSelf: "center"
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    width: 250,
    borderRadius: 30
  },
  retyrBtn: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#272F58",
    alignSelf: "center"
  },
  loginButton: {
    backgroundColor: "#272F58"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20
  }
});
