import React, {Component} from 'react';
import { ImageBackground } from 'react-native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
const {width} = Dimensions.get('screen');
import {getStatusBarHeight} from 'react-native-status-bar-height';
const options = [
  {
    picture: require('../assets/Images/table3.png'),
    number: 101,
    name: 'Order for any table',
  },
  {
    picture: require('../assets/Images/cart.png'),
    number: 102,
    name: 'Check live cart',
  },
  {
    picture: require('../assets/Images/basket.png'),
    number: 103,
    name: 'Checkout',
  },
  {
    picture: require('../assets/Images/shopper.png'),
    number: 104,
    name: 'Take payments',
  },
  {
    picture: require('../assets/Images/shift.png'),
    number: 105,
    name: 'Shift customer’s table',
  },
  {
    picture: require('../assets/Images/graph1.png'),
    number: 106,
    name: 'Split tables ',
  },
  {
    picture: require('../assets/Images/sent3.png'),
    number: 107,
    name: 'Modify orders',
  },
  {
    picture: require('../assets/Images/boxes.png'),
    number: 108,
    name: 'Stock in/out items',
  },
];
const frequent = [
  {numbers: 101},
  {numbers: 102},
  {numbers: 101010},
  {numbers: 101010},
  {numbers: 103},
  {numbers: 104},
  {numbers: 105},
  {numbers: 106},
  {numbers: 101010},
];
export default class Drawer extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: getStatusBarHeight(),
          backgroundColor: '#071440',
          padding: 15,
          width: '100%',
          marginTop:20
        }}>
          <ScrollView
          style={{flex: 1, marginTop: 10}}
          showsVerticalScrollIndicator={false}
          >
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <ImageBackground
          style={{marginTop: 10, width: 100, height: 100,alignItems:'flex-end',justifyContent:'flex-end'}}
          source={require('../assets/Images/profile.png')}>
        <TouchableOpacity>
                <Image
          style={{ width: 20, height: 20}}
          source={require('../assets/Images/edit.png')}
          />
          </TouchableOpacity>
        </ImageBackground>
        <TouchableOpacity style={{marginTop:10}}>
            <Text style={{color:'white'}}>
                Logout
                </Text>
            </TouchableOpacity>
        </View>
        <Text
          style={{
            marginBottom: 10,
            marginTop: 10,
            fontWeight: '600',
            fontSize: 32,
            color: '#FFFFFF',
          }}>
          Akshay Kumar
        </Text>
        {options.map((option, index) => {
          return (
            <View style={{flexDirection: 'row', marginVertical: 10}}>
              <Image style={{width: 20, height: 20,tintColor:'white'}} source={option.picture} />
              <Text style={{color: 'white', marginLeft: 10}}>
                {option.number}
              </Text>
              <TouchableOpacity>
                <Text style={{color: 'white', marginLeft: 10}}>
                  {option.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#afafaf',
            borderRadius: 30,
            paddingHorizontal: 15,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <TextInput
            style={{
              color: 'black',
              height: 50,
              width: '100%',
              fontSize: 15,
              paddingHorizontal: 10,
            }}
            placeholder="Search here" //12345
            placeholderTextColor="#afafaf"
            // keyboardType="number-pad"
            underlineColorAndroid="transparent"
            returnKeyType="next"
          />
          <Image
            style={{
              marginRight: 10,
              height: 20,
              width: 20,
              tintColor: '#A3A3A3',
            }}
            source={require('../assets/Images/search.png')}
          />
        </View>
        <View style={{marginTop: 10, flexDirection: 'row', marginLeft: 10,flexWrap:'wrap'}}>
        {frequent.map((button, index) => {
          return (<TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 30,
              padding: 3,
              paddingHorizontal:10,

              borderColor: '#FFFFFF',
              marginRight:10
              ,marginTop:5
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>{button.numbers}</Text>
          </TouchableOpacity>)})}
          
        </View>
        </ScrollView>
      </View>
    );
  }
}
