import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Right, Button, Body, ListItem, Left } from 'native-base';
import { Icon } from 'react-native-elements';
import { SERVER_URL } from '../config';
import { idrFormat } from '../config';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showProcess: false
    }
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params);
  }

  showProcess() {
    this.setState({showProcess: true})
  }

  hideProcess() {
    this.setState({showProcess: false})
  }

  render() {
    return(
      <ScrollView>
        <Image
          resizeMode='contain'
          style={styles.image}
          source={{uri: `${SERVER_URL}images/products/${this.props.navigation.state.params.photo}`}}
          />
        <View style={styles.viewContainer}>
          <Text style={styles.subtitle}>Deskripsi Produk</Text>
          <Text style={styles.text}>{this.props.navigation.state.params.description}</Text>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.subtitle}>Harga</Text>
          <Text style={styles.text}>Harga Member: {idrFormat(this.props.navigation.state.params.resellerprice)}</Text>
          <Text style={styles.text}>Harga Normal: {idrFormat(this.props.navigation.state.params.enduserprice)}</Text>
        </View>
        {
          !this.state.showProcess
          ?
          <TouchableNativeFeedback onPress={() => this.showProcess()}>
            <View style={styles.containerWithIcon}>
              <Text style={styles.subtitle}>Pilihan Proses</Text>
              <Right>
                <Icon name='chevron-right'/>
              </Right>
            </View>
          </TouchableNativeFeedback>
          :
          <TouchableNativeFeedback onPress={() => this.hideProcess()}>
            <View style={{backgroundColor: 'white', marginBottom: 20}}>
              <View style={styles.containerWithIcon}>
                <Text style={styles.subtitle}>Pilihan Proses</Text>
                <Right>
                  <Icon name='expand-more'/>
                </Right>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{paddingLeft: 25, paddingBottom: 25}}>Cutting</Text>
                {
                  this.props.navigation.state.params.process.cut.length === 0
                  ?
                  <Icon color='red' iconStyle={{marginLeft: 10, marginTop: -23}} name="cancel" />
                  :
                  <Icon color='#00ff0c' iconStyle={{marginLeft: 10, marginTop: -23}} name="check-circle" />
                }
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{paddingLeft: 25, paddingBottom: 25}}>Slicing</Text>
                  {
                    this.props.navigation.state.params.process.slice.length === 0
                    ?
                    <Icon color='red' iconStyle={{marginLeft: 10, marginTop: -23}} name="cancel" />
                    :
                    <Icon color='#00ff0c' iconStyle={{marginLeft: 10, marginTop: -23}} name="check-circle" />
                  }
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{paddingLeft: 25, paddingBottom: 25}}>Grinding</Text>
                  {
                    this.props.navigation.state.params.process.grind === null || this.props.navigation.state.params.process.grind
                    ?
                    <Icon color='red' iconStyle={{marginLeft: 10, marginTop: -23}} name="cancel" />
                    :
                    <Icon color='#00ff0c' iconStyle={{marginLeft: 10, marginTop: -23}} name="check-circle" />
                  }
              </View>
            </View>
          </TouchableNativeFeedback>
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: 300,
    marginTop: -40,
    marginBottom: -25,
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold'
  },
  viewContainer: {
    backgroundColor: 'white',
    padding: 25,
    marginBottom: 10
  },
  text: {
    textAlign: 'left',
    paddingTop: 10,
    color: '#9b9b9b'
  },
  containerWithIcon: {
    backgroundColor: 'white',
    paddingTop: 13,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row'
  }
});
