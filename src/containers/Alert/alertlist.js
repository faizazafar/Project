import React, { Component,useState } from 'react'
import { Text, View, Image, TouchableOpacity,Dimensions } from 'react-native'
// import Video from "react-native-video";
import {Video} from "expo-av"
import Constants from 'expo-constants';
console.log(Constants.manifest)
const Alertlist = ({ value }) => {
    const [show, setShow] = useState(false);
    console.log("ALERTLIST",value.video_file)
    return (
        <View style={{paddingVertical: 20}}>
            <View >
                <View style={{width:'80%',flexDirection:'row'}} >
                    <View style={{ marginRight: 20, height: 30, width: 30, borderRadius: 10,borderwidth:1, justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center' }}>
                        <Image
                            source={require('../../../Image/bell.png')}
                            style={{
                                resizeMode: 'contain',
                                height: 28,
                                width: 28,
                                resizeMode:'contain'
                            }}
                        />
                    </View>
                    <TouchableOpacity   onPress={() => setShow(!show)} style={{ backgroundColor: '#d4d9df', paddingHorizontal: 30,padding:10, borderRadius: 20 }}>
                        <Text>Movement of: {value.movement_type}</Text>
                        <Text>Description: {value.remarks}</Text>
                        {/* <Text style={{ zIndex: 99 }}>{element.video}</Text> */}
                    </TouchableOpacity> 
                </View>
            </View>






            {show && (
            <View  style={{
                flex: 1,
                backgroundColor: "#d4d9df",
                justifyContent: "center",
                marginTop:10
                // flexWrap: 'wrap'
            }}>
                {/* {this.state.array.video.map((values, index) => {
              console.log("values of video",values,index)
              return( */}
                <View  >

                    <Video
                        resizeMode='contain'
                        source={{
                            uri: value.video_file
                        }}

                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: 200,
                        }}
                        shouldPlay
                        isLooping
                        useNativeControls
                    />
                </View>
            </View>
)}
        </View>
    )



}

export default Alertlist;