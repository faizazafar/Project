import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native';
import { Text, View, ScrollView, Image, StyleSheet, Alert, Dimensions } from 'react-native'

import Alertlist from "../Alert/alertlist";
export default class alert extends Component {

  state = {
    videos: [], show: false,
    array: [
      {
        // key: 1
        // , image: require("../assets/car.png"),
        // movement_type: 'Car',
        // is_suspected: '1',
        // description: 'Alert !!! your car has been moved',
        // video: '',
        // Background: 'red',

      },
      {
        // key: 2,
        // image: require("../assets/car.png"),
        // movement_type: 'car',
        // is_suspected: '1',
        // description: 'Alert !!! your car has been moved',
        // video: 'se',
        // Background: 'yellow',

      },
      // {
      //   key:require("../assets/car.png")            ,
      //   movement_type: 'Car',
      //   is_suspected: '1',
      // },   {
      //   key:require("../assets/car.png")
      //   ,
      //   movement_type: 'Car',
      //   is_suspected: '1',          },
      // {
      //   key:require("../assets/car.png")            ,
      //   movement_type: 'Car',
      //   is_suspected: '1',         },
      // {
      //   key:require("../assets/car.png")            ,
      //   movement_type: 'Car',
      //   is_suspected: '1',          },   {
      //   key:require("../assets/car.png")
      //   ,
      //   movement_type: 'Car',
      //   is_suspected: '1',          },
      // {
      //   key:require("../assets/car.png")
      //   ,
      //   movement_type: 'Car',
      //   is_suspected: '1',          },
      // {
      //   key:require("../assets/car.png")            ,
      //   movement_type: 'Car',
      //   is_suspected: '1',          },   {
      //   key:require("../assets/car.png")
      //   ,
      //   movement_type: 'Car',
      //   is_suspected: '1',          },
      // {
      //   key:require("../assets/car.png")            ,
      //   movement_type: 'Car',
      //   is_suspected: '1',          },
      // {
      //   key:require("../assets/car.png")            ,
      //   movement_type: 'Car',
      //   is_suspected: '1',          },
    ],
  };



  componentDidMount() {
    this.getVideos();
  }


  async getVideos() {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    //  date= '2020-08-30 07:01:00'
    // let date = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    // last_sync=${new Date()}
    let data = await fetch(`http://18.224.158.253/plac/public/api/get-alerts?user_id=1&camera_id=1&last_sync=2021-09-06 12:00:00-02:56:00 &movement_type=car move&is_suspected=1`, requestOptions)
      .then(response => response.json())
      .then(result => {
        let val = result
        console.log("RESULT OF ALERTS",result)
        this.setState({...this.state.array,array : result.data.reverse()})
        console.log('VAfsdfsdfsdfsdfsdL',this.state.array)
        let i = 0, j = 0, arr = [];
        let temp_element='';
        let array='';
        j = val.data.length;
        array = {...this.state.array};
        console.log("AJA BHAI---------",array)
        while (val.data.length) {
          arr[i] = this.state.array.pop().video_file
          // this.state.video=this.state.video[i].push(val.data.pop().video_file)
          //  temp_element = array.video_file ;
          // temp_element = arr[i];
          // array.video_file = temp_element;
          // this.setState( array );
          // console.log("AJA BHAI---------2",arr)
          console.log(this.setState({array:[...this.state.array.video_file,arr]}))
          i = i + 1;
          
          // console.log("UPDATE",          this.setState({...this.state.array, i: arr})
          
          //  this.setState({video:val.pop().video_file})
          //  this.setState({array:video[i]})
          //  this.setState({array:})
          
        }
        
        
        // console.log("HBFJDBHFB",this.state.array)
        // console.log(this.state.arr)
//  /       this.setState({ videos: arr })
      //   console.log('ASAL ARRAY', this.state.videos)
      //   this.state.array.video = this.state.videos
      //   // let res= [ ...this.state.array.video];
      // // console.log( "SETSTATE",this.setState({array}))
      //   console.log("SVMDKLVN", this.state.array.video)
      //   this.setState({...this.state.array.video, video: arr});

      //   console.log("UPDATED VIDEO",this.state.array)

        // this.setState({video})  

        // console.log("SVMDKLVN",this.state.video)


      })
      .catch(error => console.log('error', error));
  }





  render() {
    const { show, videos } = this.state;
    console.log("VIDEOS", videos)
    return (
      <ScrollView
      
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 10, flex: 1,backgroundColor:'white' }}
        contentContainerStyle={{ paddingVertical: 20 }}
      >
        <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 30, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, textDecorationLine: 'underline' }}>ALERTS</Text>
        <View style={{ marginLeft: 10, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 30 }}>

        </View>
        <View style={{ margin: 10,paddingVertical: 20, }}>
            {this.state.array.map((value, index) => {
              return (
                <Alertlist value={value} />

              )
            })}


          </View>

      </ScrollView>
    )

  }
}