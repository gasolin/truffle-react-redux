import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Header from '../components/Header';

const mockPropsNoConnection = {
  noConnection: false
};

const mockPropsConnected = {
  noConnection: true
};

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header {...mockPropsNoConnection} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('render correctly when no web3 connection', () => {
  const component = renderer.create(<Header {...mockPropsNoConnection} />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly with web3 connection', () => {
  const component = renderer.create(<Header {...mockPropsConnected} />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
