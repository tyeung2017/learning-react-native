import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, Keyboard, Animated } from 'react-native';
import styles from './styles';

class Logo extends Component {
  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {console.log('keyboard show')}

  keyboardHide = () => {console.log('keyboard hide')}

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.containerImage} resizeMode="contain" source={require('./images/background.png')}>
          <Image resizeMode="contain" style={styles.image} source={require('./images/logo.png')} />
        </ImageBackground>
        <Text style={styles.text} >Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
