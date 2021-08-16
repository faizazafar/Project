import React, { Component } from "react";
import { Text, View, StyleSheet, Image, SVGImage } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView from "react-native-maps";
import { Dimensions } from "react-native";
import GetLocation from "react-native-get-location";

export default class Mapdash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
    };

    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") console.log("PERMISSION DENIED");

    let location = await Location.getCurrentPositionAsync({
      enabledHighAccuracy: true,
    });

    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    };

    this.setState({ region: region });
    // alert(location.coords.latitude)
    // alert(location.coords.longitude)
  };

  render() {
    return (
      <View>
        <MapView
          initialRegion={this.state.region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          style={styles.map}
          showsMyLocationButton={true}
        >
          {/* <SVGImage>
            href=
            {
              "https://lh3.googleusercontent.com/proxy/mSKq0zV3DKtNoUJBK94SJLBIGL--7jpLsKasJf_qavyL7-DjWaRue3NKKWR8Q9_YpkNViBQtZAnkmHcoOjtH7z4ru09DNNHnMlEqyw"
            }
            width={40}
            height={30}
          </SVGImage> */}
          {/* <Camera /> */}
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // width:100,
    // height: 380,
    // marginBottom:200
  },
});
