import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, TextInput, Text } from 'react-native';
import styles from './styles';
import color from 'color';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;

  const containerStyle = [styles.container];
  if (!editable) {
    containerStyle.push(styles.containerDisabled);
  }
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

  return (
    <View style={containerStyle} >
      <TouchableHighlight 
        underlayColor={underlayColor}
        style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;
