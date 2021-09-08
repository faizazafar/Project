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
import React, {useState,useStateWithCallback} from 'react';
import {View, Text,TouchableOpacity, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Datetime from "./timedata";
let from=[];
let to='';
export default function index({ navigation }) {

  const [state, setState] = useState({
    date: new Date(),
    mode: 'date',
    show: false
  });
  const [from,setfrom]=useState(null);
  const [from1,setfrom1]=useState(null);
  const [from2,setfrom2]=useState(null);
  
  const [newstate, time_1] = useState({
    date: new Date(),
    mode: 'time',
    show: false
  });
  const [newnewstate, newnewState] = useState({
    date: new Date(),
    mode: 'time',
    show: false
  });
  const [appear, newshow] = useState(false)
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || state.date ;
    setState({...state, date: currentDate, show: false});

    // from[0]=currentDate;
    setfrom(currentDate)
    // console.log("TO",currentDate)
    // module.exports = from;
 
    setState({...state, date: currentDate});
    setState({...state, show: false});

  };
  const ontimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || newstate.date;
    
    console.log("FROM",currentDate)
    // let from =[];
    //  from[1]=currentDate;
    setfrom1(currentDate)
    // console.log("TO",currentDate)
    // module.exports = from;
 
    time_1({...newstate, date: currentDate});
    time_1({...newstate, show: false});
    // let fromnew={...newstate.date};
    // module.exports = fromnew;
 
  };

  const ontimeChangeAgain = (event, selectedDate) => {
    const currentDate = selectedDate || newnewstate.date;
    
    console.log("TO",currentDate)
    // from[2]=currentDate
    setfrom2(currentDate)
    // let to=currentDate;
    // module.exports = to;
    // module.exports = from;

    newnewState({...newnewstate, date: currentDate});
    newnewState({...newnewstate, show: false});
    // let tonew={...newnewstate.date};
    // module.exports = tonew;

  };

  const showPicker = currentMode => {
    setState({...state, show: true});

  };
  const showtimePicker = currentMode => {
    // setState({...state, show: true});
    time_1({...newstate, show: true});

  };
  const showagaintimePicker = currentMode => {
    // setState({...state, show: true});
    newnewState({...newnewstate, show: true});

  };
  // const showDatepicker = (currentMode) => {
  //   // showMode('date');
  //   setShow(true);
  //   setMode(currentMode)
  // };

  // const showTimepicker = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode)
  // };
  // const showTimeAgian = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode)  };
  
  
  return (
       <View style={{flex:1}} >
      {!appear &&   <View style={{marginTop: 10, flex: 1, paddingVertical: 20,justifyContent:"center",alignItems:'center', backgroundColor: 'white'}}>
      <View style={{justifyContent:'center',alignItems:"center"}}>
        <TouchableOpacity style={{width:100,backgroundColor:'#272F58',borderRadius:30, paddingVertical:10}} onPress={()=>showPicker('date')}>
        <Text style={{textAlign:"center",color:'white'}}>PICK DATE</Text>
          </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row",justifyContent:'space-between'}}>
      <View style={{marginTop:30,justifyContent:'center',alignItems:"center"}}>
        <TouchableOpacity  style={{width:100,backgroundColor:'#272F58',borderRadius:30,paddingVertical:10}} onPress={()=>showtimePicker('time')}>
        <Text style={{textAlign:"center",color:'white'}}>FROM</Text>
          </TouchableOpacity>
      </View>
      <View style={{marginTop:30,justifyContent:'center',alignItems:"center"}}>
        <TouchableOpacity  style={{width:100,backgroundColor:'#272F58',borderRadius:30,paddingVertical:10}} onPress={()=>showagaintimePicker('time')}>
        <Text style={{textAlign:"center",color:'white'}}>TO</Text>
          </TouchableOpacity>
      </View>
      </View>
      <TouchableOpacity onPress={()=>{newshow({appear:true})}} style={{width:120,backgroundColor:'#272F58',marginTop:50,borderRadius:30,paddingVertical:10}}>
      <Text style={{textAlign:"center",color:'white'}}>Continue</Text>
        
       </TouchableOpacity> 
       { state.show && 
  (<DateTimePicker
    testID="dateTimePicker"
    timeZoneOffsetInMinutes={0}
    value={state.date}
    mode={state.mode}
    is24Hour={true}
    display="default"
    onChange={onChange}
    />)
}
{ newstate.show && 
  (<DateTimePicker
    testID="dateTimePicker"
    timeZoneOffsetInMinutes={0}
    value={newstate.date}
    mode={newstate.mode}
    is24Hour={true}
    display="default"
    onChange={ontimeChange}
    />)
}
{ newnewstate.show && 
  (<DateTimePicker
    testID="dateTimePicker"
    timeZoneOffsetInMinutes={0}
    value={newnewstate.date}
    mode={newnewstate.mode}
    is24Hour={true}
    display="default"
    onChange={ontimeChangeAgain}
    />)
}
    </View> }
{ appear && 
  (
    <Datetime from={from} from1={from1} from2={from2} />
  )
}
    </View>
  )
}
