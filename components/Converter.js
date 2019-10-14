import * as WebBrowser from 'expo-web-browser';
import axios from 'axios'
import React, { Component } from 'react';
import { Text, View, Button, FlatList, TextInput } from 'react-native';

const API_KEY='a5e3e69ec31c780ade2977e0e7b7d87b'

export default class Converter extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    
      componentDidMount(){
        return fetch('https://data.fixer.io/api/latest?access_key=API_KEY')
          .then((response) => response.json())
          .then((responseJson) => {

            this.setState({
              isLoading: false,
              dataSource: responseJson.rates,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
 
  render() {
  
    return (
      <View style={{ flex: 1, paddingTop: 100, justifyContent: "center", alignItems: "left" }}>
          <Text>Choose your starting currency</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>
                <Button title="₿"></Button>
            </View>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>
                <Button title="$"></Button>
            </View>
        </View>
        <TextInput
            style={{ height: 40, width: 400, borderColor: 'gray', borderWidth: 1 }}
          />
          <Button title="Convert"></Button>
          <Text>If you have $$$ BTC then you have $$$ dollars:</Text>

          <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => <Text>{item.timestamp}, {item.rate}</Text>}
                keyExtractor={({info}, index) => info}
                />
          
      </View>
    );
  }
}
