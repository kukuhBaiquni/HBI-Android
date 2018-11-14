import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import MainPage from './Main_Page';
import Example from './Static_Example';
import { View, Item, Input } from 'native-base';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const FormInput = () => (
  <View>
    <Item style={{borderColor: '#7c0c10'}} regular>
      <Input style={styles.input} placeholder='Search' allowFontScaling={false}/>
    </Item>
  </View>
)

const IconBadge = () => (
  <View>
    <TouchableOpacity style={styles.badge}>
      <Text style={{color: 'white'}}>3</Text>
    </TouchableOpacity>
    <Icon name='shopping-cart' size={27} color='white'/>
  </View>
)

export const RootStack = createStackNavigator({
  Home: {
    screen: MainPage,
    navigationOptions: {
      header: null,
      title: 'Home',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#7c0c10'
      },
      headerRight: <IconBadge />,
      headerRightContainerStyle: {
        marginRight: 20
      },
      headerLeft: <FormInput />
    }
  }
})

export const Tabs = createMaterialTopTabNavigator({
  Home: {
    screen: RootStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name='home' size={24} color={tintColor} />
  }
},
TulisResep: {
  screen: Example,
  navigationOptions: {
    tabBarLabel: 'Timeline',
    tabBarIcon: ({tintColor}) => <Icon name='query-builder' size={24} color={tintColor} />
}
},
Shop: {
  screen: Example,
  navigationOptions: {
    tabBarIcon: ({tintColor}) => <Icon name='shopping-cart' size={24} color={tintColor} />
}
},
Search: {
  screen: Example,
  navigationOptions: {
    tabBarIcon: ({tintColor}) => <Icon name='search' size={24} color={tintColor} />
}
},
Profile: {
  screen: Example,
  navigationOptions: {
    tabBarIcon: ({tintColor}) => <Icon name='account-circle' size={24} color={tintColor} />
}
}
},{
  initialRouteName: 'Shop',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: true,
  tabBarOptions: {
    upperCaseLabel: false,
    showIcon: true,
    showLabel: true,
    activeTintColor: '#7c0c10',
    inactiveTintColor: '#8c8c8c',
    labelStyle: {
      fontSize: 9,
    },
    tabStyle: {
      backgroundColor: 'white',
    },
    style: {
      height: 58,
      backgroundColor: 'white'
    },
    indicatorStyle: {
      backgroundColor: 'white'
    }
  }
});

const styles = StyleSheet.create({
  badge: {
    height: 18,
    width: 18,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#ff8c19',
    zIndex: 1,
    position: 'absolute',
    marginLeft: 15,
    marginTop: -10
  },
  input: {
    height: 35,
    width: 280,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    borderRadius: 3
  }
})
