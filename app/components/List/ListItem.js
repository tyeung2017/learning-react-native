import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  selected = false, onPress, text, checkmark = true, visible = true, customIcon = null
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor} >
    <View style={styles.row} >
      <Text style={styles.text} >{text}</Text>
      {selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon />}
      {customIcon}
    </View>
  </TouchableHighlight>
);


ListItem.propTypes = {
  selected: PropTypes.bool,
  onPress: PropTypes.func,
  text: PropTypes.string,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
};

export default ListItem;
