import reducer from '../currencies';
import { getInitialConversion } from '../../actions/currencies';

it('set inital state', () => {
  expect(reducer(undefined, {})).toMatchSnapshot();
});

it('set nested data on fetch data', () => {
  expect(reducer(undefined, getInitialConversion())).toMatchSnapshot();
});

