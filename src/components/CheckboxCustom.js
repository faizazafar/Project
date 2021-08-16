import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import {Card} from 'native-base'

export default class CheckboxCustom extends Component {

  

  render() {
      const {status,onPress,color,size}=this.props
    return (
 <Card style={{borderColor:color,width:size,height:size,borderWidth:1,borderRadius:size/6}}>
<TouchableOpacity onPress={onPress} style={{flex:1,margin:0,padding:0,justifyContent:'center',alignItems:'center'}}>
    {status?<Image style={{width:size*0.66,height:size*0.66,tintColor:color}} source={require('../assets/Images/checked.png')}/>:null}
</TouchableOpacity>
 </Card>
    );
  }
}
