import { Card } from 'native-base';
import React from 'react';
import { TouchableHighlightComponent } from 'react-native';
import { TouchableNativeFeedback,Touchable,TouchableWithoutFeedback, TouchableHighlightBase } from 'react-native';
import {View, Text, StyleSheet, Image, TouchableOpacity,TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
const {width} = Dimensions.get('screen')

class Tabbar extends React.Component {
 
  render(){

    const {navigation,navigation:{state},descriptors} = this.props;
    return (
      <View style={{height:80,alignItems:'center',backgroundColor:'transparent',position: 'absolute',bottom:0,right:0,left:0}}>
        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)']} style={{height:40,width}}></LinearGradient> 
        <TouchableOpacity
              onPress={()=>this.props.navigation.toggleDrawer()}
              style={{width:50,height:50,borderRadius:20,backgroundColor:'#071440',zIndex:99,justifyContent:'center',alignItems:'center',position: 'absolute',top:0}}>
                <Image source={require('../assets/Images/btnLeftMenu.png')} style={{height:30,width:30}} resizeMode="contain"/>
              </TouchableOpacity>
    <View style={{ borderTopLeftRadius:20,borderTopRightRadius:20,height:60,flexDirection:'row', alignItems:'center',backgroundColor:'white',position: 'absolute',bottom:0,right: 0,left:0}}>
         {state.routes.map((route, index) => {
               let label = route.routeName;
               const isFocused = state.index === index;
               const onPress = () => {
                navigation.navigate(route.routeName);
                // this.props.navigation.dispatch(StackActions.popToTop());
            };
            let imageSrc = require('../assets/Images/bell.png');
        if(route.key === "Profile") imageSrc = require('../../Image/pr.png');
        if(route.key === "Livefeed") imageSrc = require('../../Image/live.png');
        if(route.key === "Map") imageSrc = require('../../Image/map.png');
        if(route.key === "Alert") imageSrc = require('../../Image/alert.jpg');

        if(index === 2)
         return <View
         style={styles.tab}>
           {/* <View style={{
            //  position:'absolute',
            // marginTop:-40,
            // backgroundColor:'red'
             }}>
             
            <TouchableHighlight
              onPress={()=>this.props.navigation.toggleDrawer()}
              style={{width:50,height:50,borderRadius:20,backgroundColor:'#071440',zIndex:99,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../assets/Images/btnLeftMenu.png')} style={{height:30,width:30}} resizeMode="contain"/>
              </TouchableHighlight>
         </View> */}
         </View>
        return (

              
           <TouchableOpacity
           activeOpacity={0.7}
           style={{flex:1,justifyContent:'center',alignItems:'center'}}
           onPress={onPress}
           ><Image source={imageSrc} style={{width:22,height:20,marginBottom:10,resizeMode:'contain',tintColor:isFocused ? "#E64660" : '#9B96AB'}} />
           <Text
              style={{
                color:  isFocused ? '#E64660' : '#6B6B6B',
                fontSize: 8,fontWeight:'700'
              }}
              numberOfLines={1}
              >
              {label}
            </Text>
         <View style={{marginTop:3,height:5,width:5,borderRadius:50,backgroundColor: isFocused ? '#E64660' : 'white'}}>
              </View>
            </TouchableOpacity>
            
            
        );
      })}
      
    </View>
    </View>
    )
  }
  
}
export default Tabbar

const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    // elevation: 2,
    paddingVertical: 4,
    // backgroundColor:'red',
    // justifyContent:'center',
    // paddingBottom:6,
    alignItems: 'center',
  },
  tab: {
    // flex: 1,
    // elevation: 2,
    width:"20%",
    paddingVertical: 4,
    zIndex:99,
    overflow:'visible',
    // backgroundColor:'red',
    // justifyContent:'center',
    // paddingBottom:120,
    alignItems: 'center',
  },
});