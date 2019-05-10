import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import ShoppingCart from './ShoppingCart';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShoppingCart rentals={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders', () => {
  const wrapper = shallow(<ShoppingCart rentals={[]}/>);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.props('children')).toBeDefined();
});