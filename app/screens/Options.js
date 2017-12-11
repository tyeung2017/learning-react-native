import React from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

const Options = () => {
  const handleSitePress = () => alert('site pressed');
  const handleThemePress = () => alert('theme pressed');

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

export default Options;
