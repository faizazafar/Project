import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, TouchableHighlight, Linking, Text, Image, View, Button } from 'react-native';

export default class Reg_log extends React.Component {
    handleClick2 = () => {
        this.props.navigation.navigate('login')

    }
    handleClick1 = () => {
        this.props.navigation.navigate('register')

    }
    render() {
        return (
            <View style={styles.containerParent}>
                <View style={styles.containerChild1}>

                    <Image style={styles.logo} source={{ uri: 'https://i.pinimg.com/originals/46/cc/f1/46ccf1eb2c317642e702313020812921.png', }} />
                    <Text style={styles.head1}>Secure</Text>
                    <Text style={styles.head2}>Gaddi</Text>
                    <Text style={styles.para}>Get your vehicle safe and secure</Text>

                    <StatusBar style="auto" />
                </View>
                <View style={styles.containerChild2}>

                </View>
                <TouchableHighlight
                    style={styles.submit}
                    onPress={this.handleClick1}
                    underlayColor='#fff'>
                    <Text style={styles.getstart} >Register</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.submit}
                    onPress={this.handleClick2}
                    underlayColor='#fff'>
                    <Text style={styles.getstart} >Login</Text>
                </TouchableHighlight>



            </View>

        )
    }
}
const styles = StyleSheet.create({

    containerChild1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 150,
    },

    logo: {
        width: 100,
        height: 40,
        bottom: 20,
        top: 20,

    },
    head1: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#D86363',
        right: 40,
        top: 10,
        bottom: 0,


    },

    head2: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#272F58',
        left: 20,
        right: 0
    },

    para: {
        fontSize: 14,
        color: '#272F58'
    },
    containerChild2: {
        alignItems: 'center',
        marginTop: 150,
        paddingTop: 20,
        paddingBottom: 20,
        height: 50,
        width: 100,


    },
    submit: {
        marginRight: 60,
        marginLeft: 60,

        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#272F58',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
        alignContent: 'center',
        alignItems: 'center',
    },
    getstart: {
        color: '#fff',
    }
});
