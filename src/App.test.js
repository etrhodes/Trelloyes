  
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import Card from './Card';
import List from './List';
import STORE from './store';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



describe('Card', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card title="Hello" />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
});


describe('List', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header="header" />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
})

