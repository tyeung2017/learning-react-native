import React from 'react';
import renderer from 'react-test-renderer';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { ClearButton, styles } from '../Buttons';
import buildStyles from '../../config/styles';

beforeAll(() => buildStyles());

it('it rendererd successfully', () => {
  const rendered = renderer.create(<ClearButton />).toJSON();
  expect(rendered).toBeTruthy();
});

it('styles is an object', () => {
  expect(typeof styles).toBe('object');
});

it('snapshot test for ClearButton', () => {
  const rendered = renderer.create(<ClearButton text="hi there" />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it('test button press', () => {
  const callback = sinon.spy();
  const wrapper = shallow(<ClearButton text="button press test" onPress={callback} />);

  expect(wrapper.find(TouchableOpacity).length).toBe(1);

  wrapper
    .find(TouchableOpacity)
    .first()
    .props()
    .onPress();

  expect(callback.called).toBe(true);
});
