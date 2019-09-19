import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  Home,
} from './src/views';
import {
  FormScrollView,
} from './src/components/Form';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  FormScrollView: {
    screen: FormScrollView,
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});


export default createAppContainer(AppNavigator);