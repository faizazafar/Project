import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View >
        <View style={{flexDirection:'row'}}>
     <Image source={require('../../../Image/profile.png')} style={{width:50,height:50,resizeMode:'contain'}} />
     </View>
      </View>
    )
  }
}
