import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, TouchableHighlight, Linking, Text, Image, View, Button } from 'react-native';

export default function List() {

  return (
    <View style={styles.containerParent}>

      <View style={styles.containerChild1}>

        <Image style={styles.logo} source={{ uri: 'https://lh3.googleusercontent.com/proxy/I0oeS_TjPt_LnQ_vaOcKUWPNWlPcJKgeH0XZkvBxwbXNwE4XN0GHU8XJUVgG0YQcUugaGkjb1sdOrtGYr1waovdlYK9CMgoWhAWfVswvxGsk1L7MZEkCvVEhKRzZtf85RY-V3wR-mfw7iHZz_gs', }} />
        <Text style={styles.head1}>Secure</Text>
        <Text style={styles.head2}>Gaddi</Text>
        <Text style={styles.para}>Get your vehcile safe and secure</Text>

        <StatusBar style="auto" />
      </View>
    </View>



  );
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
});
