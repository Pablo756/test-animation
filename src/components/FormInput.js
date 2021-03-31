import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import {windowHeight, windowWidth} from '../utils/Dimensions';

export default function FormInput({labelValue, placeholderText, ...rest}) {
  return (
    <TextInput
      value={labelValue}
      style={styles.input}
      numberOfLines={1}
      placeholder={placeholderText}
      placeholderTextColor="#666"
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: windowWidth / 50,
    marginTop: windowWidth / 50,
    marginBottom: windowWidth / 33,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: windowWidth / 20,
    borderRadius: 8,
    borderWidth: 1,
  },
});
