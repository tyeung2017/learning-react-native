import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import Container, { styles } from '../Container';

it('it rendererd successfully', () => {
  const rendered = renderer.create(<Container />).toJSON();
  expect(rendered).toBeTruthy();
});

it('styles is an object', () => {
  expect(typeof styles).toBe('object');
});

it('render a child component', () => {
  const rendered = renderer.create(<Container><View />u</Container>).toJSON();
  expect(rendered).toMatchSnapshot();
});

it('styling background color', () => {
  const rendered = renderer.create(<Container backgroundColor="red" />).toJSON();
  expect(rendered).toMatchSnapshot();
});
