import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {
  Button,
  Layout,
} from '../core';


class Home extends Component {


  _moveScreen = route => this.props.navigation.navigate(route);

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Layout>
          <Button
            name="Form ScrollView"
            onPress={() => this._moveScreen('FormScrollView')}
          />
        </Layout>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;