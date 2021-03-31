import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

import {windowWidth} from '../utils/Dimensions';

export default function LogoutButton({onPress}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Image
        style={styles.image}
        source={require('../../assets/logout.png')}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    width: windowWidth / 14,
    height: windowWidth / 14,
    top: windowWidth / 40,
    right: windowWidth / 40,
  },
  image: {
    opacity: 0.7,
    width: windowWidth / 14,
    height: windowWidth / 14,
  },
});
