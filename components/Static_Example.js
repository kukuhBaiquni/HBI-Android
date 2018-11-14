import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Tab, Tabs, ScrollableTab } from 'native-base';
import Sapi from './Sapi';
import Ayam from './Ayam';
import Olahan from './Olahan';

export default class Example extends Component {
  render() {
    return(
      <Container>
       <Tabs renderTabBar={()=> <ScrollableTab />}>
         <Tab textStyle={{color: '#9e9e9e'}} activeTabStyle={{backgroundColor: '#7c0c10'}} tabStyle={{backgroundColor: '#7c0c10'}} heading="Tab1">
           <Sapi />
         </Tab>
         <Tab textStyle={{color: '#9e9e9e'}} activeTabStyle={{backgroundColor: '#7c0c10'}} tabStyle={{backgroundColor: '#7c0c10'}} heading="Tab2">
           <Ayam />
         </Tab>
         <Tab textStyle={{color: '#9e9e9e'}} activeTabStyle={{backgroundColor: '#7c0c10'}} tabStyle={{backgroundColor: '#7c0c10'}} heading="Tab3">
           <Olahan />
         </Tab>
         <Tab textStyle={{color: '#9e9e9e'}} activeTabStyle={{backgroundColor: '#7c0c10'}} tabStyle={{backgroundColor: '#7c0c10'}} heading="Tab4">
           <Sapi />
         </Tab>
         <Tab textStyle={{color: '#9e9e9e'}} activeTabStyle={{backgroundColor: '#7c0c10'}} tabStyle={{backgroundColor: '#7c0c10'}} heading="Tab5">
           <Ayam />
         </Tab>
         <Tab textStyle={{color: '#9e9e9e'}} activeTabStyle={{backgroundColor: '#7c0c10'}} tabStyle={{backgroundColor: '#7c0c10'}} heading="Tab6">
           <Olahan />
         </Tab>
       </Tabs>
     </Container>
    )
  }
}
