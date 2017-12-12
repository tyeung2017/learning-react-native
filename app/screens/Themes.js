import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

const Themes = () => {
  const handleThemePress = () => alert('theme pressed');
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

export default Themes;
