import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
} from 'react-native';
import {
  scale,
  hScale,
} from '../supports/vu';

const styles = StyleSheet.create({
  input: {
    height: hScale(70),
    borderColor: '#edf1f7',
    borderWidth: 1,
    padding: scale(12),
    borderRadius: 4,
    fontSize: scale(16),
    backgroundColor: '#f7f9fb',
    marginBottom: scale(15),
  },
});


const TextInput = props => {

  const [value, _changeValue] = useState('');

  return (
    <RNTextInput
      {...props}
      style={styles.input}
      onChangeText={text => _changeValue(text)}
      value={value}
    />
  );

};

export default TextInput;