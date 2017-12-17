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
  }

  handlePressBaseCurrency = () => this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });

  handlePressQuoteCurrency = () => this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });

  handleTextChange = text => this.props.dispatch(changeCurrencyAmount(text));

  handleSwapCurrency = () => this.props.dispatch(swapCurrency());

  handleOptionPress = () => this.props.navigation.navigate('Options');

  render() {
    let quotePrice = (this.props.rates * this.props.amount).toFixed(2);
    if (this.props.isFetching) { quotePrice = '...'; }

    return (
      <Container>
        <Header onPress={this.handleOptionPress} />
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding" >
          <Logo />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            returnKeyType="done"
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={quotePrice}
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
}) => {
  const conversionSelector = conversions[baseCurrency] || {};
  const { date, isFetching, rates } = conversionSelector;
  const lastConvertedDate = date ? new Date(date) : new Date();

  return {
    baseCurrency,
    quoteCurrency,
    amount,
    rates: rates[quoteCurrency] || 0,
    isFetching,
    lastConvertedDate,
  };
};

export default connect(mapStateToProps)(Home);
