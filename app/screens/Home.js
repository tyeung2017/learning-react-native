import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    rates: PropTypes.number,
    isFetching: PropTypes.bool,
    lastConvertedDate: PropTypes.object,
    primaryColor: PropTypes.string,
  }

  handlePressBaseCurrency = () => this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });

  handlePressQuoteCurrency = () => this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });

  handleTextChange = text => this.props.dispatch(changeCurrencyAmount(text));

  handleSwapCurrency = () => this.props.dispatch(swapCurrency());

  handleOptionPress = () => this.props.navigation.navigate('Options');

  render() {
    let quotePrice = (this.props.rates * this.props.amount).toFixed(2);
    if (this.props.isFetching) { quotePrice = '...'; }

    return (
      <Container backgroundColor={this.props.primaryColor} >
        <Header onPress={this.handleOptionPress} />
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding" >
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            returnKeyType="done"
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={quotePrice}
            textColor={this.props.primaryColor}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.lastConvertedDate}
            conversionRate={this.props.rates}
          />
          <ClearButton
            text="Reverse Currency"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = ({
  currencies: {
    baseCurrency, quoteCurrency, amount, conversions,
  },
  theme: { primaryColor },
}) => {
  const conversionSelector = conversions[baseCurrency] || {};
  const { date, isFetching, rates } = conversionSelector;
  const exRate = rates || {};
  const lastConvertedDate = date ? new Date(date) : new Date();

  return {
    baseCurrency,
    quoteCurrency,
    amount,
    rates: exRate[quoteCurrency] || 0,
    isFetching,
    lastConvertedDate,
    primaryColor,
  };
};

export default connect(mapStateToProps)(Home);
