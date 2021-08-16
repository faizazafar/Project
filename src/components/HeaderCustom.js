import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import { Colors, Icon } from '../config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Menu, { MenuItem } from 'react-native-material-menu';
import { connect } from 'react-redux';

class HeaderCustom extends React.Component {
  _menu = null;
  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  goTo = (route) => {
    this.props.navigation.navigate(route)
    this.hideMenu()
  }
  render(){
    const {navigation,title,back,rightIcon,mode} = this.props;
    return (
    <View style={{ height:60,flexDirection:'row', alignItems:'center',backgroundColor:Colors[mode].backgroundColor,borderBottomColor:Colors[mode].lightGrey,borderBottomWidth:0.5, paddingHorizontal:10,justifyContent:back?'center':'flex-start'}}>
       
       {back && <TouchableOpacity 
      containerStyle={{position:'absolute',left:10}}
      onPress={()=>navigation.goBack()}
      style={{flexDirection:'row',alignItems:'center'}}
      >
        <Icon name="ios-chevron-back" color={Colors[mode].primary} />
        <Text style={{color:Colors[mode].primary, marginRight:10}}>Back</Text>
        </TouchableOpacity>}
      <Text style={{fontSize:18, color:Colors[mode].primary }}>{title}</Text>
      {rightIcon &&
      <View style={{position:'absolute',right:10}}>
      <Menu
      style={{backgroundColor:Colors[mode].backgroundColor,borderWidth:1,borderColor:'white'}}
          ref={this.setMenuRef}
          button={<Icon onPress={this.showMenu} name="dots-three-vertical" family="Entypo" size={20} color={Colors[mode].primary} />}
        >
          <MenuItem textStyle={{color:Colors[mode].Black}} onPress={()=>this.goTo('Archived')}>Archived Chats</MenuItem>
          <MenuItem textStyle={{color:Colors[mode].Black}} onPress={()=>this.goTo('Settings')}>Settings</MenuItem>
          <MenuItem textStyle={{color:Colors[mode].Black}} onPress={()=>this.goTo('About')}>About</MenuItem>
        </Menu>
        </View>} 
    </View>
    )
  }
  
}
function mapStateToProps(state){
  return({
    mode:state.reducer.mode
  })
}     
export default connect(mapStateToProps)(HeaderCustom)

const styles = StyleSheet.create({
  
})