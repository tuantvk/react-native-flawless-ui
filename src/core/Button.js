import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#01d28e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    borderRadius: 4,
    elevation: 3,
  },
  name: {
    color: '#fff',
    fontSize: 16,
  }
});


const Button = ({ name, ...rest }) => (
  <TouchableOpacity activeOpacity={.8} {...rest}>
    <View style={styles.btn}>
      <Text style={styles.name}>{name}</Text>
    </View>
  </TouchableOpacity>
);


Button.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Button;