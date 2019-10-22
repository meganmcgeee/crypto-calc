import * as WebBrowser from 'expo-web-browser';
import axios from 'axios'
import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput, Picker, Item } from 'react-native';

class Converter extends React.Component {
  constructor(props){
      super(props); 
        this.state = {
          result: null,
          fromCurrency: "USD",
          toCurrency: "BTC",
          amount: 1,
          currencies: []
        };
      };
      // get up-to-minute currency rates, set USD as default
      componentDidMount() {
        axios
        .get("http://api.openrates.io/latest")
        .then(response => {
          const currencyAr = ["USD"];
          for (const key in response.data.rates) {
            currencyAr.push(key);
          }
          this.setState({ currencies: currencyAr });
        })
        .catch(err => {
          console.log("Did not load", err);
        });
      };
      // convert entered base currency 
      convertHandler = () => {
        if (this.state.fromCurrency !== this.state.toCurrency) {
          axios
            .get(
              `http://api.openrates.io/latest?base=${
                this.state.fromCurrency
              }&symbols=${this.state.toCurrency}`
            )
            .then(response => {
              const result =
                this.state.amount * response.data.rates[this.state.toCurrency];
              this.setState({ result: result.toFixed(5) });
            })
            .catch(error => {
              console.log("Did not return", error.message);
            });
        } else {
          this.setState({ result: "You can't convert the same currency!" });
        }
      };

      // handle changes  in selection of currency type
      pickerHandler = event => {
        if (event.target.name === "from") {
          this.setState({ fromCurrency: event.target.value });
        } else {
          if (event.target.name === "to") {
            this.setState({ toCurrency: event.target.value });
          }
        }
      
  };  
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.instructionText}>1. Choose your starting currency</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
              <Picker name="from" selectedValue={this.state.currency} style={{ width: 100 }} onValueChange={(itemValue, itemIndex) => this.setState({currency: itemValue})}>
                <Picker.Item label="BTC" value="BTC" /> 
                <Picker.Item label="USD" value="USD" />
              </Picker>
              <Picker style={styles.select} name="to">
                <Picker.Item label="USD" value="USD" /> 
                <Picker.Item label="BTC" value="BTC" />
              </Picker>
            </View>
            <Text style={styles.instructionText}>2. Enter your starting value</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TextInput style={styles.currencyInput} name="to" placeholder="1000" 
                // value={this.state.amount}
                // onChange={event => this.setState({ amount: event.target.value })}
              />
              <TextInput style={styles.currencyInput} name="from" placeholder="1000" 
                // value={this.state.amount}
                // onChange={event => this.setState({ amount: event.target.value })}
              />
            </View>  
            <Text style={styles.instructionText}>3. Hit Convert!</Text>   
        <Text style={styles.instructionText}>{this.renderResultValue}</Text>
        <Button title="Convert"></Button>
      </View>
    );
  }
}
export default Converter

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      paddingTop: 10, 
      justifyContent: "center"
      // margin: 35
    },
    instructionText:{
        fontSize: 20,
    },
    currencyInput: {
        marginTop: 10,
        marginBottom: 20, 
        height: 40, 
        width: 150, 
        borderColor: 'gray', 
        borderWidth: 1
    },
    select: {
      paddingRight: 20
    }
  });
  
  