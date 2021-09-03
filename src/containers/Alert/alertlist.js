import React, { Component,useState } from 'react'
import { Text, View, Image, TouchableOpacity,Dimensions } from 'react-native'
import Video from "react-native-video";

const Alertlist = ({ value }) => {
    const [show, setShow] = useState(false);
    console.log("ALERTLIST",value.video_file)
    return (
        <View style={{paddingVertical: 20}}>
            <View >
                <View >
                    <View style={{ marginRight: 20, height: 20, width: 20, borderRadius: 10, justifyContent: 'space-between', backgroundColor: 'red', alignItems: 'center' }}>
                        <Image
                            source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}}
                            style={{
                                resizeMode: 'contain',
                                height: 18,
                                width: 18,
                                resizeMode:'contain'
                            }}
                        />
                    </View>
                    <TouchableOpacity   onPress={() => setShow(!show)} style={{ backgroundColor: 'red', paddingHorizontal: 30, borderRadius: 20 }}>
                        <Text>{value.movement_type}</Text>
                        <Text>{value.remarks}</Text>
                        {/* <Text style={{ zIndex: 99 }}>{element.video}</Text> */}
                    </TouchableOpacity> 
                </View>
            </View>






            {show && (
            <View  style={{
                flex: 1,
                backgroundColor: "red",
                justifyContent: "center",
                // flexWrap: 'wrap'
            }}>
                {/* {this.state.array.video.map((values, index) => {
              console.log("values of video",values,index)
              return( */}
                <View  >

                    <Video
                        repeat={true}
                        controls={true}
                        resizeMode='contain'
                        fullscreen={true}
                        source={{
                            uri: value.video_file
                        }}

                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: 200,
                        }}
                    />
                </View>
            </View>
)}
        </View>
    )



}

export default Alertlist;