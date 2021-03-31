import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {windowWidth} from '../utils/Dimensions';

export default function FormButton({buttonTitle, ...rest}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: windowWidth / 2,
    height: windowWidth / 9,
    backgroundColor: '#6646ee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: windowWidth / 16,
    color: '#ffffff',
  },
});
