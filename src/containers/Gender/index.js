import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity, TouchableOpacityBase, Alert } from 'react-native'
import { getStatusBarHeight} from 'react-native-status-bar-height'
export default class index extends Component {
 state={
     checked:''
 } 

    render() {
        const {checked}=this.state;
        return (
            <View style={{flex:1,paddingHorizontal:30,paddingTop:20+getStatusBarHeight(),alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{marginBottom:40,fontSize:18,fontWeight:'bold'}}>Please Select Gender</Text>

                <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-evenly',marginBottom:10}}>
                    <TouchableOpacity onPress={()=>{this.setState({checked:'man'})}}>
                    <View style={{width:100,height:100,borderWidth:1,borderRadius:20,borderColor:this.state.checked==='man'?'#ecc97b':'white'}}>
                    <Image style={{resizeMode:'contain',width:100,height:100}} source={require('../../../Image/man.png')} />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({checked:'woman'})}}>
                    <View style={{width:100,height:100,borderWidth:1,borderRadius:20,borderColor:this.state.checked==='woman'?'#ecc97b':'white'}}>
                    <Image style={{resizeMode:'contain',width:100,height:100}} source={require('../../../Image/woman.png')} />
                    </View>
                    </TouchableOpacity>
                    </View>
                    {  checked!==''?
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}} style={{paddingHorizontal:30,marginTop:20,paddingVertical:10,borderRadius:30,backgroundColor:'#272F58'}}>
                      <Text style={{color:'white',textAlign:'center'}}>Continue</Text>  
                      </TouchableOpacity>
                      :null}
            </View>
        )
    }
}
