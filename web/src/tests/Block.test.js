import React from 'react';
import ReactDOM from 'react-dom';
import Block from '../components/Block';
import {
  renderWithIntl,
  rendererCreateWithIntl,
} from './helper';

const mockPropsNoConnection = {
  drizzleStatus: {
    initialized: false,
  },
  web3: {
    status: 'failed',
  },
};

const mockPropsConnected = {
  drizzleStatus: {
    initialized: true,
  },
  web3: {
    status: true,
  },
};

test('renders without crashing', () => {
  const div = document.createElement('div');
  renderWithIntl(<Block {...mockPropsNoConnection} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('render correctly when no web3 connection', () => {
  const component = rendererCreateWithIntl(<Block {...mockPropsNoConnection} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with web3 connection', () => {
  const component = rendererCreateWithIntl(<Block {...mockPropsConnected} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
