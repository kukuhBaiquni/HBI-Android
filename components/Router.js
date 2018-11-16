import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import MainPage from './Main_Page';
import ShopPage from './Shop_Page';
import Example from './Static_Example';
import ProductDetails from './Product_Details';

export const RootStack = createStackNavigator({
  Shop: {
    screen: ShopPage,
    navigationOptions: {
      header: null,
    }
  },
  ProductDetails: {
    screen: ProductDetails,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.productname}`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#7c0c10'
      }
    })
  }
})

export const Tabs = createMaterialTopTabNavigator({
  About: {
    screen: Example,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name='home' size={24} color={tintColor} />
  }
},
TulisResep: {
  screen: Example,
  navigationOptions: {
    tabBarLabel: 'Timeline',
    tabBarIcon: ({tintColor}) => <Icon name='event-note' size={24} color={tintColor} />
}
},
Shopping: {
  screen: RootStack,
  navigationOptions: {
    tabBarIcon: ({tintColor}) => <Icon name='store-mall-directory' size={24} color={tintColor} />
}
},
Mail: {
  screen: Example,
  navigationOptions: {
    tabBarIcon: ({tintColor}) => <Icon name='mail' size={24} color={tintColor} />
}
},
Profile: {
  screen: Example,
  navigationOptions: {
    tabBarIcon: ({tintColor}) => <Icon name='account-box' size={24} color={tintColor} />
}
}
},{
  lazy: true,
  initialRouteName: 'Shopping',
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
