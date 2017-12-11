import React from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/List';

import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

const CurrencyList = () => {
  const handlePress = () => alert('list item pressed');
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" translucent={false} />
      <FlatList
        data={currencies}
        renderItem={({ item }) =>
        (<ListItem
          text={item}
          selected={item === TEMP_CURRENT_CURRENCY}
          onPress={handlePress}
        />)}
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

export default CurrencyList;
