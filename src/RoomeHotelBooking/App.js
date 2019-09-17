
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './views/Home';
import Room from './views/Room';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      gesturesEnabled: false
    })
  },
  Room: {
    screen: Room,
    navigationOptions: () => ({
      gesturesEnabled: false
    })
  },
}, {
  initialRouteName: "Home",
  swipeEnabled: false,
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
})


const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  render() {
    return (
      <AppContainer />
    )
  }
}