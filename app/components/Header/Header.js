import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const Header = ({ onPress, onWarning, connected }) => (
  <View style={styles.container} >
    {!connected &&
    <TouchableOpacity onPress={onWarning} style={styles.button} >
      <Image resizeMode="contain" style={styles.icon} source={require('./images/warning-images/warning.png')} />
    </TouchableOpacity>
    }
    <TouchableOpacity onPress={onPress} style={[styles.button, styles.buttonRight]} >
      <Image resizeMode="contain" style={styles.icon} source={require('./images/gear.png')} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func,
  onWarning: PropTypes.func,
  connected: PropTypes.bool,
};

export default Header;
