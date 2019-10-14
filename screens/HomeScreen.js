import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Converter from '../components/Converter';

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     flex: 1
//   },
//   contentContainer: {
//     paddingTop: 30
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop: 10
//   },
//   welcomeImage: {
//     height: 80,
//     marginLeft: -10,
//     marginTop: 3,
//     resizeMode: 'contain',
//     width: 100
//   }
// });




export default function HomeScreen() {
  return (
    <View>
      <ScrollView>
        <View>
          <Text>Welcome to CryptoCalc</Text>
     
          <Converter></Converter>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

