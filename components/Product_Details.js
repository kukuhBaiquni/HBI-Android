import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ProductDetails extends Component {

  componentDidMount() {
    console.log('masuk');
  }

  componentWillUnmount() {
    console.log('keluar');
  }

  render() {
    return(
      <View>
        <Text>Product Details</Text>
      </View>
    )
  }
}
