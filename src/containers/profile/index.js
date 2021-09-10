import React, { Component } from 'react'
import { Text, View, Image, ScrollView,TouchableOpacity,Linking } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Dimensions } from 'react-native';

import Video from 'react-native-video'
export default class index extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}
        style={{ marginTop: 10, flex: 1, backgroundColor: 'white' }}
        contentContainerStyle={{ paddingVertical: 40 }}>
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../../Image/profile.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 18, marginLeft: 10, fontWeight: 'bold' }}>Usman Ahmed</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 15, marginLeft: 10, color: 'grey' }}>+923353785571</Text>
                <Image style={{ width: 15, tintColor: '#921621', height: 15, resizeMode: 'contain', marginLeft: 5 }} source={require('../../../Image/edit.png')} />
              </View>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 31, marginTop: 35, fontWeight: 'bold' }}>Personal</Text>
          </View>
          <View style={{ justifyContent:'space-between',alignItems:'center',flex:1, flexDirection:'row',height: 50, marginTop: 20, borderBottomColor: 'grey', borderBottomWidth: 1 }}>
          <View style={{flexDirection:'row'}}>
            <View>
          <Image style={{width:30,height:30,marginTop:10,tintColor: '#921621',resizeMode:'contain'}} source={require('../../../Image/username.png')} />
          </View>
          <View>
          <Text style={{ fontSize: 15, marginTop: 15,marginLeft:20, fontWeight: 'bold' }}>Username</Text>
          </View>
          </View>
          <Text style={{ fontSize: 16, marginTop: 20}}>Usman094</Text>
          </View>


          <View style={{ justifyContent:'space-between',alignItems:'center',flex:1, flexDirection:'row',height: 50, marginTop: 20, borderBottomColor: 'grey', borderBottomWidth: 1 }}>
          <View style={{flexDirection:'row'}}>
            <View>
          <Image style={{width:30,height:30,marginTop:10,tintColor: '#921621',resizeMode:'contain'}} source={require('../../../Image/email.png')} />
          </View>
          <View>
          <Text style={{ fontSize: 15, marginTop: 15,marginLeft:20, fontWeight: 'bold' }}>Email</Text>
          </View>
          </View>
          <Text style={{ fontSize: 16, marginTop: 20}}>uk288251@gmail.com</Text>
          </View>



          <View style={{ justifyContent:'space-between',alignItems:'center',flex:1, flexDirection:'row',height: 50, marginTop: 20, borderBottomColor: 'grey', borderBottomWidth: 1 }}>
          <View style={{flexDirection:'row'}}>
            <View>
          <Image style={{width:30,height:30,marginTop:10,tintColor: '#921621',resizeMode:'contain'}} source={require('../../../Image/password.png')} />
          </View>
          <View>
          <Text style={{ fontSize: 15, marginTop: 15,marginLeft:20, fontWeight: 'bold' }}>Password</Text>
          </View>
          </View>
          <Text style={{ fontSize: 16, marginTop: 20}}>******</Text>
          </View>

          <View style={{ justifyContent:'space-between',alignItems:'center',flex:1, flexDirection:'row',height: 50, marginTop: 20, borderBottomColor: 'grey', borderBottomWidth: 1 }}>
          <View style={{flexDirection:'row'}}>
            <View>
          <Image style={{width:30,height:30,marginTop:10,tintColor: '#921621',resizeMode:'contain'}} source={require('../../../Image/address.jpg')} />
          </View>
          <View>
          <Text style={{ fontSize: 15, marginTop: 15,marginLeft:20, fontWeight: 'bold' }}>Addres</Text>
          </View>
          </View>
          <Text style={{ fontSize: 16, marginTop: 20}}>abc road</Text>
          </View>



          <View style={{ justifyContent:'space-between',alignItems:'center',flex:1, flexDirection:'row',height: 50, marginTop: 20, borderBottomColor: 'grey', borderBottomWidth: 1 }}>
          <View style={{flexDirection:'row'}}>
            <View>
          <Image style={{width:30,height:30,marginTop:10,tintColor: '#921621',resizeMode:'contain'}} source={require('../../../Image/zip.png')} />
          </View>
          <View>
          <Text style={{ fontSize: 15, marginTop: 15,marginLeft:20, fontWeight: 'bold' }}>Zip Code</Text>
          </View>
          </View>
          <Text style={{ fontSize: 16, marginTop: 20}}>75950</Text>
          </View>


          <View>
          <Text style={{ fontSize: 31, marginTop: 35, fontWeight: 'bold' }}>General</Text>
          <View style={{ justifyContent:'space-between',alignItems:'center',flex:1, flexDirection:'row',height: 50, marginTop: 20, borderBottomColor: 'grey', borderBottomWidth: 1 }}>
          <TouchableOpacity onPress={()=>{Linking.openURL('tel:8777111223');} } style={{ flexDirection:'row', height: 50, marginTop: 10}}>
            <View>
          <Image style={{width:30,height:30,marginTop:10,tintColor: '#921621',resizeMode:'contain'}} source={require('../../../Image/email.png')} />
          </View>
          <View>
          <Text style={{ fontSize: 15, marginTop: 15,marginLeft:20, fontWeight: 'bold' }}>Contact</Text>
          </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, marginTop: 20}}>+92452359637</Text>
          </View>






       
{/* <View style={{ width: '100%', height: 50, marginTop: 10, borderBottomColor: 'grey', borderBottomWidth: 1 }}> */}
<TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Login')}} style={{ flexDirection:'row',width: '100%', height: 50, marginTop: 10, borderBottomColor: 'grey', borderBottomWidth: 1}}>
           
           {/* <Image style={{width:30,height:30,resizeMode:'contain',marginTop:10,tintColor:'#921621'}} source={require('../../../Image/contact.png')}/> */}
           <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                     <Image style={{width:30,height:30,marginTop:10,tintColor: '#921621',resizeMode:'contain'}} source={require('../../../Image/logout.jpg')} />
                     <Text style={{ fontSize: 15, marginTop: 15,marginLeft:20, fontWeight: 'bold' }}>Logout</Text>
                     </View>
           
           </TouchableOpacity>
           
            </View>
        </View>
      </ScrollView>
    )
  }
}
