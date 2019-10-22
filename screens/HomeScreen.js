import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Converter from '../components/Converter';

export default function HomeScreen() {
  return (
    <View>
      <ScrollView>
        <View style={styles.body}>
          <Text style={styles.titleText}>CryptoCalc</Text>
          <Text> CryptoCalc provides up-to-the-minute currency conversions on the US Dollar to Bitcoin and back so you can see where your investments stand or know when to buy in.</Text>
          <Converter></Converter>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 40,
    color: "green",
    fontWeight: 'bold',
    flex: 1, 
    paddingTop: 5, 
    marginBottom: 20,
    paddingLeft: 20,
    justifyContent: "center", 
    alignItems: "center"  
  },
});
