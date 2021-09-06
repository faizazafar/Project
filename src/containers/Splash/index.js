import React, { Component } from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class index extends Component {
    handleClick = () => {
        this.props.navigation.navigate("Gender");
    }
    render() {
        return (
            <View style={{
                flex: 1, backgroundColor: '#ffffff', paddingTop: 20 + getStatusBarHeight()
            }}>

                <View style={{ marginBottom: 100, flex: 0.8 }}>
                    <Image style={{ width: '100%', resizeMode: 'cover', height: '100%' }} source={require('../../../Image/splash.jpg')} />
                    <View style={{ marginTop:50,marginLeft:10 }}>
                        <Text style={{
                            fontSize: 31, fontWeight: 'bold', marginLeft: 10,
                        }}>24 Hours Monitoring</Text>

                        <Text style={{ marginTop:10,marginLeft: 10,fontSize:18 }}>
                            Our expert team are here to help you with over 33 years of experience and industry knowledge.
                        </Text>
                    </View>
                </View>
                <View style={{ flex:1/3,marginTop:50,width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.handleClick}
                        style={{ paddingHorizontal: 30, paddingVertical: 10, borderRadius: 50, backgroundColor: '#272F58' }}>
                        <Text style={{ fontSize: 20,textAlign: 'center', color: 'white' }}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
