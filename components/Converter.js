import * as WebBrowser from 'expo-web-browser';
import axios from 'axios'
import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

const API_KEY='a5e3e69ec31c780ade2977e0e7b7d87b'

export default class Converter extends Component {
    state = {
        convertedCurrency: null,
        loading: false,
        value: ''
      };
    
      search = async amount => {
        this.setState({ loading: true });
        const res = await axios(
          `https://data.fixer.io/api/convert?access_key=a5e3e69ec31c780ade2977e0e7b7d87b&from=USD&to=BTC&amount=${amount}`
        );
        const convertedCurrency = await res.data.results;
    
        this.setState({ convertedCurrency, loading: false });
      };
    
      onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({ value: e.target.value });
      };
    
      get renderResultValue() {
        let convertedCurrency = <Text style={styles.instructionText}>2. After you choose your currency, enter the amount that you want to convert. </Text>;
        if (this.state.convertedCurrency) {
            convertedCurrency = <ConvertedCurrency list={this.state.convertedCurrency} />;
        }
    
        return convertedCurrency;
      } 
  render() {
  
    return (
      <View style={{ flex: 1, paddingTop: 50, justifyContent: "center", alignItems: "left" }}>
          <Text style={styles.instructionText}>1. Choose your starting currency</Text>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 10, marginBottom: 20 }}>
             <View>
                <Button style={(this.state.btnSelected== 1)?styles.btnSelected:styles.notSelected}
                onPress={() => this.setState({ btnSelected: 1 })} title="$"></Button>
            </View>
            <View>
                <Button style={(this.state.btnSelected== 2)?styles.btnSelected:styles.notSelected}
                onPress={() => this.setState({ btnSelected: 2 })} title="₿"></Button>
            </View>
        </View>    
         
        <Text style={styles.instructionText}>{this.renderResultValue}</Text>
        <TextInput 
            value={this.state.value}
            onChange={e => this.onChangeHandler(e)}
            placeholder="$1,000"
            style={styles.currencyInput}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
    currencyButton: {
      fontFamily: 'Cochin',
      width: 50,
      height: 50,
     backgroundColor: 'powderblue'
    },
    btnSelected: {
       borderColor: 'blue'
     },
     notSelected : {
        borderColor: 'white'
     },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      flex: 1, 
      paddingTop: 100, 
      paddingLeft: 50, 
      justifyContent: "center", 
      alignItems: "center"  
    },
    instructionText:{
        fontSize: 20,
      
    },
    currencyInput: {
        marginTop: 10,
        marginBottom: 20, 
        height: 40, 
        width: 200, 
        borderColor: 'gray', 
        borderWidth: 1
    }
  });
  
  