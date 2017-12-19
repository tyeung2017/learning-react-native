import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/theme';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

const Themes = ({ navigation, dispatch }) => {
  const handleThemePress = (color) => {
    dispatch(changePrimaryColor(color));
    navigation.goBack();
  };

  return (
    <ScrollView >
      <StatusBar barStyle="default" translucent={false} />
      <ListItem
        text="Blue"
        selected
        onPress={handleThemePress.bind(null, styles.$blue)}
        checkmark={false}
        iconBackground={styles.$blue}
      />
      <Separator />
      <ListItem
        text="Orange"
        selected
        onPress={handleThemePress.bind(null, styles.$orange)}
        checkmark={false}
        iconBackground={styles.$orange}
      />
      <Separator />
      <ListItem
        text="Green"
        selected
        onPress={handleThemePress.bind(null, styles.$green)}
        checkmark={false}
        iconBackground={styles.$green}
      />
      <Separator />
      <ListItem
        text="Purple"
        selected
        onPress={handleThemePress.bind(null, styles.$purple)}
        checkmark={false}
        iconBackground={styles.$purple}
      />
      <Separator />
    </ScrollView>
  );
};

Themes.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect()(Themes);
