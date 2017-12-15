import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

const Options = ({ navigation, alertWithType }) => {
  const handleSitePress = () => Linking.openURL('http://fixer.io')
                                 .catch(() => alertWithType('error', 'Sorry!', 'Sth is wrong with Fixer.io'));
  const handleThemePress = () => navigation.navigate('Themes');

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle="default" />
      <ListItem
        text="Themes"
        onPress={handleThemePress}
        customIcon={<Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />}
      />
      <Separator />
      <ListItem
        text="Fixer.io"
        onPress={handleSitePress}
        customIcon={<Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />}
      />
      <Separator />
    </ScrollView>
  );
};

Options.propTypes = {
  navigation: PropTypes.object,
  alertWithType: PropTypes.func,
}

export default connectAlert(Options);
