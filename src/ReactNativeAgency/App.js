
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './views/Login';
import Home from './views/Home';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      gesturesEnabled: false
    })
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      gesturesEnabled: false
    })
  },
}, {
  initialRouteName: "Login",
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