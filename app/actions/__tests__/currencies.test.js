import { getInitialConversion, GET_INITIAL_CONVERSION, changeCurrencyAmount, CHANGE_CURRENCY_AMOUNT } from '../currencies';

it('test getInitialCopnversion', () => {
  const expected = {
    type: GET_INITIAL_CONVERSION,
  };
  const actual = getInitialConversion();

  expect(actual).toEqual(expected);
});

it('test changeCurrencyAmount', () => {
  const expected = {
    type: CHANGE_CURRENCY_AMOUNT,
    amount: 1000,
  };

  const actual = changeCurrencyAmount(1000);

  expect(actual).toEqual(expected);
});

it('snapshot of test getInitialCopnversion', () => {
  expect(getInitialConversion()).toMatchSnapshot();
});

it('snapshot of test changeCurrencyAmount', () => {
  expect(changeCurrencyAmount(1000)).toMatchSnapshot();
  expect(changeCurrencyAmount('1000')).toMatchSnapshot();// for testing string input
});

