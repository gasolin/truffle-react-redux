import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import {
  renderWithIntl,
  rendererCreateWithIntl
} from './helper';

const mockPropsNoConnection = {
  web3: null
};

const mockPropsConnected = {
  web3: new Object()
};

test('renders without crashing', () => {
  const div = document.createElement('div');
  renderWithIntl(<Header {...mockPropsNoConnection} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('render correctly when no web3 connection', () => {
  const component = rendererCreateWithIntl(<Header {...mockPropsNoConnection} />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with web3 connection', () => {
  const component = rendererCreateWithIntl(<Header {...mockPropsConnected} />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
