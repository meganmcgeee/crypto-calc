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
    padding: 50
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 80,
    color: "green",
    fontWeight: 'bold',
    flex: 1, 
    paddingTop: 5, 
    paddingLeft: 20,
    marginBottom: 10, 
    justifyContent: "center", 
    alignItems: "center"  
  },
});
