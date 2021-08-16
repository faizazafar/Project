import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import MapView from "react-native-maps";

export default class camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
    };
    this._getLocationAsync();
  }
  _getLocationAsync = async () => {
    let location = await Location.getCurrentPositionAsync({
      enabledHighAccuracy: true,
    });

    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    };

    const { Camera } = this.props.Camera
      ? this.props.Camera
      : {
          uid: "NoCamerapassed",
          location: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
        };
    this.setState({ region: region });

    const coordinate = new MapView.AnimatedRegion({
      latitude: Camera.location.latitude,
      longitude: Camera.location.longitude,
    });
    this.state = {
      Camera: Camera,
      coordinate: coordinate,
    };
  };

  render() {
    return (
      <MapView.Marker.Animated
        coordinate={this.state.coordinate}
        anchor={{ x: 0.35 }}
        ref={(marker) => {
          this.marker = marker;
        }}
        style={{ width: 50, height: 50 }}
      >
        <Image
          source={require("../../../Image/cctv.gif")}
          style={{
            width: 32,
            height: 32,
          }}
        />
      </MapView.Marker.Animated>
    );
  }
}
