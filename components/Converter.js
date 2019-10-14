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
        let convertedCurrency = <Text>After you choose your currency, enter the amount that you want to convert. </Text>;
        if (this.state.convertedCurrency) {
            convertedCurrency = <ConvertedCurrency list={this.state.convertedCurrency} />;
        }
    
        return convertedCurrency;
      } 
  render() {
  
    return (
      <View style={{ flex: 1, paddingTop: 100, justifyContent: "center", alignItems: "left" }}>
          <Text>Choose your starting currency</Text>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 40,}}>
             <View>
                <Button style={styles.currencyButton} title="$"></Button>
            </View>
            <View>
                <Button style={styles.currencyButton} title="₿"></Button>
            </View>
        </View>    
         
        {this.renderResultValue}
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
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      flex: 1, 
      paddingTop: 100, 
      paddingLeft: 50, 
      justifyContent: "center", 
      alignItems: "center"  
    },
    currencyInput: {
        marginTop: 40,
        marginBottom: 20, 
        height: 40, 
        width: 200, 
        borderColor: 'gray', 
        borderWidth: 1
    }
  });
  
  