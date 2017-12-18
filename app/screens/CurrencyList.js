import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, View, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/List';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

const CurrencyList = ({ navigation, dispatch }) => {
  const handlePress = (currency) => {
    const { type } = navigation.state.params;
    if (type === 'base') {
      dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      dispatch(changeQuoteCurrency(currency));
    }
    navigation.goBack(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" translucent={false} />
      <FlatList
        data={currencies}
        renderItem={({ item }) =>
        (<ListItem
          text={item}
          selected={item === TEMP_CURRENT_CURRENCY}
          onPress={handlePress.bind(null, item)}
        />)}
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

CurrencyList.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect()(CurrencyList);
