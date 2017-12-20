import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, View, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/List';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

import currencies from '../data/currencies';

const CurrencyList = ({
  navigation, dispatch, baseCurrency, quoteCurrency, primaryColor,
}) => {
  const handlePress = (currency) => {
    const { type } = navigation.state.params;
    if (type === 'base') {
      dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      dispatch(changeQuoteCurrency(currency));
    }
    navigation.goBack(null);
  };

  let comparisonCurrencies = baseCurrency;

  if (navigation.state.params.type === 'quote') {
    comparisonCurrencies = quoteCurrency;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" translucent={false} />
      <FlatList
        data={currencies}
        renderItem={({ item }) =>
        (<ListItem
          text={item}
          selected={item === comparisonCurrencies}
          onPress={handlePress.bind(null, item)}
          iconBackground={primaryColor}
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
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  primaryColor: PropTypes.string,
};

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  primaryColor: state.theme.primaryColor,
});

export default connect(mapStateToProps)(CurrencyList);
