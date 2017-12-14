import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

const Themes = ({ navigation }) => {
  const handleThemePress = () => navigation.goBack();
  return (
    <ScrollView >
      <StatusBar barStyle="default" translucent={false} />
      <ListItem
        text="Blue"
        selected
        onPress={handleThemePress}
        checkmark={false}
        iconBackground={styles.$blue}
      />
      <Separator />
      <ListItem
        text="Orange"
        selected
        onPress={handleThemePress}
        checkmark={false}
        iconBackground={styles.$orange}
      />
      <Separator />
      <ListItem
        text="Green"
        selected
        onPress={handleThemePress}
        checkmark={false}
        iconBackground={styles.$green}
      />
      <Separator />
      <ListItem
        text="Purple"
        selected
        onPress={handleThemePress}
        checkmark={false}
        iconBackground={styles.$purple}
      />
      <Separator />
    </ScrollView>
  );
};

Themes.propTypes = { 
  navigation: PropTypes.object,
}

export default Themes;
