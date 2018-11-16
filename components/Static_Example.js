import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base';
import Sapi from './Sapi';
import Ayam from './Ayam';
import Olahan from './Olahan';

export default class Example extends Component {
  render() {
    return(
      <Container>
       <Text>Example Page</Text>
     </Container>
    )
  }
}
