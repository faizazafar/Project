// import React, { Component } from 'react'
// import { Text, View, StyleSheet} from 'react-native'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

// export default class index extends Component {
//   state={
//     region: {
//       latitude: 37.78825,
//       longitude: -122.4324,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     },
//   }
  
// onRegionChange(region) {
//   this.setState({ region });

// }
//   render() {
//     const {region}= this.state;
//     console.log(region)
//     return (
//       <View style={styles.container}>
//       <MapView
//         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//         style={styles.map}
//         region={this.state.region}
//         onRegionChange={this.onRegionChange}

//       >
//       </MapView>
//     </View>

//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     height:  '100%',
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//  });
 
import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class MapComponent extends Component {
  constructor() {
    super()
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
    }
  }

  
  componentDidMount() {
    Geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }

      this.setState({initialPosition: initialRegion})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000,  });
  }


  renderScreen = () => {
      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={this.state.initialPosition}
            followsUserLocation={true}
            showsUserLocation={true}

            >
               {/* <MapView.Marker
            coordinate={{latitude:this.state.initialPosition.latitude,longitude:this.state.initialPosition.longitude}}
            title={"title"}
            description={"description"}
         /> */}
      </MapView>

        </View>
      );
  }

  render() {
    return (
      this.renderScreen()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default MapComponent;