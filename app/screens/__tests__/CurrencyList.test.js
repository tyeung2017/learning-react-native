import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import CurrencyList from '../CurrencyList';

it('set up test successfully', () => {
  const initialState = {
    currencies: {
      baseCurrency: 'USD',
      quoteCurrency: 'GBP',
    },
    theme: {
      primaryColor: 'red',
    },
  };

  const navigation = { state: { params: { type: 'quote' } } };
  const store = configureStore([])(initialState);

  const rendered = shallow(<CurrencyList navigation={navigation} />, {
    context: {
      store,
    },
  });


  expect(rendered.dive()).toMatchSnapshot();
});

