import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Content from '../components/Content';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Content />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('render correctly', () => {
  const component = renderer.create(<Content />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
